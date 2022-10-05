export class ToolBtn {

    id: number = -1;

    node: cc.Node;

    count_bg: cc.Node;
    count_box: cc.Node;

    bg_active: cc.Node;
    title_main: cc.Node;


    label_count: cc.Label;
    label_title: cc.Label;

    clickCallback = null;

    color_red = null;
    color_black = null;

    constructor(node, id, clickCallback?) {

        this.id = id;
        this.node = node;

        this.count_box = this.node.getChildByName("count_box")
        this.count_bg = this.count_box.getChildByName("bg");

        this.label_count = this.count_box.getChildByName("number").getComponent(cc.Label);

        this.bg_active = this.node.getChildByName("bg_active");

        this.title_main = this.node.getChildByName("title");
        this.label_title = this.title_main.getChildByName("txt").getComponent(cc.Label);

        this.color_red = new cc.Color(255, 59, 59);
        this.color_black = new cc.Color(0, 0, 0);

        if (clickCallback) {
            this.clickCallback = clickCallback;
        }

    }

    active(state: boolean): void {

        this.bg_active.active = state;
        this.title_main.active = state;

        this.count_bg.color = state ? this.color_red : this.color_black;

    }

    setCount(val): void {
        this.label_count.string = val;
    }

    setTitleTxt(str): void {
        this.label_title.string = str;
    }

    bindOn(): void {
        this.node.on("touchend", this.onClick, this);
    }

    bindOff(): void {
        this.node.off("touchend", this.onClick, this);
    }

    onClick(): void {
        if (this.clickCallback) this.clickCallback(this.id);
    }

}

export class ToolIntroCon {

    id: number = -1;
    node: cc.Node;

    updateIntro = null;

    constructor(node, id, updateIntro?) {

        this.node = node;
        this.id = id;

        if (updateIntro) {
            this.updateIntro = updateIntro;
        }

    }

    show(): void {

        this.node.active = true;

        if (this.updateIntro) {
            this.updateIntro();
        }

    }

    hide(): void {
        if (!this.node.active) { return; }
        this.node.active = false;
    }

}
