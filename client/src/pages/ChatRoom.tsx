import ChatBoxSender, { ChatBoxReceiver } from '../components/ChatBox';
import Navbar from '../components/Navbar';
import { Box, Input } from '@chakra-ui/react';
const ChatRoom: React.FC = () => {


  return (
    <div className="chat-room">
      <Navbar />
      <Box>
        <ChatBoxReceiver/>
        <ChatBoxSender/>
        
      </Box>
      <Input/>
    </div>
  );
};

export default ChatRoom;
