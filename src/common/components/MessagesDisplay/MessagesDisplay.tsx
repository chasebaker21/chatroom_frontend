import './MessagesDisplay.scss'
import {useSelector} from "react-redux";

type MessageData = {
    type: string;
    message: string;
    user: string;
}
type Props = {
    messageData: MessageData[]
    currentUser: string;
}

// types.ts
export interface Message {
    // Define the structure of your message here
    messageText: string;
    userName: string;
    // Add other fields as needed
}

export interface ChatState {
    messages: Message[];
}

export interface RootState {
    chat: ChatState;
}

const MessageItem = ({messageType, message}: { message: string, messageType: string }) => (
    <li className={`${messageType}-message`}>{message}</li>
);


export const createMessages = (messages: MessageData[], user: string) => {
    return messages.map((message, index) => {
        const messageType = message.user === user ? 'sent' : 'received';
        return <MessageItem key={index} messageType={messageType} message={message.message}/>;
    });
};

export const MessagesDisplay = ({messageData, currentUser}: Props) => {
    const messages = useSelector((state: RootState) => state.chat.messages);
    console.log({messages})
    return <ul id="messages" className={'messages-container'}>
        {createMessages(messageData, currentUser)}
    </ul>
}