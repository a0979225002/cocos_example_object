System.register("chunks:///Game/GameApp.js",["../_virtual/_rollupPluginBabelHelpers.js","cc"],(function(n,e){var t,o,i,r,c;return{setters:[function(n){t=n.inheritsLoose,o=n.defineProperty},function(n){i=n.cclegacy,r=n.Component}],execute:function(){i._RF.push({},"bb8bcr94elByKWzk1VS3Atf","GameApp",void 0),n("GameApp",c=function(n){function e(){return n.apply(this,arguments)||this}t(e,n);var o=e.prototype;return o.onLoad=function(){null===e.Instance?e.Instance=this:this.destroy()},o.EnterGame=function(){this.EnterLoginScene()},o.EnterLoginScene=function(){},e}(r)),o(c,"Instance",null),i._RF.pop()}}}));

System.register("chunks:///GameLanch.js",["./_virtual/_rollupPluginBabelHelpers.js","cc","./Game/GameApp.js"],(function(n,e){var t,o,c,a,s,i,r,u,p,l,d;return n({_dec:void 0,_class:void 0,_class2:void 0,_temp:void 0}),{setters:[function(n){t=n.defineProperty,o=n.inheritsLoose},function(n){c=n.cclegacy,a=n._decorator,s=n.Component},function(n){i=n.GameApp}],execute:function(){c._RF.push({},"f730buhfhdOb7MyiVjZmxYG","GameLanch",void 0),d=a.ccclass,a.property,n("GameLanch",(r=d("GameLanch"),r((l=p=function(n){function e(){return n.apply(this,arguments)||this}o(e,n);var t=e.prototype;return t.onLoad=function(){null===e.Instance?(e.Instance=this,this.node.addComponent(i)):this.destroy()},t.start=function(){i.Instance.EnterGame()},e}(s),t(p,"Instance",null),u=l))||u)),c._RF.pop()}}}));

System.register("chunks:///_virtual/main",["../Game/GameApp.js","../GameLanch.js"],(function(e,n){return{setters:[function(e){},function(e){}],execute:function(){}}}));

(function(r) {
  r('project:///assets/Scripts/Game/GameApp.js', 'chunks:///Game/GameApp.js');
  r('project:///assets/Scripts/GameLanch.js', 'chunks:///GameLanch.js');
  r('virtual:///prerequisite-imports/main', 'chunks:///_virtual/main'); 
})(function(mid, cid) {
    System.register(mid, [cid], function (_export, _context) {
    return {
        setters: [function(_m) {
            var _exportObj = {};

            for (var _key in _m) {
              if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _m[_key];
            }
      
            _export(_exportObj);
        }],
        execute: function () { }
    };
    });
});