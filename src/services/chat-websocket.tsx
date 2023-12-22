// WebSocketService.ts
import {MessageInfo} from "../common/interfaces/messages";

class WebSocketService {
    private socket: WebSocket;

    constructor() {
        this.socket = new WebSocket('ws://localhost:8080/ws');
        this.socket.onopen = () => {
            console.log('WebSocket connection opened');
        };
        this.socket.onmessage = this.handleMessage;
        this.socket.onclose = () => {
            console.log('WebSocket connection closed');
        };
    }

    private handleMessage = (event: MessageEvent) => {
        const message = JSON.parse(event.data);
        console.log('Received message:', message);
        // Handle the incoming message as needed
    };

    public sendMessage = (messageData: MessageInfo) => {
        const message = {
            messageText: messageData.messageText,
            userName: messageData.userName,
            chatRoomType: messageData.chatRoomType,
            roomName: messageData.roomName
        };

        this.socket.send(JSON.stringify(message));
    };

    public closeConnection = () => {
        this.socket.close();
    };
}

export default WebSocketService;
