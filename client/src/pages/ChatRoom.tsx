import ChatBoxSender, { ChatBoxReceiver } from '../components/ChatBox';
import Navbar from '../components/Navbar';
import { Box,  Input } from '@chakra-ui/react';
const ChatRoom: React.FC = () => {


  return (
    <Box as='div' bg="brand.200">
      <Navbar />
      <Box mx={4} >
        

        <ChatBoxSender/>
        <ChatBoxReceiver/>
     
        
      </Box>
      <Input/>
    </Box>
  );
};

export default ChatRoom;
