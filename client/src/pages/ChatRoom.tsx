import ChatBoxSender, { ChatBoxReceiver } from '../components/ChatBox';
import Navbar from '../components/Navbar';
import { Box, Icon, Input,InputGroup, InputLeftElement, Button,InputRightElement } from '@chakra-ui/react';
import {  AttachmentIcon } from "@chakra-ui/icons";
import { BsEmojiSmile } from "react-icons/bs";
import { FaMicrophone } from "react-icons/fa";



const ChatRoom: React.FC = () => {


  return (
    <>
      <Navbar />
    <Box as='div' bg="brand.200" pt={120} h='100vh'>
      <Box mx={4} >
        

        <ChatBoxSender/>
        <ChatBoxReceiver/>
     
        
      </Box>


      <Box position='fixed' bottom={0} w='100%' display='flex' gap={4} p={3}>

      <Box w="100%" >
      <InputGroup >
        <InputLeftElement pointerEvents="none">
          <Icon as={BsEmojiSmile} color="brand.100"  fontWeight='black'  />
        </InputLeftElement>
        <Input placeholder="Enter message" bgColor="grey.500" />
        <InputRightElement>
          <Icon as={AttachmentIcon} color="grey.500" />
          <Icon as={FaMicrophone} color="grey.500" />
        </InputRightElement>
      </InputGroup>
    </Box>
    <Button bgColor="brand.50" color='brand.100'  >Send</Button>
      </Box>
    </Box>
    </>
  );
};

export default ChatRoom;
