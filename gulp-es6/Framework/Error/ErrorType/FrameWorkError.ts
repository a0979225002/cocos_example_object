import {ErrorType} from "../Enum/ErrorManagerEnum";
import UnknownError from "./UnknownError";



export default class FrameWorkError {

    private unknownError: UnknownError;
    private configManager: IConfigManager;

    constructor(configManager: IConfigManager) {
        this.unknownError = new UnknownError(configManager);
        this.configManager = configManager;
    }

    checkErrorType(message: string | ErrorType, obj: any) {
        if (this.configManager.isFrameworkDebug) {
            switch (message) {
                case ErrorType.IS_RUNNING_FW:
                    throw new Error(`${ErrorType.IS_RUNNING_FW} ${obj}`);
                case ErrorType.UNDEFINED_FW:
                    throw new Error(`${ErrorType.UNDEFINED_FW} ${obj}`);
                case ErrorType.TYPE_FW:
                    throw new Error(`${ErrorType.TYPE_FW} ${obj}`);
                case ErrorType.ANIMATION_FW:
                    throw new Error(`${ErrorType.ANIMATION_FW} ${obj}`);
                case ErrorType.LOAD_FW:
                    throw new Error(`${ErrorType.LOAD_FW} ${obj}`);
                case ErrorType.WEB_REQUEST_FW:
                    throw new Error(`${ErrorType.WEB_REQUEST_FW} ${obj}`);
                case ErrorType.PREFAB_FW:
                    throw new Error(`${ErrorType.PREFAB_FW} ${obj}`);
                case ErrorType.AUDIO_FW:
                    throw new Error(`${ErrorType.AUDIO_FW} ${obj}`);
                case ErrorType.WEB_RESPONESE_FW:
                    throw new Error(`${ErrorType.WEB_RESPONESE_FW} ${obj}`);
                case ErrorType.SCENE_FW:
                    throw new Error(`${ErrorType.SCENE_FW} ${obj}`);
                case ErrorType.PROCESS_FW:
                    throw new Error(`${ErrorType.PROCESS_FW} ${obj}`);
                case ErrorType.LISTENER_FW:
                    throw new Error(`${ErrorType.LISTENER_FW} ${obj}`);
                case ErrorType.SlotStyleFW:
                    throw new Error(`${ErrorType.SlotStyleFW} ${obj}`);
                default :
                    this.unknownError.checkErrorType(message);
            }
        } else {
            console.log("???????????????,?????????????????????Debug,????????????");
        }
    }
}