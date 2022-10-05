System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, Button, find, instantiate, Label, Prefab, resources, Toggle, Batcher, Input, KeyboardUtils, BasicScene, sampleList, _dec, _class, _crd, ccclass, property, Main;

  function _reportPossibleCrUseOfBatcher(extras) {
    _reporterNs.report("Batcher", "./graphics/Batcher", _context.meta, extras);
  }

  function _reportPossibleCrUseOfInput(extras) {
    _reporterNs.report("Input", "./Input/Input", _context.meta, extras);
  }

  function _reportPossibleCrUseOfKeyboardUtils(extras) {
    _reporterNs.report("KeyboardUtils", "./Input/KeyboardUtils", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBasicScene(extras) {
    _reporterNs.report("BasicScene", "./scenes/BasicScene", _context.meta, extras);
  }

  function _reportPossibleCrUseOfsampleList(extras) {
    _reporterNs.report("sampleList", "./scenes/RenderScene", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Button = _cc.Button;
      find = _cc.find;
      instantiate = _cc.instantiate;
      Label = _cc.Label;
      Prefab = _cc.Prefab;
      resources = _cc.resources;
      Toggle = _cc.Toggle;
    }, function (_unresolved_2) {
      Batcher = _unresolved_2.Batcher;
    }, function (_unresolved_3) {
      Input = _unresolved_3.Input;
    }, function (_unresolved_4) {
      KeyboardUtils = _unresolved_4.KeyboardUtils;
    }, function (_unresolved_5) {
      BasicScene = _unresolved_5.BasicScene;
    }, function (_unresolved_6) {
      sampleList = _unresolved_6.sampleList;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "44fe3nKgN5Du7XCIUMP+uQB", "Main", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Main", Main = (_dec = ccclass('Main'), _dec(_class = class Main extends Component {
        start() {
          es.Core.debugRenderEndabled = true;
          es.Core.create(true);
          es.Graphics.instance = new es.Graphics(new (_crd && Batcher === void 0 ? (_reportPossibleCrUseOfBatcher({
            error: Error()
          }), Batcher) : Batcher)());
          (_crd && KeyboardUtils === void 0 ? (_reportPossibleCrUseOfKeyboardUtils({
            error: Error()
          }), KeyboardUtils) : KeyboardUtils).init();
          (_crd && Input === void 0 ? (_reportPossibleCrUseOfInput({
            error: Error()
          }), Input) : Input).initialize();
          es.Core.scene = new (_crd && BasicScene === void 0 ? (_reportPossibleCrUseOfBasicScene({
            error: Error()
          }), BasicScene) : BasicScene)();
          this.setupSceneSelector();
        }

        setupSceneSelector() {
          var _find;

          const checkBox = (_find = find("Canvas_UI/Layout/DebugRender")) === null || _find === void 0 ? void 0 : _find.getComponent(Toggle);

          if (checkBox) {
            checkBox.isChecked = es.Core.debugRenderEndabled;
            checkBox.node.on('toggle', toggle => {
              es.Core.debugRenderEndabled = toggle.isChecked;
            }, this);
          }

          const layout = find("Canvas_UI/Layout");
          (_crd && sampleList === void 0 ? (_reportPossibleCrUseOfsampleList({
            error: Error()
          }), sampleList) : sampleList).forEach((value, key) => {
            resources.load('prefabs/Button', Prefab, (err, data) => {
              var _buttonNode$getChildB;

              const buttonNode = instantiate(data);
              layout === null || layout === void 0 ? void 0 : layout.addChild(buttonNode);
              const label = (_buttonNode$getChildB = buttonNode.getChildByName("Label")) === null || _buttonNode$getChildB === void 0 ? void 0 : _buttonNode$getChildB.getComponent(Label);
              if (label) label.string = key;
              buttonNode.on(Button.EventType.CLICK, () => {
                es.Core.scene = new value();
              }, this);
            });
          });
        }

        update(deltaTime) {
          es.Core.emitter.emit(es.CoreEvents.frameUpdated, deltaTime);
          (_crd && Input === void 0 ? (_reportPossibleCrUseOfInput({
            error: Error()
          }), Input) : Input).update();
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=Main.js.map