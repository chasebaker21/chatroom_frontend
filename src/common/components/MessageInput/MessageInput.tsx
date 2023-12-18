import './MessageInput.scss'

export const MessageInput = () => {
    return <div>
        <input inputMode={"text"} defaultValue={"Message"}/>
        <button defaultValue={"Send"} value={"Send"}>Send</button>
    </div>
}