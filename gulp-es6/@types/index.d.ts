//外部異步導入語系js檔案
interface Window{
    language_Mode : any;
    test : boolean;
    libraryPath : string;
    screenLock:any;
}
declare var window:Window;

declare module "socketJS" {
    import Socket = require("./assets/Script/Socket/Socket")
    export {Socket};
}