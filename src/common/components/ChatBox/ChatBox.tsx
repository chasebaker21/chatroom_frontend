import "./ChatBox.scss"

export const ChatBox = () => {
    return (<div id="chatbox">
        <ul id="messages"></ul>
        <form>
            <textarea placeholder="Type your message..."></textarea>
            <input type="submit" value="Send"/>
        </form>
    </div>)
}