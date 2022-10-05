import { MineSlider } from "./MineSlider";
import UIBase from "../../ui/UIBase";
import DataMinePetSelect from "../../../data/scene/DataMinePetSelect";

export class MineSelect extends UIBase {

    ui: DataMinePetSelect;
    slider: MineSlider;

    type: number = null;
    bodyName: string[] = [];
    floorName: string[] = [];

    constructor(type: number) {
        super();
        this.type = type;
    }

    onUILoad(): void {
        this.ui = this.node.addComponent(DataMinePetSelect);
        this.slider = new MineSlider(this.ui, this.type);
    }

    onStart() {
        this.slider.init();
        this.slider.createSliderList(this.getFloorAssets(), this.getBodyAssets());
    }

    onShow(): void {
        this.onRegisterEvent(this.ui.btn_go, this.onBtnGoClick, this);
        this.slider.show();
        this.slider.arrowBtnsBindOn();
    }

    onHide() {
        this.unRegisterEvent(this.ui.btn_go, this.onBtnGoClick, this);
        this.slider.hide();
        this.slider.arrowBtnsBindOff();
    }

    onBtnGoClick(): void {
        this.slider.onBtnGoClick();
    }

    getBodyAssets() {
        return this.bodyName;
    }

    getFloorAssets() {
        return this.floorName;
    }

}