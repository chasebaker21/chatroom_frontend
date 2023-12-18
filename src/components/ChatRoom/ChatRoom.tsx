import "./ChatRoom.scss"
import {SidePanel} from "../SidePanel/SidePanel";
import {UserInfoBox} from "../UserInfoBox/UserInfoBox";
import {ChatBox} from "../ChatBox/ChatBox";

export const ChatRoom = () => {
    return (
        <div className="chat-room">
            <div className={"chat-room-left"}>
                <SidePanel/>
            </div>
            <div className={"chat-room-right"}>
                <UserInfoBox/>
                <ChatBox/>
            </div>
        </div>)
}