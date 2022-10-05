require('./libs/wrapper/builtin/index');
window.DOMParser = require('./libs/common/xmldom/dom-parser').DOMParser;
require('./libs/common/engine3d/globalAdapter/index');
require('./libs/wrapper/unify');
require('./libs/wrapper/systemInfo');
require('./libs/wrapper/fs-utils');


// Polyfills bundle.
require("src/polyfills.bundle.js");

// SystemJS support.
require("src/system.bundle.js");


// Adapt for IOS, swap if opposite
if (canvas){
    var _w = canvas.width;
    var _h = canvas.height;
    if (screen.width < screen.height) {
        if (canvas.width > canvas.height) {
            _w = canvas.height;
            _h = canvas.width;
        }
    } else {
        if (canvas.width < canvas.height) {
            _w = canvas.height;
            _h = canvas.width;
        }
    }
    canvas.width = _w;
    canvas.height = _h;
}
// Adjust initial canvas size
if (canvas && window.devicePixelRatio >= 2) {canvas.width *= 2; canvas.height *= 2;}

const importMap = require("src/import-map.js").default;
System.warmup({
    importMap,
    importMapUrl: 'src/import-map.js',
    defaultHandler: (urlNoSchema) => {
        require('.' + urlNoSchema);
    },
    handlers: {
        'plugin:': (urlNoSchema) => {
            requirePlugin(urlNoSchema);
        },
    },
});

// In wechat, the WebAssembly.instantiate recive file path.
function loadAmmoJsWasmBinary() {
    return 'cocos-js/ammo.wasm.wasm';
}

window.__globalAdapter.init(function() {
    System.import('./application.js').then(({ createApplication }) => {
        return createApplication({
            loadJsListFile: (url) => require(url),
            loadAmmoJsWasmBinary,
        });
    }).then((application) => {
        return onApplicationCreated(application);
    }).catch((err) => {
        console.error(err);
    });
});

function onApplicationCreated(application) {
    return application.import('cc').then((cc) => {
        require('./libs/common/engine3d/index.js');
        require('./libs/common/cache-manager.js');
        // Adjust devicePixelRatio
        cc.view._maxPixelRatio = 4;
        // downloader polyfill

        require('./libs/wrapper/engine/index');
        // Release Image objects after uploaded gl texture
        cc.macro.CLEANUP_IMAGE_CACHE = false;
        return application.start({
            findCanvas: () => {
                var container = document.createElement('div');
                return { frame: container, canvas: window.canvas, container };
            },
        });
    });
}
