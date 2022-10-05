
(function () {
var scripts = [{"deps":{"./assets/script/GameController":6,"./assets/migration/use_reversed_rotateTo":13,"./assets/script/common/Log":21,"./assets/script/common/ActionTransition":3,"./assets/script/data/GameCenter":5,"./assets/script/data/IDataModel":19,"./assets/script/data/Assets":40,"./assets/script/data/config/CfgPartner":20,"./assets/script/data/config/CfgMine":1,"./assets/script/data/const/ViewZorder":16,"./assets/script/data/const/EventConst":47,"./assets/script/data/model/GameModel":7,"./assets/script/data/model/WebAPI":22,"./assets/script/data/model/System":24,"./assets/script/data/scene/DataGame":8,"./assets/script/data/scene/DataLoading":53,"./assets/script/data/scene/DataMineCollect":23,"./assets/script/data/scene/DataMineMng":25,"./assets/script/data/scene/DataMineMngCon":26,"./assets/script/data/scene/DataMinePetSelect":39,"./assets/script/data/scene/DataMineToolBox":27,"./assets/script/data/scene/DataUIMessage":38,"./assets/script/data/scene/DataUIMusic":31,"./assets/script/data/scene/DataCollectGeneral":28,"./assets/script/lang/CNY":29,"./assets/script/lang/NTD":9,"./assets/script/lib/anime.es":11,"./assets/script/manager/LangMng":35,"./assets/script/manager/EventMng":33,"./assets/script/manager/MusicMng":30,"./assets/script/manager/SceneMng":32,"./assets/script/manager/UIMng":34,"./assets/script/manager/AssetsMng":10,"./assets/script/api/GPGAPI":4,"./assets/script/controllers/mine/MineMng":37,"./assets/script/controllers/mine/MineMngNav":12,"./assets/script/controllers/mine/MineCollect":36,"./assets/script/controllers/mine/collect/ParticleCoin":2,"./assets/script/controllers/mine/collect/CollectGeneral":41,"./assets/script/controllers/mine/mng/MinePartnerSelect":49,"./assets/script/controllers/mine/mng/MinePetSelect":42,"./assets/script/controllers/mine/mng/MineSelect":43,"./assets/script/controllers/mine/mng/MineSelectItem":45,"./assets/script/controllers/mine/mng/MineSlider":44,"./assets/script/controllers/mine/mng/MineToolBox":48,"./assets/script/controllers/mine/mng/ToolComponent":50,"./assets/script/controllers/mine/mng/MinePetProps":14,"./assets/script/controllers/mine/pop/PropSelectPop":18,"./assets/script/controllers/scene/MainLoading":15,"./assets/script/controllers/scene/MainGame":46,"./assets/script/controllers/ui/UIBase":60,"./assets/script/controllers/ui/UIInfo":52,"./assets/script/controllers/ui/UILoadTip":51,"./assets/script/controllers/ui/UILoading":55,"./assets/script/controllers/ui/UIMessage":56,"./assets/script/controllers/ui/UIMusic":54,"./assets/script/controllers/ui/UISkinPop":57,"./assets/script/controllers/ui/UIUpgradePanel":59,"./assets/script/controllers/ui/UIHelp":17,"./assets/script/controllers/mine/MineMngCon":58},"path":"preview-scripts/__qc_index__.js"},{"deps":{},"path":"preview-scripts/assets/script/data/config/CfgMine.js"},{"deps":{"../../ui/UIBase":60,"../../../manager/AssetsMng":10},"path":"preview-scripts/assets/script/controllers/mine/collect/ParticleCoin.js"},{"deps":{},"path":"preview-scripts/assets/script/common/ActionTransition.js"},{"deps":{"../manager/EventMng":33},"path":"preview-scripts/assets/script/api/GPGAPI.js"},{"deps":{"../manager/AssetsMng":10,"./config/CfgPartner":20,"./config/CfgMine":1,"./model/System":24,"./model/GameModel":7},"path":"preview-scripts/assets/script/data/GameCenter.js"},{"deps":{"./manager/AssetsMng":10,"./manager/SceneMng":32,"./manager/LangMng":35,"./api/GPGAPI":4},"path":"preview-scripts/assets/script/GameController.js"},{"deps":{"../../manager/EventMng":33,"../IDataModel":19,"../const/EventConst":47},"path":"preview-scripts/assets/script/data/model/GameModel.js"},{"deps":{},"path":"preview-scripts/assets/script/data/scene/DataGame.js"},{"deps":{},"path":"preview-scripts/assets/script/lang/NTD.js"},{"deps":{"../data/Assets":40,"../manager/EventMng":33,"../data/const/EventConst":47},"path":"preview-scripts/assets/script/manager/AssetsMng.js"},{"deps":{},"path":"preview-scripts/assets/script/lib/anime.es.js"},{"deps":{"../../manager/EventMng":33,"../../data/const/EventConst":47,"../ui/UIBase":60},"path":"preview-scripts/assets/script/controllers/mine/MineMngNav.js"},{"deps":{},"path":"preview-scripts/assets/migration/use_reversed_rotateTo.js"},{"deps":{"../../ui/UIBase":60},"path":"preview-scripts/assets/script/controllers/mine/mng/MinePetProps.js"},{"deps":{"../../manager/AssetsMng":10,"../../manager/SceneMng":32,"../../data/const/EventConst":47,"../ui/UIBase":60,"../ui/UIHelp":17,"../../manager/LangMng":35,"../../GameController":6},"path":"preview-scripts/assets/script/controllers/scene/MainLoading.js"},{"deps":{},"path":"preview-scripts/assets/script/data/const/ViewZorder.js"},{"deps":{"../../manager/UIMng":34,"./UILoading":55,"../../data/const/ViewZorder":16,"./UIMessage":56},"path":"preview-scripts/assets/script/controllers/ui/UIHelp.js"},{"deps":{"../../../manager/LangMng":35,"../../ui/UIBase":60,"../../../data/const/ViewZorder":16},"path":"preview-scripts/assets/script/controllers/mine/pop/PropSelectPop.js"},{"deps":{"../manager/EventMng":33},"path":"preview-scripts/assets/script/data/IDataModel.js"},{"deps":{},"path":"preview-scripts/assets/script/data/config/CfgPartner.js"},{"deps":{},"path":"preview-scripts/assets/script/common/Log.js"},{"deps":{"../IDataModel":19},"path":"preview-scripts/assets/script/data/model/WebAPI.js"},{"deps":{},"path":"preview-scripts/assets/script/data/scene/DataMineCollect.js"},{"deps":{"../IDataModel":19},"path":"preview-scripts/assets/script/data/model/System.js"},{"deps":{},"path":"preview-scripts/assets/script/data/scene/DataMineMng.js"},{"deps":{},"path":"preview-scripts/assets/script/data/scene/DataMineMngCon.js"},{"deps":{},"path":"preview-scripts/assets/script/data/scene/DataMineToolBox.js"},{"deps":{},"path":"preview-scripts/assets/script/data/scene/DataCollectGeneral.js"},{"deps":{},"path":"preview-scripts/assets/script/lang/CNY.js"},{"deps":{"../data/GameCenter":5},"path":"preview-scripts/assets/script/manager/MusicMng.js"},{"deps":{},"path":"preview-scripts/assets/script/data/scene/DataUIMusic.js"},{"deps":{"../controllers/ui/UIMessage":56,"../controllers/ui/UILoading":55,"../controllers/ui/UIHelp":17},"path":"preview-scripts/assets/script/manager/SceneMng.js"},{"deps":{},"path":"preview-scripts/assets/script/manager/EventMng.js"},{"deps":{"../data/const/ViewZorder":16},"path":"preview-scripts/assets/script/manager/UIMng.js"},{"deps":{"../data/GameCenter":5},"path":"preview-scripts/assets/script/manager/LangMng.js"},{"deps":{"../../manager/EventMng":33,"../../manager/LangMng":35,"../ui/UIBase":60,"../../common/ActionTransition":3,"../../data/const/EventConst":47,"../../data/scene/DataMineCollect":23,"./collect/CollectGeneral":41},"path":"preview-scripts/assets/script/controllers/mine/MineCollect.js"},{"deps":{"../../manager/LangMng":35,"../../manager/EventMng":33,"../../common/ActionTransition":3,"../../data/const/EventConst":47,"../ui/UIBase":60,"../../data/scene/DataMineMng":25,"./MineMngNav":12,"./MineMngCon":58},"path":"preview-scripts/assets/script/controllers/mine/MineMng.js"},{"deps":{},"path":"preview-scripts/assets/script/data/scene/DataUIMessage.js"},{"deps":{},"path":"preview-scripts/assets/script/data/scene/DataMinePetSelect.js"},{"deps":{},"path":"preview-scripts/assets/script/data/Assets.js"},{"deps":{"../../../data/GameCenter":5,"../../../GameController":6,"../../ui/UIBase":60,"../../../manager/AssetsMng":10,"./ParticleCoin":2,"../../../data/scene/DataCollectGeneral":28,"../../../common/ActionTransition":3,"../../../data/const/EventConst":47},"path":"preview-scripts/assets/script/controllers/mine/collect/CollectGeneral.js"},{"deps":{"../../../data/GameCenter":5,"./MineSelect":43},"path":"preview-scripts/assets/script/controllers/mine/mng/MinePetSelect.js"},{"deps":{"./MineSlider":44,"../../ui/UIBase":60,"../../../data/scene/DataMinePetSelect":39},"path":"preview-scripts/assets/script/controllers/mine/mng/MineSelect.js"},{"deps":{"../../../data/GameCenter":5,"../../../manager/LangMng":35,"../../../manager/AssetsMng":10,"../../../manager/EventMng":33,"./MineSelectItem":45,"../../../common/ActionTransition":3,"../../../data/const/EventConst":47},"path":"preview-scripts/assets/script/controllers/mine/mng/MineSlider.js"},{"deps":{"../../../data/GameCenter":5},"path":"preview-scripts/assets/script/controllers/mine/mng/MineSelectItem.js"},{"deps":{"../../GameController":6,"../../data/GameCenter":5,"../../manager/EventMng":33,"../../manager/LangMng":35,"../../data/const/EventConst":47,"../../data/const/ViewZorder":16,"../../data/scene/DataGame":8,"../mine/MineMng":37,"../mine/MineCollect":36,"../ui/UIBase":60,"../ui/UIHelp":17,"../ui/UIInfo":52,"../ui/UILoading":55,"../ui/UIUpgradePanel":59,"../ui/UILoadTip":51,"../ui/UISkinPop":57},"path":"preview-scripts/assets/script/controllers/scene/MainGame.js"},{"deps":{},"path":"preview-scripts/assets/script/data/const/EventConst.js"},{"deps":{"../../../data/GameCenter":5,"../../../manager/EventMng":33,"../../../manager/LangMng":35,"./ToolComponent":50,"./MineSlider":44,"../../../common/ActionTransition":3,"../../../data/const/EventConst":47,"../../ui/UIBase":60,"../../../data/scene/DataMineToolBox":27},"path":"preview-scripts/assets/script/controllers/mine/mng/MineToolBox.js"},{"deps":{"../../../data/GameCenter":5,"./MineSelect":43},"path":"preview-scripts/assets/script/controllers/mine/mng/MinePartnerSelect.js"},{"deps":{},"path":"preview-scripts/assets/script/controllers/mine/mng/ToolComponent.js"},{"deps":{"./UIBase":60,"../../data/const/ViewZorder":16},"path":"preview-scripts/assets/script/controllers/ui/UILoadTip.js"},{"deps":{"../../manager/LangMng":35,"./UIBase":60,"../../data/const/ViewZorder":16},"path":"preview-scripts/assets/script/controllers/ui/UIInfo.js"},{"deps":{},"path":"preview-scripts/assets/script/data/scene/DataLoading.js"},{"deps":{"./UIBase":60,"../../data/scene/DataUIMusic":31,"../../manager/LangMng":35,"../../manager/MusicMng":30},"path":"preview-scripts/assets/script/controllers/ui/UIMusic.js"},{"deps":{"./UIBase":60},"path":"preview-scripts/assets/script/controllers/ui/UILoading.js"},{"deps":{"./UIBase":60,"../../data/scene/DataUIMessage":38,"../../manager/LangMng":35},"path":"preview-scripts/assets/script/controllers/ui/UIMessage.js"},{"deps":{"../../manager/AssetsMng":10,"../../data/GameCenter":5,"../mine/pop/PropSelectPop":18,"../../manager/LangMng":35},"path":"preview-scripts/assets/script/controllers/ui/UISkinPop.js"},{"deps":{"../ui/UIBase":60,"./mng/MinePetSelect":42,"../../data/scene/DataMineMngCon":26,"./mng/MinePartnerSelect":49,"./mng/MineToolBox":48},"path":"preview-scripts/assets/script/controllers/mine/MineMngCon.js"},{"deps":{"../../data/GameCenter":5,"../../manager/AssetsMng":10,"../../data/const/ViewZorder":16,"./UIBase":60},"path":"preview-scripts/assets/script/controllers/ui/UIUpgradePanel.js"},{"deps":{"../../manager/EventMng":33},"path":"preview-scripts/assets/script/controllers/ui/UIBase.js"}];
var entries = ["preview-scripts/__qc_index__.js"];
var bundleScript = 'preview-scripts/__qc_bundle__.js';

/**
 * Notice: This file can not use ES6 (for IE 11)
 */
var modules = {};
var name2path = {};

// Will generated by module.js plugin
// var scripts = ${scripts};
// var entries = ${entries};
// var bundleScript = ${bundleScript};

if (typeof global === 'undefined') {
    window.global = window;
}

var isJSB = typeof jsb !== 'undefined';

function getXMLHttpRequest () {
    return window.XMLHttpRequest ? new window.XMLHttpRequest() : new ActiveXObject('MSXML2.XMLHTTP');
}

function downloadText(url, callback) {
    if (isJSB) {
        var result = jsb.fileUtils.getStringFromFile(url);
        callback(null, result);
        return;
    }

    var xhr = getXMLHttpRequest(),
        errInfo = 'Load text file failed: ' + url;
    xhr.open('GET', url, true);
    if (xhr.overrideMimeType) xhr.overrideMimeType('text\/plain; charset=utf-8');
    xhr.onload = function () {
        if (xhr.readyState === 4) {
            if (xhr.status === 200 || xhr.status === 0) {
                callback(null, xhr.responseText);
            }
            else {
                callback({status:xhr.status, errorMessage:errInfo + ', status: ' + xhr.status});
            }
        }
        else {
            callback({status:xhr.status, errorMessage:errInfo + '(wrong readyState)'});
        }
    };
    xhr.onerror = function(){
        callback({status:xhr.status, errorMessage:errInfo + '(error)'});
    };
    xhr.ontimeout = function(){
        callback({status:xhr.status, errorMessage:errInfo + '(time out)'});
    };
    xhr.send(null);
};

function loadScript (src, cb) {
    if (typeof require !== 'undefined') {
        require(src);
        return cb();
    }

    // var timer = 'load ' + src;
    // console.time(timer);

    var scriptElement = document.createElement('script');

    function done() {
        // console.timeEnd(timer);
        // deallocation immediate whatever
        scriptElement.remove();
    }

    scriptElement.onload = function () {
        done();
        cb();
    };
    scriptElement.onerror = function () {
        done();
        var error = 'Failed to load ' + src;
        console.error(error);
        cb(new Error(error));
    };
    scriptElement.setAttribute('type','text/javascript');
    scriptElement.setAttribute('charset', 'utf-8');
    scriptElement.setAttribute('src', src);

    document.head.appendChild(scriptElement);
}

function loadScripts (srcs, cb) {
    var n = srcs.length;

    srcs.forEach(function (src) {
        loadScript(src, function () {
            n--;
            if (n === 0) {
                cb();
            }
        });
    })
}

function formatPath (path) {
    let destPath = window.__quick_compile_project__.destPath;
    if (destPath) {
        let prefix = 'preview-scripts';
        if (destPath[destPath.length - 1] === '/') {
            prefix += '/';
        }
        path = path.replace(prefix, destPath);
    }
    return path;
}

window.__quick_compile_project__ = {
    destPath: '',

    registerModule: function (path, module) {
        path = formatPath(path);
        modules[path].module = module;
    },

    registerModuleFunc: function (path, func) {
        path = formatPath(path);
        modules[path].func = func;

        var sections = path.split('/');
        var name = sections[sections.length - 1];
        name = name.replace(/\.(?:js|ts|json)$/i, '');
        name2path[name] = path;
    },

    require: function (request, path) {
        var m, requestScript;

        path = formatPath(path);
        if (path) {
            m = modules[path];
            if (!m) {
                console.warn('Can not find module for path : ' + path);
                return null;
            }
        }

        if (m) {
            let depIndex = m.deps[request];
            // dependence script was excluded
            if (depIndex === -1) {
                return null;
            }
            else {
                requestScript = scripts[ m.deps[request] ];
            }
        }
        
        let requestPath = '';
        if (!requestScript) {
            // search from name2path when request is a dynamic module name
            if (/^[\w- .]*$/.test(request)) {
                requestPath = name2path[request];
            }

            if (!requestPath) {
                if (CC_JSB) {
                    return require(request);
                }
                else {
                    console.warn('Can not find deps [' + request + '] for path : ' + path);
                    return null;
                }
            }
        }
        else {
            requestPath = formatPath(requestScript.path);
        }

        let requestModule = modules[requestPath];
        if (!requestModule) {
            console.warn('Can not find request module for path : ' + requestPath);
            return null;
        }

        if (!requestModule.module && requestModule.func) {
            requestModule.func();
        }

        if (!requestModule.module) {
            console.warn('Can not find requestModule.module for path : ' + path);
            return null;
        }

        return requestModule.module.exports;
    },

    run: function () {
        entries.forEach(function (entry) {
            entry = formatPath(entry);
            var module = modules[entry];
            if (!module.module) {
                module.func();
            }
        });
    },

    load: function (cb) {
        var self = this;

        var srcs = scripts.map(function (script) {
            var path = formatPath(script.path);
            modules[path] = script;

            if (script.mtime) {
                path += ("?mtime=" + script.mtime);
            }
            return path;
        });

        console.time && console.time('load __quick_compile_project__');
        // jsb can not analysis sourcemap, so keep separate files.
        if (bundleScript && !isJSB) {
            downloadText(formatPath(bundleScript), function (err, bundleSource) {
                console.timeEnd && console.timeEnd('load __quick_compile_project__');
                if (err) {
                    console.error(err);
                    return;
                }

                let evalTime = 'eval __quick_compile_project__ : ' + srcs.length + ' files';
                console.time && console.time(evalTime);
                var sources = bundleSource.split('\n//------QC-SOURCE-SPLIT------\n');
                for (var i = 0; i < sources.length; i++) {
                    if (sources[i]) {
                        window.eval(sources[i]);
                        // not sure why new Function cannot set breakpoints precisely
                        // new Function(sources[i])()
                    }
                }
                self.run();
                console.timeEnd && console.timeEnd(evalTime);
                cb();
            })
        }
        else {
            loadScripts(srcs, function () {
                self.run();
                console.timeEnd && console.timeEnd('load __quick_compile_project__');
                cb();
            });
        }
    }
};

// Polyfill for IE 11
if (!('remove' in Element.prototype)) {
    Element.prototype.remove = function () {
        if (this.parentNode) {
            this.parentNode.removeChild(this);
        }
    };
}
})();
    