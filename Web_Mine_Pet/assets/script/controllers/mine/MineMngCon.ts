import UIBase from "../ui/UIBase";
import DataMineMngCon from "../../data/scene/DataMineMngCon";
import MinePetSelect from "./mng/MinePetSelect";
import MinePartnerSelect from "./mng/MinePartnerSelect";
import MineToolBox from "./mng/MineToolBox";

const { ccclass } = cc._decorator;

@ccclass
export default class MineMngCon extends UIBase {

    pages: any[] = [];

    ui: DataMineMngCon;

    page1: MinePetSelect;
    page2: MinePartnerSelect;
    page3: MineToolBox;

    preIndex: number = 0;
    currentIndex: number = 0;

    onUILoad(): void {
        this.ui = this.node.addComponent(DataMineMngCon);
        this.page1 = this.ui.node_page_1.addComponent(MinePetSelect);
        this.page2 = this.ui.node_page_2.addComponent(MinePartnerSelect);
        this.page3 = this.ui.node_page_3.addComponent(MineToolBox);
        this.pages.push(this.page1, this.page2, this.page3);
        this.pageSwitch(0);
    }

    pageSwitch(id: number): void {
        this.preIndex = this.currentIndex;
        this.currentIndex = id;
        for (let i = 0; i < this.pages.length; i++) {
            this.pages[i].node.active = i == this.currentIndex;
        }
        if (this.pages[this.currentIndex].reset) {
            this.pages[this.currentIndex].reset();
        }
    }

}