import "./ChatBox.scss"
import {MessagesDisplay} from "../../common/components/MessagesDisplay/MessagesDisplay";
import {MessageInput} from "../../common/components/MessageInput/MessageInput";

export const ChatBox = () => {
    return (<div id={'chatbox'} className="chat-box">
        <MessagesDisplay messageData={mockMessages} currentUser={'userOne'}/>
        <MessageInput/>
    </div>)
}

const mockMessages = [
    {
        type: '',
        message: 'Hello',
        user: 'userOne'
    },
    {
        type: '',
        message: 'How are you?',
        user: 'userOne'
    },
    {
        type: '',
        message: "I'm good. You?",
        user: 'userTwo'
    },
    {
        type: '',
        message: "I'm doing well.",
        user: 'userOne'
    },
    {
        type: '',
        message: 'Are you free later?',
        user: 'userTwo'
    },
    {
        type: '',
        message: 'Hello',
        user: 'userOne'
    },
    {
        type: '',
        message: 'How are you?',
        user: 'userOne'
    },
    {
        type: '',
        message: "I'm good. You?",
        user: 'userTwo'
    },
    {
        type: '',
        message: "I'm doing well.",
        user: 'userOne'
    },
    {
        type: '',
        message: 'Are you free later?',
        user: 'userTwo'
    }
]