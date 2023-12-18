import './SidePanel.scss'
import {ChatSelect} from "../../common/components/ChatSelect/ChatSelect";
import {UserNameDisplay} from "../../common/components/UserNameDisplay/UserNameDisplay";

export const SidePanel = () => {
    return <div className={'side-panel'}>
        <UserNameDisplay/>
        <div>Search Section</div>
        <div className={'chat-select-boxes-container'}>
            <ChatSelect/>
        </div>
    </div>
}