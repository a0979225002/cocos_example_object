import EventMng from "../manager/EventMng";

export default class IDataModel {

    protected modelName: string = 'default';

    constructor(modelName = 'default') {
        this.modelName = modelName;
        this.registerListeners();
    }

    private registerListeners() {
        let tbMsg = this.getMessageListeners();
        for (const key in tbMsg) {
            if (tbMsg.hasOwnProperty(key)) {
                EventMng.on(key.toString(), function (msg) {
                    tbMsg[key](msg);
                })
            }
        }
    }

    getMessageListeners() {
        return {};
    }

    getData(modelName: string, val: string) {
        return;
    }

}