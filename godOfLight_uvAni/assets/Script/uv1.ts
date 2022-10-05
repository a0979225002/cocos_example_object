const { ccclass, property } = cc._decorator;

@ccclass
export default class spritearrow extends cc.Component {


@property(cc.Sprite)
private uv :cc.Sprite= null;

  start() {

    this._material = this.uv.getMaterial(0);

    // this.time = 0;



    // this._material = this.getComponent(cc.Sprite).getMaterial(0);
  }

  private _speed: number = 0.7;
  private _time: number = 0;
  private _material: cc.MaterialVariant;

  /**
   * 掃光
   */
  flashLightAction(dt: number) {
      if (this._time > 11) {
          this._time = 0;
      }
      this._material.setProperty("u_time", this._time);
      this._time += dt * this._speed;
  }

  update(dt: number) {
      this.flashLightAction(dt);
  }
}
