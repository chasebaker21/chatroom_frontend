export interface MessageInfo {
    messageText: string;
    userName: string;
    chatRoomType: 'direct' | 'room';
    roomName: string;
}