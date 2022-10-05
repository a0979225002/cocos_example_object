
const TAG = "WebsocketLine";

import { BASE_PORT,ASSETS_PATH } from '../config';

const cors = require('cors');
const express = require('express');
const Path = require('path');

const PORT = BASE_PORT + 3;

/**
 * 测试 - WebsocketLine
 */
export default class WebsocketLine extends lcc.WorkerBase {

    private _serverLine:lcc.NetLine = null;
	
    public async onStart(){
        this._serverLine = lcc.netServer.addServer('test-websocketline', lcc.NetLineType.WEBSOCKET, {
            port : PORT
        });
        this._serverLine.on('newConnect',(netline:lcc.NetLine)=>{
            netline.on(`protocol-${lcc.protocol.PROTOTEST}`,(data:lcc.protocol.ProtoTest)=>{
                lcc.logMgr.debug(TAG,`test-websocket recv ${JSON.stringify(data, null, 4)}`);
                netline.writeProtocol<lcc.protocol.ProtoTest>(lcc.protocol.PROTOTEST,{
                    parent : 'test',
                    from : 'server',
                    version : 1,
                    isClient : false,
                    isServer : true,
                    ref : { value : 1000 },
                    enumList : [ lcc.protocol.EnumTest.ENUM1, lcc.protocol.EnumTest.ENUM2 ],
                    enumMap : { ['1']:lcc.protocol.EnumTest.ENUM1, ['2']:lcc.protocol.EnumTest.ENUM2 }
                });
            });
        });
        await this._serverLine.open();
    }

    public async onStop(){
        lcc.netServer.removeServer('test-websocketline');
    }
}
