
import { _decorator, Component, Node } from 'cc';
import { GameApp } from './Game/GameApp';
import { ResMgr } from './Managers/ResMgr';
const { ccclass, property } = _decorator;

@ccclass('GameLanch')
export class GameLanch extends Component {
    public static Instance: GameLanch = null as unknown as GameLanch;

    onLoad(): void {
        if(GameLanch.Instance === null) {
            GameLanch.Instance = this;
        }
        else {
            this.destroy();
            return;
        }

        // 初始化游戏框架: 资源管理模块，网络模块，协议模块，日志模块， 。。。
        this.node.addComponent(ResMgr);
        // end

        this.node.addComponent(GameApp);
    }

    start () {
        // 资源监测更新
        // end

        GameApp.Instance.EnterGame();
    }

}
