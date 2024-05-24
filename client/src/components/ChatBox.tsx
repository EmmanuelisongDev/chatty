import { Box,Flex,Text, VStack } from "@chakra-ui/react";

export default function ChatBoxSender() {
  return (
    <Box    display='flex' w='100%'   borderRadius="lg"  justifyContent='flex-end'   >
      
      <Flex p={3}  w='45%' textAlign='end'  flexDirection='column' borderRadius="lg" bgColor='brand.50' justifyContent='flex-end'  >

        <Text fontWeight='black'  >Mike</Text>
      <Text>Hi</Text>
      <Text>5:50 pm</Text>
      </Flex>
      
      
    </Box>

  )
}



export function ChatBoxReceiver() {
  return (

    <Box    display='flex' w='100%'   borderRadius="lg"  justifyContent='flex-start'   >
      
    <Flex  p={3}  w='45%' textAlign='start'  flexDirection='column' borderRadius="lg" bgColor='brand.300'justifyContent='flex-start'  >

    <Text fontWeight='black'>Clown</Text>
     <Text>How You doing</Text>
     <Text>5:54 pm</Text>
    </Flex>
    
    
  </Box>
  )
}
