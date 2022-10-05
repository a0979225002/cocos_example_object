import EventMng from "../manager/EventMng";

export class GPGAPI {

    connect(): void {
        window.addEventListener("message", this.onReceiveMessage, false);
    }

    send(cmd: string, data: object): void {
        let Packet = {
            cmd: cmd,
            data: data
        };
        window.parent.postMessage(Packet, "*");
    }

    onReceiveMessage(event): void {
        const cmd = event.data.cmd;
        const data = event.data.data;
        EventMng.emit(cmd, data);
    }

}