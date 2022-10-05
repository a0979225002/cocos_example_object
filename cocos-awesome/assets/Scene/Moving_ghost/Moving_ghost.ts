const { ccclass, property } = cc._decorator;

@ccclass
export default class Moving_ghost extends cc.Component {
  @property([cc.Sprite])
  ghostCanvasList: cc.Sprite[] = [];
  @property(cc.Node)
  role: cc.Node = null;
  @property(cc.Camera)
  roleCamera: cc.Camera = null;

  onLoad() {
    this.initTextTure();
    this.schedule(this.ghostFollow, 0.1, cc.macro.REPEAT_FOREVER);
    fcc.eventMgr.eventListener("SCENE",(isUpdate:boolean)=>{
        cc.log(isUpdate)
        if(isUpdate){
            this.beforeDestroy();
        }else {
          this.initTextTure();
          this.schedule(this.ghostFollow, 0.1, cc.macro.REPEAT_FOREVER);
        }
    },true)
    this.node.on(cc.Node.EventType.TOUCH_MOVE, this.touchMoveEvent, this);
  }

  initTextTure(){
    const roleZIndex = 10;
    this.role.zIndex = roleZIndex;
    const texture = new cc.RenderTexture();
    texture.initWithSize(this.node.width, this.node.height);
    const spriteFrame = new cc.SpriteFrame();
    spriteFrame.setTexture(texture);
    this.roleCamera.targetTexture = texture;
    this.ghostCanvasList.forEach((ghost, idx) => {
      ghost.node.scaleY = -1;
      ghost.node.zIndex = roleZIndex - idx;
      ghost.node.opacity = 100 - idx * 15;
      ghost.spriteFrame = spriteFrame;
    });
  }

  touchMoveEvent(evt: cc.Event.EventTouch) {
    this.role.x += evt.getDeltaX();
    this.role.y += evt.getDeltaY();
  }

  beforeDestroy() {
    this.unschedule(this.ghostFollow);
  }

  ghostFollow() {
    this.ghostCanvasList.forEach((ghost, i) => {
      const dis = (ghost.node.position as any).sub(this.role.position).mag();
      if (dis < 0.5) return; // 给个误差范围，涉及到浮点数，dis的计算不可能精准，小于0.5就可以认为是静止了
      ghost.node.stopAllActions();
      ghost.node.runAction(cc.moveTo(i * 0.04 + 0.02, this.role.x, this.role.y));
    });
  }
}
