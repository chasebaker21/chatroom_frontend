import './UserInfoBox.scss'
import {UserNameDisplay} from "../../common/components/UserNameDisplay/UserNameDisplay";

export const UserInfoBox = () => {
    return <div className={'user-info-box'}>
        <UserNameDisplay/>
    </div>
}