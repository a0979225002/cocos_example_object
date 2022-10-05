import UIMng from "../../manager/UIMng";
import UIBase, { UIClass } from "./UIBase";
import UILoading from "./UILoading";
import UIMessage from "./UIMessage";
import {ViewZorder} from "../../data/const/ViewZorder";

export default class UIHelp {

    public static ShowUI<T extends UIBase>(uiClass: UIClass<T>) {
        UIMng.getInstance().showUI(uiClass);
    }

    public static HideUI<T extends UIBase>(uiClass: UIClass<T>) {
        UIMng.getInstance().hideUI(uiClass);
    }

    public static ShowLoading(callback?: Function) {
        UIMng.getInstance().openUI(UILoading, ViewZorder.UI, callback);
    }

    public static ShowDialog(data) {
        let dialogUI = UIMng.getInstance().getUI(UIMessage) as UIMessage;
        if (!dialogUI) {
            UIMng.getInstance().openUI(UIMessage, ViewZorder.Dialog, null, null, data);
        } else {
            dialogUI.show(data);
        }
    }

    public static Resize<T extends UIBase>(uiClass: UIClass<T>): void {
        UIMng.getInstance().resizeUI(uiClass);
    }

}
