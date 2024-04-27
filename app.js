import { WebSocketServer } from "ws";
const wss = new WebSocketServer({
    port: 8088,
});

wss.on("connection", function connection(ws) {
    console.log("客户端连接成功");

    ws.on("message", function message(data) {
       
        let message = JSON.parse(data.toString())
        console.log(message.message,"data")
        // switch (message.action) {
        //     case 'message':
        //         console.log(getTime(), message.message.user_nickName + ':' + message.message.msg_content)
        //         break
        //     case 'join':
        //         console.log(getTime(), message.message.user_nickName + ':' + message.message.msg_content)
        //         break
        // }
        wss.clients.forEach(cen => {
            cen.send(JSON.stringify(message))
        })
    });
});

function getTime() {
    return `[${new Date().toLocaleTimeString()}]`
}

console.log('打开-> http://127.0.0.1:8088')