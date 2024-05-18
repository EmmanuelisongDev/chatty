import { Button, Center, Container, Input, Box, Flex, Text, HStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { ChangeEvent, useState,useRef,useEffect } from "react";

export default function HomePage() {
  const [userName, setUserName] = useState<string>('');
  const [error, setError] = useState<string | null>(null);
  const [isValid, setIsValid] = useState<boolean>(false);

  function handleUserNameChange(event: ChangeEvent<HTMLInputElement>) {
    const name = event.target.value;
    setUserName(name);
    const validationError = validateUserName(name);
    setError(validationError);
    setIsValid(!validationError);
  }

  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.key === 'Enter') {
        buttonRef.current?.click();
      }
    };

    window.addEventListener('keypress', handleKeyPress);

    return () => {
      window.removeEventListener('keypress', handleKeyPress);
    };
  }, []);

  
  function validateUserName(name: string): string | null {
    if (!name.trim()) {
      return "User name cannot be empty.";
    }
    if (name.length < 3) {
      return "User name must be at least 3 characters long.";
    }
    return null;
  }

  function handleUserJoinChat() {
    const validationError = validateUserName(userName);
    if (validationError) {
      setError(validationError);
      return;
    }
    console.log(userName);
    setError(validationError);
    setUserName('');
    setIsValid(false);
  }

  return (
    <Box>
      <Center pt={4}>
        <Text color="brand.100" fontWeight="black" fontSize="md">
          Chatty
          <Text as="span" color='brand.50'>.</Text>
        </Text>
      </Center>

      <Flex direction="column" align="center" justify="center" height="100vh">
        <Container>
          <Text textAlign='center' color='brand.100' fontWeight='black' fontSize="5xl">
            Just Chat
            <Text as="span" fontWeight='black' fontSize="5xl" color='brand.50'>!</Text>
          </Text>

          <Text fontWeight='medium' textAlign='center' fontSize='md' color='brand.100'>
            Join our chatroom for casual conversations and friendly interactions with <Text as='span' color='brand.50' fontWeight='bold'>random people.</Text> Connect with others and enjoy chatting about anything that interests you. No frills, just pure chatting fun!
          </Text>
          <HStack gap={3} mt={4}>
            <Input
              variant='flushed'
              fontSize="lg"
              fontWeight='medium'
              focusBorderColor="brand.100"
              borderBottomColor="brand.100"
              errorBorderColor='red.300'
              color='brand.100'
              _placeholder={{ opacity: 0.5, color: 'brand.100' }}
              placeholder='Enter name'
              onChange={handleUserNameChange}
              value={userName}
            />

{isValid ? (
          <Link to="/chatroom">
            <Button
              bg='brand.50'
              _hover={{ bg: 'brand.100', color: 'brand.50' }}
              color='brand.200'
              size='md'

            >
              Join Chat
            </Button>
          </Link>
        ) : (
          <Button
          ref={buttonRef}
            onClick={handleUserJoinChat}
            bg='brand.50'
            _hover={{ bg: 'brand.50' }}
            color='brand.200'
            size='md'
            disabled
          >
            Join Chat
          </Button>
        )}

          </HStack>
          {error && (
            <Text color='red.500' mt={2}>
              {error}
            </Text>
          )}
        </Container>
      </Flex>
    </Box>
  );
}
