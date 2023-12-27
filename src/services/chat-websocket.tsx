// WebSocketService.ts
import {MessageInfo} from "../common/interfaces/messages";
import store from "../reducers/store";
import {addMessage} from "../reducers/actions/chatActions";

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
        // Assuming the first message from the backend is the userName
        if (!this.userNameReceived) {
            this.setUserName(event.data);
            this.userNameReceived = true;
            return;
        }

        const message = JSON.parse(event.data);
        store.dispatch(addMessage(message));
        console.log('Received message:', message);
        // Handle the incoming message as needed
    };

    public sendMessage = (messageData: MessageInfo) => {
        const message = {
            messageText: messageData.messageText,
            // userName: messageData.userName,
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
