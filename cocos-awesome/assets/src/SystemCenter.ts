import ccclass = cc._decorator.ccclass;
import property = cc._decorator.property;
import {ACenterTemplate} from "./dist/tcc/fcc-template";
import MySceneStyle from './MySceneStyle';

/**
 * @Author 蕭立品
 * @Description TODO
 * @Date 2021-09-14 上午 11:11
 * @Version 1.0
 */
@ccclass
export default class SystemCenter extends ACenterTemplate{

    protected onCreate(): void {
        fcc.sceneMgr
            .setDesignWidth(1280)
            .setDesignHeight(720)
            .updateSize(new MySceneStyle())
            .startListener(500);
    }

    protected configSetting(): void {
        fcc.configMgr
            .setCocosDebug(cc.debug.DebugMode.INFO)
            .setFrameWorkDebug(true)
            .build();
    }

    protected audioSetting(): void {
    }

    protected initClient(): void {
    }

    protected notificationSetting(): void {
    }

    protected processCreate(): void {
    }
}
