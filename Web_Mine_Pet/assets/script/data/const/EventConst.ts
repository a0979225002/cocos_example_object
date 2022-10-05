
export class SocketEvent {
    public static readonly SOCKET_OPEN = 'SOCKET_OPEN';
    public static readonly SOCKET_CLOSE = 'SOCKET_CLOSE';
}

export class LoadEvent {
    public static readonly LOAD_PRELOAD_DONE = 'LOAD_PRELOAD_DONE';
    public static readonly LOAD_SUCCESS = 'LOAD_SUCCESS';
}

export class MainEvent {
    public static readonly ENTER_MINE_COLLECT = 'ENTER_MINE_COLLECT';
    public static readonly ENTER_MINE_MNG = 'ENTER_MINE_MNG';
    public static readonly MINE_GENERAL_UPDATE = 'MINE_GENERAL_UPDATE';
    public static readonly MINE_MNG_PAGE_SWITCH = 'MINE_MNG_PAGE_SWITCH';
    public static readonly MESSAGE_SHOW = 'MESSAGE_SHOW';
    public static readonly GET_POINT = 'GET_POINT';
    public static readonly PET_UPGRADE_REQ = 'PET_UPGRADE_REQ';
    public static readonly PET_UPGRADE = 'PET_UPGRADE';
    public static readonly PET_UPGRADE_CHANGE = 'PET_UPGRADE_CHANGE';
    public static readonly OPEN_SKIN_POP_REQ = 'OPEN_SKIN_POP_REQ';
    public static readonly OPEN_SKIN_POP = 'OPEN_SKIN_POP';
    public static readonly MINE_CHANGE_REQ = 'MINE_CHANGE_REQ';
}