import rolling_lottery from "../rolling_lottery/rolling_lottery";

const {ccclass, property} = cc._decorator;

@ccclass
export default class start extends cc.Component {
    /* ***************private*************** */
    private _rolling_lottery_os: rolling_lottery[] = [];
    /* -------------------------------segmentation------------------------------- */
    onLoad() {
        cc.find("Canvas/抽奖机").children.forEach((v1_o, k1_n)=> {
            this._rolling_lottery_os.push(v1_o.getComponent(rolling_lottery));
            this._rolling_lottery_os[k1_n].reset();
        });
    }
    /* ***************按钮事件*************** */
    public btn_打乱(): void {
        this._rolling_lottery_os.forEach(v1_o=> {
            v1_o.random_order();
        });
    }
    public btn_随机抽奖(): void {
        if (this._rolling_lottery_os.filter(v1_o=> v1_o.scroll_b).length) {
            cc.warn("动作未结束");
            return;
        }
        this._rolling_lottery_os.forEach(v1_o=> {
            let old_speed_n = v1_o.max_speed_n;
            // 修改速度让其更加真实
            v1_o.max_speed_n += Math.floor(Math.random() * 11) - 5;
            v1_o.scroll(Math.floor(Math.random() * v1_o.node.children.length), {
                "rebound_finish_cb_f": ()=> {
                    v1_o.max_speed_n = old_speed_n;
                }
            });
        });
    }
    public btn_必中抽奖(): void {
        if (this._rolling_lottery_os.filter(v1_o=> v1_o.scroll_b).length) {
            cc.warn("动作未结束");
            return;
        }
        let index_n = Math.floor(Math.random() * this._rolling_lottery_os[0].node.children.length);
        let target_s = this._rolling_lottery_os[0].node.children[index_n].name;
        this._rolling_lottery_os.forEach(v1_o=> {
            let old_speed_n = v1_o.max_speed_n;
            // 修改速度让其更加真实
            v1_o.max_speed_n += Math.floor(Math.random() * 11) - 5;
            v1_o.scroll(v1_o.node.children.findIndex(v2_o=> v2_o.name === target_s), {
                "rebound_finish_cb_f": ()=> {
                    v1_o.max_speed_n = old_speed_n;
                }
            });
        });
    }
}
