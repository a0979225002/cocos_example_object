// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const { ccclass, property } = cc._decorator;

@ccclass
export default class test extends cc.Component {
    setTime: number = 43200000;
    showTime: number = 0;

    start() {
        setInterval(() => {
            this.showTime += 1000;
            console.log(this.updateTime(this.showTime, this.setTime));

        }, 1000);
    }
    updateTime(time: number, countTime: number) {
        var hr: number = Math.floor(time / 3600);
        var min: number = Math.floor((time - (hr * 3600)) / 60);
        var sec: number = time - (hr * 3600) - (min * 60);
        var returnPercent = time / countTime;
        return returnPercent

    }
}
