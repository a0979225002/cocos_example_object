import EventMng from "../../manager/EventMng";
import { LoadEvent, MainEvent } from "../const/EventConst";
import IDataModel from "../IDataModel";

export default class GameModel extends IDataModel {

    private _mineSelectID: number = 0;
    mineList: number[] = [0, 0, 0, 0, 0];
    mineLevel: number[] = [1, 1, 1, 1, 1];
    mineSkin: number[] = [0, 0, 0, 0, 0];
    mineAccessories: number[] = [0, 0, 0, 0, 0];

    private _partnerSelectID: number = 0;
    partnerList: number[] = [0, 0, 0, 0, 0];

    private _canGo: boolean = false;

    goldPoint: number = 0;
    silverPoint: number = 0;
    warehousePoint: number = 0;

    timeActive: boolean = false;
    countDownTimer: number = null;
    currentTime: number = 0;
    grandTotalTime: number = 120;

    collect = {
        gold: 0,
        silver: 0
    };

    levelConfig = {
        silver: [0, 0, 0, 0, 0, 0, 0, 0, 0],
        can:  [0, 0, 0, 0, 0, 0, 0, 0, 0],
        rate:  [0, 0, 0, 0, 0, 0, 0, 0, 0],
    }

    canCount: number = 0;

    mineSkinListData = [];

    levelSkinName = ["obj_S", "obj_M", "obj_L"];
    mineBodyName = [ "pet01", "pet01", "pet01", "pet01", "pet01" ];
    mineFloorName = ["floor_01", "floor_01", "floor_01", "floor_01", "floor_01"];
    mineSkinName = ["pet01",];
    mineRoadName = ["map_gpg1", "map_gpg1", "map_gpg1", "map_gpg1", "map_gpg1"];
    partnerBodyName = ["mining1", "mining1", "mining1", "mining1", "mining1"];

    constructor() {
        super("Game");
    }

    getMessageListeners(): object {
        return {
            ['start']: (msg) => { this.onStart(msg) },
            ['action']: (msg) => { this.onAction(msg) },
            ['other']: (msg) => { this.onOther(msg) },
            ['upgrade']: (msg) => { this.onUpgrade(msg) },
            ['getbag']: (msg) => { this.onGetBag(msg) },
            ['use']: (msg) => { this.onUse(msg) },
        }
    }

    onStart(msg): void {


        if (msg == null) {

            EventMng.emit(MainEvent.MESSAGE_SHOW, {
                code: "S_9100"
            });

            return;

        }

        this.goldPoint = msg.wallet.gold;
        this.silverPoint = msg.wallet.silver;

        this.mineSelectID = msg.currentPet;

        for (let i = 0; i < msg.pet.length; i++) {
            let data = msg.pet[i];
            this.mineList[i] = data.own ? 1 : 0;
            if (this.mineList[i] == 1) {
                this.mineLevel[i] = data.info.level;
                this.mineSkin[i] = data.info.skin.id;
                this.mineAccessories[i] = data.info.deco.id;
            }
        }

        this.partnerSelectID = msg.currentElf;

        for (let i = 0; i < msg.elf.length; i++) {
            this.partnerList[i] = msg.elf[i].own ? 1 : 0;
        }

        this.levelConfig.silver = msg.upgrade.silver;
        this.levelConfig.can = msg.upgrade.can;
        this.levelConfig.rate = msg.upgrade.chance;

        this.canCount = msg.can;

        this.grandTotalTime = msg.other.time;
        this.warehousePoint = msg.other.expect;

        this.timeStart();

        EventMng.emit(LoadEvent.LOAD_SUCCESS);

    }

    onAction(msg): void {

        if (msg == null) { return; }

        this.goldPoint = msg.wallet.gold;
        this.silverPoint = msg.wallet.silver;

        this.collect.gold = msg.getmine.gold;
        this.collect.silver = msg.getmine.silver;

        if (this.collect.gold == 0 && this.collect.silver == 0) { return; }

        EventMng.emit(MainEvent.GET_POINT);

    }

    onOther(msg): void {

        if (msg == null) { return; }
        
        this.timeStop();

        this.grandTotalTime = msg.time > 43200 ? 43200 : msg.time;
        this.warehousePoint = msg.expect;
        
        this.timeStart();

        EventMng.emit("MINE_GENERAL_UPDATE");

    }

    onUpgrade(msg): void {
        this.canCount = msg.can;
        this.goldPoint = msg.gold;
        this.silverPoint = msg.silver;
        EventMng.emit("PET_UPGRADE", msg);
    }

    onUse(msg): void {

        let state = msg.isSuccess;

        EventMng.emit(MainEvent.ENTER_MINE_COLLECT, {
            state: state,
        });

    }

    timeInit(): void {
        this.currentTime = this.grandTotalTime;
    }

    timeStart(): void {

        this.timeInit();

        this.timeActive = true;

        let time = 0;
        let start = new Date().getTime();

        let action = () => {

            clearTimeout(this.countDownTimer);

            if (this.currentTime < 0 || this.currentTime >= 43200) {
                return;
            }

            time += 1000;
            let diff = (new Date().getTime() - start) - time;

            this.currentTime += 1;

            if (this.currentTime < 0) {
                this.timeStop();
                return;
            }

            this.countDownTimer = setTimeout(action, (1000 - diff));

        };

        this.countDownTimer = setTimeout(action, 1000);

    }

    timeStop(): void {
        this.timeActive = false;
        this.currentTime = 0;
        clearTimeout(this.countDownTimer);
    }
    onGetBag(msg): void {
        this.mineSkinListData = msg.skinList;
        EventMng.emit("OPEN_SKIN_POP", msg);
    }

    hasMine(): boolean {
        return  this.mineList[this.mineSelectID] != 0;
    }

    getPetBodyThemeName(id?: number): string {

        let checkID = id == 0 || id > 0 ?  id : this.mineSelectID;

        let name = this.mineBodyName[checkID];

        if (this.mineSkin[checkID] > 0) {
            name = this.mineSkinName[this.mineSkin[checkID]];
        }

        return name;

    }

    getPetBodySkinName(id?: number): string {

        let name = "default";

        let checkID = id == 0 || id > 0 ? id : this.mineSelectID;

        if (this.mineSkin[checkID] == 0) {
            name = this.levelSkinName[Math.floor((this.mineLevel[checkID] - 1) / 3)]
        }

        return name;

    }

    getPartnerBodyThemeName(): string {
        return this.partnerBodyName[this.partnerSelectID];
    }
    hasPartner(): boolean {
        return  this.partnerList[this.partnerSelectID] != 0;
    }

    get mineSelectID(): number {
        return this._mineSelectID;
    }

    set mineSelectID(value: number) {
        this._mineSelectID = value;
    }

    get partnerSelectID(): number {
        return this._partnerSelectID;
    }

    set partnerSelectID(value: number) {
        this._partnerSelectID = value;
    }

    get canGo(): boolean {
        this._canGo = !(!this.hasMine() || !this.hasPartner());
        return this._canGo;
    }

    set canGo(value: boolean) {
        this._canGo = value;
    }

}