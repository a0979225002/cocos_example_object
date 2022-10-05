/**
 * 外部異步導入js全域變數
 */
interface IReturnPort {
    useSSL: string;
    userport: string;
}

interface Window {
    /**
     * 語系語言
     */
    language_Mode: object;

    //當前語言
    lang: string;

    /**
     * 開發時測試參數
     * @example - (true) 為本地端
     * @example - (false) 外部
     */
    test: boolean;

    /**
     * 熱加載地址
     */
    libraryPath: string;

    /**
     *
     */
    screenLock: any;

    /**
     * 發布後,伺服器連線URL
     */
    GameServerSocket: string;

    /**
     * 登入狀態
     */
    loginType: string;

    /**
     * 帳號
     */
    accountName: string;

    /**
     *  查看是否需要顯示外部網站的祥單
     *  1 = 需要
     */
    recordWindow: string;

    /**
     *
     */
    code: string;

    /**
     *
     */
    channelId: string;

    /**
     *
     */
    gameId: string;

    /**
     *
     */
    token: string;

    /**
     *
     */
    gameMaker: string;

    /**
     *
     */
    homeURL: string;

    /**
     *
     */
    ReturnPort: undefined | (() => IReturnPort);

    /**
     * 響應打開全屏手勢
     * @constructor
     */
    CocosLoadEnd: () => void | undefined;

    /**
     * 全國語系轉,自家語系
     */
    languageCollate: object;

    /**
     * 自家語系轉幣別ICON
     * {string,string}
     */
    CurrencySymbol: object;

    /**
     * 判斷URL是否正確
     */
    GetParams: (params:string) => string;

    /**
     * 判斷是否要傳postMessage給前端
     * 如果value是1,傳給前端
     */
    iframeMode:string;

}

declare var window: Window;
