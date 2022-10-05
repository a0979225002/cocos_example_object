import UIBase, { UIClass } from "../controllers/ui/UIBase";
import {ViewZorder} from "../data/const/ViewZorder";
export default class UIMng {

    private static instance: UIMng;
    private uiList: UIBase[] = [];

    public static getInstance(): UIMng {
        if (this.instance == null) {
            this.instance = new UIMng();
        }
        return this.instance;
    }

    private constructor() {

    }

    public openUI<T extends UIBase>(uiClass: UIClass<T>, zOrder: number = ViewZorder.UI, callback?: Function, onProgress?: Function, ...args: any[]) {

        if (this.getUI(uiClass)) {
            return;
        }

        cc.loader.loadRes(uiClass.getUrl(), (completedCount: number, totalCount: number, item: any) => {
            onProgress && onProgress(completedCount, totalCount, item);
        }, (error, prefab) => {

            if (error) {
                return;
            }

            if (this.getUI(uiClass)) {
                return;
            }

            let uiNode: cc.Node = cc.instantiate(prefab);
            let ui = uiNode.getComponent(uiClass) as UIBase;

            if (!ui) {
                return;
            }

            ui.init(args);

            let uiRoot = cc.director.getScene();

            if (!uiRoot) {
                return;
            }

            uiNode.parent = uiRoot;
            uiNode.zIndex = zOrder;
            this.uiList.push(ui);
            ui.tag = uiClass;

            callback && callback(ui);

        });
    }

    public showUI<T extends UIBase>(uiClass: UIClass<T>, callback?: Function) {

        let ui = this.getUI(uiClass);

        if (!ui) {
            console.error(`UIMng showUI: ui ${uiClass.getName()} not exist`);
            return;
        }

        if (ui[`show`]) {
            ui[`show`]();
        } else {
            ui.node.active = true;
        }

    }

    public hideUI<T extends UIBase>(uiClass: UIClass<T>) {
        let ui = this.getUI(uiClass);
        if (ui[`hide`]) {
            ui[`hide`]();
        } else {
            ui.node.active = false;
        }
    }

    public resizeUI<T extends UIBase>(uiClass: UIClass<T>) {
        let ui = this.getUI(uiClass);
        if (ui && ui[`resize`]) {
            ui[`resize`]();
        }
    }


    public closeUI<T extends UIBase>(uiClass: UIClass<T>) {
        for (let i = 0; i < this.uiList.length; ++i) {
            if (this.uiList[i].tag === uiClass) {
                if (cc.isValid(this.uiList[i].node)) {
                    this.uiList[i].node.destroy();
                    this.clearDependsRes(uiClass.getUrl());
                }
                this.uiList.splice(i, 1);
                return;
            }
        }
    }

    public getUI<T extends UIBase>(uiClass: UIClass<T>): UIBase {

        for (let i = 0; i < this.uiList.length; ++i) {
            if (this.uiList[i].tag === uiClass) {
                return this.uiList[i];
            }
        }

        return null;

    }

    private clearDependsRes(prefabUrl) {
        let deps = cc.loader.getDependsRecursively(prefabUrl);
        deps.forEach((item) => {
            if (item.indexOf('common') === -1) {
                cc.loader.release(item);
            }
        });
    }


}
