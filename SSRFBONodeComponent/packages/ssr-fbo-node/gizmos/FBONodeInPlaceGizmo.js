// FBONodeInPlaceComponent.js
class FBONodeInPlaceComponent extends Editor.Gizmo {
    init () {
    }
    onCreateRoot () {
        this._tool = this._root.group();
        let rect = this._tool.rect();
        rect.stroke({ color: "#00FF00" , width : 1 });
        rect.fill("none");
        this._tool.plot = (width, height, position) => {
            this._tool.move(position.x, position.y);
            rect.width(width);
            rect.height(height);
        };
    }
    onUpdate () {
        let target = this.target;
        let node = this.node;
        let fboNodeInPlaceComponent = node.getComponent("FBONodeInPlaceComponent");
        let width = fboNodeInPlaceComponent.rect.width * this._view.scale;
        let height = fboNodeInPlaceComponent.rect.height * this._view.scale;
        let position = cc.Canvas.instance.node.convertToWorldSpaceAR(cc.v2(0, 0));
        position = this.worldToPixel(position);
        position = Editor.GizmosUtils.snapPixelWihVec2(position);
        position.x += fboNodeInPlaceComponent.rect.x * this._view.scale;
        position.y -= (height + fboNodeInPlaceComponent.rect.y * this._view.scale);
        this._tool.plot(width, height, position);
    }
    visible () {
       return this.selecting || this.editing;
    }
    layer () {
       return 'scene';
    }
    rectHitTest (rect, testRectContains) {
       return false;
    }
}
module.exports = FBONodeInPlaceComponent;
