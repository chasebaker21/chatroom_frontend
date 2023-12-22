import './MessagesDisplay.scss'

type Message = {
    type: string;
    message: string;
    user: string;
}
type Props = {
    messages: Message[];
    currentUser: string;
}

const MessageItem = ({messageType, message}: { message: string, messageType: string }) => (
    <li className={`${messageType}-message`}>{message}</li>
);


export const createMessages = (messages: Message[], user: string) => {
    return messages.map((message, index) => {
        const messageType = message.user === user ? 'sent' : 'received';
        return <MessageItem key={index} messageType={messageType} message={message.message}/>;
    });
};

export const MessagesDisplay = ({messages, currentUser}: Props) => {
    return <ul id="messages" className={'messages-container'}>
        {createMessages(messages, currentUser)}
    </ul>
}