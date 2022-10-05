/*
Copyright 2021 LuJun

Permission is hereby granted, free of charge, to any person obtaining a copy 
of this software and associated documentation files (the "Software"), to deal 
in the Software without restriction, including without limitation the rights 
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell 
copies of the Software, and to permit persons to whom the Software is furnished 
to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in 
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR 
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, 
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL 
THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER 
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, 
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

/// <reference path="../base/base.ts" />
/// <reference path="../base/state.ts" />
/// <reference path="../utils/js.ts" />

namespace lcc {

const TAG = "lcc/ui/ui-manager.ts";

/**
 * @zh
 * 索引路径
 */
export namespace INDEXPATH {
	
	/**
	 * @zh
	 * UI界面
	 */
	export let UI = "ui";
};

/**
 * @zh
 * UI根节点名
 */
export const UIROOT_NAME = 'UIManager';

/**
 * @zh
 * UI根节ZINDEX
 */
export const UIROOT_ZINDEX = 1000;

/**
 * @zh
 * 默认画布
 */
export const DEFAULT_CANVAS = "lcc_Canvas";

/**
 * @zh
 * 优先级最大值
 */
export const PRIORITY_MAX = 1000;

/**
 * @zh
 * UI配置
 */
interface UIConfig {
	/**
	 * @zh
	 * 预制体
	 */
	prefab:cc.Prefab;

	/**
	 * @zh
	 * 配置
	 */
	config:{
		/**
		 * @zh
		 * 预制体文件
		 */
		file:string;

		/**
		 * @zh
		 * 固定优先级
		 */
		priority?:number;

		/**
		 * @zh
		 * 所属画布
		 */
		canvas?:string;
	};

	/**
	 * @zh
	 * 预加载
	 */
	preload?:boolean;

	/**
	 * @zh
	 * UI对象
	 */
	UI:UIBase;
}

/**
 * @zh
 * 画布配置
 */
export interface CanvasConfig {
	/**
	 * @zh
	 * 画布节点
	 */
	canvas:cc.Node;

	/**
	 * @zh
	 * UI表
	 */
	UIs:{[key:string]:UIBase};

	/**
	 * @zh
	 * 打开UI表
	 */
	openUIs:{[key:string]:UIBase};

    /**
	 * @zh
     * 当前UI优先级
     */
    UIPriority:number;

    /**
	 * @zh
     * 最前面的UI对象
     */
	frontUI:UIBase;
}

/**
 * @zh
 * UI管理器
 */
class UIManager {
    
	/**
	 * @zh
	 * 画布映射表
	 */
	private _canvasMap:{[key:string]:CanvasConfig} = js.createMap();
	
	/**
	 * @zh
	 * UI配置表
	 */
	private _UIConfigs:{[key:string]:UIConfig} = js.createMap();

    /**
     * UI根节点
     */
	private _uiRoot:cc.Node = null;

	/**
	 * @zh
	 * 画布优先级
	 */
	private _canvasPriority:number = 0;

	/**
	 * @zh
	 * UI操作表
	 */
	private _uiOperations:{[key:string]:Function[]} = js.createMap();

	/**
	 * @zh
	 * UI栈
	 */
	private _uiStack:string[] = [];
	
	/**
	 * @zh
	 * 构造函数
	 */
	constructor(){
		state.on('initialize', ()=>{
			doing.stateInitialize.in(()=>{
				this._canvasMap = js.createMap();
				this._UIConfigs = js.createMap();
				this._uiRoot = null;
				this._canvasPriority = 0;
				this._uiOperations = js.createMap();
				this._uiStack = [];
				indexMgr.on("indexes_removed", this.onIndexesRemoved, this);
			});
		});
		state.on('release', ()=>{
			doing.stateRelease.in(()=>{
				indexMgr.targetOff(this);
			});
		});
	}
	
	/**
	 * @zh
	 * 获得UI根节点
	 */
	public getUIRoot(){
		if(!this._uiRoot){
			this._uiRoot = new cc.Node(UIROOT_NAME);
			cc.director.getScene().addChild(this._uiRoot, UIROOT_ZINDEX);
			cc.game.addPersistRootNode(this._uiRoot);
			this._uiRoot.setAnchorPoint(cc.v2(0,0));
			this._uiRoot.setPosition(cc.v2(0,0));
			this._uiRoot.setContentSize(cc.winSize);
		}1
		return this._uiRoot;
	}

	/**
	 * @zh
	 * 获得画布
	 * 
	 * @param cname - 画布名称
	 */
	public getCanvas(cname:string = DEFAULT_CANVAS){
		let canvasConfig = this._canvasMap[cname];
		if(!canvasConfig){
			let canvasNode = new cc.Node(cname);
			this.getUIRoot().addChild(canvasNode);
			canvasNode.setAnchorPoint(cc.v2(0,0));
			let widget = canvasNode.addComponent(cc.Widget);
			widget.alignMode = cc.Widget.AlignMode.ON_WINDOW_RESIZE;
			widget.isAlignTop = true;
			widget.isAlignBottom = true;
			widget.isAlignLeft = true;
			widget.isAlignRight = true;
			widget.top = 0;
			widget.bottom = 0;
			widget.left = 0;
			widget.right = 0;
			canvasConfig = {
				canvas : canvasNode,
				UIs : js.createMap(),
				openUIs : js.createMap(),
				UIPriority : 1,
				frontUI : null,
			};
			this._canvasMap[cname] = canvasConfig;
		}
		return canvasConfig;
	}

	/**
	 * @zh
	 * 设置指定画布在最前面
	 * 
	 * @param cname - 画布名称
	 */
	public setFrontCanvas(cname:string){
		let canvasConfig = this._canvasMap[cname];
		if(canvasConfig){
			canvasConfig.canvas.zIndex = this._canvasPriority ++;
		}
	}
	
	/**
	 * @zh
	 * 当移除索引
	 * 
	 * @internal
	 */
	onIndexesRemoved(){
		this.releaseInvalidUIs();
	}

	/**
	 * @zh
	 * 释放无效UI
	 */
	public releaseInvalidUIs(){
		let uifiles = indexMgr.getIndex(INDEXPATH.UI) || js.createMap();
		for(let uiname of Object.keys(this._UIConfigs)){
			if(!uifiles[uiname]){
				this.releaseUI(uiname);
			}
		}
	}

	/**
	 * @zh
	 * 获取所有UI
	 */
	public getAllUIs(){
		return Object.keys(indexMgr.getIndex(INDEXPATH.UI));
	}

	/**
	 * @zh
	 * 释放指定UI
	 * 
	 * @param uiname - ui名称
	 * @param preload - 预加载
	 */
	public releaseUI(uiname:string, preload:boolean = false){
		let uiconf = this._UIConfigs[uiname];
		if(uiconf && (!uiconf.preload || preload)){
			this.closeUI(uiname, true);
			this._releaseUI(uiname);
		}
	}

	/**
	 * @zh
	 * 释放UI数组
	 * 
	 * @param uinames - ui名称数组
	 * @param preload - 预加载
	 */
	public releaseUIs(uinames:string[], preload:boolean = false){
		for(let uiname of uinames){
			this.releaseUI(uiname, preload);
		}
	}
	
    /**
	 * @zh
     * 预加载UI
	 * 
	 * @param uiname - ui名称
     */
	public async preloadUI(uiname:string){
		let uiconf = await this.getUIConfig(uiname);
		if(uiconf){
			this._getUI(uiname, uiconf, true);
			uiconf.preload = true;
		}
	}
    
    /**
	 * @zh
     * 预加载UI数组
	 * 
	 * @param uinames - ui名称数组
	 * @param progress - 进度
     */
    public async preloadUIs(uinames:string[], progress = (p:number)=>{}){
        for(let i = 0, len = uinames.length; i < len; i++){
			await this.preloadUI(uinames[i]);
            progress((i + 1) / len);
        }
	}

	/**
	 * @zh
	 * 获得UI配置
	 * 
	 * @param uiname - UI名称
	 */
	private async getUIConfig(uiname:string){
		let uiconf = this._UIConfigs[uiname];
		if(!uiconf){
			let config = indexMgr.getIndex(INDEXPATH.UI + "/" + uiname);
			if(config){
				let prefab = await packMgr.loadPrefab(config.file);
				uiconf = {
					prefab : prefab,
					config : config,
					UI : null,
				};
				prefab.addRef();
				this._UIConfigs[uiname] = uiconf;
			}
		}
		return uiconf;
	}
	
    /**
	 * @zh
     * 获得指定UI
	 * 
     * @param uiname - UI名称
     * @param create - 如果不存在，则创建
     */
    public async getUI(uiname:string, create:boolean = false){
		let uiconf = await this.getUIConfig(uiname);
		return this._getUI(uiname, uiconf, create);
	}

	/**
	 * @zh
     * 获得指定UI
	 * 
     * @param uiname - UI名称
     * @param create - 如果不存在，则创建
     */
	private _getUI(uiname:string, uiconf:UIConfig, create:boolean = false){
		if(uiconf){
			let ui = uiconf.UI;
			if(!ui && create){
				let node = cc.instantiate(uiconf.prefab);
				let canvas = this.getCanvas(uiconf.config.canvas)
				canvas.canvas.addChild(node);
				node.active = false;
				ui = node.getComponent(UIBase) || node.getComponentInChildren(UIBase);
				if(!ui){
					ui = node.addComponent(UIBase);
				}
				ui._setRootNode(node);
				ui._setCanvas(canvas);
				ui._setUIName(uiname);
				if(uiconf.config.priority != null){
					ui.setFixedPriority(uiconf.config.priority);
				}
				ui._onUICreate();
				uiconf.UI = ui;
				canvas.UIs[uiname] = ui;
			}
			return ui;
		}
	}
	
	/**
	 * @zh
	 * 释放指定UI
	 * 
     * @param uiname - UI名称
	 */
	private _releaseUI(uiname:string){
		let uiconf = this._UIConfigs[uiname];
		if(uiconf){
			let ui = uiconf.UI;
			if(ui){
				let canvas = ui.getCanvas();
				ui.onUIRelease();
				ui.node.destroy();
				delete canvas.UIs[uiname];
				uiconf.prefab.decRef();
				uiconf.UI = null;
				delete this._UIConfigs[uiname];
			}
		}
	}

    /**
	 * @zh
     * 设置指定UI到最前面
	 * 
     * @param ui - 指定UI
     */
    private setFront(ui:UIBase){
        if(ui){
			let canvas = ui.getCanvas();
            if(ui !== canvas.frontUI){
				let priority = ui.getFixedPriority();
				if(priority == null){
					canvas.UIPriority += 1;
					priority = canvas.UIPriority;
				}
				ui.node.zIndex = priority;
                if(canvas.frontUI){
                    canvas.frontUI.onChangeFront(false);
                }
                canvas.frontUI = ui;
                canvas.frontUI.onChangeFront(true);
			}
			if(canvas.UIPriority >= PRIORITY_MAX){
				this.sortOpenedUIs(canvas);
			}
        }
	}

	/**
	 * @zh
	 * 排序打开的UI
	 * 
	 * @param canvas - 画布对象
	 */
	public sortOpenedUIs(canvas:CanvasConfig){
		let ouis:UIBase[] = [];
		for(let uname in canvas.openUIs){
			let ui = canvas.openUIs[uname];
			if(ui.getFixedPriority() == null){
				ouis.push(ui);
			}
		}
		ouis.sort((a,b)=>{
			return a.node.zIndex - b.node.zIndex;
		});
		canvas.UIPriority = ouis.length;
		for(let i = 0, len = ouis.length; i < len; i++){
			ouis[i].node.zIndex = (i + 1);
		}
	}

	/**
	 * @zh
	 * 把UI放置到最前面
	 * 
	 * @param uiname - UI名称
	 */
	public setFrontByName(uiname:string){
		let uiconf = this._UIConfigs[uiname];
		if(uiconf && uiconf.UI){
			this.setFront(uiconf.UI);
		}
	}

	/**
	 * @zh
	 * 添加UI操作
	 * 
	 * @param uiname - UI名称
	 * @param operation - 操作函数
	 */
	private addUIOperation(uiname:string, operation:Function) {
		let operations = this._uiOperations[uiname];
		if(!operations){
			operations = [];
			this._uiOperations[uiname] = operations;
		}
		operations.push(operation);
		if(operations.length == 1){
			operations[0]();
		}
	}

	/**
	 * @zh
	 * 执行下个UI操作
	 * 
	 * @param uiname - UI名称
	 */
	private nextUIOperation(uiname:string){
		let operations = this._uiOperations[uiname];
		if(operations.length > 0){
			operations.shift();
		}
		if(operations.length > 0){
			operations[0]();
		}
	}

	/**
	 * @zh
	 * 打开指定UI
	 * 
	 * @param uiname - UI名称
	 * @param args - 打开参数
	 */
	private async _openUI(uiname:string, ...args : any[]){
		let ui:UIBase = null;

		let uiconf = await this.getUIConfig(uiname);
		if(uiconf){
			ui = uiconf.UI;
			if(!ui){
				ui = this._getUI(uiname, uiconf, true);
				if(ui){
					let canvas = ui.getCanvas();
					canvas.openUIs[uiname] = ui;
				}
			}
			if(ui){
				this.setFront(ui);
				ui.setActive(true);
				ui.onOpen(...args);
				await ui.playUIAnimation('open');
			}
		}

		return ui;
	}
	
    /**
	 * @zh
     * 打开指定UI
	 * 
     * @param uiname - UI名称
	 * @param args - 打开参数
     */
    public openUI(uiname:string, ...args : any[]){
		return new Promise<UIBase>((resolve)=>{
			this.addUIOperation(uiname, async ()=>{
				let ui = await this._openUI(uiname, ...args);
				this.nextUIOperation(uiname);
				resolve(ui);
			});
		});
	}
	
    /**
	 * @zh
     * 关闭指定UI
	 * 
     * @param uiname - UI名称
	 * @param release - 释放对象
     */
    private async _closeUI(uiname:string, release:boolean = false){
		let uiconf = this._UIConfigs[uiname];
		if(uiconf){
			let ui = uiconf.UI;
			if(ui){
				let canvas = ui.getCanvas();
				await ui.playUIAnimation('close');
				ui.onClose();
				ui.setActive(false);
				delete canvas.openUIs[uiname];
				if(ui === canvas.frontUI){
					let nfui:UIBase = null;
					for(let uin in canvas.openUIs){
						let opui = canvas.openUIs[uin];
						if((opui !== canvas.frontUI) && (!nfui || 
							nfui.node.zIndex < opui.node.zIndex) ){
							nfui = opui;
						}
					}
					this.setFront(nfui);
				}
				if(release){
					this._releaseUI(uiname);
				}
			}
		}
	}
	
    /**
	 * @zh
     * 关闭指定UI
	 * 
     * @param uiname - UI名称
	 * @param release - 释放对象
     */
    public closeUI(uiname:string, release:boolean = false){
		return new Promise<string>((resolve)=>{
			this.addUIOperation(uiname, async ()=>{
				await this._closeUI(uiname, release);
				this.nextUIOperation(uiname);
				resolve(uiname);
			});
		});
	}

	/**
	 * @zh
	 * 关闭UI数组
	 * 
	 * @param uinames - UI名称数组
	 */
	public closeUIs(uinames:string[], release:boolean = false){
		for (let uin of uinames){
			this.closeUI(uin, release);
		}
	}
	
	/**
	 * @zh
	 * 关闭所有UI
	 * 
	 * @param excepts - 排除UI数组
	 */
	public closeAllUI(excepts?:string[], release:boolean = false){
		Object.keys(this._UIConfigs).forEach((uiname)=>{
			if(!excepts || excepts.indexOf(uiname) == -1){
				this.closeUI(uiname, release);
			}
		});
	}
	
	/**
	 * @zh
	 * 使用栈方式打开UI
	 * 
     * @param uiname - UI名称
	 * @param args - 打开参数
	 */
	public async pushUI(uiname:string, ...args : any[]){
		if(this._uiStack.length > 0){
			await this.closeUI(this._uiStack[this._uiStack.length - 1]);
		}
		this._uiStack.push(uiname);
		return await this.openUI(uiname, ...args);
	}

	/**
	 * @zh
	 * 使用栈方式关闭UI
	 * 
	 * @param uiname - UI名称
	 */
	public async popUI(){
		if(this._uiStack.length > 0){
			await this.closeUI(this._uiStack.pop());
		}
		if(this._uiStack.length > 0){
			return await this.openUI(this._uiStack[this._uiStack.length - 1]);
		}
	}

	/**
	 * @zh
	 * 获得UI栈
	 */
	public getUIStack(){
		return this._uiStack;
	}

	/**
	 * @zh
	 * 清空UI栈
	 */
	public clearUIStack(){
		this._uiStack = js.createMap();
	}
	
	/**
	 * @zh
	 * 当按键按下
	 * 
	 * @param keyCode - 按键编码
	 */
	public onKeyPressed(keyCode:string){
		let canvasuis:{ priority:number, openuis:UIBase[] }[] = [];
		for(let cname in this._canvasMap){
			let canvans = this._canvasMap[cname];
			let openuis:UIBase[] = [];
			for (let uin in canvans.openUIs){
				openuis.push(canvans.openUIs[uin]);
			}
			canvasuis.push({
				priority : canvans.canvas.zIndex,
				openuis : openuis,
			});
		}
		canvasuis.sort((a,b) => b.priority - a.priority);
		for (let cui of canvasuis){
			cui.openuis.sort((a,b) => b.node.zIndex - a.node.zIndex);
			for(let ui of cui.openuis){
				if(ui.onKeyPressed(keyCode)){
					return true;
				}
			}
		}
		return false;
	}
};

/**
 * @zh
 * UI管理器对象
 */
export const uiMgr = new UIManager();

}
