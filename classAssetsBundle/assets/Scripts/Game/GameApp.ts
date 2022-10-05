
import { Component, find, instantiate, Node, Prefab, Sprite } from 'cc';
import { ResMgr } from '../Managers/ResMgr';

export class GameApp extends Component {
    public static Instance: GameApp = null as unknown as GameApp;
    private canvas: Node|null = null;
    private progressBar: Sprite|null = null;

    onLoad(): void {
        if(GameApp.Instance === null) {
            GameApp.Instance = this;
        }
        else {
            this.destroy();
            return;
        }

        this.canvas = find("Canvas");
        this.progressBar = this.canvas?.getChildByName("ResLoading")?.getChildByName("UIProgress")?.getChildByName("value")?.getComponent(Sprite) as Sprite;
        this.progressBar.fillRange = 0;
    }

    public EnterGame(): void {
        var resPkg = {
            Maps: {
                assetType: Prefab,
                urls: [
                    "Prefabs/Fisher001",
                ],
            },

            GUI: {
                assetType: Prefab,
                urls: [
                    "UIPrefabs/GameUI",
                    "UIPrefabs/LoginUI",
                ],
            },
        };

        ResMgr.Instance.preloadResPkg(resPkg, (now: number, total: number)=>{
            var per = now / total;
            if(this.progressBar !== null) {
                this.progressBar.fillRange = per;
            }

        }, ()=>{
            this.canvas?.destroyAllChildren();

            // 加载资源
            this.EnterLoginScene();
            // end 
        })
        
    }

    public EnterLoginScene(): void {
        // 释放3D地图
        var mapPrefab = ResMgr.Instance.getAsset("Maps", "Prefabs/Fisher001");
        var map = instantiate(mapPrefab);
        this.node.addChild(map);
        // end

        // 释放角色
        // end

        // 释放UI视图
        var uiPrefab = ResMgr.Instance.getAsset("GUI", "UIPrefabs/LoginUI");
        var uiView = instantiate(uiPrefab);
        this.canvas?.addChild(uiView);
        // end
    }
}
