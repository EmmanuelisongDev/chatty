// import React, { useState, useEffect } from "react";
// import { io, Socket } from "socket.io-client";

// type Message = {
//   user: string;
//   text: string;
// }

const ChatRoom: React.FC = () => {
  // const [messages, setMessages] = useState<Message[]>([]);
  // const [messageText, setMessageText] = useState<string>('');
  // const [user,setUser] = useState(null)
  // const socket: Socket = io('http://localhost:5173/');

  // const sendMessage = () => {
  //   socket.emit('message', messageText);
  //   setMessageText('');
  // };

  // useEffect(() => {
  //   socket.on('message', (message: Message) => {
  //     setMessages(prevMessages => [...prevMessages, message]);
  //   });

  //   return () => {
  //     socket.off('message');
  //   };
  // }, []);

  // const joinChatRoom = (userDetails: React.SetStateAction<null>) => {
  //   setUser(userDetails)
  //   socket.emit('join',userDetails)
  // }
  // const leaveChatRoom = () => {
  //   socket.emit('join',user)
  //   setUser(null)
  // }

  return (
    <div className="chat-room">
      {/* Render your chat messages and input field here */}
      <h1>Romm</h1>
    </div>
  );
};

export default ChatRoom;
