import IDataModel from "../IDataModel";

export default class System extends IDataModel {

    developMode: number = 0;
    language: string = "NTD";

    constructor() {
        super("System");
    }

}