import {  Button,
  Center,
  Container,
  Heading,
  Box,
  Text,} from "@chakra-ui/react"

export default function HomePage() {
  return (
   <Container>
    <Center mt={4}>
      <Heading
       color='brand.100'
      fontWeight='extrabold'
       
       >Chatty</Heading>
      <Heading
       fontWeight='extrabold'
      color='brand.50
      '>.</Heading>
    </Center>


    <Center mt={10}>
      <Text
       color='brand.100'
       fontWeight='extrabold'
       >Just Chat</Text>
      <Text 
       fontWeight='extrabold'
      color='brand.50
      font
      '>!</Text>
    </Center>






   </Container>


        
    
   
  )
}
