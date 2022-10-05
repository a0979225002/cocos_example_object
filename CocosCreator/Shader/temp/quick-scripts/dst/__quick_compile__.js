
(function () {
var scripts = [{"deps":{"./assets/Script/UI/EffectManager":4,"./assets/Shaders/ccShader_Circle_Light_Frag":5,"./assets/migration/use_v2.0.x_cc.Toggle_event":6,"./assets/Script/UIManager":36,"./assets/Shaders/ccShader_Default_Vert":39,"./assets/Shaders/ccShader_Circle_Effect2_Frag":40,"./assets/Shaders/ccShader_Blur_Edge_Detail_Frag":42,"./assets/Shaders/ccShader_Effect03_Frag":45,"./assets/Shaders/ccShader_Effect04_Frag":46,"./assets/Shaders/ccShader_Default_Vert_noMVP":47,"./assets/Shaders/ccShader_Effect06_Frag":48,"./assets/Shaders/ccShader_Effect08_Frag":49,"./assets/Shaders/ccShader_Effect10_Frag":50,"./assets/Shaders/ccShader_Effect07_Frag":51,"./assets/Shaders/ccShader_Effect09_Frag":52,"./assets/Shaders/ccShader_Effect12_Frag":53,"./assets/Shaders/ccShader_Effect13_Frag":54,"./assets/Shaders/ccShader_Effect15_Frag":55,"./assets/Shaders/ccShader_Effect14_Frag":56,"./assets/Shaders/ccShader_Effect17_Frag":57,"./assets/Shaders/ccShader_Effect18_Frag":58,"./assets/Shaders/ccShader_Effect16_Frag":59,"./assets/Shaders/ccShader_Effect19_Frag":60,"./assets/Shaders/ccShader_Effect20_Frag":61,"./assets/Shaders/ccShader_Effect22_Frag":62,"./assets/Shaders/ccShader_Effect23_Frag":63,"./assets/Shaders/ccShader_Effect21_Frag":64,"./assets/Shaders/ccShader_Effect05_Frag":65,"./assets/Shaders/ccShader_Effect24_Frag":66,"./assets/Shaders/ccShader_Effect26_Frag":67,"./assets/Shaders/ccShader_Emboss_Frag":68,"./assets/Shaders/ccShader_Effect11_Frag":69,"./assets/Shaders/ccShader_Glass_Frag":70,"./assets/Shaders/ccShader_LightEffect_Frag":71,"./assets/Shaders/ccShader_Effect25_Frag":72,"./assets/Shaders/ccShader_Negative_Black_White_Frag":73,"./assets/Shaders/ccShader_Negative_Image_Frag":74,"./assets/Shaders/ccShader_Normal_Frag":75,"./assets/Shaders/ccShader_Rotate_Vert":76,"./assets/Shaders/ccShader_Rotate_Vert_noMVP":77,"./assets/Shaders/ccShader_Gray_Frag":78,"./assets/Shaders/ccShader_Rotation_Avg_Black_White_Frag":79,"./assets/Shaders/ccShader_Wave_H_Frag":80,"./assets/Shaders/ccShader_Shadow_Black_White_Frag":81,"./assets/Shaders/ccShader_Wave_VH_Frag":82,"./assets/Shaders/ccShader_Wave_V_Frag":84,"./assets/Shaders/ccShader_lightningBolt_Frag":85,"./assets/Shaders/ccShader_Avg_Black_White_Frag":86,"./assets/Shaders/ccShader_lightningBolt_Vert":87,"./assets/Script/Effect_Rotate":1,"./assets/Script/EffectForShaderToy":2,"./assets/Script/CircleLight":3,"./assets/Script/Effect":7,"./assets/Script/Effect03":8,"./assets/Script/Effect05":9,"./assets/Script/Effect06":10,"./assets/Script/Effect08":11,"./assets/Script/Effect04":12,"./assets/Script/Effect11":13,"./assets/Script/Effect10":14,"./assets/Script/Effect09":15,"./assets/Script/Effect15":16,"./assets/Script/Effect07":17,"./assets/Script/Effect18":18,"./assets/Script/Effect17":19,"./assets/Script/Effect12":20,"./assets/Script/Effect19":21,"./assets/Script/Effect16":22,"./assets/Script/EffectCommon":23,"./assets/Script/Effect_BlackWhite":24,"./assets/Script/Effect20":25,"./assets/Script/Emboss":26,"./assets/Script/Effect14":27,"./assets/Script/Glass":28,"./assets/Script/CircleEffect2":30,"./assets/Script/Effect13":29,"./assets/Script/Glass2":31,"./assets/Script/Gray":32,"./assets/Script/LightningBolt":33,"./assets/Script/Negative_Black_White":34,"./assets/Script/Negative_Image":35,"./assets/Script/Shadow_Black_White":37,"./assets/Script/Wave_H":38,"./assets/Script/Avg_Black_White":41,"./assets/Script/Wave_VH":43,"./assets/Script/Wave_V":44,"./assets/Script/Blur_Edge_Detail":83,"./assets/Script/LightEffet":88},"path":"preview-scripts/__qc_index__.js"},{"deps":{"../Shaders/ccShader_Rotate_Vert.js":76,"../Shaders/ccShader_Rotate_Vert_noMVP.js":77,"../Shaders/ccShader_Normal_Frag.js":75,"../Shaders/ccShader_Rotation_Avg_Black_White_Frag.js":79},"path":"preview-scripts/assets/Script/Effect_Rotate.js"},{"deps":{"../Shaders/ccShader_Default_Vert.js":39,"../Shaders/ccShader_Default_Vert_noMVP.js":47},"path":"preview-scripts/assets/Script/EffectForShaderToy.js"},{"deps":{"../Shaders/ccShader_Default_Vert.js":39,"../Shaders/ccShader_Default_Vert_noMVP.js":47,"../Shaders/ccShader_Circle_Light_Frag.js":5},"path":"preview-scripts/assets/Script/CircleLight.js"},{"deps":{},"path":"preview-scripts/assets/Script/UI/EffectManager.js"},{"deps":{},"path":"preview-scripts/assets/Shaders/ccShader_Circle_Light_Frag.js"},{"deps":{},"path":"preview-scripts/assets/migration/use_v2.0.x_cc.Toggle_event.js"},{"deps":{"../Shaders/ccShader_Default_Vert.js":39,"../Shaders/ccShader_Default_Vert_noMVP.js":47,"../Shaders/ccShader_Effect04_Frag.js":46},"path":"preview-scripts/assets/Script/Effect.js"},{"deps":{"../Shaders/ccShader_Effect03_Frag.js":45,"../Shaders/ccShader_Default_Vert.js":39,"../Shaders/ccShader_Default_Vert_noMVP.js":47},"path":"preview-scripts/assets/Script/Effect03.js"},{"deps":{"../Shaders/ccShader_Default_Vert.js":39,"../Shaders/ccShader_Default_Vert_noMVP.js":47,"../Shaders/ccShader_Effect05_Frag.js":65},"path":"preview-scripts/assets/Script/Effect05.js"},{"deps":{"../Shaders/ccShader_Default_Vert.js":39,"../Shaders/ccShader_Default_Vert_noMVP.js":47,"../Shaders/ccShader_Effect06_Frag.js":48},"path":"preview-scripts/assets/Script/Effect06.js"},{"deps":{"../Shaders/ccShader_Default_Vert.js":39,"../Shaders/ccShader_Default_Vert_noMVP.js":47,"../Shaders/ccShader_Effect04_Frag.js":46},"path":"preview-scripts/assets/Script/Effect08.js"},{"deps":{"../Shaders/ccShader_Default_Vert.js":39,"../Shaders/ccShader_Default_Vert_noMVP.js":47,"../Shaders/ccShader_Effect04_Frag.js":46},"path":"preview-scripts/assets/Script/Effect04.js"},{"deps":{"../Shaders/ccShader_Default_Vert.js":39,"../Shaders/ccShader_Default_Vert_noMVP.js":47,"../Shaders/ccShader_Effect04_Frag.js":46},"path":"preview-scripts/assets/Script/Effect11.js"},{"deps":{"../Shaders/ccShader_Default_Vert.js":39,"../Shaders/ccShader_Default_Vert_noMVP.js":47,"../Shaders/ccShader_Effect04_Frag.js":46},"path":"preview-scripts/assets/Script/Effect10.js"},{"deps":{"../Shaders/ccShader_Default_Vert.js":39,"../Shaders/ccShader_Default_Vert_noMVP.js":47,"../Shaders/ccShader_Effect04_Frag.js":46},"path":"preview-scripts/assets/Script/Effect09.js"},{"deps":{"../Shaders/ccShader_Default_Vert_noMVP.js":47,"../Shaders/ccShader_Default_Vert.js":39,"../Shaders/ccShader_Effect04_Frag.js":46},"path":"preview-scripts/assets/Script/Effect15.js"},{"deps":{"../Shaders/ccShader_Default_Vert.js":39,"../Shaders/ccShader_Default_Vert_noMVP.js":47,"../Shaders/ccShader_Effect04_Frag.js":46},"path":"preview-scripts/assets/Script/Effect07.js"},{"deps":{"../Shaders/ccShader_Default_Vert.js":39,"../Shaders/ccShader_Default_Vert_noMVP.js":47,"../Shaders/ccShader_Effect04_Frag.js":46},"path":"preview-scripts/assets/Script/Effect18.js"},{"deps":{"../Shaders/ccShader_Default_Vert.js":39,"../Shaders/ccShader_Default_Vert_noMVP.js":47,"../Shaders/ccShader_Effect04_Frag.js":46},"path":"preview-scripts/assets/Script/Effect17.js"},{"deps":{"../Shaders/ccShader_Default_Vert_noMVP.js":47,"../Shaders/ccShader_Effect04_Frag.js":46,"../Shaders/ccShader_Default_Vert.js":39},"path":"preview-scripts/assets/Script/Effect12.js"},{"deps":{"../Shaders/ccShader_Default_Vert.js":39,"../Shaders/ccShader_Default_Vert_noMVP.js":47,"../Shaders/ccShader_Effect04_Frag.js":46},"path":"preview-scripts/assets/Script/Effect19.js"},{"deps":{"../Shaders/ccShader_Default_Vert.js":39,"../Shaders/ccShader_Default_Vert_noMVP.js":47,"../Shaders/ccShader_Effect04_Frag.js":46},"path":"preview-scripts/assets/Script/Effect16.js"},{"deps":{"../Shaders/ccShader_Default_Vert.js":39,"../Shaders/ccShader_Default_Vert_noMVP.js":47},"path":"preview-scripts/assets/Script/EffectCommon.js"},{"deps":{"../Shaders/ccShader_Default_Vert.js":39,"../Shaders/ccShader_Default_Vert_noMVP.js":47,"../Shaders/ccShader_Normal_Frag.js":75,"../Shaders/ccShader_Avg_Black_White_Frag.js":86},"path":"preview-scripts/assets/Script/Effect_BlackWhite.js"},{"deps":{"../Shaders/ccShader_Default_Vert.js":39,"../Shaders/ccShader_Default_Vert_noMVP.js":47,"../Shaders/ccShader_Effect04_Frag.js":46},"path":"preview-scripts/assets/Script/Effect20.js"},{"deps":{"../Shaders/ccShader_Default_Vert.js":39,"../Shaders/ccShader_Default_Vert_noMVP.js":47,"../Shaders/ccShader_Emboss_Frag.js":68},"path":"preview-scripts/assets/Script/Emboss.js"},{"deps":{"../Shaders/ccShader_Default_Vert.js":39,"../Shaders/ccShader_Default_Vert_noMVP.js":47,"../Shaders/ccShader_Effect04_Frag.js":46},"path":"preview-scripts/assets/Script/Effect14.js"},{"deps":{"../Shaders/ccShader_Default_Vert.js":39,"../Shaders/ccShader_Default_Vert_noMVP.js":47,"../Shaders/ccShader_Glass_Frag.js":70},"path":"preview-scripts/assets/Script/Glass.js"},{"deps":{"../Shaders/ccShader_Default_Vert_noMVP.js":47,"../Shaders/ccShader_Effect04_Frag.js":46,"../Shaders/ccShader_Default_Vert.js":39},"path":"preview-scripts/assets/Script/Effect13.js"},{"deps":{"../Shaders/ccShader_Default_Vert.js":39,"../Shaders/ccShader_Default_Vert_noMVP.js":47,"../Shaders/ccShader_Circle_Effect2_Frag.js":40},"path":"preview-scripts/assets/Script/CircleEffect2.js"},{"deps":{"../Shaders/ccShader_Default_Vert.js":39,"../Shaders/ccShader_Default_Vert_noMVP.js":47,"../Shaders/ccShader_Glass_Frag.js":70},"path":"preview-scripts/assets/Script/Glass2.js"},{"deps":{"../Shaders/ccShader_Default_Vert.js":39,"../Shaders/ccShader_Default_Vert_noMVP.js":47,"../Shaders/ccShader_Gray_Frag.js":78},"path":"preview-scripts/assets/Script/Gray.js"},{"deps":{"../Shaders/ccShader_Default_Vert_noMVP.js":47,"../Shaders/ccShader_lightningBolt_Vert.js":87,"../Shaders/ccShader_lightningBolt_Frag.js":85},"path":"preview-scripts/assets/Script/LightningBolt.js"},{"deps":{"../Shaders/ccShader_Default_Vert_noMVP.js":47,"../Shaders/ccShader_Default_Vert.js":39,"../Shaders/ccShader_Negative_Black_White_Frag.js":73},"path":"preview-scripts/assets/Script/Negative_Black_White.js"},{"deps":{"../Shaders/ccShader_Default_Vert.js":39,"../Shaders/ccShader_Default_Vert_noMVP.js":47,"../Shaders/ccShader_Negative_Image_Frag.js":74},"path":"preview-scripts/assets/Script/Negative_Image.js"},{"deps":{},"path":"preview-scripts/assets/Script/UIManager.js"},{"deps":{"../Shaders/ccShader_Default_Vert.js":39,"../Shaders/ccShader_Default_Vert_noMVP.js":47,"../Shaders/ccShader_Shadow_Black_White_Frag.js":81},"path":"preview-scripts/assets/Script/Shadow_Black_White.js"},{"deps":{"../Shaders/ccShader_Default_Vert.js":39,"../Shaders/ccShader_Default_Vert_noMVP.js":47,"../Shaders/ccShader_Wave_H_Frag.js":80},"path":"preview-scripts/assets/Script/Wave_H.js"},{"deps":{},"path":"preview-scripts/assets/Shaders/ccShader_Default_Vert.js"},{"deps":{},"path":"preview-scripts/assets/Shaders/ccShader_Circle_Effect2_Frag.js"},{"deps":{"../Shaders/ccShader_Default_Vert.js":39,"../Shaders/ccShader_Default_Vert_noMVP.js":47,"../Shaders/ccShader_Avg_Black_White_Frag.js":86},"path":"preview-scripts/assets/Script/Avg_Black_White.js"},{"deps":{},"path":"preview-scripts/assets/Shaders/ccShader_Blur_Edge_Detail_Frag.js"},{"deps":{"../Shaders/ccShader_Default_Vert.js":39,"../Shaders/ccShader_Wave_VH_Frag.js":82,"../Shaders/ccShader_Default_Vert_noMVP.js":47},"path":"preview-scripts/assets/Script/Wave_VH.js"},{"deps":{"../Shaders/ccShader_Default_Vert.js":39,"../Shaders/ccShader_Default_Vert_noMVP.js":47,"../Shaders/ccShader_Wave_V_Frag.js":84},"path":"preview-scripts/assets/Script/Wave_V.js"},{"deps":{},"path":"preview-scripts/assets/Shaders/ccShader_Effect03_Frag.js"},{"deps":{},"path":"preview-scripts/assets/Shaders/ccShader_Effect04_Frag.js"},{"deps":{},"path":"preview-scripts/assets/Shaders/ccShader_Default_Vert_noMVP.js"},{"deps":{},"path":"preview-scripts/assets/Shaders/ccShader_Effect06_Frag.js"},{"deps":{},"path":"preview-scripts/assets/Shaders/ccShader_Effect08_Frag.js"},{"deps":{},"path":"preview-scripts/assets/Shaders/ccShader_Effect10_Frag.js"},{"deps":{},"path":"preview-scripts/assets/Shaders/ccShader_Effect07_Frag.js"},{"deps":{},"path":"preview-scripts/assets/Shaders/ccShader_Effect09_Frag.js"},{"deps":{},"path":"preview-scripts/assets/Shaders/ccShader_Effect12_Frag.js"},{"deps":{},"path":"preview-scripts/assets/Shaders/ccShader_Effect13_Frag.js"},{"deps":{},"path":"preview-scripts/assets/Shaders/ccShader_Effect15_Frag.js"},{"deps":{},"path":"preview-scripts/assets/Shaders/ccShader_Effect14_Frag.js"},{"deps":{},"path":"preview-scripts/assets/Shaders/ccShader_Effect17_Frag.js"},{"deps":{},"path":"preview-scripts/assets/Shaders/ccShader_Effect18_Frag.js"},{"deps":{},"path":"preview-scripts/assets/Shaders/ccShader_Effect16_Frag.js"},{"deps":{},"path":"preview-scripts/assets/Shaders/ccShader_Effect19_Frag.js"},{"deps":{},"path":"preview-scripts/assets/Shaders/ccShader_Effect20_Frag.js"},{"deps":{},"path":"preview-scripts/assets/Shaders/ccShader_Effect22_Frag.js"},{"deps":{},"path":"preview-scripts/assets/Shaders/ccShader_Effect23_Frag.js"},{"deps":{},"path":"preview-scripts/assets/Shaders/ccShader_Effect21_Frag.js"},{"deps":{},"path":"preview-scripts/assets/Shaders/ccShader_Effect05_Frag.js"},{"deps":{},"path":"preview-scripts/assets/Shaders/ccShader_Effect24_Frag.js"},{"deps":{},"path":"preview-scripts/assets/Shaders/ccShader_Effect26_Frag.js"},{"deps":{},"path":"preview-scripts/assets/Shaders/ccShader_Emboss_Frag.js"},{"deps":{},"path":"preview-scripts/assets/Shaders/ccShader_Effect11_Frag.js"},{"deps":{},"path":"preview-scripts/assets/Shaders/ccShader_Glass_Frag.js"},{"deps":{},"path":"preview-scripts/assets/Shaders/ccShader_LightEffect_Frag.js"},{"deps":{},"path":"preview-scripts/assets/Shaders/ccShader_Effect25_Frag.js"},{"deps":{},"path":"preview-scripts/assets/Shaders/ccShader_Negative_Black_White_Frag.js"},{"deps":{},"path":"preview-scripts/assets/Shaders/ccShader_Negative_Image_Frag.js"},{"deps":{},"path":"preview-scripts/assets/Shaders/ccShader_Normal_Frag.js"},{"deps":{},"path":"preview-scripts/assets/Shaders/ccShader_Rotate_Vert.js"},{"deps":{},"path":"preview-scripts/assets/Shaders/ccShader_Rotate_Vert_noMVP.js"},{"deps":{},"path":"preview-scripts/assets/Shaders/ccShader_Gray_Frag.js"},{"deps":{},"path":"preview-scripts/assets/Shaders/ccShader_Rotation_Avg_Black_White_Frag.js"},{"deps":{},"path":"preview-scripts/assets/Shaders/ccShader_Wave_H_Frag.js"},{"deps":{},"path":"preview-scripts/assets/Shaders/ccShader_Shadow_Black_White_Frag.js"},{"deps":{},"path":"preview-scripts/assets/Shaders/ccShader_Wave_VH_Frag.js"},{"deps":{"../Shaders/ccShader_Default_Vert_noMVP.js":47,"../Shaders/ccShader_Default_Vert.js":39,"../Shaders/ccShader_Blur_Edge_Detail_Frag.js":42},"path":"preview-scripts/assets/Script/Blur_Edge_Detail.js"},{"deps":{},"path":"preview-scripts/assets/Shaders/ccShader_Wave_V_Frag.js"},{"deps":{},"path":"preview-scripts/assets/Shaders/ccShader_lightningBolt_Frag.js"},{"deps":{},"path":"preview-scripts/assets/Shaders/ccShader_Avg_Black_White_Frag.js"},{"deps":{},"path":"preview-scripts/assets/Shaders/ccShader_lightningBolt_Vert.js"},{"deps":{"../Shaders/ccShader_Default_Vert.js":39,"../Shaders/ccShader_Default_Vert_noMVP.js":47,"../Shaders/ccShader_LightEffect_Frag.js":71},"path":"preview-scripts/assets/Script/LightEffet.js"}];
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
    