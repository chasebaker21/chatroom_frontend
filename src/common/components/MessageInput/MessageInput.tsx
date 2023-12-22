import './MessageInput.scss'
import {useState} from "react";
import WebSocketService from "../../../services/chat-websocket";

export const MessageInput = () => {
    const [message, setMessageText] = useState('');
    const [userName, setUserName] = useState('');
    const [chatRoomType, setChatRoomType] = useState<'room' | 'direct'>('room')
    const [roomName, setRoomName] = useState('');

    const webSocketService = new WebSocketService();


    const handleSendMessage = () => {
        if (message.trim() !== '') {
            const messageData = {
                messageText: message,
                userName: userName,
                chatRoomType: chatRoomType,
                roomName: roomName
            }
            webSocketService.sendMessage(messageData);
            // TODO: FIX - not setting input back to '' after sending message
            setMessageText('');
        }
    };

    return <div className={'input-container'}>
        <input className={'message-input'} inputMode={"text"} placeholder={"Message"}
               onChange={(e) => setMessageText(e.target.value)}
        />
        <button className={'send-btn'} defaultValue={"Send"} value={"Send"} onClick={handleSendMessage}>Send</button>
    </div>
}