
//import { EXTENSION_PATH, getGamePacks, exeCommand, getFrameworkModules } from '../utils';
//import { loadConfig, saveConfig } from '../config';

const { EXTENSION_PATH, getGamePacks, exeCommand, getFrameworkModules } = require(`${Editor.Project.path}/packages/lcc-framework-client/bin/utils`);
const { loadConfig, saveConfig } = require(`${Editor.Project.path}/packages/lcc-framework-client/bin/config`);

const OS = require('os');
const Fs = require('fs');
const Path = require('path');

/**
 * 收集模块
 */
function collectModules(){
    let keepModules:{ [key:string]:boolean } = {};
    let moduleDescs:{ [key:string]:string } = {};
    let config = loadConfig();

    const modules = getFrameworkModules();
    for(let mname in modules){
        let module = modules[mname];
        if(mname.indexOf("base") != 0){
            let keep = config.publish.keepModules[mname];
            moduleDescs[mname] = module.description;
            keepModules[mname] = keep != null ? keep : module.keepDefault;
        }
    }

    return {
        keeps : keepModules,
        descs : moduleDescs,
    }
}

Editor.Panel.extend({

    style: Fs.readFileSync(Path.join(EXTENSION_PATH, 'htmls', 'fontello.css'), { encoding : 'utf-8' }) + 
	    Fs.readFileSync(Path.join(EXTENSION_PATH, 'htmls', 'panel-frame.css'), { encoding : 'utf-8' }) + 
	    Fs.readFileSync(Path.join(EXTENSION_PATH, 'htmls', 'functions.css'), { encoding : 'utf-8' }),
    
    template: `
<div id="functions" loaded="">
	<div class="slider">
		<div v-bind:active="showpage==0" v-on:click="changePage(0)">${Editor.T('lcc-framework.label-build-pack-declaration')}</div>
		<div v-bind:active="showpage==1" v-on:click="changePage(1)">${Editor.T('lcc-framework.label-publish-setting')}</div>
	</div>
	<div class="tabs" v-show="showpage==0">
		<header>
			<h1>${Editor.T('lcc-framework.label-build-pack-declaration')}</h1>
		</header>
		<section>
			<div class="scroll">
				<style type="text/css">.fit,.fixed-bottom,.fixed-top{right:0}.fit,.fixed-bottom,.fixed-left{bottom:0;left:0}.layout.horizontal,.layout.horizontal-reverse,.layout.vertical,.layout.vertical-reverse{display:-ms-flexbox;display:-webkit-flex;display:flex}.layout.inline{display:-ms-inline-flexbox;display:-webkit-inline-flex;display:inline-flex}.layout.horizontal{-ms-flex-direction:row;-webkit-flex-direction:row;flex-direction:row}.layout.horizontal-reverse{-ms-flex-direction:row-reverse;-webkit-flex-direction:row-reverse;flex-direction:row-reverse}.layout.vertical{-ms-flex-direction:column;-webkit-flex-direction:column;flex-direction:column}.layout.vertical-reverse{-ms-flex-direction:column-reverse;-webkit-flex-direction:column-reverse;flex-direction:column-reverse}.layout.wrap{-ms-flex-wrap:wrap;-webkit-flex-wrap:wrap;flex-wrap:wrap}.layout.wrap-reverse{-ms-flex-wrap:wrap-reverse;-webkit-flex-wrap:wrap-reverse;flex-wrap:wrap-reverse}.flex-auto{-ms-flex:1 1 auto;-webkit-flex:1 1 auto;flex:1 1 auto}.flex-none{-ms-flex:none;-webkit-flex:none;flex:none}.flex,.flex-1{-ms-flex:1;-webkit-flex:1;flex:1}.flex-2{-ms-flex:2;-webkit-flex:2;flex:2}.flex-3{-ms-flex:3;-webkit-flex:3;flex:3}.flex-4{-ms-flex:4;-webkit-flex:4;flex:4}.flex-5{-ms-flex:5;-webkit-flex:5;flex:5}.flex-6{-ms-flex:6;-webkit-flex:6;flex:6}.flex-7{-ms-flex:7;-webkit-flex:7;flex:7}.flex-8{-ms-flex:8;-webkit-flex:8;flex:8}.flex-9{-ms-flex:9;-webkit-flex:9;flex:9}.flex-10{-ms-flex:10;-webkit-flex:10;flex:10}.flex-11{-ms-flex:11;-webkit-flex:11;flex:11}.flex-12{-ms-flex:12;-webkit-flex:12;flex:12}.layout.start{-ms-flex-align:start;-webkit-align-items:flex-start;align-items:flex-start}.layout.center,.layout.center-center{-ms-flex-align:center;-webkit-align-items:center;align-items:center}.layout.end{-ms-flex-align:end;-webkit-align-items:flex-end;align-items:flex-end}.layout.start-justified{-ms-flex-pack:start;-webkit-justify-content:flex-start;justify-content:flex-start}.layout.center-center,.layout.center-justified{-ms-flex-pack:center;-webkit-justify-content:center;justify-content:center}.layout.end-justified{-ms-flex-pack:end;-webkit-justify-content:flex-end;justify-content:flex-end}.layout.around-justified{-ms-flex-pack:around;-webkit-justify-content:space-around;justify-content:space-around}.layout.justified{-ms-flex-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.self-start{-ms-align-self:flex-start;-webkit-align-self:flex-start;align-self:flex-start}.self-center{-ms-align-self:center;-webkit-align-self:center;align-self:center}.self-end{-ms-align-self:flex-end;-webkit-align-self:flex-end;align-self:flex-end}.self-stretch{-ms-align-self:stretch;-webkit-align-self:stretch;align-self:stretch}.block{display:block}[hidden]{display:none!important}.invisible{visibility:hidden!important}.relative{position:relative}.fit{position:absolute;top:0}body.fullbleed{margin:0;height:100vh}.scroll{-webkit-overflow-scrolling:touch;overflow:auto}.fixed-bottom,.fixed-left,.fixed-right,.fixed-top{position:fixed}.fixed-top{top:0;left:0}.fixed-right{top:0;right:0;bottom:0}.fixed-left{top:0}:host{display:block;position:relative;contain:content}table{border-collapse:collapse;font-size:1em;width:100%}td,th{font-weight:400;text-align:left;padding:4px 8px}.label{width:10%;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.wrapper{position:relative}.fill{width:100%}th ui-prop{min-width:auto}tr[hovering] .label{color:#09f}tr[selected] .label{color:#fd942b}tr[is-disabled] .label{color:#636363;cursor:default} .debug td,.debug th{border:1px solid #666} .debug tr:nth-child(even){background-color:#333}</style>
				<table class="debug">
					<tr>
						<th class="label">
							<span>${Editor.T('lcc-framework.label-pack')}</span>
						</th>
						<th class="wrapper">
							<span>${Editor.T('lcc-framework.label-path')}</span>
						</th>
						<th class="label">
							<span>${Editor.T('lcc-framework.label-action')}</span>
						</th>
					</tr>
					<tr v-for="(pack,path) in packs">
						<th class="label">
							<span>{{pack}}</span>
						</th>
						<th class="wrapper">
							<span>{{path}}</span>
						</th>
						<th class="label">
							<ui-button class="green" v-disabled="building" @click="buildDeclaration(pack)">${Editor.T('lcc-framework.button-build')}</ui-button>
						</th>
					</tr>
				</table>
				<h2>${Editor.T('lcc-framework.label-build-output')}</h2>
				<pre v-text="buildinfo"></pre>
			</div>
		</section>
		<ui-loader class="transparent" v-show="building">${Editor.T('lcc-framework.label-building')}</ui-loader>
	</div>
	<div class="tabs" v-show="showpage==1">
		<header>
			<h1>${Editor.T('lcc-framework.label-publish-setting')}</h1>
		</header>
		<section>
			<div class="preview">
				<ui-prop name="${Editor.T('lcc-framework.label-framework-confuse')}" tooltip="${Editor.T('lcc-framework.label-framework-confuse')}">
					<ui-checkbox v-value="publish.confuse"></ui-checkbox>
				</ui-prop>
				<ui-prop name="${Editor.T('lcc-framework.label-framework-clip')}" tooltip="${Editor.T('lcc-framework.label-framework-clip')}">
					<ui-checkbox v-value="publish.clip"></ui-checkbox>
				</ui-prop>
				<ui-prop name="${Editor.T('lcc-framework.label-framework-clip-method')}" tooltip="${Editor.T('lcc-framework.label-framework-clip-method')}" v-show="publish.clip">
					<ui-select v-value="publish.clipMethod">
						<option value="auto">${Editor.T('lcc-framework.label-auto-clip')}</option>
						<option value="custom">${Editor.T('lcc-framework.label-custom-clip')}</option>
					</ui-select>
				</ui-prop>	
				<ui-section v-show="publish.clip&&publish.clipMethod=='custom'">
					<div slot="header">${Editor.T('lcc-framework.label-keep-modules')}</div>
					<div style="overflow: auto;height: 200px;">
						<ui-prop v-for="(module,keep) in publish.keepModules" :key="module" :name="module" :tooltip="moduleDescs[module]">
							<ui-checkbox v-value="keep"></ui-checkbox>
						</ui-prop>
					</div>
				</ui-section>
			</div>
		</section>
		<footer>
            <ui-button class="green" v-disabled="saving" @click="savePublishConfig()">${Editor.T('lcc-framework.button-save')}</ui-button>
        </footer>
		<ui-loader class="transparent" v-show="saving">${Editor.T('lcc-framework.label-saving')}</ui-loader>
	</div>
</div>
`,
  
    async ready() {
        let config = loadConfig();
        let modules = collectModules();

        // @ts-ignore
        const app = new window.Vue({
            el: this.shadowRoot,

            data() {
                return {
                    showpage : 0,
                    packs : getGamePacks(),
                    building : false,
                    buildinfo : '',
                    moduleDescs : modules.descs,
                    publish : {
                        confuse : config.publish.confuse,
                        clip : config.publish.clip,
                        clipMethod : config.publish.clipMethod,
                        keepModules : modules.keeps,
                    },
                    saving : false,
                }
            },
            
            methods: {
                changePage(page:number) {
                    if(this.showpage != page){
                        this.showpage = page;
                        if(page == 0){
                            this.packs = getGamePacks();
                        }else if(page == 1){
                            modules = collectModules();
                            this.moduleDescs = modules.descs;
                            this.publish.keepModules = modules.keeps;
                        }
                    }
                },
                
                async buildDeclaration(pack:string) {
                    this.building = true;
                    this.buildinfo = `${Editor.T('lcc-framework.label-pack-building')} [${pack}]`;
                    if(OS.platform() == "win32"){
                        var command = "gulp buildDeclaration --pack " + pack;
                        let result = await exeCommand(command, EXTENSION_PATH);
                        if (result.error) {
                            this.buildinfo += `\nerror :\n${result.error}`;
                        }else{
                            this.buildinfo += `\nstdout :\n${result.stdout}`;
                            if(result.stderr){
                                this.buildinfo += `\nstderr :\n${result.stderr}`;
                            }
                        }
                    }
                    this.buildinfo += `\n${Editor.T('lcc-framework.label-pack-builded')}`;
                    this.building = false;
                },

                async savePublishConfig(){
                    this.saving = true;
                    config.publish = this.publish;
                    saveConfig(config); 
                    this.saving = false;
                }
            }
        });
    }
});
