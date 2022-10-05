(function t(e, n, x) {
function i(c, o) {
if (!n[c]) {
if (!e[c]) {
var u = "function" == typeof require && require;
if (!o && u) return u(c, !0);
if (r) return r(c, !0);
throw new Error("Cannot find module '" + c + "'");
}
var a = n[c] = {
exports: {}
};
e[c][0].call(a.exports, function(t) {
return i(e[c][1][t] || t);
}, a, a.exports, t, e, n, x);
}
return n[c].exports;
}
for (var r = "function" == typeof require && require, c = 0; c < x.length; c++) i(x[c]);
return i;
})({
1: [ function() {
var t, e, n = [ "HFMXV", "GpHFw", "factory", "executeLoadBundle", "checkRepeatTheName", "executeMainLoadOutSideBundle", "Wqhsa", "wJepg", "REbAR", " 此(次資源)已載入過了,或名稱重複,請檢察", "LoadTypeHandler", "10|3|5|14|8|15|9|16|0|6|7|12|13|1|2|4|17|11", "4|1|0|3|2", "如果拿取該資源進度,請勿重複callback", "如果拿取總進度,請勿在之前資源尚未加載完前,重複callback", "awYvS", "wQriH", "LraCV", "MPZIT", "FSUhT", "_prefabRes", "count", "loadTypeHandler", "_initialLoadState", "_spineRes", "_scriptRes", "_sceneRes", "_secondaryLoadState", "_imgRes", "allProgressEndCount", "loadMgr", "onlyResEventCallback", "allProgress", "bRiDs", "uthpV", "RwBYR", "XGuqp", "PHivM", "kTsOj", "loadAsset", "PBXzZ", "mtfMP", "OoXRJ", "MOnIH", "loadMainOutSideAsset", "isLanguageUsed", "then", "loadOutSideAsset", "assetMode", "callback", "rYaEd", "Qfaqi", "getLoadState", "dhdKg", "loadExternalScript", "kMsPx", "remove", "QbRsn", "JrXcr", "_readFileRes", "Gtgzj", "_musicRes", "lsaDv", "_scriptLoadState", "STOP", "PLAYING", "PAUSE", "volume", "loop", " 無此資源,請檢察資源類 musicRes內的資源是否錯誤", "WadPl", "NGhDy", "Ooegm", "play", "yMuKE", "getState", "musicID", "LqMGI", "hJWaq", "znaUR", "audioEngine", "resume", "EQfyF", "setVolume", "stop", "pause", "ibfMN", "AudioState", "MusicController", "2|0|10|7|12|4|3|8|1|11|5|6|9", "effectID", "oMyqK", "LtGnM", "aymNm", "Qspqi", "playEffect", "iULQR", "qrhIr", "stopAll", "AlMCf", "keys", "EffectController", "11|4|7|9|5|12|3|6|1|8|2|10|0", "1|0|5|3|2|6|7|4", "canSuperimpose", "6|1|0|4|3|5|2", "KPFSD", "musicData", "musicController", "effectOnMute", "effectData", "effectVolume", "effectController", "audioManager", "musicOnMute", "initializeData", "bghTB", "tCSHh", "effectNormalData", "musicNormalData", "UGupb", "settingMusic", "DiLnL", "hTwFt", "EYnTk", "settingEffect", "musicPlay", "effectPlay", "musicStop", "musicPause", "effectStop", "getMusicState", "getEffectState", "AudioFactory", " 使用疊加效果時不建議使用循環撥放", "_musicOnMute", "audioMgr", "effectStopAll", "updateEffectOnMute", "_effectOnMute", "updateMusicOnMute", "lEzdo", "OKMGN", "enumerable", "Music", "SVaMt", "MusicStop", "ZvbVD", "forEach", "jkPHC", "dwhIu", "cqOEZ", "EffectStop", "2|3|0|6|1|5|7|4", "微軟正黑體", "Arial Unicode MS,Arial", "KXyOm", "eZEju", "dyZEn", "0|4|2|1|3|5", "allLanguageLabel", "initDefaultStyle", "_nowLang", "languageMgr", "sNGEW", "_style", "AMERICA", "INDIA", "TAIWAN", "INDONESIA", "addStyle", "updateLanguage", "SlySv", "updateText", "updateStyle", "languageCache", "getLanguage", "getText", "getAllText", "reTakeLanguageBuffer", "window.language_Mode 查找不到該語系", "_nowLanguageLabels", "lineHeight", "fontSize", "JgbMS", "fontFamily", " :  該key尚未加入推撥事件中,你需先執行 setNotification(type:IBaseNotification)方法", "notificationToMap", "setNotification", "BkMNp", "getAllNotifications", "syoTh", "pool", "NodePool", "prefab", "KCyJU", "getNode", "put", "getName", "CBYHe", "CCNodePool", "dKeZn", "zNGOs", "getPool", "zCkXJ", "PIzuJ", "list", "stopAllActions", "SelfPool", "pools", "nameMap", "NREjw", "clearAll", "configMgr", "nodePoolMgr", "NodePoolManager", "notificationMgr", "fcc", "1.0.1", "isExecutingState", "stateHandler", "StateHandler", "initialState", "initStateAction", "changeState", "previousMoveState", "getCurrentStateContent", "getAllProcess", "getCurrentState", "getPreviousState", "getStateRecord", "isExecution", "cLRUn", "ZzWrN", "builder", "FSMManager", "FSMState", "無法跳轉至該流程 : ", "currentState", "aDadN", "fNZdX", " 當前狀態能跳轉的流程 : ", "_nextState", "xtFXA", "zcCpw", "BWIvb", "_currentState", "ProcessTransition", "添加重複流程 : ", "setMaxStateRecordCount", "setState", "jiQFv", "添加的狀態名稱重複,請更換狀態名稱 : ", "stateActionContainer", "build", "HrjBP", "processContainer", "stateRecorder", "StatusRecorder", "maxStateRecordCount", "StateBuilder", "當前狀態不存在 : ", "當前無使用任何狀態,回傳為NULL", "流程尚未結束,請先釋放流程", "你尚未初始預設狀態 : 請先執行 initialState()", "Qbami", "updateStateRecord", "onExecution", "vNuNr", "JNKHx", "ZXUFo", "values", "onCreate", "KFbvl", "canReachNext", "updatePreviousState", "HnlGn", "clearStateRecord", "clearRecord", "resolve", "已經無法在返回上一個狀態", "kHzHj", "VgoNR", "zfNct", "record", "maxRecordCount", "statePointer", "previousState", "JPUZZ", "fkGZS", "getNowStateRecords", "addButtonEvent", "getClassName", "Component", "EventHandler", "component", "fLzkf", "clickEvents", "disableButton", "enableButton", "addTouchStartEvent", "Node", "EventType", "TOUCH_START", "offTouchStartEvent", "oDmzZ", "ZCIUk", "JMsyT", "getNodeOneChildren", "childrenCount", "children", "getNodeTowChildren", "VHxdL", "MTegv", "lXECK", "UCWwU", "mNUas", "buffList", "key", "mSBUI", "kVTSL", "destroy", "qwWXR", "map", "ObjectPool", "PoolManager", "BHEZY", "FYRfu", "className", "TkNyv", "shift", "TSObjectPool", "init", "fsHqF", "TSPoolManager", "CAN_PLAY_GAME", "GET_GAME_HISTORY_RESULT", "GET_HISTORY_DETAIL_RESULT", "TABLE_INFO", "lLKKB", "xLLle", "QKewg", "FPqoe", "WARNING", "RDOAa", "FREE_SPIN_RESULT", "TuQNs", "BUoZX", "xMmfn", "SGJwS", "ServerEventType", "3|0|1|4|2", "grid", "oKqTv", "getSpriteFrames", "MIUhk", "replace", "PaFRy", "MJtOf", "IIfKl", "_callFun", "HzIjP", "eDLCs", "hKRDb", "slotGridHeight", "slotTurnCount", "resultModel", "sineInEasing", "lookAtSpeed", "lookAtTime", "HNhIp", "yNMdd", "TyZqF", "OQqUY", "WzkLn", "Gxvig", "bGSzB", "_slotStyleManager", "setTag", "_tag", "_slotTurnCount", "setSlotGridHeight", "_slotGridHeight", "setSlotGirdSpeed", "_slotGirdSpeed", "_speedUpMultiple", "_stopNowSpeedMultiple", "setColumnIntervalTime", "_columnIntervalTime", "setSlotColumnToTween", "_slotColumnToTween", "setGridNodeToMap", "setSineInEasing", "_sineInEasing", "setSineOutEasing", "_sineOutEasing", "setLookAtSpeed", "setLookAtTime", "_lookAtTime", "_resultModel", "complete", "columnIntervalTime", "gridNodeToMap", "_gridNodeToMap", "slotColumnToTween", "slotGirdSpeed", "qzffq", "uwxNN", "_slotRowGridCount", "speedUpMultiple", "pNvVv", "slotStyleManager", "sineOutEasing", "ucogs", "_lookAtSpeed", "qKCZp", "ABaseSlotSetting", "gridImg", "VxKgK", "fbFMk", "_gridImg", "setGirdSpriteToMap", "_gridSpriteToMap", "gridSpriteToMap", "setResultModel", "alGDp", "obSzd", "setSymbolBlurImg", "_symbolBlurImg", "symbolBlurImg", "NormalSetting", "NormalBlurImageSetting", "4|0|1|3|2", "function", "xIXBq", "call", "RFPQx", "wJMjB", "next", "done", "push", "value", "Nhkja", "error", "IBcYL", "LQTJx", "iterator", "KQAvu", "__awaiter", "throw", "cnkWI", "IIONQ", "VWCbl", "AgqBz", "oigaf", "apply", "__generator", "return", "jscEg", "RHWpc", "phHET", "fQrCe", "eaVtQ", "KnTAP", "bbIkX", "label", "ops", "trys", "pop", "length", "TEzUv", "mTopJ", "phqli", "qWDJK", "rWQyM", "__extends", " is not a constructor or null", "setPrototypeOf", "Jnqsz", "__proto__", "prototype", "hasOwnProperty", "uPzNb", "iAGoe", "kiRkn", "QWuIL", "whMFq", "XzuAv", "OsQNC", "MMKMo", "constructor", "create", "__values", "number", "Object is not iterable.", "Symbol.iterator is not defined.", "ZBkRU", "split", "CerqZ", "FvJbp", "NPmzC", "ErscT", "TYPE_FW", "IS_RUNNING_FW", "加載的資源有問題", "Animation 類中方法有錯誤 : ", "WebRequest 類有錯誤 : ", "PROCESS_FW", "LISTENER_FW", "Event 類有錯誤 :", "SLOT_STYLE_FW", "SlotStyleFW類有錯誤 :", "TEMPLATE_FW", "模板類有錯誤 :", "cdpIn", "SDcct", "遊戲正在執行中,請勿重複呼叫", "MBFCF", "ZtMKR", "AUDIO_FW", "gcMhG", "UyvGl", "aWEvU", "VTcAy", "VqbZy", "pqQOV", "UNDEFINED_FW", "變數為undefined,流程無法繼續", "LOAD_FW", "oTyTM", "JvMOB", "WebResponse 類有錯誤 : ", "AUDIO 類有錯誤 :", "SCENE_FW", "Scene 類有錯誤 :", "KtPhC", "process 類有錯誤 :", "dMDXe", "WshAQ", "SmYVc", "zGuWC", "MOfMd", "ErrorType", "type", "BCZun", "例外錯誤 : ", "configManager", "checkErrorType", "ehxmG", "Foqgg", "xfhVE", "lXaVh", "MNqYi", "ANIMATION_FW", "fPYka", "LPOUz", "WEB_REQUEST_FW", "warn", "WEB_RESPONSE_FW", "mthkJ", "aAzZZ", "unknownError", "log", "有例外錯誤,但你未開啟框架Debug,無法查看", "foSrb", "string", "FrameWorkError", "CWyGf", "frameWorkError", "checkObjectType", "uSKtZ", "該物件為null", "ObjectError", "11|3|8|13|4|9|5|7|6|10|1|12|0|2", "aUlWS", "rmLxP", "timeOut", "errorManager", "nXxaF", "errorButton", "active", "errorButtonLabel", "isShowBackHomeButton", "errorNode", "set", "KVDtZ", "getComponent", "Button", "interactable", "start", "ErrorManager", "EsdXH", "executeError", "reMWR", "DqoHX", "errorLabel", "ErrorManager errorLabel為空", "Tween", "stopAllByTarget", "closeButton", "errorState", "ServerError", "ErrorManager warningNode為空", "timeout", "6|1|5|3|0|4|2|7|9|8", "BBvwz", "當前DelayTime = 0 : 請給予值", "HPWlB", "qPmqx", "warningNode", "warningLabel", "BegaQ", "warningState", "omuAu", "warningDelayTime", "WarningError", "objectError", "serverError", "warningError", "checkServerError", "showError", "checkWarning", "ErrorHandler", "errorDelayTime", "6|1|5|8|7|4|3|0|2", "_warningState", "_isShowBackHomeButton", "backHomeURL", "trim", "_errorState", "_errorNode", "handler", "_errorDelayTime", "_errorLabel", "setInstance", "_instance", "errorMgr", "defineProperty", "instance", "setErrorLabel", "setErrorButton", "_errorButton", "_closeButton", "setErrorDelayTime", "setWarningDelayTime", "setWarningNode", "_warningNode", "setWarningLabel", "_warningLabel", "setErrorButtonLabel", "WWVBe", "uuHBI", "jOEjn", "oxzSg", "cNqUL", "hoJJp", "GtFTF", "_errorButtonLabel", "rYeWT", "CLEAR_TO_REPLAY", "NOT_PLAYING", "SUPERIMPOSE", "BKmfE", "DZMaL", "UJHbz", "ZbuCh", "TKugn", "BppzD", "AudioStateType", "TKtGW", "asPQV", "MUPNA", "mNaHc", "LpYSk", "buQSR", "wpBNB", "soCIU", "tKJGp", "HDGKO", "AsjhV", "nQcLh", "roundOff", "round", "BWkbG", "pow", "ocxOY", "dbVJg", "roundDown", "wGCkk", "floor", "rlYCi", "pKbNN", "sJHik", "roundUp", "ceil", "ypBgS", "decimalsCount", "Emkbt", "KmpBk", "indexOf", "FFfjd", "NBJlJ", "numberFormat", "mwwsQ", "XWJxC", "formatting", "Util", "IMG", "MUSIC", "SCENE", "SCRIPT", "SPINE", "HaFJQ", "kmBlC", "TEXT", "XPtsP", "1|2|0|3|5|4|7|8|6", "VVcMN", "IMG_ATLAS", "urgkJ", "GkSdO", "LoadType", "RESOURCES", "IN_SIDE_BUNDLE", "OUT_SIDE_MAIN_ASSET", "OUT_SIDE_ASSET", "EMaoQ", "aVhgC", "lVuly", "NlMLS", "xreBM", "htBIo", "SVnZR", "ZwWmo", "ASSET_MODE", "severEvent", "_eventCount", "_eventsCurrentlyBeing", "target", "EventTarget", "該類尚未實例化", "emitEvent", "zsBGm", "Dfuwv", "eventListener", "xrkcz", "once", "off", "hasListening", "hasEventListener", "eventCount", "AUTO", "HORIZONTAL", "fMONB", "BuHbh", "jEfnC", "CQEjf", "eYErZ", "VERTICAL", "SceneStyleType", "LANDSCAPE", "UAgeV", "lckkz", "SceneDirectionType", "pOWJt", "正在UpdateScene中 請稍後......", "_isCanUpdateScene", "sceneManager", "designSceneEventListener", "addEventListener", "resize", "FNxBx", "makeDesignScene", "sent", "rcZAA", "updateSize", "isFrameworkDebug", "jEnPe", "SceneSizeChangeListener", "DtQpg", " 該IBaseObserver已註冊過自動狀態改變時事件,請檢查", "observer", "subscribe", "has", "FnZOR", "isPermanent", "add", "delete", " : 該觀察類尚未綁定過,無須移除觀察對象", "removeAll", "clear", "getSubscribeCount", "size", "getAllSubscribe", "ABS", "AUTO_CHANGE", "SPEED_CHANGE", "USER_MONEY_CHANGE", "USER_BET_CHANGE", "USER_GET_WIN", "RESPONSE_RESULT", "SCROLL_FOCUS_STATE", "SLOT_ROW_END", "STOP_NOW", "nnVpf", "vhpZe", "gflIr", "bZqAH", "SCENE_DIRECTION_CHANGE", "PBwZR", "ATHkB", "UZyda", "WnTDl", "_isPermanent", "self", "pushNotification", "callFun", "SceneDirectionChangeObserver", "TAG_NAME", "notify", "lEMrn", "ABaseNotification", "SceneDirectionChangeNotification", "fWhZP", "VPWot", "NotificationManager", "hasNotification", "NotificationType", "你尚未綁定當遊戲方向更動時的推播事件,因此不會觸發方向改變的推播事件", "executionStyle", "updateSceneDirection", "UtJZs", "view", "width", "getFrameSize", "height", "ekabl", "Byqgu", "setDesignResolutionSize", "ResolutionPolicy", "pZhjX", "hyeZB", "FIXED_WIDTH", "pwKnh", "JHMlA", "MEuAJ", "sceneDirection", "PORTRAIT", "getNotification", "MzJkL", "eventLock", "LdQHD", "Canvas", "10|6|11|5|2|4|9|7|3|8|0|1", "node", "YrSwP", "Rgtte", "fitHeight", "fitWidth", "QRlGw", "xlKZM", "curDR", "designResolution", "find", "yMriP", "HorizontalStyle", "尚未完成直向是配模式", "UBrAR", "bRJaL", "autoStyle", "AutoStyle", "horizontalStyle", "verticalStyle", "VerticalStyle", "SceneStyleHandler", "該更新模式尚未包含在框架中,請確認是否有實作ISceneStyle", "_designHeight", "sceneSizeChangeListener", "sceneStyleHandler", "style", "ErBZo", "setDesignWidth", "_designWidth", "_sceneDirection", "vcRGW", "getStyle", "startListener", "changeScene", "sceneRes", "runScene", "LoadResManager", "get", "removeScene", "Slot Template 未賦予,需實做一個SlotTemplate", "_slot", "_slotStyle", "slotStyleMgr", "oxFtG", "nPclJ", "setSlotStyle", "template", "KPIvQ", "tag", "slot", "slotStyle", "SlotStyleManager", "2|3|7|6|5|8|1|4|0|9", "INR", "CHINESE", "CNY", "JAPAN", "USD", "THAILAND", "THB", "IDR", "MYR", "xNPSr", "KOREA", "UwMqI", "veZvX", "NTD", "nMxwJ", "RsLrz", "wcLNf", "JPY", "VIETNAM", "wrWau", "ZejDE", "rRTGk", "IbvqQ", "MALAYSIA", "LanguageType", "AUTO_500", "AUTO_1000", "4|5|3|2|0|1", "mAhQe", "AUTO_100", "HZLkz", "uvvfh", "dgVeL", "AkHJk", "THtpW", "rAKvc", "AutoType", "_resetDebugSetting", "externallyLoadURL", "isAuto", "autoCount", "isSpeedUp", "language", "isEffectOnMute", "isMusicOnMute", "cocosDebugSetting", "ZZMmu", "hGhea", "LCuBx", "_backHomeURL", "_cocosDebugSetting", "debug", "INFO", "_isMusicOnMute", "_isAuto", "_isSpeedUp", "_gameNumber", "_musicVolume", "_language", "_isFrameworkDebug", "setGameNumber", "setEffectVolume", "_effectVolume", "setMusicOnMute", "setEffectOnMute", "_isEffectOnMute", "setExternallyLoadURL", "_externallyLoadURL", "setLanguage", "setAutoState", "setSpeedState", "setFrameWorkDebug", "setCocosDebug", "setBackHomeURL", "AudioManager", "LanguageManager", "SceneManager", "zwGHW", "vMtfb", "WjIJC", "_autoCount", "gheAB", "musicVolume", "hcofl", "nezFd", "ofYOx", "YFrDc", "SlotConfigManager", "scriptName", "url", "head", "getElementsByTagName", "ALoadScriptType", "link", ".css", "請勿重複加載已有的外部腳本 : ", "LVWes", "akZHY", "sOSlT", "IdSqx", "createElement", "loadScript", "linkElem", "onerror", "appendChild", "ktTtj", "gKVrV", "fRQvW", "ydwHx", "parameter", "BuKTp", "scriptRes", "loadScriptEventCallback", "stylesheet", "YhXLS", "nGsfN", "OuCaY", "JKefW", "iNfDf", "pXKVc", "YsHFO", "gdNqu", "onload", "YXnjQ", "zKaoH", "dHtAD", "ScriptLoad", "無載入任何資源 ", "Tpbir", "5|2|4|3|0|1|6", "SqqsU", "BchLB", "hAWli", "EovVr", "vbACF", "isMainLoad", "beforeProgress", "folder", "dataName", "ccType", "assetBundle", "assetManager", "getBundle", "loadResources", "SceneAsset", "loadDir", "loadResProgress", "bind", "loadScene", "loadResCallBack", "kFMZx", "UujWK", "aIUlA", "Rrgov", "global", "updateManagerState", "LzUQF", "initialLoadState", "loadMainEventCallback", "loadSecondaryEventCallback", "continueLoad", "currentLoadOrder", "KoAcu", "secondaryLoadState", "ALoadType", "1|0|4|2|3", "yDRxQ", "kFoTH", "setResToManager", "AZcbl", "updateProgressEnd", "name", "ImgLoad", " 鍵值重複,請檢查該音樂資源是否已加載過", "xhKpU", "musicRes", "DjFhl", "MusicLoad", "vQKoV", "ORoVt", "prefabRes", "PrefabLoad", " 鍵值重複,請檢查該資源是否已加載過", "VAIRZ", "dtMDm", "cYWDX", "FPBQQ", " spine動畫取number有誤,請檢查該spine Animation是否有重複數字情況", "IpAkd", "spineRes", "DocSj", "match", "jWQRC", "skeletonJson", "animations", "GnrOO", "KqPZt", "YOFtK", "SpineLoad", "rkDYp", "ayRCf", "rBbfr", "rGFjE", "readFileRes", "TextLoad", "secondaryRes", "resources", "text/css", "text/javascript", "LoadType 無法偵測", "資源類型錯誤,尚無此類型載入方法", "ztWMv", "EtbXH", "FXFvX", "GMrbl", "KdIkv", "ynrHJ", "loadResManager", "QJJpi", "assetBundles", "version", "loadBundle", "bundleURL", "bundleName", "loadInSideBundle", "QHXXs", "QFEhg", "executeLoad", "checkLoadType", "FsToI", "ZgYpA", "executeLoadOutSideBundle", "CbAdF", "zBnwB", "loadOutSideBundle", "loadType", "iuXVL", "SpriteAtlas", "ImgAtlasLoad", "AudioClip", "PREFAB", "Prefab", "SkeletonData", "SceneLoad", "TextAsset", "WJVbM", "executeLoadExternalScript", "CSS", "CSSLoad" ];
t = n, e = 432, function(e) {
for (;--e; ) t.push(t.shift());
}(++e);
var x, i, r, c, o, u, a, s, f, h, l, b, d, p, g, y, S, v, m, E, M, w, T, L, A, R, N, O, k, _, C, B, P, I, F, D, j, U, H, W, Z, z, G, V, K, Q, J, q, X, Y, $, tt, et, nt, xt, it, rt, ct, ot, ut, at, st, ft, ht, lt, bt, dt, pt, gt, yt, St, vt, mt, Et, Mt, wt, Tt, Lt, At, Rt, Nt, Ot, kt, _t, Ct, Bt, Pt, It, Ft, Dt, jt, Ut, Ht, Wt, Zt, zt, Gt, Vt, Kt, Qt, Jt, qt, Xt, Yt, $t, te, ee, ne, xe, ie, re, ce, oe, ue, ae, se, fe, he, le, be, de, pe, ge, ye, Se, ve, me, Ee, Me, we, Te, Le, Ae, Re, Ne, Oe, ke, _e, Ce, Be, Pe, Ie, Fe, De, je, Ue, He, We, Ze, ze, Ge, Ve, Ke, Qe, Je, qe, Xe, Ye, $e, tn, en, nn, xn, rn, cn, on, un, an, sn, fn, hn, ln, bn, dn, pn, gn, yn, Sn, vn, mn, En, Mn, wn, Tn, Ln, An, Rn, Nn, On, kn, _n, Cn, Bn, Pn, In, Fn, Dn, jn, Un, Hn, Wn, Zn, zn, Gn, Vn, Kn, Qn, Jn, qn, Xn, Yn, $n, tx, ex, nx, xx, ix, rx, cx, ox, ux, ax, sx, fx, hx = function(t) {
return n[t -= 0];
}, lx = this && this.__read || function(t, e) {
for (var n = {
xIXBq: hx("0x0"),
RFPQx: function(t, e) {
return t === e;
},
wJMjB: function(t, e) {
return t > e;
},
Nhkja: "return",
IBcYL: function(t, e) {
return t === e;
},
LQTJx: hx("0x1")
}, x = n[hx("0x2")].split("|"), i = 0; ;) {
switch (x[i++]) {
case "0":
if (!a) return t;
continue;

case "1":
var r, c, o = a[hx("0x3")](t), u = [];
continue;

case "2":
return u;

case "3":
try {
for (;(n[hx("0x4")](e, void 0) || n[hx("0x5")](e--, 0)) && !(r = o[hx("0x6")]())[hx("0x7")]; ) u[hx("0x8")](r[hx("0x9")]);
} catch (t) {
c = {
error: t
};
} finally {
try {
r && !r[hx("0x7")] && (a = o[n[hx("0xa")]]) && a[hx("0x3")](o);
} finally {
if (c) throw c[hx("0xb")];
}
}
continue;

case "4":
var a = n[hx("0xc")](typeof Symbol, n[hx("0xd")]) && t[Symbol[hx("0xe")]];
continue;
}
break;
}
}, bx = this && this.__spreadArray || function(t, e) {
for (var n = {
KQAvu: function(t, e) {
return t < e;
}
}, x = 0, i = e.length, r = t.length; n[hx("0xf")](x, i); x++, r++) t[r] = e[x];
return t;
}, dx = this && this[hx("0x10")] || function(t, e, n, x) {
var i = {
cnkWI: function(t, e) {
return t(e);
},
IIONQ: function(t, e) {
return t instanceof e;
},
AgqBz: function(t, e) {
return t(e);
},
UwSgk: hx("0x11")
};
function r(t) {
var e = {
VWCbl: function(t, e) {
return i[hx("0x12")](t, e);
}
};
return i[hx("0x13")](t, n) ? t : new n(function(n) {
e[hx("0x14")](n, t);
});
}
return new (n || (n = Promise))(function(n, c) {
var o = {
oigaf: function(t, e) {
return i.AgqBz(t, e);
}
};
function u(t) {
try {
s(x.next(t));
} catch (t) {
i[hx("0x15")](c, t);
}
}
function a(t) {
try {
s(x[i.UwSgk](t));
} catch (t) {
c(t);
}
}
function s(t) {
t[hx("0x7")] ? o[hx("0x16")](n, t[hx("0x9")]) : o[hx("0x16")](r, t[hx("0x9")]).then(u, a);
}
s((x = x[hx("0x17")](t, e || [])).next());
});
}, px = this && this[hx("0x18")] || function(t, e) {
var n, x, i, r, c = {
kxHuw: function(t, e) {
return t(e);
},
fQrCe: "Generator is already executing.",
eaVtQ: hx("0x19"),
KnTAP: hx("0x11"),
bbIkX: function(t, e) {
return t & e;
},
NEvBQ: function(t, e) {
return t > e;
},
TEzUv: function(t, e) {
return t === e;
},
mTopJ: function(t, e) {
return t === e;
},
fAyen: function(t, e) {
return t === e;
},
phqli: function(t, e) {
return t > e;
},
qWDJK: function(t, e) {
return t < e;
},
rWQyM: function(t, e) {
return t & e;
},
jscEg: function(t, e) {
return t(e);
},
RHWpc: function(t, e) {
return t === e;
},
phHET: "function"
}, o = {
label: 0,
sent: function() {
if (1 & i[0]) throw i[1];
return i[1];
},
trys: [],
ops: []
};
return r = {
next: c.jscEg(u, 0),
throw: c[hx("0x1a")](u, 1),
return: u(2)
}, c[hx("0x1b")](typeof Symbol, c[hx("0x1c")]) && (r[Symbol[hx("0xe")]] = function() {
return this;
}), r;
function u(t) {
return function(e) {
return c.kxHuw(a, [ t, e ]);
};
}
function a(r) {
if (n) throw new TypeError(c[hx("0x1d")]);
for (;o; ) try {
if (n = 1, x && (i = 2 & r[0] ? x[c[hx("0x1e")]] : r[0] ? x[c[hx("0x1f")]] || ((i = x[c.eaVtQ]) && i[hx("0x3")](x), 
0) : x[hx("0x6")]) && !(i = i[hx("0x3")](x, r[1]))[hx("0x7")]) return i;
(x = 0, i) && (r = [ c[hx("0x20")](r[0], 2), i.value ]);
switch (r[0]) {
case 0:
case 1:
i = r;
break;

case 4:
o[hx("0x21")]++;
return {
value: r[1],
done: !1
};

case 5:
o.label++;
x = r[1];
r = [ 0 ];
continue;

case 7:
r = o[hx("0x22")].pop();
o[hx("0x23")][hx("0x24")]();
continue;

default:
if (!(i = o[hx("0x23")], i = c.NEvBQ(i[hx("0x25")], 0) && i[i.length - 1]) && (c[hx("0x26")](r[0], 6) || c[hx("0x27")](r[0], 2))) {
o = 0;
continue;
}
if (c.fAyen(r[0], 3) && (!i || c[hx("0x28")](r[1], i[0]) && c[hx("0x29")](r[1], i[3]))) {
o[hx("0x21")] = r[1];
break;
}
if (6 === r[0] && c[hx("0x29")](o[hx("0x21")], i[1])) {
o.label = i[1];
i = r;
break;
}
if (i && c[hx("0x29")](o[hx("0x21")], i[2])) {
o[hx("0x21")] = i[2];
o[hx("0x22")][hx("0x8")](r);
break;
}
i[2] && o[hx("0x22")][hx("0x24")]();
o[hx("0x23")][hx("0x24")]();
continue;
}
r = e[hx("0x3")](t, o);
} catch (t) {
r = [ 6, t ];
x = 0;
} finally {
n = i = 0;
}
if (c[hx("0x2a")](r[0], 5)) throw r[1];
return {
value: r[0] ? r[1] : void 0,
done: !0
};
}
}, gx = this && this[hx("0x2b")] || (x = {
Jnqsz: function(t, e) {
return t instanceof e;
},
uPzNb: function(t, e, n) {
return t(e, n);
},
iAGoe: function(t, e) {
return t !== e;
},
JCaZX: hx("0x1"),
kiRkn: function(t, e) {
return t !== e;
},
QWuIL: function(t, e) {
return t + e;
},
whMFq: function(t, e) {
return t + e;
},
XzuAv: "Class extends value ",
OsQNC: function(t, e) {
return t(e);
},
MMKMo: hx("0x2c"),
Mcofa: function(t, e) {
return t === e;
}
}, i = function(t, e) {
i = Object[hx("0x2d")] || x[hx("0x2e")]({
__proto__: []
}, Array) && function(t, e) {
t[hx("0x2f")] = e;
} || function(t, e) {
for (var n in e) Object[hx("0x30")][hx("0x31")][hx("0x3")](e, n) && (t[n] = e[n]);
};
return x[hx("0x32")](i, t, e);
}, function(t, e) {
if (x[hx("0x33")](typeof e, x.JCaZX) && x[hx("0x34")](e, null)) throw new TypeError(x[hx("0x35")](x[hx("0x36")](x[hx("0x37")], x[hx("0x38")](String, e)), x[hx("0x39")]));
i(t, e);
function n() {
this[hx("0x3a")] = t;
}
t.prototype = x.Mcofa(e, null) ? Object[hx("0x3b")](e) : (n[hx("0x30")] = e.prototype, 
new n());
}), yx = this && this[hx("0x3c")] || function(t) {
for (var e = {
ZBkRU: "4|0|1|2|3",
CerqZ: function(t, e) {
return t === e;
},
FvJbp: hx("0x3d"),
NPmzC: hx("0x3e"),
ErscT: hx("0x3f"),
BYMgY: function(t, e) {
return t >= e;
}
}, n = e[hx("0x40")][hx("0x41")]("|"), x = 0; ;) {
switch (n[x++]) {
case "0":
var i = e[hx("0x42")](typeof Symbol, hx("0x1")) && Symbol.iterator, r = i && t[i], c = 0;
continue;

case "1":
if (r) return r[hx("0x3")](t);
continue;

case "2":
if (t && typeof t[hx("0x25")] === e[hx("0x43")]) return {
next: function() {
t && o.StScj(c, t[hx("0x25")]) && (t = void 0);
return {
value: t && t[c++],
done: !t
};
}
};
continue;

case "3":
throw new TypeError(i ? e[hx("0x44")] : e[hx("0x45")]);

case "4":
var o = {
StScj: function(t, n) {
return e.BYMgY(t, n);
}
};
continue;
}
break;
}
};
o = ux || (ux = {}), u = {
DUmTt: hx("0x46"),
cdpIn: "傳入的Type 錯誤 ,請檢察該Type是否非FarmWork內的Type",
SDcct: hx("0x47"),
ODDwm: hx("0x48"),
mlXmH: "ANIMATION_FW",
MBFCF: hx("0x49"),
ZtMKR: hx("0x4a"),
JEfYT: hx("0x4b"),
gcMhG: hx("0x4c"),
FruyU: hx("0x4d"),
UyvGl: hx("0x4e"),
aWEvU: hx("0x4f"),
VTcAy: hx("0x50"),
VoNji: hx("0x51")
}, r = o[hx("0x6f")] || (o.type = {}), c = {
VqbZy: u.DUmTt,
lUiBX: u[hx("0x52")],
pqQOV: u[hx("0x53")],
UifYW: hx("0x54"),
ZZjHQ: u.ODDwm,
IycBL: u.mlXmH,
oTyTM: u[hx("0x55")],
JvMOB: "WEB_REQUEST_FW",
NJtUL: u[hx("0x56")],
poPfc: "WEB_RESPONSE_FW",
YVEnj: hx("0x57"),
KtPhC: u.JEfYT,
dMDXe: u[hx("0x58")],
WshAQ: u.FruyU,
SmYVc: u[hx("0x59")],
QlJFc: u[hx("0x5a")],
zGuWC: u[hx("0x5b")],
MOfMd: u.VoNji
}, function(t) {
t[c[hx("0x5c")]] = c.lUiBX;
t[c[hx("0x5d")]] = c.UifYW;
t[hx("0x5e")] = hx("0x5f");
t[hx("0x60")] = c.ZZjHQ;
t[c.IycBL] = c[hx("0x61")];
t[c[hx("0x62")]] = c.NJtUL;
t[c.poPfc] = hx("0x63");
t[c.YVEnj] = hx("0x64");
t[hx("0x65")] = hx("0x66");
t[c[hx("0x67")]] = hx("0x68");
t[c[hx("0x69")]] = c[hx("0x6a")];
t[c[hx("0x6b")]] = c.QlJFc;
t[c[hx("0x6c")]] = c[hx("0x6d")];
}(r[hx("0x6e")] || (r.ErrorType = {}));
a = ux || (ux = {}), s = {
BCZun: function(t, e) {
return t + e;
}
}, f = function() {
var t = {
ehxmG: function(t, e) {
return s[hx("0x70")](t, e);
},
Foqgg: hx("0x71")
};
function e(t) {
this[hx("0x72")] = t;
}
e.prototype[hx("0x73")] = function(e) {
throw new Error(t[hx("0x74")](t[hx("0x75")], e));
};
return e;
}(), a.UnknownError = f;
h = ux || (ux = {}), l = {
xfhVE: function(t, e) {
return t + e;
},
lXaVh: function(t, e) {
return t + e;
},
MNqYi: function(t, e) {
return t + e;
},
fPYka: function(t, e) {
return t + e;
},
LPOUz: function(t, e) {
return t + e;
},
mthkJ: function(t, e) {
return t + e;
},
aAzZZ: function(t, e) {
return t + e;
}
}, b = function() {
function t(t) {
this.unknownError = new h.UnknownError(t);
this[hx("0x72")] = t;
}
t[hx("0x30")][hx("0x73")] = function(t, e) {
if (this[hx("0x72")].isFrameworkDebug) switch (t) {
case h[hx("0x6f")][hx("0x6e")][hx("0x47")]:
throw new Error(l[hx("0x76")](l.lXaVh(h[hx("0x6f")][hx("0x6e")][hx("0x47")], " "), e));

case h[hx("0x6f")].ErrorType[hx("0x5e")]:
throw new Error(l[hx("0x77")](l[hx("0x78")](h[hx("0x6f")].ErrorType[hx("0x5e")], " "), e));

case h[hx("0x6f")][hx("0x6e")][hx("0x46")]:
throw new Error(l[hx("0x78")](h.type[hx("0x6e")][hx("0x46")] + " ", e));

case h[hx("0x6f")][hx("0x6e")][hx("0x79")]:
throw new Error(l[hx("0x7a")](l[hx("0x7a")](h[hx("0x6f")][hx("0x6e")][hx("0x79")], " "), e));

case h[hx("0x6f")][hx("0x6e")][hx("0x60")]:
throw new Error(l.fPYka(l[hx("0x7b")](h[hx("0x6f")][hx("0x6e")][hx("0x60")], " "), e));

case h.type[hx("0x6e")][hx("0x7c")]:
throw new Error(l[hx("0x7b")](l.LPOUz(h[hx("0x6f")][hx("0x6e")][hx("0x7c")], " "), e));

case h[hx("0x6f")].ErrorType[hx("0x57")]:
cc[hx("0x7d")](l[hx("0x7b")](h[hx("0x6f")][hx("0x6e")][hx("0x57")], " ") + e);
break;

case h[hx("0x6f")][hx("0x6e")][hx("0x7e")]:
throw new Error(l[hx("0x7f")](h[hx("0x6f")][hx("0x6e")][hx("0x7e")], " ") + e);

case h[hx("0x6f")][hx("0x6e")][hx("0x65")]:
throw new Error(l[hx("0x7f")](h.type[hx("0x6e")][hx("0x65")] + " ", e));

case h[hx("0x6f")].ErrorType.PROCESS_FW:
throw new Error(l[hx("0x7f")](l[hx("0x7f")](h[hx("0x6f")].ErrorType[hx("0x4b")], " "), e));

case h[hx("0x6f")][hx("0x6e")][hx("0x4c")]:
throw new Error(l.mthkJ(l[hx("0x7f")](h.type.ErrorType[hx("0x4c")], " "), e));

case h.type[hx("0x6e")][hx("0x4e")]:
throw new Error(l.aAzZZ(l[hx("0x80")](h.type[hx("0x6e")][hx("0x4e")], " "), e));

case h.type[hx("0x6e")][hx("0x50")]:
throw new Error(l[hx("0x80")](h.type.ErrorType[hx("0x50")] + " ", e));

default:
this[hx("0x81")][hx("0x73")](t);
} else console[hx("0x82")](hx("0x83"));
};
return t;
}(), h.FrameWorkError = b;
d = ux || (ux = {}), p = {
uSKtZ: function(t, e) {
return t != e;
},
foSrb: function(t, e) {
return t === e;
}
}, g = function() {
var t = {
XfYWZ: function(t, e) {
return p[hx("0x84")](t, e);
},
CWyGf: hx("0x85")
};
function e(t) {
this.frameWorkError = new (d[hx("0x86")])(t);
}
e[hx("0x30")][hx("0x73")] = function(e, n) {
if (t.XfYWZ(typeof e, t[hx("0x87")])) this[hx("0x88")].checkErrorType(e, n); else if (null === e) return this.checkObjectType(n);
};
e[hx("0x30")][hx("0x89")] = function(t) {
if (t && p[hx("0x8a")](t, 0)) return typeof t;
throw new Error(hx("0x8b"));
};
return e;
}(), d[hx("0x8c")] = g;
y = ux || (ux = {}), S = {
aUlWS: hx("0x8d"),
rmLxP: function(t, e) {
return t != e;
},
yQmWW: "ErrorManager errorNode為空"
}, v = function() {
var t = {
nXxaF: S[hx("0x8e")],
KVDtZ: "sineIn",
EsdXH: function(t, e) {
return S[hx("0x8f")](t, e);
},
reMWR: S.yQmWW,
DqoHX: "ErrorManager errorButton為空"
};
function e(t) {
this[hx("0x90")] = null;
this[hx("0x91")] = t;
}
e.prototype.showError = function(e, n, x, i) {
for (var r = t[hx("0x92")][hx("0x41")]("|"), c = 0; ;) {
switch (r[c++]) {
case "0":
if (e) if (i) {
this[hx("0x91")][hx("0x93")][hx("0x94")] = i;
this.errorManager[hx("0x95")].string = x;
} else if (this[hx("0x91")].isShowBackHomeButton) {
this.errorManager[hx("0x93")][hx("0x94")] = this[hx("0x91")][hx("0x96")];
this.errorManager[hx("0x95")][hx("0x85")] = x;
} else this.errorManager[hx("0x93")][hx("0x94")] = !1; else this.errorManager[hx("0x93")][hx("0x94")] = !1;
continue;

case "1":
cc.tween(this[hx("0x91")][hx("0x97")])[hx("0x98")]({
opacity: 0,
scale: 1.3
})[hx("0x3")](function() {
o.errorManager.errorNode.active = !0;
}).to(.3, {
opacity: 255,
scale: 1
}, {
easing: t[hx("0x99")]
})[hx("0x3")](function() {
o[hx("0x91")][hx("0x93")][hx("0x9a")](cc[hx("0x9b")])[hx("0x9c")] = !0;
})[hx("0x9d")]();
continue;

case "2":
e || (this.timeOut = window.setTimeout(function() {
y[hx("0x9e")].errorState = !1;
o[hx("0x91")][hx("0x97")][hx("0x94")] = !1;
o[hx("0x91")][hx("0x93")].active = !1;
o[hx("0x90")] = null;
}, this[hx("0x91")].errorDelayTime));
continue;

case "3":
t[hx("0x9f")](this[hx("0x90")], null) && clearTimeout(this.timeOut);
continue;

case "4":
this.errorManager[hx("0x97")][hx("0x94")] = !1;
continue;

case "5":
this[hx("0x91")][hx("0x97")] || this[hx("0x91")][hx("0xa0")](y[hx("0x6f")][hx("0x6e")][hx("0x5e")], t[hx("0xa1")]);
continue;

case "6":
this[hx("0x91")].errorButton || this[hx("0x91")][hx("0xa0")](y[hx("0x6f")][hx("0x6e")][hx("0x5e")], t[hx("0xa2")]);
continue;

case "7":
this[hx("0x91")][hx("0xa3")] || this[hx("0x91")][hx("0xa0")](y[hx("0x6f")][hx("0x6e")][hx("0x5e")], hx("0xa4"));
continue;

case "8":
cc[hx("0xa5")][hx("0xa6")](this[hx("0x91")][hx("0x97")]);
continue;

case "9":
this.errorManager[hx("0xa7")].active = !1;
continue;

case "10":
y.ErrorManager[hx("0xa8")] = !0;
continue;

case "11":
var o = this;
continue;

case "12":
this[hx("0x91")][hx("0xa3")][hx("0x85")] = n;
continue;

case "13":
this[hx("0x91")][hx("0x93")][hx("0x9a")](cc[hx("0x9b")])[hx("0x9c")] = !1;
continue;
}
break;
}
};
return e;
}(), y[hx("0xa9")] = v;
m = ux || (ux = {}), E = {
BBvwz: function(t, e) {
return t == e;
},
HPWlB: function(t, e) {
return t != e;
},
qPmqx: function(t, e) {
return t(e);
},
BegaQ: "ErrorManager warningLabel為空",
omuAu: hx("0xaa")
}, M = function() {
function t(t) {
this[hx("0xab")] = null;
this.errorManager = t;
}
t[hx("0x30")].showError = function(t, e) {
for (var n = hx("0xac")[hx("0x41")]("|"), x = 0; ;) {
switch (n[x++]) {
case "0":
E[hx("0xad")](this[hx("0x91")].warningDelayTime, 0) && this[hx("0x91")].executeError(hx("0xae"));
continue;

case "1":
E[hx("0xaf")](this[hx("0xab")], null) && E[hx("0xb0")](clearTimeout, this[hx("0xab")]);
continue;

case "2":
this[hx("0x91")][hx("0xb1")].active = !0;
continue;

case "3":
this[hx("0x91")][hx("0xb2")] || this[hx("0x91")][hx("0xa0")](m[hx("0x6f")][hx("0x6e")].UNDEFINED_FW, E[hx("0xb3")]);
continue;

case "4":
m.ErrorManager[hx("0xb4")] = !0;
continue;

case "5":
this.errorManager[hx("0xb1")] || this[hx("0x91")][hx("0xa0")](m[hx("0x6f")][hx("0x6e")].UNDEFINED_FW, E[hx("0xb5")]);
continue;

case "6":
var i = this;
continue;

case "7":
this[hx("0x91")][hx("0xb2")][hx("0x85")] = e;
continue;

case "8":
this[hx("0xab")] = window.setTimeout(function() {
m[hx("0x9e")][hx("0xb4")] = !1;
i[hx("0x91")].warningNode[hx("0x94")] = !1;
}, this[hx("0x91")][hx("0xb6")]);
continue;

case "9":
if (t) return;
continue;
}
break;
}
};
return t;
}(), m[hx("0xb7")] = M;
w = ux || (ux = {}), T = function() {
function t(t, e) {
this[hx("0xb8")] = new w.ObjectError(t);
this[hx("0xb9")] = new (w[hx("0xa9")])(e);
this[hx("0xba")] = new (w[hx("0xb7")])(e);
}
t.prototype[hx("0x73")] = function(t, e) {
return this[hx("0xb8")][hx("0x73")](t, e);
};
t.prototype[hx("0xbb")] = function(t, e, n, x) {
this.serverError[hx("0xbc")](t, e, n, x);
};
t.prototype[hx("0xbd")] = function(t, e, n) {
this[hx("0xba")][hx("0xbc")](t, e, n);
};
return t;
}(), w[hx("0xbe")] = T;
L = ux || (ux = {}), A = {
hZRqO: "ErrorManager類錯誤 :  該類尚未實例化",
WWVBe: hx("0xa8"),
uuHBI: "warningState",
jOEjn: hx("0xb1"),
oxzSg: hx("0x93"),
cNqUL: hx("0xa3"),
PwGYX: hx("0xbf"),
hoJJp: "warningDelayTime",
nssQs: hx("0x96"),
GtFTF: "errorButtonLabel",
rYeWT: hx("0xa7")
}, R = function() {
function t(e) {
for (var n = hx("0xc0")[hx("0x41")]("|"), x = 0; ;) {
switch (n[x++]) {
case "0":
t[hx("0xc1")] = !1;
continue;

case "1":
this[hx("0x72")] = e;
continue;

case "2":
this[hx("0xc2")] = !!this[hx("0x72")][hx("0xc3")][hx("0xc4")]();
continue;

case "3":
t[hx("0xc5")] = !1;
continue;

case "4":
this._warningDelayTime = 1e3;
continue;

case "5":
this[hx("0xc6")] = null;
continue;

case "6":
this[hx("0xc7")] = new (L[hx("0xbe")])(e, this);
continue;

case "7":
this[hx("0xc8")] = 2e3;
continue;

case "8":
this[hx("0xc9")] = null;
continue;
}
break;
}
}
t[hx("0xca")] = function(e) {
if (!this[hx("0xcb")]) {
this[hx("0xcb")] = new t(e);
L[hx("0xcc")] = this[hx("0xcb")];
}
};
Object[hx("0xcd")](t, hx("0xce"), {
get: function() {
if (!this[hx("0xcb")]) throw new Error(A.hZRqO);
return this[hx("0xcb")];
},
enumerable: !1,
configurable: !0
});
t[hx("0x30")][hx("0xa0")] = function(t, e) {
return this.handler.checkErrorType(t, e);
};
t[hx("0x30")].showErrorDialog = function(t, e, n, x) {
this[hx("0xc7")][hx("0xbb")](t, e, n, x);
};
t[hx("0x30")].showWarningDialog = function(t, e, n) {
this[hx("0xc7")].checkWarning(t, e, n);
};
t[hx("0x30")].setErrorNode = function(t) {
this[hx("0xc6")] = t;
return this;
};
t[hx("0x30")][hx("0xcf")] = function(t) {
this[hx("0xc9")] = t;
return this;
};
t[hx("0x30")][hx("0xd0")] = function(t) {
this[hx("0xd1")] = t;
return this;
};
t[hx("0x30")].setCloseButtonNode = function(t) {
this[hx("0xd2")] = t;
return this;
};
t.prototype[hx("0xd3")] = function(t) {
this._errorDelayTime = t;
return this;
};
t[hx("0x30")][hx("0xd4")] = function(t) {
this._warningDelayTime = t;
return this;
};
t.prototype[hx("0xd5")] = function(t) {
this[hx("0xd6")] = t;
return this;
};
t[hx("0x30")][hx("0xd7")] = function(t) {
this[hx("0xd8")] = t;
return this;
};
t[hx("0x30")][hx("0xd9")] = function(t) {
this._errorButtonLabel = t;
return this;
};
Object[hx("0xcd")](t, A[hx("0xda")], {
get: function() {
return this[hx("0xc5")];
},
set: function(t) {
this[hx("0xc5")] = t;
},
enumerable: !1,
configurable: !0
});
Object[hx("0xcd")](t, A[hx("0xdb")], {
get: function() {
return this._warningState;
},
set: function(t) {
this[hx("0xc1")] = t;
},
enumerable: !1,
configurable: !0
});
Object[hx("0xcd")](t[hx("0x30")], hx("0x97"), {
get: function() {
return this[hx("0xc6")];
},
enumerable: !1,
configurable: !0
});
Object[hx("0xcd")](t[hx("0x30")], A[hx("0xdc")], {
get: function() {
return this[hx("0xd6")];
},
enumerable: !1,
configurable: !0
});
Object[hx("0xcd")](t[hx("0x30")], A[hx("0xdd")], {
get: function() {
return this[hx("0xd1")];
},
enumerable: !1,
configurable: !0
});
Object[hx("0xcd")](t[hx("0x30")], hx("0xb2"), {
get: function() {
return this[hx("0xd8")];
},
enumerable: !1,
configurable: !0
});
Object[hx("0xcd")](t.prototype, A[hx("0xde")], {
get: function() {
return this[hx("0xc9")];
},
enumerable: !1,
configurable: !0
});
Object[hx("0xcd")](t[hx("0x30")], A.PwGYX, {
get: function() {
return this._errorDelayTime;
},
enumerable: !1,
configurable: !0
});
Object[hx("0xcd")](t[hx("0x30")], A[hx("0xdf")], {
get: function() {
return this._warningDelayTime;
},
enumerable: !1,
configurable: !0
});
Object[hx("0xcd")](t[hx("0x30")], A.nssQs, {
get: function() {
return this[hx("0xc2")];
},
enumerable: !1,
configurable: !0
});
Object[hx("0xcd")](t[hx("0x30")], A[hx("0xe0")], {
get: function() {
return this[hx("0xe1")];
},
enumerable: !1,
configurable: !0
});
Object[hx("0xcd")](t[hx("0x30")], A[hx("0xe2")], {
get: function() {
return this._closeButton;
},
enumerable: !1,
configurable: !0
});
return t;
}(), L.ErrorManager = R;
k = ux || (ux = {}), _ = {
BKmfE: hx("0xe3"),
DZMaL: hx("0xe4"),
UJHbz: hx("0xe5")
}, N = k[hx("0x6f")] || (k.type = {}), O = {
ZbuCh: _[hx("0xe6")],
TKugn: _[hx("0xe7")],
BppzD: _[hx("0xe8")]
}, function(t) {
t[O[hx("0xe9")]] = O.ZbuCh;
t[O[hx("0xea")]] = O.TKugn;
t[O[hx("0xeb")]] = O[hx("0xeb")];
}(N[hx("0xec")] || (N[hx("0xec")] = {}));
I = ux || (ux = {}), F = {
soCIU: function(t, e) {
return t / e;
},
TKtGW: function(t, e) {
return t + e;
},
asPQV: function(t, e) {
return t || e;
},
MUPNA: function(t, e) {
return t || e;
},
mNaHc: function(t, e) {
return t(e);
},
LpYSk: function(t, e) {
return t - e;
},
buQSR: function(t, e) {
return t == e;
},
wpBNB: function(t, e) {
return t > e;
},
tKJGp: function(t, e) {
return t * e;
}
}, C = I.global || (I.global = {}), B = {
BWkbG: function(t, e) {
return F.soCIU(t, e);
},
Emkbt: function(t, e) {
return F[hx("0xed")](t, e);
},
ocxOY: function(t, e) {
return F[hx("0xee")](t, e);
},
dbVJg: function(t, e) {
return F[hx("0xef")](t, e);
},
KmpBk: function(t, e) {
return F[hx("0xf0")](t, e);
},
FFfjd: function(t, e) {
return F[hx("0xf1")](t, e);
},
NBJlJ: function(t, e) {
return F[hx("0xf2")](t, e);
},
mwwsQ: function(t, e) {
return F[hx("0xf3")](t, e);
},
XWJxC: function(t, e) {
return F[hx("0xed")](t, e);
},
HDGKO: function(t, e) {
return F[hx("0xf4")](t, e);
},
AsjhV: function(t, e) {
return F[hx("0xf5")](t, e);
},
nQcLh: function(t, e) {
return t * e;
}
}, P = function() {
var t = {
wGCkk: function(t, e) {
return B[hx("0xf6")](t, e);
},
rlYCi: function(t, e) {
return B[hx("0xf7")](t, e);
},
pKbNN: function(t, e) {
return t + e;
},
sJHik: function(t, e) {
return t || e;
},
ypBgS: function(t, e) {
return B[hx("0xf8")](t, e);
}
};
function e() {}
e[hx("0xf9")] = function(t, e) {
return Math[hx("0xfa")](B[hx("0xfb")](Math.round(t * Math[hx("0xfc")](10, B.Emkbt(B[hx("0xfd")](e, 0), 1))), 10)) / Math[hx("0xfc")](10, B[hx("0xfe")](e, 0));
};
e[hx("0xff")] = function(e, n) {
return t[hx("0x100")](Math.floor(Math[hx("0x101")](t[hx("0x102")](e, Math[hx("0xfc")](10, t[hx("0x103")](t.sJHik(n, 0), 1)))) / 10), Math[hx("0xfc")](10, t[hx("0x104")](n, 0)));
};
e[hx("0x105")] = function(e, n) {
return Math[hx("0x106")](Math[hx("0x106")](t[hx("0x107")](e, Math[hx("0xfc")](10, t[hx("0x103")](n || 0, 1)))) / 10) / Math[hx("0xfc")](10, t.sJHik(n, 0));
};
e[hx("0x108")] = function(t) {
var e = B[hx("0x109")](B[hx("0x10a")](String, t)[hx("0x10b")]("."), 1), n = B[hx("0x10c")](B.KmpBk(String, t)[hx("0x25")], e);
return B[hx("0x10d")](e, 0) ? 0 : n;
};
e[hx("0x10e")] = function(t) {
return t < 1e3 ? B[hx("0x109")](t, "") : B[hx("0x10f")](t, 1e3) ? B[hx("0x110")](t / 1e3, "K") : void 0;
};
e.format = function(t) {
return this[hx("0x111")].format(t);
};
e[hx("0x111")] = new Intl.NumberFormat();
return e;
}(), C[hx("0x112")] = P;
U = ux || (ux = {}), H = {
HaFJQ: hx("0x113"),
kmBlC: "PREFAB",
sopZN: hx("0x114"),
VfEev: "CSS",
XPtsP: hx("0x115"),
eqDqt: hx("0x116")
}, D = U[hx("0x6f")] || (U[hx("0x6f")] = {}), j = {
VVcMN: hx("0x117"),
abRgr: H[hx("0x118")],
tNBLx: "IMG_ATLAS",
urgkJ: H[hx("0x119")],
ErTCJ: hx("0x11a"),
AYFVV: H.sopZN,
GkSdO: H.VfEev,
HhcMp: H[hx("0x11b")],
pPawz: H.eqDqt
}, function(t) {
for (var e = hx("0x11c")[hx("0x41")]("|"), n = 0; ;) {
switch (e[n++]) {
case "0":
t[j[hx("0x11d")]] = hx("0x117");
continue;

case "1":
t[j.abRgr] = "IMG";
continue;

case "2":
t[j.tNBLx] = hx("0x11e");
continue;

case "3":
t[j[hx("0x11f")]] = j[hx("0x11f")];
continue;

case "4":
t[hx("0x11a")] = j.ErTCJ;
continue;

case "5":
t[hx("0x114")] = j.AYFVV;
continue;

case "6":
t[j.GkSdO] = j[hx("0x120")];
continue;

case "7":
t[j.HhcMp] = "SCENE";
continue;

case "8":
t[j.pPawz] = hx("0x116");
continue;
}
break;
}
}(D.LoadType || (D[hx("0x121")] = {}));
z = ux || (ux = {}), G = {
EMaoQ: hx("0x122"),
aVhgC: hx("0x123"),
lVuly: hx("0x124"),
NlMLS: hx("0x125")
}, W = z.type || (z[hx("0x6f")] = {}), Z = {
xreBM: G[hx("0x126")],
htBIo: G[hx("0x127")],
SVnZR: G[hx("0x128")],
ZwWmo: G[hx("0x129")]
}, function(t) {
t[t[Z[hx("0x12a")]] = 0] = Z[hx("0x12a")];
t[t[Z[hx("0x12b")]] = 1] = Z.htBIo;
t[t[hx("0x124")] = 2] = Z[hx("0x12c")];
t[t[Z[hx("0x12d")]] = 3] = hx("0x125");
}(W[hx("0x12e")] || (W[hx("0x12e")] = {}));
V = ux || (ux = {}), K = {
zsBGm: function(t, e) {
return t < e;
},
AtNkA: function(t, e, n) {
return t(e, n);
},
Dfuwv: function(t, e) {
return t(e);
},
AdVIF: hx("0x12f"),
BdSLh: "eventsCurrentlyBeing"
}, Q = function() {
var t = {
xrkcz: K.AdVIF
};
function e(t) {
this.configManager = t;
this[hx("0x130")] = 0;
this[hx("0x131")] = new Map();
this[hx("0x132")] = new (cc[hx("0x133")])();
}
e[hx("0xca")] = function(t) {
if (!this._instance) {
this[hx("0xcb")] = new e(t);
V.eventMgr = this[hx("0xcb")];
}
};
Object.defineProperty(e, hx("0xce"), {
get: function() {
if (this[hx("0xcb")]) return this[hx("0xcb")];
V[hx("0x9e")][hx("0xce")][hx("0xa0")](V[hx("0x6f")].ErrorType[hx("0x4c")], hx("0x134"));
},
enumerable: !1,
configurable: !0
});
e[hx("0x30")][hx("0x135")] = function(t) {
for (var e, n = [], x = 1; K[hx("0x136")](x, arguments.length); x++) n[x - 1] = arguments[x];
(e = this[hx("0x132")]).emit[hx("0x17")](e, K.AtNkA(bx, [ t ], K[hx("0x137")](lx, n)));
};
e.prototype[hx("0x138")] = function(e, n, x, i) {
this[hx("0x130")] += 1;
this[hx("0x131")][hx("0x98")](t[hx("0x139")], e);
x ? this[hx("0x132")].on(e, n, i) : this.target[hx("0x13a")](e, n, i);
};
e[hx("0x30")].destroyEvent = function(t, e) {
this[hx("0x132")][hx("0x13b")](t, e, this.target);
};
e.prototype[hx("0x13c")] = function(t) {
return this.target[hx("0x13d")](t);
};
Object[hx("0xcd")](e.prototype, hx("0x13e"), {
get: function() {
return this[hx("0x130")];
},
enumerable: !1,
configurable: !0
});
Object[hx("0xcd")](e[hx("0x30")], K.BdSLh, {
get: function() {
return this[hx("0x131")];
},
enumerable: !1,
configurable: !0
});
return e;
}(), V.EventManager = Q;
X = ux || (ux = {}), Y = {
fMONB: hx("0x13f"),
hcKCb: hx("0x140"),
BuHbh: "VERTICAL"
}, J = X.type || (X[hx("0x6f")] = {}), q = {
jEfnC: Y[hx("0x141")],
CQEjf: Y.hcKCb,
eYErZ: Y[hx("0x142")]
}, function(t) {
t[q[hx("0x143")]] = q[hx("0x143")];
t[q[hx("0x144")]] = q[hx("0x144")];
t[q[hx("0x145")]] = hx("0x146");
}(J.SceneStyleType || (J[hx("0x147")] = {}));
tt = ux || (ux = {}), et = {
UAgeV: "PORTRAIT",
lckkz: hx("0x148")
}, function(t) {
t[et[hx("0x149")]] = et[hx("0x149")];
t[hx("0x148")] = et[hx("0x14a")];
}(($ = tt[hx("0x6f")] || (tt.type = {}))[hx("0x14b")] || ($[hx("0x14b")] = {}));
nt = ux || (ux = {}), xt = {
QwNzb: function(t) {
return t();
},
pOWJt: function(t, e, n) {
return t(e, n);
},
LIbfb: function(t, e) {
return t(e);
}
}, it = function() {
var t = {
rcZAA: function(t, e, n) {
return xt[hx("0x14c")](t, e, n);
},
EeNoT: function(t, e) {
return xt.LIbfb(t, e);
},
jEnPe: hx("0x14d")
};
function e(t, e) {
this[hx("0x14e")] = !0;
this[hx("0x72")] = t;
this[hx("0x14f")] = e;
}
e[hx("0x30")][hx("0x150")] = function(t) {
var e = {
FNxBx: function(t, e, n, x, i) {
return t(e, n, x, i);
}
}, n = this;
window[hx("0x151")](hx("0x152"), function() {
return e[hx("0x153")](dx, n, void 0, void 0, function() {
return px(this, function(e) {
switch (e[hx("0x21")]) {
case 0:
return [ 4, this[hx("0x154")](t) ];

case 1:
e[hx("0x155")]();
return [ 2 ];
}
});
});
});
};
e[hx("0x30")][hx("0x154")] = function(e) {
var n = this;
return new Promise(function(x, i) {
if (n[hx("0x14e")]) {
n[hx("0x14e")] = !1;
t[hx("0x156")](setTimeout, function() {
n[hx("0x14f")][hx("0x157")]();
n[hx("0x14e")] = !0;
t = x, xt.QwNzb(t);
var t;
}, e);
} else n[hx("0x72")][hx("0x158")] && t.EeNoT(i, t[hx("0x159")]);
});
};
return e;
}(), nt[hx("0x15a")] = it;
ut = ux || (ux = {}), at = {
DtQpg: function(t, e) {
return t + e;
}
}, rt = ut[hx("0x16a")] || (ut.ABS = {}), ct = {
wXGeq: function(t, e) {
return at[hx("0x15b")](t, e);
},
FnZOR: hx("0x15c")
}, ot = function() {
function t() {
this[hx("0x15d")] = new Set();
}
t.prototype[hx("0x15e")] = function(t, e) {
if (this[hx("0x15d")][hx("0x15f")](t)) ut[hx("0x9e")][hx("0xce")][hx("0xa0")](ut[hx("0x6f")][hx("0x6e")][hx("0x65")], ct.wXGeq(t, ct[hx("0x160")])); else {
t[hx("0x161")] = e;
this[hx("0x15d")][hx("0x162")](t);
}
};
t.prototype.unsubscribe = function(t) {
this[hx("0x15d")][hx("0x15f")](t) ? this[hx("0x15d")][hx("0x163")](t) : ut[hx("0x9e")][hx("0xce")].executeError(ut[hx("0x6f")][hx("0x6e")][hx("0x4b")], ct.wXGeq(t, hx("0x164")));
};
t.prototype[hx("0x165")] = function() {
this.observer[hx("0x166")]();
};
t[hx("0x30")][hx("0x167")] = function() {
return this[hx("0x15d")][hx("0x168")];
};
t[hx("0x30")][hx("0x169")] = function() {
return this[hx("0x15d")];
};
return t;
}(), rt.ABaseNotification = ot;
ft = ux || (ux = {}), ht = {
nnVpf: hx("0x16b"),
PkBap: hx("0x16c"),
vhpZe: hx("0x16d"),
vxqJl: hx("0x16e"),
gflIr: hx("0x16f"),
bZqAH: "SCENE_DIRECTION_CHANGE",
PBwZR: hx("0x170"),
ATHkB: hx("0x171"),
UZyda: hx("0x172"),
WnTDl: hx("0x173")
}, function(t) {
t[ht[hx("0x174")]] = ht[hx("0x174")];
t[hx("0x16c")] = ht.PkBap;
t[ht[hx("0x175")]] = ht.vhpZe;
t[hx("0x16e")] = ht.vxqJl;
t[ht[hx("0x176")]] = ht[hx("0x176")];
t[ht[hx("0x177")]] = hx("0x178");
t[ht.PBwZR] = ht[hx("0x179")];
t[ht[hx("0x17a")]] = ht[hx("0x17a")];
t[hx("0x172")] = ht[hx("0x17b")];
t[ht[hx("0x17c")]] = ht.WnTDl;
}((st = ft[hx("0x6f")] || (ft[hx("0x6f")] = {})).NotificationType || (st.NotificationType = {}));
lt = ux || (ux = {}), bt = function() {
function t(t, e) {
this[hx("0x17d")] = !1;
this[hx("0x17e")] = e;
this.callFun = t;
}
t[hx("0x30")][hx("0x17f")] = function(t) {
this[hx("0x180")][hx("0x3")](this.self, t);
};
Object[hx("0xcd")](t[hx("0x30")], hx("0x161"), {
get: function() {
return this._isPermanent;
},
set: function(t) {
this[hx("0x17d")] = t;
},
enumerable: !1,
configurable: !0
});
return t;
}(), lt[hx("0x181")] = bt;
dt = ux || (ux = {}), pt = {
lEMrn: function(t, e) {
return t > e;
},
glyZm: function(t, e, n) {
return t(e, n);
}
}, gt = function(t) {
pt.glyZm(gx, e, t);
function e() {
var e = t[hx("0x3")](this) || this;
e[hx("0x182")] = dt[hx("0x6f")].NotificationType[hx("0x178")];
return e;
}
e.prototype.subscribe = function(e, n) {
t[hx("0x30")][hx("0x15e")][hx("0x3")](this, e, n);
};
e[hx("0x30")][hx("0x183")] = function(t) {
var e, n;
if (pt[hx("0x184")](this[hx("0x15d")][hx("0x168")], 0)) try {
for (var x = yx(this.observer), i = x[hx("0x6")](); !i.done; i = x[hx("0x6")]()) {
var r = i[hx("0x9")];
r.pushNotification(t);
r[hx("0x161")] || this.unsubscribe(r);
}
} catch (t) {
e = {
error: t
};
} finally {
try {
i && !i.done && (n = x[hx("0x19")]) && n[hx("0x3")](x);
} finally {
if (e) throw e[hx("0xb")];
}
}
};
return e;
}(dt.ABS[hx("0x185")]), dt[hx("0x186")] = gt;
yt = ux || (ux = {}), St = {
chDHB: function(t, e) {
return t < e;
},
MEuAJ: function(t, e) {
return t == e;
},
MzJkL: function(t, e) {
return t == e;
},
fWhZP: function(t, e) {
return t >= e;
},
nbPcz: function(t, e) {
return t / e;
},
MSJrx: function(t, e) {
return t / e;
},
VPWot: function(t, e) {
return t * e;
},
sMkUS: function(t, e) {
return t > e;
}
}, vt = function() {
var t = {
UtJZs: function(t, e) {
return St[hx("0x187")](t, e);
},
viZkA: function(t, e) {
return St.nbPcz(t, e);
},
ekabl: function(t, e) {
return St.MSJrx(t, e);
},
Byqgu: function(t, e) {
return St[hx("0x188")](t, e);
},
pZhjX: function(t, e) {
return St.sMkUS(t, e);
},
hyeZB: function(t, e) {
return St[hx("0x188")](t, e);
},
pwKnh: function(t, e) {
return St[hx("0x187")](t, e);
},
JHMlA: function(t, e) {
return St.MSJrx(t, e);
}
};
function e(t) {
this.sceneManager = t;
if (yt[hx("0x189")][hx("0xce")]()[hx("0x18a")](yt[hx("0x6f")][hx("0x18b")][hx("0x178")])) this.eventLock = !1; else {
this.eventLock = !0;
console[hx("0x82")](hx("0x18c"));
}
}
e.prototype[hx("0x18d")] = function(e, n) {
this[hx("0x18e")]();
if (t[hx("0x18f")](t.viZkA(cc[hx("0x190")].getFrameSize()[hx("0x191")], cc[hx("0x190")][hx("0x192")]()[hx("0x193")]), t[hx("0x194")](e, n))) {
var x = t[hx("0x195")](cc[hx("0x190")].getFrameSize()[hx("0x191")], t[hx("0x194")](e, cc.view[hx("0x192")]().height));
cc[hx("0x190")][hx("0x196")](x, n, cc[hx("0x197")].FIXED_HEIGHT);
} else if (t[hx("0x198")](cc[hx("0x190")].getFrameSize().width, cc[hx("0x190")].getFrameSize()[hx("0x193")])) {
var i = t[hx("0x199")](cc[hx("0x190")][hx("0x192")]()[hx("0x193")], t.ekabl(e, cc[hx("0x190")][hx("0x192")]()[hx("0x191")]));
cc[hx("0x190")].setDesignResolutionSize(e, i, cc.ResolutionPolicy[hx("0x19a")]);
} else if (t[hx("0x19b")](t[hx("0x19c")](cc[hx("0x190")][hx("0x192")]()[hx("0x191")], cc[hx("0x190")][hx("0x192")]().height), t[hx("0x19c")](1e3, 1777))) {
i = cc[hx("0x190")][hx("0x192")]().height * t.JHMlA(1e3, cc[hx("0x190")][hx("0x192")]()[hx("0x191")]);
cc[hx("0x190")][hx("0x196")](1e3, i, cc.ResolutionPolicy.FIXED_HEIGHT);
} else {
i = t.hyeZB(cc.view[hx("0x192")]()[hx("0x193")], t[hx("0x19c")](1e3, cc[hx("0x190")].getFrameSize()[hx("0x191")]));
cc[hx("0x190")][hx("0x196")](1e3, i, cc[hx("0x197")][hx("0x19a")]);
}
};
e[hx("0x30")][hx("0x18e")] = function() {
if (St.chDHB(cc.view[hx("0x192")]()[hx("0x191")], cc[hx("0x190")].getFrameSize()[hx("0x193")])) {
if (St[hx("0x19d")](this.sceneManager[hx("0x19e")], yt[hx("0x6f")][hx("0x14b")][hx("0x19f")])) return;
this.sceneManager[hx("0x19e")] = yt[hx("0x6f")][hx("0x14b")][hx("0x19f")];
this.eventLock || yt.NotificationManager[hx("0xce")]()[hx("0x1a0")](yt[hx("0x6f")][hx("0x18b")][hx("0x178")])[hx("0x183")](yt[hx("0x6f")].SceneDirectionType[hx("0x19f")]);
} else {
if (St[hx("0x1a1")](this.sceneManager[hx("0x19e")], yt[hx("0x6f")][hx("0x14b")][hx("0x148")])) return;
this[hx("0x14f")][hx("0x19e")] = yt[hx("0x6f")][hx("0x14b")][hx("0x148")];
this[hx("0x1a2")] || yt[hx("0x189")].instance().getNotification(yt[hx("0x6f")].NotificationType[hx("0x178")]).notify(yt[hx("0x6f")][hx("0x14b")][hx("0x148")]);
}
};
return e;
}(), yt.AutoStyle = vt;
mt = ux || (ux = {}), Et = {
LdQHD: function(t, e) {
return t * e;
}
}, Mt = function() {
var t = {
YrSwP: function(t, e) {
return t > e;
},
Rgtte: function(t, e) {
return t / e;
},
tyEyA: function(t, e) {
return Et.LdQHD(t, e);
},
QRlGw: function(t, e) {
return Et[hx("0x1a3")](t, e);
},
xlKZM: function(t, e) {
return t / e;
},
yMriP: hx("0x1a4")
};
function e() {}
e[hx("0x30")].executionStyle = function(e, n) {
for (var x = hx("0x1a5").split("|"), i = 0; ;) {
switch (x[i++]) {
case "0":
s[hx("0x1a6")][hx("0x191")] = a;
continue;

case "1":
s[hx("0x1a6")][hx("0x193")] = u;
continue;

case "2":
var r = o[hx("0x191")];
continue;

case "3":
if (t[hx("0x1a7")](r / c, t[hx("0x1a8")](f[hx("0x191")], f[hx("0x193")]))) {
s[hx("0x1a9")] = !0;
s[hx("0x1aa")] = !1;
u = f[hx("0x193")];
a = t.tyEyA(u, r) / c;
} else {
s.fitHeight = !1;
s[hx("0x1aa")] = !0;
a = f.width;
u = t[hx("0x1ab")](t[hx("0x1ac")](c, r), a);
}
continue;

case "4":
var c = o[hx("0x193")];
continue;

case "5":
var o = cc.view[hx("0x192")]();
continue;

case "6":
this[hx("0x1ad")] || (this[hx("0x1ad")] = cc[hx("0x168")](e, n));
continue;

case "7":
var u = c;
continue;

case "8":
s[hx("0x1ae")] = cc.size(a, u);
continue;

case "9":
var a = r;
continue;

case "10":
var s = cc[hx("0x1af")](t[hx("0x1b0")]).getComponent(cc[hx("0x1a4")]);
continue;

case "11":
var f = this[hx("0x1ad")];
continue;
}
break;
}
};
return e;
}(), mt[hx("0x1b1")] = Mt;
wt = ux || (ux = {}), Tt = {
UBrAR: hx("0x1b2")
}, Lt = function() {
var t = {
bRJaL: Tt[hx("0x1b3")]
};
function e() {}
e[hx("0x30")][hx("0x18d")] = function() {
wt.ErrorManager[hx("0xce")].executeError(t[hx("0x1b4")]);
};
return e;
}(), wt.VerticalStyle = Lt;
At = ux || (ux = {}), Rt = function() {
function t(t) {
this[hx("0x14f")] = t;
}
t[hx("0x30")].getStyle = function(t, e, n) {
switch (t) {
case At[hx("0x6f")][hx("0x147")][hx("0x13f")]:
this[hx("0x1b5")] || (this.autoStyle = new (At[hx("0x1b6")])(this[hx("0x14f")]));
this[hx("0x1b5")][hx("0x18d")](e, n);
break;

case At.type.SceneStyleType.HORIZONTAL:
this[hx("0x1b7")] || (this[hx("0x1b7")] = new (At[hx("0x1b1")])());
this[hx("0x1b7")][hx("0x18d")](e, n);
break;

case At[hx("0x6f")][hx("0x147")].VERTICAL:
this.verticalStyle || (this[hx("0x1b8")] = new (At[hx("0x1b9")])());
this[hx("0x1b8")].executionStyle(e, n);
break;

default:
t[hx("0x18d")](e, n);
}
};
return t;
}(), At[hx("0x1ba")] = Rt;
Nt = ux || (ux = {}), Ot = {
ErBZo: "instance"
}, kt = function() {
var t = {
vcRGW: hx("0x1bb")
};
function e(t) {
this.configManager = t;
this._designWidth = 1280;
this[hx("0x1bc")] = 720;
this[hx("0x1bd")] = new (Nt[hx("0x15a")])(t, this);
this[hx("0x1be")] = new (Nt[hx("0x1ba")])(this);
this[hx("0x1bf")] = Nt[hx("0x6f")].SceneStyleType[hx("0x140")];
}
e.setInstance = function(t) {
if (!this[hx("0xcb")]) {
this[hx("0xcb")] = new e(t);
Nt.sceneMgr = this[hx("0xcb")];
}
};
Object[hx("0xcd")](e, Ot[hx("0x1c0")], {
get: function() {
if (this[hx("0xcb")]) return this[hx("0xcb")];
Nt[hx("0x9e")][hx("0xce")][hx("0xa0")](Nt[hx("0x6f")][hx("0x6e")][hx("0x65")], hx("0x134"));
},
enumerable: !1,
configurable: !0
});
e.prototype[hx("0x1c1")] = function(t) {
this[hx("0x1c2")] = t;
return this;
};
e[hx("0x30")].setDesignHeight = function(t) {
this[hx("0x1bc")] = t;
return this;
};
e[hx("0x30")][hx("0x157")] = function(e) {
if (e) {
this[hx("0x1bf")] = e;
switch (e) {
case Nt[hx("0x6f")].SceneStyleType[hx("0x140")]:
this[hx("0x1c3")] = Nt[hx("0x6f")].SceneDirectionType[hx("0x19f")];
break;

case Nt[hx("0x6f")][hx("0x147")].VERTICAL:
this[hx("0x1c3")] = Nt.type[hx("0x14b")][hx("0x148")];
break;

case Nt.type[hx("0x147")][hx("0x13f")]:
break;

default:
console[hx("0x82")](t[hx("0x1c4")]);
}
}
this[hx("0x1be")][hx("0x1c5")](this[hx("0x1bf")], this[hx("0x1c2")], this[hx("0x1bc")]);
return this;
};
e[hx("0x30")][hx("0x1c6")] = function(t) {
this[hx("0x1bd")][hx("0x150")](t);
};
e[hx("0x30")][hx("0x1c7")] = function(t) {
Nt.LoadResManager[hx("0xce")][hx("0x1c8")][hx("0x15f")](t) || Nt[hx("0x9e")][hx("0xce")][hx("0xa0")](Nt.type[hx("0x6e")].SCENE_FW, "加載不到你的Scene資源,請檢查該資源名是否正確");
cc.director[hx("0x1c9")](Nt[hx("0x1ca")].instance[hx("0x1c8")][hx("0x1cb")](t));
};
e[hx("0x30")][hx("0x1cc")] = function(t) {
t.destroy();
};
Object[hx("0xcd")](e[hx("0x30")], "sceneDirection", {
get: function() {
return this[hx("0x1c3")];
},
set: function(t) {
this[hx("0x1c3")] = t;
},
enumerable: !1,
configurable: !0
});
return e;
}(), Nt.SceneManager = kt;
_t = ux || (ux = {}), Ct = {
KPIvQ: hx("0x1cd"),
bCBgK: hx("0x134"),
oxFtG: "instance"
}, Bt = function() {
var t = {
nPclJ: Ct.bCBgK
};
function e(t) {
this.configManager = t;
this[hx("0x1ce")] = new Map();
this[hx("0x1cf")] = new Map();
}
e[hx("0xca")] = function(t) {
if (!this._instance) {
this[hx("0xcb")] = new e(t);
_t[hx("0x1d0")] = this[hx("0xcb")];
}
};
Object[hx("0xcd")](e, Ct[hx("0x1d1")], {
get: function() {
if (this[hx("0xcb")]) return this[hx("0xcb")];
_t[hx("0x9e")][hx("0xce")][hx("0xa0")](_t[hx("0x6f")].ErrorType[hx("0x4e")], t[hx("0x1d2")]);
},
enumerable: !1,
configurable: !0
});
e[hx("0x30")].setSlotTemplate = function(t) {
this.template = t;
return this;
};
e[hx("0x30")][hx("0x1d3")] = function(t) {
return new t(this);
};
e.prototype.build = function(t) {
this[hx("0x1d4")] || _t[hx("0x9e")].instance[hx("0xa0")](_t.type[hx("0x6e")].UNDEFINED_FW, Ct[hx("0x1d5")]);
var e = new (this[hx("0x1d4")])(t, this[hx("0x72")]);
this[hx("0x1ce")][hx("0x98")](t.tag, e);
this[hx("0x1cf")][hx("0x98")](t[hx("0x1d6")], t);
};
Object.defineProperty(e[hx("0x30")], hx("0x1d7"), {
get: function() {
return this[hx("0x1ce")];
},
enumerable: !1,
configurable: !0
});
Object[hx("0xcd")](e[hx("0x30")], hx("0x1d8"), {
get: function() {
return this[hx("0x1cf")];
},
enumerable: !1,
configurable: !0
});
return e;
}(), _t[hx("0x1d9")] = Bt;
It = ux || (ux = {}), Ft = {
xNPSr: hx("0x1da"),
UwMqI: "INDIA",
veZvX: hx("0x1db"),
nMxwJ: hx("0x1dc"),
RsLrz: hx("0x1dd"),
wcLNf: hx("0x1de"),
HKxqM: "AMERICA",
wrWau: hx("0x1df"),
ZejDE: hx("0x1e0"),
rRTGk: hx("0x1e1"),
IbvqQ: hx("0x1e2"),
vyizC: hx("0x1e3")
}, function(t) {
for (var e = Ft[hx("0x1e4")][hx("0x41")]("|"), n = 0; ;) {
switch (e[n++]) {
case "0":
t[hx("0x1e5")] = "KWR";
continue;

case "1":
t[Ft[hx("0x1e6")]] = Ft[hx("0x1e7")];
continue;

case "2":
t.TAIWAN = hx("0x1e8");
continue;

case "3":
t[Ft[hx("0x1e9")]] = Ft[hx("0x1ea")];
continue;

case "4":
t[Ft[hx("0x1eb")]] = hx("0x1ec");
continue;

case "5":
t[hx("0x1ed")] = "VND";
continue;

case "6":
t[Ft.HKxqM] = Ft[hx("0x1ee")];
continue;

case "7":
t[Ft[hx("0x1ef")]] = Ft[hx("0x1f0")];
continue;

case "8":
t.INDONESIA = Ft[hx("0x1f1")];
continue;

case "9":
t[hx("0x1f2")] = Ft.vyizC;
continue;
}
break;
}
}((Pt = It.type || (It.type = {})).LanguageType || (Pt[hx("0x1f3")] = {}));
Ut = ux || (ux = {}), Ht = {
mAhQe: hx("0x1f4"),
zLurs: hx("0x1f5"),
HZLkz: "AUTO_50",
uvvfh: hx("0x13f")
}, Dt = Ut[hx("0x6f")] || (Ut[hx("0x6f")] = {}), jt = {
dviwq: hx("0x1f6"),
dgVeL: Ht[hx("0x1f7")],
AkHJk: Ht.zLurs,
qPMXj: hx("0x1f8"),
THtpW: Ht[hx("0x1f9")],
yyBCz: Ht[hx("0x1fa")],
rAKvc: "FREE_END"
}, function(t) {
for (var e = jt.dviwq[hx("0x41")]("|"), n = 0; ;) {
switch (e[n++]) {
case "0":
t[t[hx("0x1f4")] = 500] = jt[hx("0x1fb")];
continue;

case "1":
t[t[jt.AkHJk] = 1e3] = jt[hx("0x1fc")];
continue;

case "2":
t[t[jt.qPMXj] = 100] = "AUTO_100";
continue;

case "3":
t[t[jt[hx("0x1fd")]] = 50] = jt.THtpW;
continue;

case "4":
t[t[jt.yyBCz] = -1] = jt.yyBCz;
continue;

case "5":
t[t[jt[hx("0x1fe")]] = -2] = jt[hx("0x1fe")];
continue;
}
break;
}
}(Dt[hx("0x1ff")] || (Dt[hx("0x1ff")] = {}));
Wt = ux || (ux = {}), Zt = {
ZZMmu: "8|3|5|6|12|9|1|4|7|10|0|2|11",
hGhea: hx("0x200"),
zwGHW: hx("0x201"),
gQOzd: "gameNumber",
vMtfb: hx("0x202"),
WjIJC: hx("0x203"),
gheAB: hx("0x204"),
pGewR: "effectVolume",
hcofl: hx("0x205"),
tsadv: hx("0x206"),
nezFd: hx("0x207"),
ofYOx: hx("0xc3"),
YFrDc: hx("0x208")
}, zt = function() {
var t = {
LCuBx: Zt[hx("0x209")],
tZwUM: Zt[hx("0x20a")]
};
function e() {
for (var e = t[hx("0x20b")][hx("0x41")]("|"), n = 0; ;) {
switch (e[n++]) {
case "0":
this[hx("0x20c")] = "";
continue;

case "1":
this._effectVolume = 1;
continue;

case "2":
this[hx("0x20d")] = cc[hx("0x20e")].DebugMode[hx("0x20f")];
continue;

case "3":
this._externallyLoadURL = "";
continue;

case "4":
this[hx("0x210")] = !1;
continue;

case "5":
this[hx("0x211")] = !1;
continue;

case "6":
this[hx("0x212")] = !1;
continue;

case "7":
this._isEffectOnMute = !1;
continue;

case "8":
this[hx("0x213")] = null;
continue;

case "9":
this[hx("0x214")] = 1;
continue;

case "10":
this[hx("0x215")] = Wt[hx("0x6f")][hx("0x1f3")][hx("0x1dc")];
continue;

case "11":
this[hx("0x216")] = !0;
continue;

case "12":
this._autoCount = Wt.type.AutoType[hx("0x13f")];
continue;
}
break;
}
}
Object.defineProperty(e, "instance", {
get: function() {
this[hx("0xcb")] || (this[hx("0xcb")] = new e());
return this._instance;
},
enumerable: !1,
configurable: !0
});
e.prototype[hx("0x217")] = function(t) {
this[hx("0x213")] = t;
return this;
};
e[hx("0x30")].setMusicVolume = function(t) {
this[hx("0x214")] = t;
return this;
};
e[hx("0x30")][hx("0x218")] = function(t) {
this[hx("0x219")] = t;
return this;
};
e.prototype[hx("0x21a")] = function(t) {
this._isMusicOnMute = t;
return this;
};
e[hx("0x30")][hx("0x21b")] = function(t) {
this[hx("0x21c")] = t;
return this;
};
e.prototype.setAutoCont = function(t) {
this._autoCount = t;
return this;
};
e.prototype[hx("0x21d")] = function(t) {
this[hx("0x21e")] = t;
return this;
};
e.prototype[hx("0x21f")] = function(t) {
this[hx("0x215")] = t;
return this;
};
e[hx("0x30")][hx("0x220")] = function(t) {
this[hx("0x211")] = t;
return this;
};
e[hx("0x30")][hx("0x221")] = function(t) {
this[hx("0x212")] = t;
return this;
};
e.prototype[hx("0x222")] = function(t) {
this[hx("0x216")] = t;
return this;
};
e[hx("0x30")][hx("0x223")] = function(t) {
this[hx("0x20d")] = t;
return this;
};
e[hx("0x30")][hx("0x224")] = function(t) {
this[hx("0x20c")] = t;
return this;
};
e[hx("0x30")].build = function() {
cc[hx("0x20e")][t.tZwUM](this[hx("0x20d")]);
Wt.ErrorManager[hx("0xca")](this);
Wt[hx("0x225")].setInstance(this);
Wt[hx("0x226")].setInstance(this);
Wt.EventManager[hx("0xca")](this);
Wt[hx("0x1ca")][hx("0xca")](this);
Wt.FSMManager[hx("0xca")]();
Wt[hx("0x227")][hx("0xca")](this);
Wt[hx("0x1d9")].setInstance(this);
};
Object[hx("0xcd")](e[hx("0x30")], Zt[hx("0x228")], {
get: function() {
return this._externallyLoadURL;
},
enumerable: !1,
configurable: !0
});
Object[hx("0xcd")](e[hx("0x30")], Zt.gQOzd, {
get: function() {
return this[hx("0x213")];
},
enumerable: !1,
configurable: !0
});
Object[hx("0xcd")](e[hx("0x30")], Zt[hx("0x229")], {
get: function() {
return this[hx("0x211")];
},
enumerable: !1,
configurable: !0
});
Object[hx("0xcd")](e.prototype, Zt[hx("0x22a")], {
get: function() {
return this[hx("0x22b")];
},
enumerable: !1,
configurable: !0
});
Object[hx("0xcd")](e[hx("0x30")], Zt[hx("0x22c")], {
get: function() {
return this[hx("0x212")];
},
enumerable: !1,
configurable: !0
});
Object[hx("0xcd")](e[hx("0x30")], hx("0x22d"), {
get: function() {
return this[hx("0x214")];
},
enumerable: !1,
configurable: !0
});
Object[hx("0xcd")](e[hx("0x30")], Zt.pGewR, {
get: function() {
return this._effectVolume;
},
enumerable: !1,
configurable: !0
});
Object[hx("0xcd")](e[hx("0x30")], Zt[hx("0x22e")], {
get: function() {
return this._language;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(e[hx("0x30")], hx("0x158"), {
get: function() {
return this[hx("0x216")];
},
enumerable: !1,
configurable: !0
});
Object[hx("0xcd")](e.prototype, Zt.tsadv, {
get: function() {
return this[hx("0x21c")];
},
enumerable: !1,
configurable: !0
});
Object[hx("0xcd")](e[hx("0x30")], Zt[hx("0x22f")], {
get: function() {
return this[hx("0x210")];
},
enumerable: !1,
configurable: !0
});
Object[hx("0xcd")](e[hx("0x30")], Zt[hx("0x230")], {
get: function() {
return this[hx("0x20c")];
},
enumerable: !1,
configurable: !0
});
Object[hx("0xcd")](e[hx("0x30")], Zt[hx("0x231")], {
get: function() {
return this._cocosDebugSetting;
},
enumerable: !1,
configurable: !0
});
return e;
}(), Wt[hx("0x232")] = zt;
Gt = (Kt = ux || (ux = {})).ABS || (Kt[hx("0x16a")] = {}), Vt = function() {
function t(t, e, n, x) {
this[hx("0x233")] = t;
this[hx("0x6f")] = e;
this[hx("0x234")] = n;
this.parameter = x;
}
t[hx("0x235")] = document[hx("0x236")]("head")[0];
return t;
}(), Gt[hx("0x237")] = Vt;
Qt = ux || (ux = {}), Jt = {
LVWes: hx("0x238"),
akZHY: function(t, e) {
return t + e;
},
sOSlT: hx("0x239"),
IdSqx: hx("0x23a")
}, qt = function(t) {
var e = {
KhQAJ: Jt[hx("0x23b")],
TgBoi: function(t, e) {
return Jt.akZHY(t, e);
},
ktTtj: function(t, e) {
return Jt[hx("0x23c")](t, e);
},
gKVrV: function(t, e) {
return Jt[hx("0x23c")](t, e);
},
fRQvW: function(t, e) {
return t + e;
},
ydwHx: Jt[hx("0x23d")],
BuKTp: Jt[hx("0x23e")]
};
gx(n, t);
function n(n, x, i, r) {
var c = t[hx("0x3")](this, n, x, i, r) || this;
c.linkElem = document[hx("0x23f")](e.KhQAJ);
return c;
}
n.prototype[hx("0x240")] = function() {
for (var t = "0|4|5|7|8|1|6|2|3".split("|"), n = 0; ;) {
switch (t[n++]) {
case "0":
var x = this;
continue;

case "1":
this[hx("0x241")].href = i;
continue;

case "2":
this[hx("0x241")][hx("0x242")] = function() {
Qt[hx("0x1ca")].instance.loadScriptEventCallback(x.scriptName, !0);
};
continue;

case "3":
Qt[hx("0x16a")][hx("0x237")].head[hx("0x243")](this[hx("0x241")]);
continue;

case "4":
var i = e.TgBoi(e[hx("0x244")](e.ktTtj(e[hx("0x245")](e[hx("0x246")](Qt[hx("0x232")][hx("0xce")][hx("0x201")], "/"), this[hx("0x234")]), "/") + this.scriptName, e[hx("0x247")]), this[hx("0x248")]);
continue;

case "5":
Qt[hx("0x1ca")].instance.scriptRes[hx("0x15f")](i) && Qt[hx("0x9e")][hx("0xce")][hx("0xa0")](Qt.type.ErrorType[hx("0x60")], e[hx("0x249")] + i);
continue;

case "6":
this[hx("0x241")].onload = function() {
Qt[hx("0x1ca")][hx("0xce")][hx("0x24a")][hx("0x162")](i);
Qt[hx("0x16a")].ALoadScriptType[hx("0x235")].appendChild(x.linkElem);
Qt.LoadResManager[hx("0xce")][hx("0x24b")](x.scriptName, !1);
};
continue;

case "7":
this[hx("0x241")].rel = hx("0x24c");
continue;

case "8":
this[hx("0x241")][hx("0x6f")] = this[hx("0x6f")];
continue;
}
break;
}
};
return n;
}(Qt.ABS[hx("0x237")]), Qt.CSSLoad = qt;
Xt = ux || (ux = {}), Yt = {
YhXLS: "script",
nGsfN: "7|4|0|2|6|3|1|5",
OuCaY: function(t, e) {
return t + e;
},
JKefW: function(t, e, n) {
return t(e, n);
}
}, $t = function(t) {
var e = {
iNfDf: Yt[hx("0x24d")],
pXKVc: Yt[hx("0x24e")],
YsHFO: function(t, e) {
return Yt[hx("0x24f")](t, e);
},
gdNqu: "請勿重複加載已有的外部腳本 : ",
YXnjQ: function(t, e) {
return t + e;
},
zKaoH: function(t, e) {
return t + e;
},
dHtAD: function(t, e) {
return t + e;
}
};
Yt[hx("0x250")](gx, n, t);
function n(n, x, i, r) {
var c = t[hx("0x3")](this, n, x, i, r) || this;
c[hx("0x241")] = document[hx("0x23f")](e[hx("0x251")]);
return c;
}
n[hx("0x30")].loadScript = function() {
for (var t = e[hx("0x252")][hx("0x41")]("|"), n = 0; ;) {
switch (t[n++]) {
case "0":
Xt[hx("0x1ca")].instance.scriptRes[hx("0x15f")](x) && Xt[hx("0x9e")].instance[hx("0xa0")](Xt[hx("0x6f")][hx("0x6e")][hx("0x60")], e[hx("0x253")](e[hx("0x254")], x));
continue;

case "1":
this.linkElem[hx("0x242")] = function() {
Xt[hx("0x1ca")].instance[hx("0x24b")](i.scriptName, !0);
};
continue;

case "2":
this.linkElem[hx("0x6f")] = this[hx("0x6f")];
continue;

case "3":
this[hx("0x241")][hx("0x255")] = function() {
Xt[hx("0x1ca")][hx("0xce")][hx("0x24a")][hx("0x162")](x);
Xt.LoadResManager.instance.loadScriptEventCallback(i[hx("0x233")], !1);
};
continue;

case "4":
var x = e[hx("0x253")](e[hx("0x253")](e[hx("0x256")](e.zKaoH(e[hx("0x257")](e[hx("0x258")](Xt.SlotConfigManager.instance.externallyLoadURL, "/"), this[hx("0x234")]), "/"), this[hx("0x233")]), ".js"), this.parameter);
continue;

case "5":
Xt.ABS[hx("0x237")][hx("0x235")][hx("0x243")](this.linkElem);
continue;

case "6":
this[hx("0x241")].src = x;
continue;

case "7":
var i = this;
continue;
}
break;
}
};
return n;
}(Xt.ABS.ALoadScriptType), Xt[hx("0x259")] = $t;
xe = ux || (ux = {}), ie = {
SqqsU: function(t, e) {
return t instanceof e;
},
BchLB: hx("0x25a"),
wEKbD: function(t, e) {
return t >= e;
},
hAWli: function(t, e) {
return t - e;
},
EovVr: function(t, e) {
return t > e;
},
Tpbir: function(t, e) {
return t !== e;
}
}, te = xe[hx("0x16a")] || (xe[hx("0x16a")] = {}), ee = function(t, e) {
return ie[hx("0x25b")](t, e);
}, ne = function() {
var t = {
vbACF: hx("0x25c"),
kFMZx: function(t, e) {
return ie[hx("0x25d")](t, e);
},
UujWK: function(t, e) {
return t == e;
},
aIUlA: function(t, e) {
return t + e;
},
Rrgov: ie[hx("0x25e")],
KbbCm: function(t, e) {
return ie.wEKbD(t, e);
},
LzUQF: function(t, e) {
return ie[hx("0x25f")](t, e);
},
KoAcu: function(t, e) {
return ie[hx("0x260")](t, e);
}
};
function e(e) {
for (var n = t[hx("0x261")][hx("0x41")]("|"), x = 0; ;) {
switch (n[x++]) {
case "0":
this[hx("0x262")] = e[hx("0x262")];
continue;

case "1":
this[hx("0x263")] = 0;
continue;

case "2":
this[hx("0x234")] = e[hx("0x234")];
continue;

case "3":
this[hx("0x264")] = e[hx("0x264")];
continue;

case "4":
this[hx("0x265")] = e.dataName;
continue;

case "5":
this[hx("0x6f")] = e[hx("0x266")];
continue;

case "6":
this[hx("0x267")] = cc[hx("0x268")][hx("0x269")](this[hx("0x264")]);
continue;
}
break;
}
}
e.prototype[hx("0x26a")] = function() {
ee(this[hx("0x6f")], cc[hx("0x26b")]) ? this[hx("0x267")][hx("0x26c")](this[hx("0x234")], this.type, this[hx("0x26d")].bind(this), this.loadResCallBack[hx("0x26e")](this)) : this[hx("0x267")][hx("0x26f")](this.dataName, cc.SceneAsset, this[hx("0x26d")][hx("0x26e")](this), this[hx("0x270")][hx("0x26e")](this));
};
e[hx("0x30")][hx("0x270")] = function(e, n) {
e ? xe[hx("0x9e")][hx("0xce")][hx("0xa0")](xe.type[hx("0x6e")][hx("0x60")], e) : !t[hx("0x271")](n, cc.SceneAsset) && t[hx("0x272")](n[hx("0x25")], 0) && xe.ErrorManager[hx("0xce")][hx("0xa0")](xe[hx("0x6f")][hx("0x6e")][hx("0x60")], t.aIUlA(t[hx("0x273")](t[hx("0x274")], this.url), " "));
this.setResToManager(this[hx("0x265")], n);
};
e[hx("0x30")][hx("0x26d")] = function(e, n) {
var x = xe[hx("0x275")][hx("0x112")][hx("0xff")](e / n, 2);
if (x > this[hx("0x263")]) {
t.KbbCm(x, 1) && (x = .99);
this[hx("0x276")](this[hx("0x265")], x, t[hx("0x277")](x, this.beforeProgress));
this[hx("0x263")] = x;
}
};
e[hx("0x30")].updateProgressEnd = function() {
if (this[hx("0x262")]) {
xe[hx("0x1ca")][hx("0xce")][hx("0x278")].set(this[hx("0x265")], 1);
xe[hx("0x1ca")][hx("0xce")][hx("0x279")](this.dataName, .01, 1);
} else {
xe[hx("0x1ca")][hx("0xce")].secondaryLoadState[hx("0x98")](this.dataName, 1);
xe[hx("0x1ca")].instance[hx("0x27a")](this[hx("0x265")], 1);
}
this[hx("0x27b")]();
};
e[hx("0x30")][hx("0x27b")] = function() {
if (xe[hx("0x1ca")].instance[hx("0x27c")][hx("0x25")]) {
xe[hx("0x1ca")][hx("0xce")][hx("0x27c")].shift();
if (t[hx("0x27d")](xe.LoadResManager[hx("0xce")][hx("0x27c")][hx("0x25")], 0)) {
var e = xe[hx("0x1ca")][hx("0xce")][hx("0x27c")][0];
xe.LoadResManager[hx("0xce")].executeLoad(e);
}
}
};
e[hx("0x30")].updateManagerState = function(t, e, n) {
if (this.isMainLoad) {
xe[hx("0x1ca")][hx("0xce")].initialLoadState[hx("0x98")](t, e);
xe.LoadResManager[hx("0xce")].loadMainEventCallback(t, n, e);
} else {
xe[hx("0x1ca")][hx("0xce")][hx("0x27e")][hx("0x98")](t, e);
xe[hx("0x1ca")][hx("0xce")].loadSecondaryEventCallback(t, e);
}
};
return e;
}(), te[hx("0x27f")] = ne;
re = ux || (ux = {}), ce = {
tJWrf: function(t, e) {
return t !== e;
},
yDRxQ: hx("0x280"),
kFoTH: function(t, e, n) {
return t(e, n);
}
}, oe = function(t) {
var e = {
AZcbl: ce[hx("0x281")]
};
ce[hx("0x282")](gx, n, t);
function n() {
return ce.tJWrf(t, null) && t[hx("0x17")](this, arguments) || this;
}
n[hx("0x30")][hx("0x283")] = function(t, n) {
for (var x = e[hx("0x284")][hx("0x41")]("|"), i = 0; ;) {
switch (x[i++]) {
case "0":
var r = new Map();
continue;

case "1":
var c, o;
continue;

case "2":
re[hx("0x1ca")][hx("0xce")].imgRes.set(t, r);
continue;

case "3":
this[hx("0x285")]();
continue;

case "4":
try {
for (var u = yx(n), a = u[hx("0x6")](); !a[hx("0x7")]; a = u[hx("0x6")]()) {
var s = a[hx("0x9")];
r[hx("0x98")](s[hx("0x286")], s);
}
} catch (t) {
c = {
error: t
};
} finally {
try {
a && !a[hx("0x7")] && (o = u.return) && o[hx("0x3")](u);
} finally {
if (c) throw c[hx("0xb")];
}
}
continue;
}
break;
}
};
return n;
}(re.ABS[hx("0x27f")]), re[hx("0x287")] = oe;
ue = ux || (ux = {}), ae = {
rjLdn: function(t, e) {
return t !== e;
},
gRLji: function(t, e) {
return t(e);
},
DjFhl: hx("0x288"),
xhKpU: function(t, e, n) {
return t(e, n);
}
}, se = function(t) {
ae[hx("0x289")](gx, e, t);
function e() {
return ae.rjLdn(t, null) && t[hx("0x17")](this, arguments) || this;
}
e[hx("0x30")][hx("0x283")] = function(t, e) {
var n, x;
try {
for (var i = ae.gRLji(yx, e), r = i[hx("0x6")](); !r[hx("0x7")]; r = i[hx("0x6")]()) {
var c = r.value, o = c.name;
ue[hx("0x1ca")].instance[hx("0x28a")][hx("0x15f")](o) && ue[hx("0x9e")][hx("0xce")].executeError(ue[hx("0x6f")][hx("0x6e")][hx("0x60")], o + ae[hx("0x28b")]);
ue[hx("0x1ca")][hx("0xce")][hx("0x28a")].set(o, c);
}
} catch (t) {
n = {
error: t
};
} finally {
try {
r && !r[hx("0x7")] && (x = i.return) && x.call(i);
} finally {
if (n) throw n[hx("0xb")];
}
}
this[hx("0x285")]();
};
return e;
}(ue.ABS[hx("0x27f")]), ue[hx("0x28c")] = se;
fe = ux || (ux = {}), he = {
vQKoV: function(t, e) {
return t !== e;
},
CJSMX: function(t, e) {
return t(e);
},
PZwxx: " prefab名稱重複,請檢查是否有相同名稱prefab",
jkZOK: function(t, e, n) {
return t(e, n);
}
}, le = function(t) {
var e = {
ORoVt: function(t, e) {
return he.CJSMX(t, e);
},
crrXZ: he.PZwxx
};
he.jkZOK(gx, n, t);
function n() {
return he[hx("0x28d")](t, null) && t[hx("0x17")](this, arguments) || this;
}
n[hx("0x30")][hx("0x283")] = function(t, n) {
var x, i;
try {
for (var r = e[hx("0x28e")](yx, n), c = r.next(); !c[hx("0x7")]; c = r[hx("0x6")]()) {
var o = c[hx("0x9")];
if (fe[hx("0x1ca")][hx("0xce")].prefabRes[hx("0x15f")](o[hx("0x286")])) {
fe[hx("0x9e")][hx("0xce")][hx("0xa0")](fe[hx("0x6f")].ErrorType[hx("0x60")], o[hx("0x286")] + e.crrXZ);
return;
}
fe[hx("0x1ca")][hx("0xce")][hx("0x28f")].set(o[hx("0x286")], o);
}
} catch (t) {
x = {
error: t
};
} finally {
try {
c && !c[hx("0x7")] && (i = r[hx("0x19")]) && i[hx("0x3")](r);
} finally {
if (x) throw x[hx("0xb")];
}
}
this[hx("0x285")]();
};
return n;
}(fe[hx("0x16a")][hx("0x27f")]), fe[hx("0x290")] = le;
be = ux || (ux = {}), de = {
EhhfU: function(t, e) {
return t !== e;
},
VAIRZ: hx("0x291"),
dtMDm: function(t, e, n) {
return t(e, n);
}
}, pe = function(t) {
var e = {
cYWDX: function(t, e) {
return de.EhhfU(t, e);
},
FPBQQ: de[hx("0x292")]
};
de[hx("0x293")](gx, n, t);
function n() {
return e[hx("0x294")](t, null) && t.apply(this, arguments) || this;
}
n[hx("0x30")][hx("0x283")] = function(t, n) {
be[hx("0x1ca")][hx("0xce")][hx("0x24a")].has(t) && be[hx("0x9e")][hx("0xce")][hx("0xa0")](be[hx("0x6f")][hx("0x6e")][hx("0x60")], t + e[hx("0x295")]);
be[hx("0x1ca")][hx("0xce")][hx("0x1c8")].set(t, n);
this[hx("0x285")]();
};
return n;
}(be[hx("0x16a")].ALoadType), be.SceneLoad = pe;
ge = ux || (ux = {}), ye = {
DocSj: "請檢察資源是否以載入過,鍵值重複",
QUOGg: "grid",
jWQRC: function(t, e) {
return t(e);
},
GnrOO: function(t, e) {
return t === e;
},
KqPZt: function(t, e) {
return t + e;
},
YOFtK: hx("0x296"),
IpAkd: function(t, e, n) {
return t(e, n);
}
}, Se = function(t) {
ye[hx("0x297")](gx, e, t);
function e() {
return null !== t && t[hx("0x17")](this, arguments) || this;
}
e.prototype[hx("0x283")] = function(t, e) {
var n, x, i, r;
ge[hx("0x1ca")][hx("0xce")][hx("0x298")][hx("0x15f")](t) && ge.ErrorManager[hx("0xce")][hx("0xa0")](ge.type[hx("0x6e")][hx("0x60")], ye[hx("0x299")]);
ge[hx("0x1ca")].instance.spineRes.set(t, e[0]);
var c = t.toLowerCase()[hx("0x29a")](ye.QUOGg);
try {
for (var o = ye[hx("0x29b")](yx, e), u = o[hx("0x6")](); !u.done; u = o[hx("0x6")]()) {
var a = u[hx("0x9")], s = Object.keys(a[hx("0x29c")][hx("0x29d")]), f = new Map();
try {
for (var h = (i = void 0, ye.jWQRC(yx, s)), l = h[hx("0x6")](); !l[hx("0x7")]; l = h.next()) {
var b = l[hx("0x9")];
if (c) {
var d = b.replace(/[^0-9]/gi, "");
if (ye[hx("0x29e")](d, "")) f[hx("0x98")](b, b); else {
f[hx("0x15f")](d) && ge[hx("0x9e")][hx("0xce")][hx("0xa0")](ge[hx("0x6f")].ErrorType[hx("0x60")], ye[hx("0x29f")](b, ye[hx("0x2a0")]));
f[hx("0x98")](d, b);
}
} else f[hx("0x98")](b, b);
}
} catch (t) {
i = {
error: t
};
} finally {
try {
l && !l[hx("0x7")] && (r = h[hx("0x19")]) && r[hx("0x3")](h);
} finally {
if (i) throw i[hx("0xb")];
}
}
}
} catch (t) {
n = {
error: t
};
} finally {
try {
u && !u[hx("0x7")] && (x = o.return) && x[hx("0x3")](o);
} finally {
if (n) throw n[hx("0xb")];
}
}
this.updateProgressEnd();
};
return e;
}(ge[hx("0x16a")][hx("0x27f")]), ge[hx("0x2a1")] = Se;
ve = ux || (ux = {}), me = {
rBbfr: function(t, e) {
return t !== e;
},
rkDYp: "text",
cikRL: function(t, e) {
return t(e);
},
ayRCf: function(t, e, n) {
return t(e, n);
}
}, Ee = function(t) {
var e = {
rGFjE: me[hx("0x2a2")],
UVbEz: function(t, e) {
return me.cikRL(t, e);
}
};
me[hx("0x2a3")](gx, n, t);
function n() {
return me[hx("0x2a4")](t, null) && t[hx("0x17")](this, arguments) || this;
}
n.prototype[hx("0x283")] = function(t, n) {
var x, i, r = n[0][e[hx("0x2a5")]][hx("0x41")](/[\s\n]/), c = new Map();
try {
for (var o = e.UVbEz(yx, r), u = o[hx("0x6")](); !u[hx("0x7")]; u = o.next()) {
var a = u[hx("0x9")][hx("0x41")](","), s = a[0], f = a[1];
if ("" != s) {
var h = f.replace(/['"]/g, "");
c.set(s, h);
}
}
} catch (t) {
x = {
error: t
};
} finally {
try {
u && !u[hx("0x7")] && (i = o[hx("0x19")]) && i[hx("0x3")](o);
} finally {
if (x) throw x[hx("0xb")];
}
}
ve[hx("0x1ca")].instance[hx("0x2a6")][hx("0x98")](t, c);
this[hx("0x285")]();
};
return n;
}(ve[hx("0x16a")].ALoadType), ve[hx("0x2a7")] = Ee;
Me = ux || (ux = {}), we = {
EtbXH: hx("0x2a8"),
ztWMv: function(t) {
return t();
},
ZfUwA: hx("0x2a9"),
HFMXV: hx("0x2aa"),
GpHFw: hx("0x2ab"),
vWmUB: hx("0x2ac"),
FXFvX: function(t, e, n) {
return t(e, n);
},
GMrbl: function(t, e, n) {
return t(e, n);
},
KdIkv: function(t, e, n, x, i) {
return t(e, n, x, i);
},
CopHz: function(t, e, n) {
return t(e, n);
},
ynrHJ: hx("0x2ad")
}, Te = function() {
var t = {
QJJpi: function(t) {
return we[hx("0x2ae")](t);
},
FsToI: we[hx("0x2af")],
SKhZL: function(t, e, n) {
return we[hx("0x2b0")](t, e, n);
},
zBnwB: function(t, e, n) {
return we[hx("0x2b1")](t, e, n);
},
CbAdF: function(t, e, n, x, i) {
return we[hx("0x2b2")](t, e, n, x, i);
},
iuXVL: function(t, e, n) {
return we.CopHz(t, e, n);
},
WJVbM: we[hx("0x2b3")]
};
function e(t, e) {
this[hx("0x72")] = e;
this[hx("0x2b4")] = t;
this.assetBundles = new Map();
}
e.prototype.loadOutSideBundle = function(e) {
var n = this;
return new Promise(function(x) {
if (n[hx("0x2b6")].has(e.bundleName)) return x();
var i = {
version: e[hx("0x2b7")]
};
cc.assetManager[hx("0x2b8")](e[hx("0x2b9")], i, function(i, r) {
i && Me[hx("0x9e")][hx("0xce")].executeError(Me[hx("0x6f")][hx("0x6e")][hx("0x60")], i);
n[hx("0x2b6")][hx("0x98")](e[hx("0x2ba")], r);
c = x, t[hx("0x2b5")](c);
var c;
});
});
};
e[hx("0x30")][hx("0x2bb")] = function() {
var e = {
QHXXs: we[hx("0x2af")],
QFEhg: function(t) {
return we[hx("0x2ae")](t);
}
}, n = this;
return new Promise(function(x) {
if (n[hx("0x2b6")].has(hx("0x2a8"))) return x();
cc.assetManager[hx("0x2b8")](t.FsToI, function(t, i) {
t && Me.ErrorManager.instance.executeError(Me.type[hx("0x6e")][hx("0x60")], t);
n[hx("0x2b6")][hx("0x98")](e[hx("0x2bc")], i);
e[hx("0x2bd")](x);
});
});
};
e[hx("0x30")][hx("0x2be")] = function(t, e, n) {
var x = {
dataName: t,
type: e,
url: n,
folder: we.ZfUwA,
isMainLoad: !0,
ccType: void 0
};
this[hx("0x2bf")](x);
};
e.prototype.executeLoadBundle = function(e, n, x) {
return dx(this, void 0, void 0, function() {
var i, r = {
ZgYpA: t[hx("0x2c0")]
};
return t.SKhZL(px, this, function(t) {
switch (t[hx("0x21")]) {
case 0:
return [ 4, this.loadInSideBundle(e, n, x) ];

case 1:
t[hx("0x155")]();
i = {
dataName: e,
type: n,
url: x,
folder: r[hx("0x2c1")],
isMainLoad: !1,
ccType: void 0
};
this[hx("0x2bf")](i);
return [ 2 ];
}
});
});
};
e[hx("0x30")][hx("0x2c2")] = function(e) {
return t[hx("0x2c3")](dx, this, void 0, void 0, function() {
var n;
return t[hx("0x2c4")](px, this, function(t) {
switch (t.label) {
case 0:
return [ 4, this[hx("0x2c5")](e) ];

case 1:
t[hx("0x155")]();
n = {
dataName: e[hx("0x286")],
type: e[hx("0x2c6")],
url: e[hx("0x234")],
folder: e[hx("0x2ba")],
isMainLoad: !1,
ccType: void 0
};
this[hx("0x2bf")](n);
return [ 2 ];
}
});
});
};
e[hx("0x30")].executeMainLoadOutSideBundle = function(e) {
return t[hx("0x2c3")](dx, this, void 0, void 0, function() {
var n, x, i, r;
return x = px, i = this, r = function(t) {
switch (t.label) {
case 0:
return [ 4, this[hx("0x2c5")](e) ];

case 1:
t[hx("0x155")]();
n = {
dataName: e[hx("0x286")],
type: e.loadType,
url: e.url,
folder: e[hx("0x2ba")],
isMainLoad: !0,
ccType: void 0
};
this[hx("0x2bf")](n);
return [ 2 ];
}
}, t[hx("0x2c7")](x, i, r);
});
};
e[hx("0x30")][hx("0x2bf")] = function(e) {
switch (e[hx("0x6f")]) {
case Me[hx("0x6f")][hx("0x121")].IMG:
e[hx("0x266")] = cc.SpriteFrame;
new (Me[hx("0x287")])(e)[hx("0x26a")]();
break;

case Me[hx("0x6f")][hx("0x121")][hx("0x11e")]:
e.ccType = cc[hx("0x2c8")];
new (Me[hx("0x2c9")])(e).loadResources();
break;

case Me[hx("0x6f")].LoadType[hx("0x114")]:
e[hx("0x266")] = cc[hx("0x2ca")];
new (Me[hx("0x28c")])(e).loadResources();
break;

case Me[hx("0x6f")][hx("0x121")][hx("0x2cb")]:
e[hx("0x266")] = cc[hx("0x2cc")];
new (Me[hx("0x290")])(e)[hx("0x26a")]();
break;

case Me.type[hx("0x121")][hx("0x117")]:
e[hx("0x266")] = sp[hx("0x2cd")];
new (Me[hx("0x2a1")])(e).loadResources();
break;

case Me.type[hx("0x121")][hx("0x115")]:
e.ccType = cc[hx("0x26b")];
new (Me[hx("0x2ce")])(e)[hx("0x26a")]();
break;

case Me[hx("0x6f")][hx("0x121")][hx("0x11a")]:
e.ccType = cc[hx("0x2cf")];
new Me.TextLoad(e).loadResources();
break;

default:
Me[hx("0x9e")][hx("0xce")][hx("0xa0")](Me[hx("0x6f")][hx("0x6e")][hx("0x46")], t[hx("0x2d0")]);
}
};
e[hx("0x30")][hx("0x2d1")] = function(t, e, n, x) {
switch (e) {
case Me[hx("0x6f")][hx("0x121")][hx("0x2d2")]:
new (Me[hx("0x2d3")])(t, we[hx("0x2d4")], n, x).loadScript();
break;

case Me[hx("0x6f")][hx("0x121")][hx("0x116")]:
new (Me[hx("0x259")])(t, we[hx("0x2d5")], n, x)[hx("0x240")]();
break;

default:
Me[hx("0x9e")][hx("0xce")][hx("0xa0")](Me[hx("0x6f")].ErrorType[hx("0x46")], we.vWmUB);
}
};
return e;
}(), Me.LoadTypeFactory = Te;
Le = ux || (ux = {}), Ae = {
Wqhsa: function(t, e, n, x, i) {
return t(e, n, x, i);
},
Xgkmb: function(t, e, n, x, i) {
return t(e, n, x, i);
},
wJepg: function(t, e) {
return t + e;
},
REbAR: " 此(主資源)已載入過了,或名稱重複,請檢察",
EQHIg: function(t, e) {
return t + e;
}
}, Re = function() {
function t(t, e) {
this.loadResManager = t;
this[hx("0x2d6")] = new Le.LoadTypeFactory(t, e);
}
t[hx("0x30")][hx("0x2be")] = function(t, e, n) {
this.checkRepeatTheName(t);
this.loadResManager[hx("0x278")][hx("0x98")](t, null);
this.factory[hx("0x2be")](t, e, n);
};
t[hx("0x30")][hx("0x2d7")] = function(t, e, n) {
return Ae.Wqhsa(dx, this, void 0, void 0, function() {
return px(this, function(x) {
switch (x.label) {
case 0:
this[hx("0x2d8")](t);
this[hx("0x2b4")][hx("0x27e")][hx("0x98")](t, null);
return [ 4, this[hx("0x2d6")].executeLoadBundle(t, e, n) ];

case 1:
x.sent();
return [ 2 ];
}
});
});
};
t[hx("0x30")][hx("0x2d9")] = function(t) {
return Ae[hx("0x2da")](dx, this, void 0, void 0, function() {
return px(this, function(e) {
switch (e[hx("0x21")]) {
case 0:
this.checkRepeatTheName(t[hx("0x286")]);
this[hx("0x2b4")].initialLoadState[hx("0x98")](t[hx("0x286")], null);
return [ 4, this[hx("0x2d6")].executeMainLoadOutSideBundle(t) ];

case 1:
e[hx("0x155")]();
return [ 2 ];
}
});
});
};
t.prototype[hx("0x2c2")] = function(t) {
return Ae.Xgkmb(dx, this, void 0, void 0, function() {
return px(this, function(e) {
switch (e[hx("0x21")]) {
case 0:
this.checkRepeatTheName(t[hx("0x286")]);
this.loadResManager.secondaryLoadState[hx("0x98")](t[hx("0x286")], null);
return [ 4, this[hx("0x2d6")].executeLoadOutSideBundle(t) ];

case 1:
e[hx("0x155")]();
return [ 2 ];
}
});
});
};
t[hx("0x30")][hx("0x2d8")] = function(t) {
this.loadResManager[hx("0x278")][hx("0x15f")](t) && Le[hx("0x9e")][hx("0xce")][hx("0xa0")](Le[hx("0x6f")][hx("0x6e")][hx("0x60")], Ae[hx("0x2db")](t, Ae[hx("0x2dc")]));
this.loadResManager[hx("0x27e")][hx("0x15f")](t) && Le[hx("0x9e")][hx("0xce")][hx("0xa0")](Le[hx("0x6f")].ErrorType[hx("0x60")], Ae.EQHIg(t, hx("0x2dd")));
};
t[hx("0x30")][hx("0x2d1")] = function(t, e, n, x) {
this[hx("0x2d6")][hx("0x2d1")](t, e, n, x);
};
return t;
}(), Le[hx("0x2de")] = Re;
Ne = ux || (ux = {}), Oe = {
FSUhT: hx("0x2df"),
PBXzZ: hx("0x2e0"),
mtfMP: function(t, e) {
return t == e;
},
OoXRJ: function(t, e) {
return t + e;
},
rYaEd: hx("0x2e1"),
Qfaqi: hx("0x2e2"),
vFcBV: function(t, e) {
return t / e;
},
awYvS: function(t, e) {
return t == e;
},
XVurh: function(t, e, n) {
return t(e, n);
},
wQriH: function(t, e) {
return t(e);
},
LraCV: function(t, e) {
return t + e;
},
MPZIT: function(t, e) {
return t === e;
},
mKarp: hx("0xce"),
QsNEm: "secondaryLoadState",
QbRsn: "imgRes",
JrXcr: hx("0x2a6"),
jnglo: "prefabRes",
Gtgzj: "musicRes",
psIMX: hx("0x24a"),
lsaDv: "scriptLoadState"
}, ke = function() {
var t = {
bRiDs: function(t, e) {
return Oe.vFcBV(t, e);
},
uthpV: function(t, e) {
return t >= e;
},
RwBYR: function(t, e) {
return Oe.awYvS(t, e);
},
XGuqp: function(t, e) {
return Oe[hx("0x2e3")](t, e);
},
PHivM: function(t, e, n) {
return Oe.XVurh(t, e, n);
},
kTsOj: function(t, e) {
return Oe[hx("0x2e4")](t, e);
},
vewXh: function(t, e) {
return Oe.LraCV(t, e);
},
MOnIH: function(t, e) {
return Oe[hx("0x2e5")](t, e);
},
dhdKg: function(t, e) {
return t == e;
},
kMsPx: function(t, e) {
return Oe[hx("0x2e6")](t, e);
}
};
function e(t) {
for (var e = Oe[hx("0x2e7")][hx("0x41")]("|"), n = 0; ;) {
switch (e[n++]) {
case "0":
this[hx("0x2e8")] = new Map();
continue;

case "1":
this[hx("0x2e9")] = 0;
continue;

case "2":
this.allProgress = 0;
continue;

case "3":
this[hx("0x2ea")] = new (Ne[hx("0x2de")])(this, t);
continue;

case "4":
this[hx("0x263")] = 0;
continue;

case "5":
this[hx("0x2eb")] = new Map();
continue;

case "6":
this[hx("0x180")] = new Map();
continue;

case "7":
this._musicRes = new Map();
continue;

case "8":
this._scriptLoadState = new Map();
continue;

case "9":
this[hx("0x2ec")] = new Map();
continue;

case "10":
this[hx("0x72")] = t;
continue;

case "11":
this.currentLoadOrder = new Array();
continue;

case "12":
this[hx("0x2ed")] = new Set();
continue;

case "13":
this[hx("0x2ee")] = new Map();
continue;

case "14":
this[hx("0x2ef")] = new Map();
continue;

case "15":
this[hx("0x2f0")] = new Map();
continue;

case "16":
this._readFileRes = new Map();
continue;

case "17":
this[hx("0x2f1")] = 0;
continue;
}
break;
}
}
e[hx("0xca")] = function(t) {
if (!this[hx("0xcb")]) {
this[hx("0xcb")] = new e(t);
Ne[hx("0x2f2")] = this._instance;
}
};
Object.defineProperty(e, Oe.mKarp, {
get: function() {
if (this[hx("0xcb")]) return this._instance;
Ne[hx("0x9e")][hx("0xce")][hx("0xa0")](Ne[hx("0x6f")][hx("0x6e")][hx("0x60")], hx("0x134"));
},
enumerable: !1,
configurable: !0
});
e[hx("0x30")][hx("0x279")] = function(e, n, x) {
this[hx("0x2f3")](e, x);
this[hx("0x2f4")] += t[hx("0x2f5")](n, this[hx("0x2e9")]);
t[hx("0x2f6")](this.allProgress, 1) && (this.allProgress = .99);
if (t[hx("0x2f7")](x, 1)) {
this[hx("0x2f1")] += 1;
t[hx("0x2f8")](this[hx("0x2f1")], this[hx("0x2e9")]) && (this[hx("0x2f4")] = 1);
}
if (this[hx("0x180")][hx("0x15f")](null)) {
if (Ne[hx("0x275")][hx("0x112")][hx("0xff")](this[hx("0x263")], 2) == Ne[hx("0x275")].Util[hx("0xff")](this[hx("0x2f4")], 2)) return;
this[hx("0x263")] = this.allProgress;
this[hx("0x180")].get(null)(Ne.global[hx("0x112")][hx("0xff")](this.allProgress, 2));
if (this[hx("0x2f4")] >= 1) {
this.count = 0;
this[hx("0x180")][hx("0x163")](null);
}
}
};
e[hx("0x30")][hx("0x27a")] = function(t, e) {
this[hx("0x2f3")](t, e);
};
e[hx("0x30")][hx("0x24b")] = function(t, e) {
this[hx("0x2f3")](t, 1, e);
};
e.prototype[hx("0x2f3")] = function(e, n, x) {
if (this[hx("0x180")][hx("0x15f")](e)) {
var i = this.callFun[hx("0x1cb")](e);
1 == n && this[hx("0x180")].delete(e);
x ? t[hx("0x2f9")](i, n, x) : t[hx("0x2fa")](i, n);
}
};
e[hx("0x30")][hx("0x2fb")] = function(t, e, n, x) {
for (var i = Oe[hx("0x2fc")][hx("0x41")]("|"), r = 0; ;) {
switch (i[r++]) {
case "0":
Oe[hx("0x2fd")](this[hx("0x27c")][hx("0x25")], 0) && this.loadTypeHandler.executeLoad(t, e, n);
continue;

case "1":
x && (n = Oe[hx("0x2fe")](Oe[hx("0x2fe")](n, "/"), this[hx("0x72")][hx("0x205")]));
continue;

case "2":
return this;

case "3":
this.currentLoadOrder[hx("0x8")]({
name: t,
loadType: e,
url: n,
assetMode: Ne[hx("0x6f")][hx("0x12e")][hx("0x122")]
});
continue;

case "4":
this[hx("0x2e9")] += 1;
continue;
}
break;
}
};
e[hx("0x30")][hx("0x2b8")] = function(e, n, x, i) {
i && (x = t.vewXh(t[hx("0x2ff")](x, "/"), this.configManager.language));
0 == this[hx("0x27c")][hx("0x25")] && this[hx("0x2ea")][hx("0x2d7")](e, n, x).then();
this[hx("0x27c")].push({
name: e,
loadType: n,
url: x,
assetMode: Ne[hx("0x6f")][hx("0x12e")].IN_SIDE_BUNDLE
});
return this;
};
e.prototype[hx("0x300")] = function(t) {
this[hx("0x2e9")] += 1;
t[hx("0x301")] && (t[hx("0x234")] = Oe[hx("0x2fe")](Oe[hx("0x2fe")](t[hx("0x234")], "/"), this[hx("0x72")][hx("0x205")]));
Oe.mtfMP(this[hx("0x27c")][hx("0x25")], 0) && this[hx("0x2ea")][hx("0x2d9")](t)[hx("0x302")]();
this[hx("0x27c")].push(t);
return this;
};
e[hx("0x30")][hx("0x303")] = function(t) {
t.isLanguageUsed && (t[hx("0x234")] = Oe[hx("0x2fe")](t[hx("0x234")] + "/", this[hx("0x72")].language));
Oe[hx("0x2fd")](this[hx("0x27c")][hx("0x25")], 0) && this[hx("0x2ea")][hx("0x2c2")](t)[hx("0x302")]();
this.currentLoadOrder.push(t);
return this;
};
e[hx("0x30")][hx("0x2be")] = function(t) {
switch (t[hx("0x304")]) {
case Ne[hx("0x6f")][hx("0x12e")].RESOURCES:
this[hx("0x2ea")][hx("0x2be")](t[hx("0x286")], t.loadType, t.url);
break;

case Ne[hx("0x6f")][hx("0x12e")][hx("0x123")]:
this[hx("0x2ea")][hx("0x2d7")](t[hx("0x286")], t.loadType, t[hx("0x234")])[hx("0x302")]();
break;

case Ne[hx("0x6f")].ASSET_MODE[hx("0x124")]:
this.loadTypeHandler[hx("0x2d9")](t)[hx("0x302")]();
break;

case Ne[hx("0x6f")][hx("0x12e")].OUT_SIDE_ASSET:
this[hx("0x2ea")][hx("0x2c2")](t).then();
}
};
e[hx("0x30")][hx("0x305")] = function(t, e) {
if (e) {
if (this.callFun[hx("0x15f")](e)) {
Ne[hx("0x9e")][hx("0xce")][hx("0xa0")](Ne[hx("0x6f")][hx("0x6e")][hx("0x60")], Oe[hx("0x306")]);
return;
}
this.callFun[hx("0x98")](e, t);
return this;
}
this[hx("0x180")][hx("0x15f")](null) ? Ne.ErrorManager[hx("0xce")][hx("0xa0")](Ne[hx("0x6f")][hx("0x6e")][hx("0x60")], Oe[hx("0x307")]) : this[hx("0x180")][hx("0x98")](null, t);
};
e[hx("0x30")][hx("0x308")] = function(e, n) {
return n ? t[hx("0x2f8")](this._initialLoadState.get(e), 1) : t[hx("0x309")](this[hx("0x2ef")][hx("0x1cb")](e), 1);
};
e[hx("0x30")][hx("0x30a")] = function(e, n, x, i) {
t[hx("0x30b")](i, void 0) && (i = "");
this[hx("0x2ea")][hx("0x2d1")](e, n, x, i);
return this;
};
e[hx("0x30")][hx("0x30c")] = function(t) {
switch (t) {
case Ne.type.LoadType.SPINE:
this[hx("0x298")].clear();
break;

case Ne[hx("0x6f")][hx("0x121")][hx("0x114")]:
this[hx("0x28a")][hx("0x166")]();
break;

case Ne[hx("0x6f")][hx("0x121")][hx("0x2cb")]:
this.prefabRes[hx("0x166")]();
break;

case Ne.type[hx("0x121")][hx("0x115")]:
this[hx("0x1c8")][hx("0x166")]();
break;

case Ne[hx("0x6f")][hx("0x121")][hx("0x11a")]:
this[hx("0x2a6")].clear();
}
};
Object[hx("0xcd")](e.prototype, hx("0x278"), {
get: function() {
return this[hx("0x2eb")];
},
set: function(t) {
this[hx("0x2eb")] = t;
},
enumerable: !1,
configurable: !0
});
Object[hx("0xcd")](e[hx("0x30")], Oe.QsNEm, {
get: function() {
return this._secondaryLoadState;
},
set: function(t) {
this[hx("0x2ef")] = t;
},
enumerable: !1,
configurable: !0
});
Object[hx("0xcd")](e[hx("0x30")], Oe[hx("0x30d")], {
get: function() {
return this[hx("0x2f0")];
},
set: function(t) {
this[hx("0x2f0")] = t;
},
enumerable: !1,
configurable: !0
});
Object[hx("0xcd")](e[hx("0x30")], hx("0x298"), {
get: function() {
return this[hx("0x2ec")];
},
set: function(t) {
this._spineRes = t;
},
enumerable: !1,
configurable: !0
});
Object[hx("0xcd")](e[hx("0x30")], Oe[hx("0x30e")], {
get: function() {
return this[hx("0x30f")];
},
set: function(t) {
this._readFileRes = t;
},
enumerable: !1,
configurable: !0
});
Object[hx("0xcd")](e[hx("0x30")], Oe.jnglo, {
get: function() {
return this[hx("0x2e8")];
},
set: function(t) {
this[hx("0x2e8")] = t;
},
enumerable: !1,
configurable: !0
});
Object[hx("0xcd")](e[hx("0x30")], Oe[hx("0x310")], {
get: function() {
return this[hx("0x311")];
},
set: function(t) {
this[hx("0x311")] = t;
},
enumerable: !1,
configurable: !0
});
Object[hx("0xcd")](e.prototype, Oe.psIMX, {
get: function() {
return this._scriptRes;
},
set: function(t) {
this[hx("0x2ed")] = t;
},
enumerable: !1,
configurable: !0
});
Object[hx("0xcd")](e[hx("0x30")], hx("0x1c8"), {
get: function() {
return this[hx("0x2ee")];
},
set: function(t) {
this._sceneRes = t;
},
enumerable: !1,
configurable: !0
});
Object[hx("0xcd")](e[hx("0x30")], Oe[hx("0x312")], {
get: function() {
return this[hx("0x313")];
},
enumerable: !1,
configurable: !0
});
return e;
}(), Ne[hx("0x1ca")] = ke;
(function(t) {
var e, n = {
WadPl: hx("0x314"),
NGhDy: hx("0x315"),
Ooegm: hx("0x316"),
yMuKE: hx("0x317"),
zGvmQ: hx("0x318"),
LqMGI: function(t, e) {
return t + e;
},
hJWaq: hx("0x319"),
znaUR: function(t, e) {
return t == e;
},
EQfyF: function(t, e) {
return t == e;
}
};
(function(t) {
t[t[n[hx("0x31a")]] = -1] = n[hx("0x31a")];
t[t[n[hx("0x31b")]] = 1] = "PLAYING";
t[t[n[hx("0x31c")]] = 2] = n[hx("0x31c")];
})(e || (e = {}));
var x = function() {
var x = {
ibfMN: function(t, e) {
return t != e;
}
};
function i() {
this.musicID = null;
}
i.prototype[hx("0x31d")] = function(x, i) {
var r = i[hx("0x1cb")](n[hx("0x31e")]), c = i.get(n.zGvmQ), o = cc.audioEngine[hx("0x31f")](this[hx("0x320")]);
if (t[hx("0x1ca")][hx("0xce")][hx("0x28a")][hx("0x15f")](x)) if (n[hx("0x323")](o, e.PAUSE)) cc[hx("0x324")][hx("0x325")](this.musicID); else {
n[hx("0x326")](o, e[hx("0x315")]) && this.stop();
var u = t[hx("0x1ca")][hx("0xce")].musicRes[hx("0x1cb")](x), a = cc[hx("0x324")].playMusic(u, c);
cc[hx("0x324")][hx("0x327")](a, r);
this.musicID = a;
} else t.ErrorManager[hx("0xce")][hx("0xa0")](t[hx("0x6f")].ErrorType.AUDIO_FW, n[hx("0x321")](x, n[hx("0x322")]));
};
i.prototype[hx("0x328")] = function() {
cc[hx("0x324")][hx("0x327")](this[hx("0x320")], 0);
cc[hx("0x324")][hx("0x328")](this.musicID);
};
i[hx("0x30")][hx("0x329")] = function() {
x[hx("0x32a")](cc[hx("0x324")].getState(this[hx("0x320")]), cc.audioEngine[hx("0x32b")][hx("0x315")]) || cc[hx("0x324")][hx("0x329")](this[hx("0x320")]);
};
return i;
}();
t[hx("0x32c")] = x;
})(ux || (ux = {}));
_e = ux || (ux = {}), Ce = {
oMyqK: hx("0x32d"),
LtGnM: "canSuperimpose",
aymNm: function(t, e) {
return t === e;
},
Qspqi: "volume",
GTqre: function(t, e) {
return t + e;
},
PERZd: " 無此資源,請檢察資源類 musicRes內的資源是否錯誤",
iULQR: function(t, e) {
return t === e;
},
qrhIr: hx("0x318"),
AlMCf: function(t, e) {
return t(e);
}
}, Be = function() {
function t() {
this[hx("0x32e")] = new Map();
}
t[hx("0x30")][hx("0x31d")] = function(t, e) {
for (var n = Ce[hx("0x32f")][hx("0x41")]("|"), x = 0; ;) {
switch (n[x++]) {
case "0":
var i = e[hx("0x1cb")](Ce[hx("0x330")]);
continue;

case "1":
Ce[hx("0x331")](i, _e.type[hx("0xec")].CLEAR_TO_REPLAY) && s && cc.audioEngine[hx("0x328")](o);
continue;

case "2":
var r = e.get(Ce[hx("0x332")]);
continue;

case "3":
if (!_e[hx("0x1ca")][hx("0xce")][hx("0x28a")][hx("0x15f")](t)) {
_e[hx("0x9e")][hx("0xce")].executeError(_e.type[hx("0x6e")][hx("0x57")], Ce.GTqre(t, Ce.PERZd));
return;
}
continue;

case "4":
s = cc.audioEngine[hx("0x31f")](o) != cc[hx("0x324")][hx("0x32b")].ERROR;
continue;

case "5":
var c = cc[hx("0x324")][hx("0x333")](a, u);
continue;

case "6":
cc[hx("0x324")][hx("0x327")](c, r);
continue;

case "7":
var o = this.effectID[hx("0x1cb")](t);
continue;

case "8":
if (Ce[hx("0x334")](i, _e[hx("0x6f")].AudioStateType[hx("0xe4")]) && s) return;
continue;

case "9":
this.effectID[hx("0x98")](t, c);
continue;

case "10":
var u = e[hx("0x1cb")](Ce[hx("0x335")]);
continue;

case "11":
var a = _e.LoadResManager[hx("0xce")][hx("0x28a")][hx("0x1cb")](t);
continue;

case "12":
var s;
continue;
}
break;
}
};
t[hx("0x30")][hx("0x328")] = function(t) {
if (this[hx("0x32e")].has(t)) {
cc[hx("0x324")].stop(this[hx("0x32e")][hx("0x1cb")](t));
this[hx("0x32e")][hx("0x163")](t);
}
};
t.prototype[hx("0x336")] = function() {
var t, e;
try {
for (var n = Ce[hx("0x337")](yx, this[hx("0x32e")][hx("0x338")]()), x = n[hx("0x6")](); !x.done; x = n[hx("0x6")]()) {
var i = x[hx("0x9")];
cc[hx("0x324")][hx("0x328")](this[hx("0x32e")][hx("0x1cb")](i));
}
} catch (e) {
t = {
error: e
};
} finally {
try {
x && !x[hx("0x7")] && (e = n[hx("0x19")]) && e[hx("0x3")](n);
} finally {
if (t) throw t.error;
}
}
this[hx("0x32e")][hx("0x166")]();
};
return t;
}(), _e[hx("0x339")] = Be;
Pe = ux || (ux = {}), Ie = {
KPFSD: hx("0x33a"),
DiLnL: function(t, e) {
return t === e;
},
hTwFt: hx("0x317"),
EYnTk: hx("0x318"),
GOCXV: hx("0x33b"),
IPZrU: function(t, e) {
return t === e;
},
yAEnm: hx("0x33c")
}, Fe = function() {
var t = {
bghTB: hx("0x33d"),
tCSHh: Ie.hTwFt,
UGupb: "loop"
};
function e(t, e) {
for (var n = Ie[hx("0x33e")][hx("0x41")]("|"), x = 0; ;) {
switch (n[x++]) {
case "0":
this.initializeData();
continue;

case "1":
this[hx("0x33f")] = new Map();
continue;

case "2":
this[hx("0x340")] = new (Pe[hx("0x32c")])();
continue;

case "3":
this[hx("0x341")] = this[hx("0x72")][hx("0x206")];
continue;

case "4":
this[hx("0x72")] = e;
continue;

case "5":
this[hx("0x33c")] = !1;
continue;

case "6":
this[hx("0x318")] = !1;
continue;

case "7":
this[hx("0x22d")] = this[hx("0x72")][hx("0x22d")];
continue;

case "8":
this[hx("0x342")] = new Map();
continue;

case "9":
this[hx("0x343")] = this.configManager.effectVolume;
continue;

case "10":
this[hx("0x344")] = new Pe.EffectController();
continue;

case "11":
this[hx("0x345")] = t;
continue;

case "12":
this[hx("0x346")] = this[hx("0x72")][hx("0x207")];
continue;
}
break;
}
}
e[hx("0x30")][hx("0x347")] = function() {
for (var e = t[hx("0x348")].split("|"), n = 0; ;) {
switch (e[n++]) {
case "0":
this.musicNormalData.set(t[hx("0x349")], this[hx("0x22d")]);
continue;

case "1":
this[hx("0x34a")] = new Map();
continue;

case "2":
this[hx("0x34a")].set(t.UGupb, this[hx("0x318")]);
continue;

case "3":
this[hx("0x34a")][hx("0x98")](hx("0x33c"), Pe[hx("0x6f")].AudioStateType[hx("0xe4")]);
continue;

case "4":
this[hx("0x34b")][hx("0x98")](t[hx("0x34c")], this[hx("0x318")]);
continue;

case "5":
this.effectNormalData[hx("0x98")]("volume", this.effectVolume);
continue;

case "6":
this[hx("0x34b")] = new Map();
continue;
}
break;
}
};
e[hx("0x30")][hx("0x34d")] = function(t, e, n) {
Ie[hx("0x34e")](e, void 0) && (e = this.musicVolume);
void 0 === n && (n = this[hx("0x318")]);
var x = new Map();
x[hx("0x98")](Ie[hx("0x34f")], e);
x[hx("0x98")](Ie[hx("0x350")], n);
this.musicData[hx("0x98")](t, x);
};
e[hx("0x30")][hx("0x351")] = function(t, e, n, x) {
for (var i = Ie.GOCXV[hx("0x41")]("|"), r = 0; ;) {
switch (i[r++]) {
case "0":
void 0 === n && (n = this.musicVolume);
continue;

case "1":
Ie.IPZrU(e, void 0) && (e = Pe[hx("0x6f")][hx("0xec")][hx("0xe4")]);
continue;

case "2":
c[hx("0x98")](Ie.yAEnm, e);
continue;

case "3":
var c = new Map();
continue;

case "4":
this[hx("0x342")][hx("0x98")](t, c);
continue;

case "5":
Ie.IPZrU(x, void 0) && (x = this[hx("0x318")]);
continue;

case "6":
c.set(Ie.hTwFt, n);
continue;

case "7":
c[hx("0x98")](Ie.EYnTk, x);
continue;
}
break;
}
};
e.prototype[hx("0x352")] = function(t) {
if (t[hx("0xc4")]() && !this[hx("0x345")][hx("0x346")]) if (this[hx("0x33f")].has(t)) this[hx("0x340")].play(t, this.musicData[hx("0x1cb")](t)); else {
this.musicData[hx("0x98")](t, this[hx("0x34b")]);
this[hx("0x340")][hx("0x31d")](t, this[hx("0x34b")]);
}
};
e[hx("0x30")][hx("0x353")] = function(t) {
if (t[hx("0xc4")]() && !this[hx("0x345")][hx("0x341")]) if (this[hx("0x342")].has(t)) this[hx("0x344")][hx("0x31d")](t, this[hx("0x342")].get(t)); else {
this[hx("0x342")][hx("0x98")](t, this[hx("0x34a")]);
this[hx("0x344")][hx("0x31d")](t, this[hx("0x34a")]);
}
};
e[hx("0x30")][hx("0x354")] = function() {
this[hx("0x340")][hx("0x328")]();
};
e[hx("0x30")][hx("0x355")] = function() {
this[hx("0x340")][hx("0x329")]();
};
e[hx("0x30")][hx("0x356")] = function(t) {
this.effectController[hx("0x328")](t);
};
e[hx("0x30")].effectStopAll = function() {
this.effectController[hx("0x336")]();
};
e[hx("0x30")][hx("0x357")] = function(t) {
return this.musicData[hx("0x1cb")](t);
};
e[hx("0x30")][hx("0x358")] = function(t) {
return this.effectData.get(t);
};
return e;
}(), Pe[hx("0x359")] = Fe;
(function(t) {
var e = {
keiAC: hx("0x35a"),
lEzdo: hx("0x341"),
OKMGN: hx("0x346"),
SVaMt: function(t, e) {
return t < e;
},
dwhIu: function(t, e) {
return t < e;
},
SjIQt: function(t, e, n) {
return t(e, n);
},
cqOEZ: function(t, e) {
return t(e);
}
}, n = function() {
function n(e) {
this[hx("0x72")] = e;
this[hx("0x2d6")] = new (t[hx("0x359")])(this, e);
this._effectOnMute = this[hx("0x72")][hx("0x206")];
this[hx("0x35b")] = this[hx("0x72")][hx("0x207")];
}
n[hx("0xca")] = function(e) {
if (!this._instance) {
this[hx("0xcb")] = new n(e);
t[hx("0x35c")] = this[hx("0xcb")];
}
};
Object.defineProperty(n, "instance", {
get: function() {
if (this[hx("0xcb")]) return this[hx("0xcb")];
t.ErrorManager[hx("0xce")][hx("0xa0")](t[hx("0x6f")][hx("0x6e")][hx("0x57")], "該類尚未實例化");
},
enumerable: !1,
configurable: !0
});
n.prototype[hx("0x34d")] = function(t, e, n) {
this[hx("0x2d6")].settingMusic(t, e, n);
return this;
};
n.prototype[hx("0x351")] = function(n, x, i, r) {
x === t[hx("0x6f")].AudioStateType[hx("0xe5")] && r && t[hx("0x9e")][hx("0xce")][hx("0xa0")](t[hx("0x6f")][hx("0x6e")][hx("0x57")], n + e.keiAC);
this.factory.settingEffect(n, x, i, r);
return this;
};
n[hx("0x30")].musicPlay = function(t) {
this.factory[hx("0x352")](t);
};
n[hx("0x30")][hx("0x353")] = function(t) {
this.factory.effectPlay(t);
};
n.prototype[hx("0x354")] = function() {
this[hx("0x2d6")][hx("0x354")]();
};
n[hx("0x30")][hx("0x355")] = function() {
this[hx("0x2d6")][hx("0x355")]();
};
n.prototype[hx("0x356")] = function(t) {
this[hx("0x2d6")][hx("0x356")](t);
};
n[hx("0x30")][hx("0x35d")] = function() {
this.factory.effectStopAll();
};
n[hx("0x30")][hx("0x357")] = function(t) {
return this.factory[hx("0x357")](t);
};
n[hx("0x30")][hx("0x358")] = function(t) {
return this[hx("0x2d6")][hx("0x358")](t);
};
n.prototype[hx("0x35e")] = function() {
this[hx("0x35f")] = !this[hx("0x35f")];
this[hx("0x35f")] && this[hx("0x2d6")][hx("0x35d")]();
return this[hx("0x35f")];
};
n.prototype[hx("0x360")] = function() {
this[hx("0x35b")] = !this[hx("0x35b")];
this[hx("0x35b")] && this[hx("0x355")]();
return this[hx("0x35b")];
};
Object[hx("0xcd")](n[hx("0x30")], e[hx("0x361")], {
get: function() {
return this[hx("0x35f")];
},
enumerable: !1,
configurable: !0
});
Object[hx("0xcd")](n.prototype, e[hx("0x362")], {
get: function() {
return this[hx("0x35b")];
},
enumerable: !1,
configurable: !0
});
return n;
}();
t[hx("0x225")] = n;
t[hx("0x364")] = function(t) {
return function(e, x, i) {
i[hx("0x363")] = !0;
var r = i[hx("0x9")];
i.value = function() {
for (var e = [], x = 0; x < arguments[hx("0x25")]; x++) e[x] = arguments[x];
n[hx("0xce")][hx("0x352")](t);
return r.call[hx("0x17")](r, bx([ this ], lx(e)));
};
};
};
t[hx("0x366")] = function() {
var t = function(t, n) {
return e[hx("0x365")](t, n);
};
return function(e, x, i) {
i.enumerable = !0;
var r = i.value;
i[hx("0x9")] = function() {
for (var e = [], x = 0; t(x, arguments[hx("0x25")]); x++) e[x] = arguments[x];
n[hx("0xce")][hx("0x354")]();
return r.call[hx("0x17")](r, bx([ this ], lx(e)));
};
};
};
t.Effect = function() {
for (var t = {
ZvbVD: function(t, e) {
return t < e;
}
}, x = [], i = 0; e[hx("0x365")](i, arguments[hx("0x25")]); i++) x[i] = arguments[i];
return function(e, i, r) {
var c = {
ocEXg: function(e, n) {
return t[hx("0x367")](e, n);
},
VjTjP: function(t, e, n) {
return t(e, n);
},
jkPHC: function(t, e) {
return t(e);
}
};
r[hx("0x363")] = !0;
var o = r[hx("0x9")];
r.value = function() {
for (var t = [], e = 0; c.ocEXg(e, arguments[hx("0x25")]); e++) t[e] = arguments[e];
x[hx("0x368")](function(t) {
n[hx("0xce")][hx("0x353")](t);
});
return o[hx("0x3")][hx("0x17")](o, c.VjTjP(bx, [ this ], c[hx("0x369")](lx, t)));
};
};
};
t[hx("0x36c")] = function() {
for (var t = [], x = 0; e[hx("0x36a")](x, arguments[hx("0x25")]); x++) t[x] = arguments[x];
return function(x, i, r) {
var c = function(t, n) {
return e[hx("0x36a")](t, n);
}, o = function(t, n, x) {
return e.SjIQt(t, n, x);
}, u = function(t, n) {
return e[hx("0x36b")](t, n);
};
r[hx("0x363")] = !0;
var a = r.value;
r[hx("0x9")] = function() {
for (var e = [], x = 0; c(x, arguments[hx("0x25")]); x++) e[x] = arguments[x];
t.forEach(function(t) {
n[hx("0xce")][hx("0x356")](t);
});
return a.call[hx("0x17")](a, o(bx, [ this ], u(lx, e)));
};
};
};
})(ux || (ux = {}));
De = ux || (ux = {}), je = {
SlySv: function(t, e) {
return t != e;
},
JgbMS: function(t, e) {
return t(e);
},
eWjTu: hx("0x134"),
mPQaC: hx("0x36d"),
kDZiu: hx("0xce"),
KXyOm: hx("0x36e"),
eZEju: hx("0x36f"),
dyZEn: "Arial,Arial Unicode MS"
}, Ue = {
fontSize: 36,
lineHeight: 46,
textScale: {
default: 1,
title: 1.2,
text: .8
},
fontFamily: je[hx("0x370")]
}, He = {
fontSize: 36,
lineHeight: 46,
textScale: {
default: 1,
title: 1.2,
text: .8
},
fontFamily: je[hx("0x370")]
}, We = {
fontSize: 30,
lineHeight: 40,
textScale: {
default: 1,
title: 1.2,
text: .8
},
fontFamily: je.eZEju
}, Ze = {
fontSize: 30,
lineHeight: 40,
textScale: {
default: 1,
title: 1.2,
text: .8
},
fontFamily: je[hx("0x371")]
}, ze = {
fontSize: 30,
lineHeight: 46,
textScale: {
default: 1,
title: 1.2,
text: .8
},
fontFamily: je.eZEju
}, Ge = {
fontSize: 30,
lineHeight: 40,
textScale: {
default: 1,
title: 1.2,
text: .8
},
fontFamily: je[hx("0x371")]
}, Ve = {
fontSize: 30,
lineHeight: 40,
textScale: {
default: 1,
title: 1.2,
text: .8
},
fontFamily: je[hx("0x372")]
}, Ke = {
fontSize: 30,
lineHeight: 40,
textScale: {
default: 1,
title: 1.2,
text: .8
},
fontFamily: "Arial Unicode MS,Arial"
}, Qe = function() {
var t = {
sNGEW: je.eWjTu,
cMJdR: je.mPQaC
};
function e(t) {
for (var e = hx("0x373")[hx("0x41")]("|"), n = 0; ;) {
switch (e[n++]) {
case "0":
this[hx("0x72")] = t;
continue;

case "1":
this._nowLanguageLabels = new Map();
continue;

case "2":
this[hx("0x374")] = new Array();
continue;

case "3":
this[hx("0x375")]();
continue;

case "4":
this._style = new Map();
continue;

case "5":
this[hx("0x376")] = this[hx("0x72")].language;
continue;
}
break;
}
}
e[hx("0xca")] = function(t) {
if (!this[hx("0xcb")]) {
this[hx("0xcb")] = new e(t);
De[hx("0x377")] = this[hx("0xcb")];
}
};
Object.defineProperty(e, je.kDZiu, {
get: function() {
if (this._instance) return this._instance;
De[hx("0x9e")].instance[hx("0xa0")](De.type[hx("0x6e")][hx("0x57")], t[hx("0x378")]);
},
enumerable: !1,
configurable: !0
});
e[hx("0x30")].initDefaultStyle = function() {
for (var e = t.cMJdR.split("|"), n = 0; ;) {
switch (e[n++]) {
case "0":
this[hx("0x379")].set(De.type.LanguageType[hx("0x37a")], We);
continue;

case "1":
this[hx("0x379")][hx("0x98")](De[hx("0x6f")].LanguageType[hx("0x37b")], Ve);
continue;

case "2":
this._style[hx("0x98")](De[hx("0x6f")].LanguageType[hx("0x37c")], He);
continue;

case "3":
this[hx("0x379")][hx("0x98")](De[hx("0x6f")].LanguageType[hx("0x1dc")], Ue);
continue;

case "4":
this._style[hx("0x98")](De[hx("0x6f")][hx("0x1f3")][hx("0x1ed")], Ze);
continue;

case "5":
this[hx("0x379")].set(De[hx("0x6f")][hx("0x1f3")][hx("0x1e0")], ze);
continue;

case "6":
this[hx("0x379")][hx("0x98")](De[hx("0x6f")][hx("0x1f3")][hx("0x37d")], Ge);
continue;

case "7":
this[hx("0x379")][hx("0x98")](De.type.LanguageType.MALAYSIA, Ke);
continue;
}
break;
}
};
e[hx("0x30")][hx("0x37e")] = function(t, e) {
this._style[hx("0x98")](t, e);
};
e.prototype[hx("0x37f")] = function(t) {
var e, n, x, i;
if (je[hx("0x380")](this[hx("0x376")], t)) {
this[hx("0x376")] = t;
try {
for (var r = je.JgbMS(yx, this[hx("0x374")]), c = r[hx("0x6")](); !c[hx("0x7")]; c = r.next()) {
var o = c[hx("0x9")];
try {
for (var u = (x = void 0, je.JgbMS(yx, o.keys())), a = u[hx("0x6")](); !a[hx("0x7")]; a = u[hx("0x6")]()) {
var s = a[hx("0x9")], f = o[hx("0x1cb")](s);
this[hx("0x381")](s, f);
}
} catch (t) {
x = {
error: t
};
} finally {
try {
a && !a[hx("0x7")] && (i = u.return) && i.call(u);
} finally {
if (x) throw x[hx("0xb")];
}
}
}
} catch (t) {
e = {
error: t
};
} finally {
try {
c && !c[hx("0x7")] && (n = r[hx("0x19")]) && n[hx("0x3")](r);
} finally {
if (e) throw e[hx("0xb")];
}
}
this[hx("0x382")](!1);
}
};
e[hx("0x30")][hx("0x21f")] = function(t) {
this[hx("0x383")] || (this.languageCache = t[this[hx("0x376")]]);
};
e[hx("0x30")][hx("0x384")] = function() {
return this[hx("0x376")];
};
e[hx("0x30")][hx("0x385")] = function(t) {
return this[hx("0x383")][t];
};
e[hx("0x30")][hx("0x386")] = function() {
return this[hx("0x383")];
};
e[hx("0x30")][hx("0x387")] = function(t, e) {
try {
this[hx("0x383")] = e ? t[e] : t[this._nowLang];
} catch (t) {
console[hx("0x82")](hx("0x388"), t);
}
};
e[hx("0x30")].removeStringBuffer = function() {};
e[hx("0x30")][hx("0x381")] = function(t, e) {
e && (t.string = this[hx("0x385")](e));
this._nowLanguageLabels[hx("0x98")](t, e);
return this;
};
e[hx("0x30")][hx("0x382")] = function(t, e) {
for (var n = "5|4|6|0|7|3|8|2|1"[hx("0x41")]("|"), x = 0; ;) {
switch (n[x++]) {
case "0":
var i = this._style[hx("0x1cb")](c).fontFamily;
continue;

case "1":
this[hx("0x389")][hx("0x166")]();
continue;

case "2":
t && this[hx("0x374")][hx("0x8")](this[hx("0x389")]);
continue;

case "3":
var r = this[hx("0x379")].get(c)[hx("0x38a")];
continue;

case "4":
var c = this[hx("0x376")];
continue;

case "5":
var o, u;
continue;

case "6":
this[hx("0x379")][hx("0x15f")](this[hx("0x376")]) || (c = De[hx("0x6f")][hx("0x1f3")][hx("0x37a")]);
continue;

case "7":
var a = e || this[hx("0x379")][hx("0x1cb")](c)[hx("0x38b")];
continue;

case "8":
try {
for (var s = je[hx("0x38c")](yx, this[hx("0x389")].keys()), f = s[hx("0x6")](); !f[hx("0x7")]; f = s.next()) {
var h = f[hx("0x9")];
h[hx("0x38d")] = i;
h.fontSize = a;
h[hx("0x38a")] = r;
}
} catch (t) {
o = {
error: t
};
} finally {
try {
f && !f[hx("0x7")] && (u = s[hx("0x19")]) && u.call(s);
} finally {
if (o) throw o.error;
}
}
continue;
}
break;
}
};
return e;
}(), De[hx("0x226")] = Qe;
Je = ux || (ux = {}), qe = {
BkMNp: hx("0x38e")
}, Xe = function() {
function t() {
this[hx("0x38f")] = new Map();
}
t[hx("0xce")] = function() {
this._instance || (this[hx("0xcb")] = new t());
return this._instance;
};
t[hx("0x30")][hx("0x390")] = function(t) {
this[hx("0x38f")][hx("0x15f")](t[hx("0x182")]) || this.notificationToMap.set(t[hx("0x182")], t);
return this;
};
t[hx("0x30")][hx("0x1a0")] = function(t) {
if (this[hx("0x38f")][hx("0x15f")](t)) return this.notificationToMap.get(t);
Je.ErrorManager[hx("0xce")][hx("0xa0")](Je[hx("0x6f")][hx("0x6e")][hx("0x4c")], t + qe[hx("0x391")]);
};
t[hx("0x30")][hx("0x18a")] = function(t) {
return this[hx("0x38f")][hx("0x15f")](t);
};
t.prototype[hx("0x392")] = function() {
return this.notificationToMap;
};
return t;
}(), Je[hx("0x189")] = Xe;
Ye = ux || (ux = {}), $e = {
zInIB: function(t, e) {
return t > e;
},
syoTh: function(t, e) {
return t < e;
}
}, tn = function() {
var t = {
KCyJU: function(t, e) {
return $e[hx("0x393")](t, e);
},
CBYHe: " 預製體沒有賦值 "
};
function e(e, n, x) {
this[hx("0x286")] = e;
this[hx("0x394")] = new (cc[hx("0x395")])();
this[hx("0x396")] = n;
for (var i = 0; t[hx("0x397")](i, x); i++) {
var r = this[hx("0x398")]();
this.pool[hx("0x399")](r);
}
}
e[hx("0x30")][hx("0x39a")] = function() {
return this[hx("0x286")];
};
e[hx("0x30")].get = function() {
return $e.zInIB(this[hx("0x394")][hx("0x168")](), 0) ? this[hx("0x394")][hx("0x1cb")]() : this[hx("0x398")]();
};
e[hx("0x30")][hx("0x398")] = function() {
if (this.prefab) return cc.instantiate(this[hx("0x396")]);
console.error(t[hx("0x39b")]);
return null;
};
e.prototype[hx("0x168")] = function() {
return this[hx("0x394")][hx("0x168")]();
};
e[hx("0x30")].put = function(t) {
this.pool[hx("0x399")](t);
};
e[hx("0x30")].clear = function() {
this.pool[hx("0x166")]();
};
return e;
}(), Ye[hx("0x39c")] = tn;
en = ux || (ux = {}), nn = {
zCkXJ: function(t, e) {
return t + e;
},
dKeZn: function(t, e) {
return t === e;
}
}, xn = function() {
var t = {
zNGOs: function(t, e) {
return t > e;
},
PIzuJ: function(t, e) {
return nn[hx("0x39d")](t, e);
}
};
function e(t) {
this.list = [];
this[hx("0x394")] = t;
}
e[hx("0x30")].get = function() {
return t[hx("0x39e")](this.list[hx("0x25")], 0) ? this.list.shift() : this[hx("0x394")][hx("0x1cb")]();
};
e.prototype[hx("0x39f")] = function() {
return this.pool;
};
e[hx("0x30")][hx("0x168")] = function() {
return nn[hx("0x3a0")](this.pool[hx("0x168")](), this.list[hx("0x25")]);
};
e[hx("0x30")].put = function(e, n) {
t[hx("0x3a1")](n, void 0) && (n = !1);
if (n) this.pool[hx("0x399")](e); else {
this[hx("0x3a2")][hx("0x8")](e);
e[hx("0x3a3")]();
e[hx("0x94")] = !1;
}
};
e.prototype[hx("0x166")] = function() {
this[hx("0x394")][hx("0x166")]();
this[hx("0x3a2")][hx("0x25")] = 0;
};
return e;
}(), en[hx("0x3a4")] = xn;
rn = ux || (ux = {}), cn = {
NREjw: hx("0xce")
}, on = function() {
function t() {
this[hx("0x3a5")] = new Map();
this[hx("0x3a6")] = new Map();
}
Object[hx("0xcd")](t, cn[hx("0x3a7")], {
get: function() {
this[hx("0xcb")] || (this._instance = new t());
return this[hx("0xcb")];
},
enumerable: !1,
configurable: !0
});
t[hx("0x30")].init = function(t, e, n) {
this[hx("0x3a5")].has(t) || this[hx("0x3a5")][hx("0x98")](t, new (rn[hx("0x3a4")])(new rn.CCNodePool(t, e, n)));
};
t[hx("0x30")][hx("0x39f")] = function(t) {
return this.pools[hx("0x1cb")](t)[hx("0x39f")]();
};
t[hx("0x30")][hx("0x1cb")] = function(t) {
if (this[hx("0x3a5")].has(t)) {
var e = this[hx("0x3a5")][hx("0x1cb")](t)[hx("0x1cb")]();
this[hx("0x3a6")][hx("0x15f")](e) || this[hx("0x3a6")].set(e, t);
return e;
}
return null;
};
t.prototype[hx("0x399")] = function(t, e) {
var n = this.nameMap[hx("0x1cb")](t);
if (this.pools.has(n)) {
this[hx("0x3a5")][hx("0x1cb")](n)[hx("0x399")](t, e);
this[hx("0x3a6")][hx("0x163")](t);
} else cc[hx("0x7d")](" not have name ", n, " ,go.name ", t[hx("0x286")]);
};
t.prototype[hx("0x166")] = function(t) {
if (this[hx("0x3a5")][hx("0x15f")](t)) {
this[hx("0x3a5")][hx("0x1cb")](t).clear();
this.pools[hx("0x163")](t);
}
};
t[hx("0x30")][hx("0x3a8")] = function() {
for (var t in this.pools) this[hx("0x166")](t);
this[hx("0x3a5")][hx("0x166")]();
};
return t;
}(), rn.NodePoolManager = on;
(function(t) {
t[hx("0x3a9")] = t[hx("0x232")].instance;
t[hx("0x3aa")] = t[hx("0x3ab")].instance;
t[hx("0x3ac")] = function() {
return t[hx("0x189")][hx("0xce")]();
};
})(ux || (ux = {}));
globalThis[hx("0x3ad")] = ux;
globalThis.FCC_VERSION = hx("0x3ae");
(function(t) {
var e = function() {
var e = {
cLRUn: function(t, e, n) {
return t(e, n);
}
};
function n() {
this[hx("0x3af")] = !1;
this[hx("0x3b0")] = new (t[hx("0x3b1")])();
}
n[hx("0xca")] = function() {
if (!this[hx("0xcb")]) {
this[hx("0xcb")] = new n();
t.FSMMgr = this[hx("0xcb")];
}
};
Object[hx("0xcd")](n, "instance", {
get: function() {
if (!this._instance) {
this._instance = new n();
t.FSMMgr = this[hx("0xcb")];
}
return this._instance;
},
enumerable: !1,
configurable: !0
});
n[hx("0x30")].initialState = function(t) {
this.stateHandler[hx("0x3b2")](t);
};
n.prototype[hx("0x3b3")] = function(t) {
this.stateHandler[hx("0x3b3")](t);
};
n.prototype[hx("0x3b4")] = function(t) {
this[hx("0x3b0")][hx("0x3b4")](t);
};
n[hx("0x30")][hx("0x3b5")] = function(t) {
this[hx("0x3b0")][hx("0x3b5")](t);
};
n[hx("0x30")][hx("0x3b6")] = function() {
return this[hx("0x3b0")][hx("0x3b6")]();
};
n.prototype[hx("0x3b7")] = function() {
return this[hx("0x3b0")][hx("0x3b7")]();
};
n.prototype.getCurrentState = function() {
return this[hx("0x3b0")][hx("0x3b8")]();
};
n[hx("0x30")][hx("0x3b9")] = function() {
return this[hx("0x3b0")][hx("0x3b9")]();
};
n.prototype[hx("0x3ba")] = function() {
return this.stateHandler[hx("0x3ba")]();
};
n[hx("0x30")].clearStateRecord = function() {
return this[hx("0x3b0")].clearStateRecord();
};
n.prototype[hx("0x3bb")] = function() {
return this.stateHandler[hx("0x3bb")]();
};
n[hx("0x30")][hx("0x9d")] = function(t) {
var n = {
ZzWrN: function(t, n, x) {
return e[hx("0x3bc")](t, n, x);
}
};
return dx(this, void 0, void 0, function() {
return n[hx("0x3bd")](px, this, function(e) {
switch (e[hx("0x21")]) {
case 0:
return [ 4, this.stateHandler[hx("0x9d")](t) ];

case 1:
e.sent();
return [ 2 ];
}
});
});
};
n[hx("0x30")].exit = function() {
this[hx("0x3b0")].exit();
};
n.prototype[hx("0x3be")] = function() {
return this[hx("0x3b0")][hx("0x3be")]();
};
return n;
}();
t[hx("0x3bf")] = e;
t[hx("0x3c0")] = function(e) {
return function(n) {
t[hx("0x3bf")][hx("0xce")][hx("0x3be")]().setState(e, new n());
};
};
})(ux || (ux = {}));
un = ux || (ux = {}), an = {
aDadN: function(t, e) {
return t + e;
},
fNZdX: hx("0x3c1"),
UtyQm: hx("0x3c2")
}, sn = function() {
var t = {
xtFXA: function(t, e) {
return an[hx("0x3c3")](t, e);
},
zcCpw: an[hx("0x3c4")],
BWIvb: hx("0x3c5")
};
function e(t, e) {
this._currentState = t;
this[hx("0x3c6")] = e;
}
e[hx("0x30")].canReachNext = function(e) {
if (this._nextState[hx("0x15f")](e)) return !0;
un[hx("0xcc")][hx("0xa0")](un.type[hx("0x6e")][hx("0x4b")], t.xtFXA(t.xtFXA(t[hx("0x3c7")](t[hx("0x3c8")], e), t[hx("0x3c9")]), this[hx("0x3c6")]) + " ");
return !1;
};
Object[hx("0xcd")](e.prototype, an.UtyQm, {
get: function() {
return this[hx("0x3ca")];
},
enumerable: !1,
configurable: !0
});
return e;
}(), un[hx("0x3cb")] = sn;
fn = ux || (ux = {}), hn = {
jiQFv: function(t, e) {
return t + e;
},
VYdig: function(t, e) {
return t < e;
},
HrjBP: function(t, e) {
return t(e);
},
qdldV: hx("0x3cc")
}, ln = function() {
function t(t) {
this.maxStateRecordCount = 5;
this[hx("0x3b0")] = t;
}
t[hx("0x30")][hx("0x3cd")] = function(t) {
this.maxStateRecordCount = t;
return this;
};
t[hx("0x30")][hx("0x3ce")] = function(t, e) {
if (!this.stateHandler.stateActionContainer[hx("0x15f")](t)) {
this[hx("0x3b0")][hx("0x3d1")][hx("0x98")](t, e);
return this;
}
fn.errorMgr[hx("0xa0")](fn[hx("0x6f")][hx("0x6e")][hx("0x4b")], hn[hx("0x3cf")](hx("0x3d0"), t));
};
t.prototype[hx("0x3d2")] = function() {
for (var t, e, n = [], x = 0; hn.VYdig(x, arguments[hx("0x25")]); x++) n[x] = arguments[x];
try {
for (var i = hn[hx("0x3d3")](yx, n), r = i.next(); !r[hx("0x7")]; r = i.next()) {
var c = r[hx("0x9")];
this.stateHandler.processContainer[hx("0x15f")](c.currentState) ? fn.errorMgr[hx("0xa0")](fn.type[hx("0x6e")][hx("0x4b")], hn.qdldV + c[hx("0x3c2")]) : this[hx("0x3b0")][hx("0x3d4")][hx("0x98")](c.currentState, c);
}
} catch (e) {
t = {
error: e
};
} finally {
try {
r && !r.done && (e = i[hx("0x19")]) && e.call(i);
} finally {
if (t) throw t.error;
}
}
this[hx("0x3b0")][hx("0x3d5")] || (this[hx("0x3b0")][hx("0x3d5")] = new (fn[hx("0x3d6")])(this[hx("0x3d7")]));
};
return t;
}(), fn[hx("0x3d8")] = ln;
bn = ux || (ux = {}), dn = {
vNuNr: function(t, e) {
return t + e;
},
JNKHx: hx("0x3d9"),
ZXUFo: function(t, e) {
return t(e);
},
HnlGn: hx("0x3da"),
Qbami: hx("0x3db")
}, pn = function() {
var t = {
KFbvl: hx("0x3dc"),
uHrwt: dn[hx("0x3dd")]
};
function e() {
this[hx("0x3d1")] = new Map();
this[hx("0x3d4")] = new Map();
}
e[hx("0x30")][hx("0x3b2")] = function(t) {
if (this[hx("0x3d1")].has(t)) {
this[hx("0x3d5")][hx("0x3de")](t);
this[hx("0x3d1")][hx("0x1cb")](t)[hx("0x3df")]();
} else bn[hx("0xcc")].executeError(bn[hx("0x6f")][hx("0x6e")].PROCESS_FW, dn[hx("0x3e0")](dn[hx("0x3e1")], t));
};
e.prototype[hx("0x3b3")] = function(t) {
var e, n;
if (t) this.stateActionContainer[hx("0x1cb")](t).onCreate(); else try {
for (var x = dn[hx("0x3e2")](yx, this[hx("0x3d1")][hx("0x3e3")]()), i = x.next(); !i[hx("0x7")]; i = x.next()) i[hx("0x9")][hx("0x3e4")]();
} catch (t) {
e = {
error: t
};
} finally {
try {
i && !i[hx("0x7")] && (n = x[hx("0x19")]) && n[hx("0x3")](x);
} finally {
if (e) throw e[hx("0xb")];
}
}
};
e[hx("0x30")].changeState = function(e) {
if (this[hx("0x3d5")]) {
if (this[hx("0x3d4")][hx("0x1cb")](this[hx("0x3d5")].getCurrentState())[hx("0x3e6")](e)) {
this[hx("0x3d5")][hx("0x3de")](e);
this.stateActionContainer[hx("0x1cb")](this[hx("0x3d5")][hx("0x3b8")]())[hx("0x3df")]();
}
} else bn[hx("0xcc")].executeError(bn[hx("0x6f")].ErrorType[hx("0x4b")], t[hx("0x3e5")]);
};
e[hx("0x30")][hx("0x3b5")] = function(t) {
this.stateRecorder[hx("0x3e7")]() && t && this[hx("0x3d1")][hx("0x1cb")](this[hx("0x3d5")][hx("0x3b8")]())[hx("0x3df")]();
};
e[hx("0x30")][hx("0x3b6")] = function() {
if (this[hx("0x3d5")]) return this[hx("0x3d1")][hx("0x1cb")](this[hx("0x3d5")][hx("0x3b8")]());
bn[hx("0xcc")][hx("0xa0")](bn.type.ErrorType[hx("0x4b")], dn[hx("0x3e8")]);
};
e[hx("0x30")][hx("0x3b7")] = function() {
return this[hx("0x3d4")];
};
e.prototype[hx("0x3b8")] = function() {
return this[hx("0x3d5")] ? this[hx("0x3d5")][hx("0x3b8")]() : null;
};
e[hx("0x30")].getPreviousState = function() {
return this[hx("0x3d5")] ? this[hx("0x3d5")][hx("0x3b9")]() : null;
};
e[hx("0x30")].getStateRecord = function() {
return this[hx("0x3d5")] ? this[hx("0x3d5")].getNowStateRecords() : null;
};
e[hx("0x30")][hx("0x3e9")] = function() {
return this.stateRecorder ? this.stateRecorder[hx("0x3ea")]() : null;
};
e[hx("0x30")].isExecution = function() {
return !!this[hx("0x3eb")];
};
e[hx("0x30")][hx("0x9d")] = function(e) {
var n = this;
return new Promise(function(x) {
if (n[hx("0x3eb")]) bn[hx("0xcc")][hx("0xa0")](bn[hx("0x6f")][hx("0x6e")][hx("0x4b")], t.uHrwt); else {
n.resolve = x;
n[hx("0x3b4")](e);
}
});
};
e.prototype.exit = function() {
if (this.resolve) {
this[hx("0x3eb")]();
this.resolve = null;
}
};
e[hx("0x30")][hx("0x3be")] = function() {
return new (bn[hx("0x3d8")])(this);
};
return e;
}(), bn[hx("0x3b1")] = pn;
gn = ux || (ux = {}), yn = {
kHzHj: function(t, e) {
return t < e;
},
VgoNR: function(t, e) {
return t <= e;
},
zfNct: hx("0x3ec"),
zpoKS: function(t, e) {
return t - e;
}
}, Sn = function() {
var t = {
mvPTf: function(t, e) {
return yn[hx("0x3ed")](t, e);
},
IUpys: function(t, e) {
return yn[hx("0x3ee")](t, e);
},
JPUZZ: yn[hx("0x3ef")],
fkGZS: function(t, e) {
return yn.zpoKS(t, e);
}
};
function e(t) {
this[hx("0x3f0")] = new Array(t);
this[hx("0x3f1")] = t;
this.statePointer = 0;
}
e[hx("0x30")][hx("0x3de")] = function(e) {
if (t.mvPTf(this[hx("0x3f2")], this.maxRecordCount)) {
this[hx("0x3f0")][this[hx("0x3f2")]] = e;
this.statePointer++;
} else {
this.record.shift();
this.record[hx("0x8")](e);
}
this[hx("0x3f3")] = this[hx("0x3c2")];
this.currentState = e;
};
e[hx("0x30")][hx("0x3e7")] = function() {
if (t.IUpys(this[hx("0x3f2")], 1) || !this[hx("0x3f3")]) {
cc[hx("0x7d")](t[hx("0x3f4")]);
return !1;
}
for (var e = hx("0x0")[hx("0x41")]("|"), n = 0; ;) {
switch (e[n++]) {
case "0":
this[hx("0x3f0")][t[hx("0x3f5")](this.statePointer, 1)] = null;
continue;

case "1":
this.statePointer--;
continue;

case "2":
return !0;

case "3":
t.mvPTf(this.statePointer, 3) ? this[hx("0x3f3")] = null : this[hx("0x3f3")] = this[hx("0x3f0")][this[hx("0x3f2")] - 3];
continue;

case "4":
this[hx("0x3c2")] = this[hx("0x3f0")][t[hx("0x3f5")](this[hx("0x3f2")], 2)];
continue;
}
break;
}
};
e[hx("0x30")].getCurrentState = function() {
return this[hx("0x3c2")];
};
e[hx("0x30")].getPreviousState = function() {
return this.previousState ? this.previousState : null;
};
e.prototype[hx("0x3f6")] = function() {
return this[hx("0x3f0")];
};
e.prototype[hx("0x3ea")] = function() {
var t = this[hx("0x3f0")];
this[hx("0x3f0")] = new Array(this[hx("0x3f1")]);
return t;
};
return e;
}(), gn[hx("0x3d6")] = Sn;
vn = (Mn = ux || (ux = {}))[hx("0x275")] || (Mn[hx("0x275")] = {}), mn = {
fLzkf: function(t, e) {
return t == e;
}
}, En = function() {
function t() {}
t[hx("0x3f7")] = function(t, e, n, x) {
var i = n[hx("0x1a6")], r = cc.js[hx("0x3f8")](n), c = new (cc[hx("0x3f9")][hx("0x3fa")])();
c.target = i;
c[hx("0x3fb")] = r;
c[hx("0xc7")] = e;
(x || mn[hx("0x3fc")](x, 0)) && (c.customEventData = x);
t[hx("0x3fd")][hx("0x8")](c);
};
t[hx("0x3fe")] = function(t) {
t[hx("0x9c")] = !1;
};
t[hx("0x3ff")] = function(t) {
t[hx("0x9c")] = !0;
};
t[hx("0x400")] = function(t, e, n, x) {
t.on(cc[hx("0x401")][hx("0x402")][hx("0x403")], e, n, x);
};
t[hx("0x404")] = function(t, e, n, x) {
t[hx("0x13b")](cc[hx("0x401")][hx("0x402")][hx("0x403")], e, n, x);
};
return t;
}(), vn[hx("0x9b")] = En;
An = ux || (ux = {}), Rn = {
oDmzZ: function(t, e) {
return t < e;
},
ZCIUk: function(t, e) {
return t <= e;
},
ajzcT: function(t, e) {
return t + e;
},
JMsyT: function(t, e) {
return t - e;
}
}, wn = An[hx("0x275")] || (An[hx("0x275")] = {}), Tn = {
IRXBc: function(t, e) {
return Rn[hx("0x405")](t, e);
},
VHxdL: function(t, e) {
return Rn[hx("0x406")](t, e);
},
MTegv: function(t, e) {
return t == e;
},
lXECK: function(t, e) {
return Rn.ajzcT(t, e);
},
UCWwU: function(t, e) {
return Rn[hx("0x407")](t, e);
}
}, Ln = function() {
function t() {}
t[hx("0x408")] = function(t) {
for (var e = new Map(), n = 0; Tn.IRXBc(n, t[hx("0x409")]); n++) for (var x = t.children[n], i = 0; i <= x[hx("0x409")]; i++) e.set(t[hx("0x40a")][n].name, x);
return e;
};
t[hx("0x40b")] = function(t) {
for (var e = new Map(), n = 0; n < t.childrenCount; n++) for (var x = t[hx("0x40a")][n], i = x[hx("0x40a")][n][hx("0x286")], r = 0; Tn[hx("0x40c")](r, x[hx("0x409")]); r++) if (Tn[hx("0x40d")](r, 0)) e[hx("0x98")](x[hx("0x40a")][n].name, x); else {
i += Tn[hx("0x40e")]("/", x.children[Tn[hx("0x40f")](r, 1)].name);
e[hx("0x98")](i, x[hx("0x40a")][Tn[hx("0x40f")](r, 1)]);
i = x[hx("0x40a")][n][hx("0x286")];
}
return e;
};
return t;
}(), wn.Prefab = Ln;
Nn = ux || (ux = {}), On = {
mNUas: function(t, e) {
return t > e;
}
}, kn = function() {
var t = {
mSBUI: function(t, e) {
return On[hx("0x410")](t, e);
},
kVTSL: function(t) {
return t();
}
};
function e(t) {
this[hx("0x411")] = [];
this[hx("0x412")] = t;
}
e.prototype[hx("0x1cb")] = function(e) {
return t[hx("0x413")](this[hx("0x411")][hx("0x25")], 0) ? this.buffList.shift() : t[hx("0x414")](e);
};
e[hx("0x30")][hx("0x399")] = function(t) {
this[hx("0x411")].push(t);
};
e[hx("0x30")][hx("0x168")] = function() {
return this[hx("0x411")].length;
};
e[hx("0x30")][hx("0x415")] = function() {
this[hx("0x411")][hx("0x25")] = 0;
};
return e;
}(), Nn.ObjectPool = kn;
_n = ux || (ux = {}), Cn = {
qwWXR: hx("0xce")
}, Bn = function() {
function t() {
this.map = new Map();
}
Object[hx("0xcd")](t, Cn[hx("0x416")], {
get: function() {
this[hx("0xcb")] || (this[hx("0xcb")] = new t());
return this[hx("0xcb")];
},
enumerable: !1,
configurable: !0
});
t[hx("0x30")][hx("0x1cb")] = function(t, e) {
this[hx("0x417")].has(t) || this.map[hx("0x98")](t, new (_n[hx("0x418")])(t));
return this[hx("0x417")][hx("0x1cb")](t).get(e);
};
t[hx("0x30")][hx("0x399")] = function(t, e) {
this.map[hx("0x15f")](t) && this[hx("0x417")][hx("0x1cb")](t)[hx("0x399")](e);
};
t[hx("0x30")].size = function(t) {
return this.map.has(t) ? this[hx("0x417")][hx("0x1cb")](t)[hx("0x168")]() : 0;
};
t[hx("0x30")][hx("0x415")] = function() {
this.map[hx("0x166")]();
};
return t;
}(), _n[hx("0x419")] = Bn;
Pn = ux || (ux = {}), In = {
BHEZY: function(t, e) {
return t === e;
},
FYRfu: function(t, e) {
return t < e;
}
}, Fn = function() {
var t = {
TkNyv: function(t, e) {
return t > e;
}
};
function e(t, e, n) {
In[hx("0x41a")](n, void 0) && (n = 0);
this[hx("0x394")] = [];
this.className = t;
for (var x = 0; In[hx("0x41b")](x, n); x++) this[hx("0x394")][hx("0x8")](new e());
}
e[hx("0x30")][hx("0x3f8")] = function() {
return this[hx("0x41c")];
};
e[hx("0x30")][hx("0x1cb")] = function(e) {
var n = t[hx("0x41d")](this.pool[hx("0x25")], 0) ? this[hx("0x394")][hx("0x41e")]() : null;
n || (n = new e());
return n;
};
e[hx("0x30")][hx("0x399")] = function(t) {
this[hx("0x394")][hx("0x8")](t);
};
e.prototype[hx("0x166")] = function() {
this[hx("0x394")] = [];
};
return e;
}(), Pn[hx("0x41f")] = Fn;
Dn = ux || (ux = {}), jn = {
fsHqF: function(t, e) {
return t === e;
}
}, Un = function() {
function t() {
this[hx("0x3a5")] = new Map();
}
Object[hx("0xcd")](t, hx("0xce"), {
get: function() {
this[hx("0xcb")] || (this._instance = new t());
return this[hx("0xcb")];
},
enumerable: !1,
configurable: !0
});
t.prototype[hx("0x420")] = function(t, e, n) {
void 0 === n && (n = 1);
this.pools[t] || this[hx("0x3a5")][hx("0x98")](t, new Dn.TSObjectPool(t, e, n));
};
t[hx("0x30")][hx("0x1cb")] = function(t, e, n) {
jn[hx("0x421")](n, void 0) && (n = 1);
this[hx("0x3a5")][hx("0x15f")](t) || this.pools.set(t, new Dn.TSObjectPool(t, e, n));
return this[hx("0x3a5")][hx("0x1cb")](t).get(e);
};
t[hx("0x30")][hx("0x399")] = function(t, e) {
var n = this[hx("0x3a5")].get(t);
n && n[hx("0x399")](e);
};
return t;
}(), Dn[hx("0x422")] = Un;
Hn = function() {}, (ux || (ux = {})).ABaseSlotTemplate = Hn;
zn = ux || (ux = {}), Gn = {
lLKKB: "BET_RESULT",
nNXiy: "FREE_SPIN_RESULT",
xLLle: hx("0x423"),
VILjE: hx("0x424"),
QKewg: hx("0x425"),
FPqoe: hx("0x426")
}, Wn = zn[hx("0x6f")] || (zn.type = {}), Zn = {
RDOAa: Gn[hx("0x427")],
MSUvr: Gn.nNXiy,
TuQNs: Gn[hx("0x428")],
BUoZX: Gn.VILjE,
xMmfn: Gn[hx("0x429")],
SGJwS: "GROUP_ID",
ovWmc: Gn[hx("0x42a")],
DKkEo: hx("0x42b")
}, function(t) {
t[Zn[hx("0x42c")]] = Zn[hx("0x42c")];
t[Zn.MSUvr] = hx("0x42d");
t[Zn[hx("0x42e")]] = Zn[hx("0x42e")];
t[Zn[hx("0x42f")]] = "GET_GAME_HISTORY_RESULT";
t[Zn[hx("0x430")]] = "GET_HISTORY_DETAIL_RESULT";
t[Zn[hx("0x431")]] = Zn.SGJwS;
t[Zn.ovWmc] = hx("0x426");
t[Zn.DKkEo] = Zn.DKkEo;
}(Wn.ServerEventType || (Wn[hx("0x432")] = {}));
Vn = ux || (ux = {}), Kn = {
oKqTv: hx("0x433"),
vnkOK: function(t, e) {
return t(e);
},
MIUhk: hx("0x434")
}, Qn = function(t) {
gx(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e[hx("0x30")][hx("0x283")] = function(t, e) {
for (var n = Kn[hx("0x435")][hx("0x41")]("|"), x = 0; ;) {
switch (n[x++]) {
case "0":
var i = new Map();
continue;

case "1":
try {
for (var r = Kn.vnkOK(yx, e[0][hx("0x436")]()), c = r[hx("0x6")](); !c[hx("0x7")]; c = r.next()) {
var o = c.value;
if (-1 != t.toLowerCase()[hx("0x10b")](Kn[hx("0x437")])) {
var u = o[hx("0x286")][hx("0x438")](/[^0-9]/gi, "");
0 == u[hx("0xc4")]().length && (u = o.name);
i[hx("0x98")](u, o);
} else {
var a = o[hx("0x286")];
i.set(a, o);
}
}
} catch (t) {
s = {
error: t
};
} finally {
try {
c && !c[hx("0x7")] && (f = r[hx("0x19")]) && f.call(r);
} finally {
if (s) throw s[hx("0xb")];
}
}
continue;

case "2":
this[hx("0x285")]();
continue;

case "3":
var s, f;
continue;

case "4":
Vn[hx("0x1ca")][hx("0xce")].imgRes.set(t, i);
continue;
}
break;
}
};
return e;
}(Vn[hx("0x16a")].ALoadType), Vn[hx("0x2c9")] = Qn;
Yn = ux || (ux = {}), $n = {
PaFRy: function(t, e) {
return t < e;
},
MJtOf: function(t, e, n) {
return t(e, n);
}
}, Jn = Yn.ABS || (Yn[hx("0x16a")] = {}), qn = {
FxBjq: function(t, e) {
return $n[hx("0x439")](t, e);
},
IIfKl: function(t, e, n) {
return $n[hx("0x43a")](t, e, n);
}
}, Xn = function() {
var t = {
HzIjP: function(t, e) {
return qn.FxBjq(t, e);
},
eDLCs: function(t, e, n) {
return qn[hx("0x43b")](t, e, n);
},
hKRDb: function(t, e) {
return t(e);
}
};
function e(t, e) {
this[hx("0x17d")] = !1;
this._self = e;
this[hx("0x43c")] = t;
}
e[hx("0x30")].pushNotification = function() {
for (var e, n = [], x = 0; t[hx("0x43d")](x, arguments[hx("0x25")]); x++) n[x] = arguments[x];
(e = this._callFun)[hx("0x3")].apply(e, t[hx("0x43e")](bx, [ this._self ], t[hx("0x43f")](lx, n)));
};
Object[hx("0xcd")](e[hx("0x30")], hx("0x161"), {
get: function() {
return this._isPermanent;
},
set: function(t) {
this[hx("0x17d")] = t;
},
enumerable: !1,
configurable: !0
});
return e;
}(), Jn.ABaseObserver = Xn;
xx = ux || (ux = {}), ix = {
HNhIp: hx("0x440"),
yNMdd: "slotRowGridCount",
TyZqF: hx("0x441"),
EghyF: "stopNowSpeedMultiple",
OQqUY: hx("0x442"),
WzkLn: hx("0x443"),
Gxvig: hx("0x444"),
bGSzB: hx("0x445")
}, tx = xx[hx("0x16a")] || (xx.ABS = {}), ex = {
qzffq: ix[hx("0x446")],
uwxNN: ix[hx("0x447")],
NezQJ: ix[hx("0x448")],
pNvVv: ix.EghyF,
CBMPt: hx("0x1d6"),
ErhAg: ix[hx("0x449")],
kQMZi: ix[hx("0x44a")],
ucogs: ix[hx("0x44b")],
qKCZp: "slotRowTime",
BqZmh: ix[hx("0x44c")]
}, nx = function() {
function t(t) {
this[hx("0x44d")] = t;
}
t[hx("0x30")][hx("0x44e")] = function(t) {
this[hx("0x44f")] = t;
return this;
};
t[hx("0x30")].setSlotTurnCount = function(t) {
this[hx("0x450")] = t;
return this;
};
t[hx("0x30")][hx("0x451")] = function(t) {
this[hx("0x452")] = t;
return this;
};
t[hx("0x30")][hx("0x453")] = function(t) {
this[hx("0x454")] = t;
return this;
};
t[hx("0x30")].setSpeedUpMultiple = function(t) {
this[hx("0x455")] = t;
return this;
};
t[hx("0x30")].setStopNowSpeedMultiple = function(t) {
this[hx("0x456")] = t;
return this;
};
t[hx("0x30")].setSlotRowGridCount = function(t) {
this._slotRowGridCount = t;
return this;
};
t[hx("0x30")][hx("0x457")] = function(t) {
this[hx("0x458")] = t;
return this;
};
t.prototype[hx("0x459")] = function(t) {
this[hx("0x45a")] = t;
return this;
};
t[hx("0x30")][hx("0x45b")] = function(t) {
this._gridNodeToMap = t;
return this;
};
t.prototype[hx("0x45c")] = function(t) {
this[hx("0x45d")] = t;
return this;
};
t.prototype[hx("0x45e")] = function(t) {
this[hx("0x45f")] = t;
return this;
};
t[hx("0x30")][hx("0x460")] = function(t) {
this._lookAtSpeed = t;
return this;
};
t[hx("0x30")].setSlotRowTime = function(t) {
this._slotRowTime = t;
return this;
};
t[hx("0x30")][hx("0x461")] = function(t) {
this[hx("0x462")] = t;
return this;
};
t[hx("0x30")].setResultModel = function(t) {
this[hx("0x463")] = t;
return this;
};
t.prototype[hx("0x464")] = function() {
this[hx("0x44d")][hx("0x3d2")](this);
};
Object.defineProperty(t[hx("0x30")], hx("0x465"), {
get: function() {
return this[hx("0x458")];
},
enumerable: !1,
configurable: !0
});
Object[hx("0xcd")](t.prototype, hx("0x466"), {
get: function() {
return this[hx("0x467")];
},
enumerable: !1,
configurable: !0
});
Object[hx("0xcd")](t[hx("0x30")], hx("0x468"), {
get: function() {
return this[hx("0x45a")];
},
enumerable: !1,
configurable: !0
});
Object[hx("0xcd")](t[hx("0x30")], hx("0x469"), {
get: function() {
return this._slotGirdSpeed;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(t[hx("0x30")], ex[hx("0x46a")], {
get: function() {
return this[hx("0x452")];
},
enumerable: !1,
configurable: !0
});
Object[hx("0xcd")](t[hx("0x30")], ex[hx("0x46b")], {
get: function() {
return this[hx("0x46c")];
},
enumerable: !1,
configurable: !0
});
Object[hx("0xcd")](t.prototype, ex.NezQJ, {
get: function() {
return this[hx("0x450")];
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(t[hx("0x30")], hx("0x46d"), {
get: function() {
return this._speedUpMultiple;
},
enumerable: !1,
configurable: !0
});
Object[hx("0xcd")](t[hx("0x30")], ex[hx("0x46e")], {
get: function() {
return this[hx("0x456")];
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(t[hx("0x30")], hx("0x46f"), {
get: function() {
return this[hx("0x44d")];
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(t[hx("0x30")], ex.CBMPt, {
get: function() {
return this._tag;
},
enumerable: !1,
configurable: !0
});
Object[hx("0xcd")](t[hx("0x30")], ex.ErhAg, {
get: function() {
return this._resultModel;
},
enumerable: !1,
configurable: !0
});
Object[hx("0xcd")](t[hx("0x30")], ex.kQMZi, {
get: function() {
return this[hx("0x45d")];
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(t.prototype, hx("0x470"), {
get: function() {
return this[hx("0x45f")];
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(t[hx("0x30")], ex[hx("0x471")], {
get: function() {
return this[hx("0x472")];
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(t[hx("0x30")], ex[hx("0x473")], {
get: function() {
return this._slotRowTime;
},
enumerable: !1,
configurable: !0
});
Object[hx("0xcd")](t[hx("0x30")], ex.BqZmh, {
get: function() {
return this[hx("0x462")];
},
enumerable: !1,
configurable: !0
});
return t;
}(), tx[hx("0x474")] = nx;
rx = ux || (ux = {}), cx = {
fbFMk: function(t, e) {
return t !== e;
},
VxKgK: function(t, e, n) {
return t(e, n);
},
alGDp: hx("0x475")
}, ox = function(t) {
cx[hx("0x476")](gx, e, t);
function e() {
return cx[hx("0x477")](t, null) && t[hx("0x17")](this, arguments) || this;
}
e[hx("0x30")].setGridImg = function(t) {
this[hx("0x478")] = t;
return this;
};
e.prototype[hx("0x479")] = function(t) {
this[hx("0x47a")] = t;
return this;
};
Object.defineProperty(e[hx("0x30")], hx("0x47b"), {
get: function() {
return this[hx("0x47a")];
},
enumerable: !1,
configurable: !0
});
e.prototype[hx("0x47c")] = function(e) {
return t[hx("0x30")][hx("0x47c")][hx("0x3")](this, e);
};
Object[hx("0xcd")](e.prototype, cx[hx("0x47d")], {
get: function() {
return this[hx("0x478")];
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(e[hx("0x30")], "resultModel", {
get: function() {
return this[hx("0x463")];
},
enumerable: !1,
configurable: !0
});
return e;
}(rx[hx("0x16a")].ABaseSlotSetting), rx.NormalSetting = ox;
ax = ux || (ux = {}), sx = {
obSzd: function(t, e) {
return t !== e;
}
}, fx = function(t) {
gx(e, t);
function e() {
return sx[hx("0x47e")](t, null) && t[hx("0x17")](this, arguments) || this;
}
e[hx("0x30")][hx("0x47f")] = function(t) {
this[hx("0x480")] = t;
return this;
};
Object.defineProperty(e[hx("0x30")], hx("0x481"), {
get: function() {
return this[hx("0x480")];
},
enumerable: !1,
configurable: !0
});
return e;
}(ax[hx("0x482")]), ax[hx("0x483")] = fx;
}, {} ]
}, {}, [ 1 ]);