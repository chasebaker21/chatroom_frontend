import "./ChatBox.scss"
import {MessagesDisplay} from "../../common/components/MessagesDisplay/MessagesDisplay";
import {MessageInput} from "../../common/components/MessageInput/MessageInput";

export const ChatBox = () => {
    return (<div id={'chatbox'} className="chat-box">
        <MessagesDisplay/>
        <MessageInput/>
    </div>)
}