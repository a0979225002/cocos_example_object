import IDataModel from "../IDataModel";

declare global {
    interface Window {
        GameServerSocket: any;
        accountName: any;
        loginType: any;
        token: any;
        code: any;
        channelId: any;
        gameId: any;
        lang: any;
        gameMaker: any;
        homeURL: any;
        companyIcon: any;
        windows: any;
        CocosLoadEnd: any;
    }
}

export default class WebAPI extends IDataModel {

    private _GameServerSocket;
    get GameServerSocket() {
        return this._GameServerSocket;
    }
    set GameServerSocket(value) {
        this._GameServerSocket = value;
    }

    private _accountName;
    get accountName() {
        return this._accountName;
    }
    set accountName(value) {
        this._accountName = value;
    }

    private _loginType;
    get loginType() {
        return this._loginType;
    }
    set loginType(value) {
        this._loginType = value;
    }

    private _token;
    get token() {
        return this._token;
    }
    set token(value) {
        this._token = value;
    }

    private _code;
    get code() {
        return this._code;
    }
    set code(value) {
        this._code = value;
    }

    private _channelId;
    get channelId() {
        return this._channelId;
    }
    set channelId(value) {
        this._channelId = value;
    }

    private _gameId;
    get gameId() {
        return this._gameId;
    }
    set gameId(value) {
        this._gameId = value;
    }

    private _lang;
    get lang() {
        return this._lang;
    }
    set lang(value) {
        this._lang = value;
    }

    private _gameMaker;
    get gameMaker() {
        return this._gameMaker;
    }
    set gameMaker(value) {
        this._gameMaker = value;
    }

    private _homeURL;
    get homeURL() {
        return this._homeURL;
    }
    set homeURL(value) {
        this._homeURL = value;
    }

    private _companyIcon;
    get companyIcon() {
        return this._companyIcon;
    }
    set companyIcon(value) {
        this._companyIcon = value;
    }

    private _windows;
    get windows() {
        return this._windows;
    }
    set windows(value) {
        this._windows = value;
    }
    constructor() {
        super("WebAPI");
        this.init();
    }

    init(): void {
        this.setData("GameServerSocket");
        this.setData("accountName");
        this.setData("loginType");
        this.setData("token");
        this.setData("gameId");
        this.setData("lang");
        this.setData("homeURL");
        this.setData("companyIcon");
        this.setData("windows");
    }

    setData(name: string): void {
        if ((window[name]  && window[name] != "") || window[name] === 0) {
            this[name] = window[name];
        }
    }

}