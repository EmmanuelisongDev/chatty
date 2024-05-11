import React from 'react';

interface Message {
  user: string;
  text: string;
}

interface Props {
  message: Message;
}

const ChatMessage: React.FC<Props> = ({ message }) => {
  return (
    <div>
      <p>{message.user}: {message.text}</p>
    </div>
  );
};

export default ChatMessage;
