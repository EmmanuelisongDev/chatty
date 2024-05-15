import {  Button,
  Center,
  Container,
  Input,
  Box,
  Flex,
  Text,
  HStack,} from "@chakra-ui/react"
import React from "react"

export default function HomePage() {
  const [userName, setUserName] = React.useState(undefined)
console.log(typeof([]))
  function handleUserNameChange(event: string){
    
      setUserName(event.target.value)

  }

  function handleUserJoinChat(){
    console.log(userName)
    setUserName('')
  }
  return (
   <Box bg="brand.200">
    <Center pt={4}>
      <Text

       color="brand.100"
      fontWeight="black"
       fontSize="md"
       >Chatty
      <Text as="span" color='brand.50'>.</Text>
       </Text>
    </Center>

    
    <Flex  
   direction="column"
   align="center"
   justify="center"
   height="100vh"
    >
      <Container >
      <Text
      textAlign='center'
       color='brand.100'
       fontWeight='black'
       fontSize="5xl"
       >Just Chat
      <Text 
      as='span'
       fontWeight='black'
       fontSize="5xl"
       color='brand.50
       '>!</Text>
       </Text>

      <Text
      fontWeight='medium'
      textAlign='center'
      fontSize='md'
      color='brand.100'

      >
      Join our chatroom for casual conversations and friendly interactions with <Text as='span' color='brand.50' fontWeight='bold'>random people.</Text> Connect with others and enjoy chatting about anything that interests you. No frills, just pure chatting fun!
      </Text>
      <HStack mt={4}>

      <Input 
       variant='flushed' 
       fontSize="lg" 
       fontWeight='medium' 
       focusBorderColor="brand.100" 
       borderBottomColor='brand.100' 
       color='brand.100'  
       _placeholder={{ opacity: 0.5, color: 'brand.100' }}
       placeholder='Enter name'
       onChange={handleUserNameChange}
        value={userName}
        />

      <Button 
      onClick={handleUserJoinChat}
      bg='brand.50'   
      _hover={{ bg: 'brand.100', color: 'brand.50' }} 
      color='brand.200'
      size='md'
      
      >Join Chat</Button>
      </HStack>
       </Container>
    </Flex>






   </Box>


        
    
   
  )
}
