import { Box, Button, Center,Container,Flex,Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";


export default function ErrorPage() {
  return (
<Box bgColor='brand.200'>
<Center pt={4}>
        <Text color="brand.100" fontWeight="black" fontSize="md">
          Chatty
          <Text as="span" color='brand.50'>.</Text>
        </Text>
      </Center>


      <Flex direction="column" align="center"  justify="center" height="100vh">
        <Container display='flex' flexDirection='column' gap={7}>
          <Text textAlign='center' color='brand.100' fontWeight='black' fontSize="5xl">
            Oops Error
            <Text as="span" fontWeight='black' fontSize="5xl" color='brand.50'>!</Text>
          </Text>

          <Text fontWeight='medium' textAlign='center' fontSize='2xl' color='brand.100'>
          Something went wrong
Go Back to Home Page
          </Text>
        
           

        <Center>
          <Link to="/">
            <Button
              bg='brand.50'
              _hover={{ bg: 'brand.100', color: 'brand.50' }}
              color='brand.200'
              size='md'
              
              >
        Go to Home Page
            </Button>
          </Link>
      </Center>
       

     
        
        </Container>
      </Flex>
</Box>
  )
}

