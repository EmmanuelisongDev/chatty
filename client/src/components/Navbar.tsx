import { Box, Button, Text, Center, HStack, Menu, MenuButton, MenuItem, MenuList, Flex } from '@chakra-ui/react';
import {HamburgerIcon, } from '@chakra-ui/icons'

type NamesObject = Record<string, string>;

export default function Navbar() {

  const names: NamesObject = {
    1: 'Alice',
    2: 'Bob',
    3: 'Charlie',
    4: 'Diana',
    5: 'Eve'
  };
  
  return (
    <Box p={{base:2,md:5}}  >
      <Flex  justifyContent='space-between' alignItems='center'>

        <Menu  >     
    <HStack>
    <MenuButton
      rightIcon={
        <Box 
        as={HamburgerIcon} 
        w={{ base: 5, md: 7 }} 
        h={{ base: 5, md: 7 }} 
        color='brand.100' 
        />}
        as={Button}
        aria-label='Options'
        px={{ base: 2, md: 4 }}
        py={{ base: 1, md: 2 }}
        bgColor='brand.400'
        color='brand.100'
        fontSize='sm'
        fontWeight='medium'
        borderRadius='lg'
        >
       <Box as="span" position="relative" mr={1} display="inline-block">
      <Box
        width="8px" 
        height="8px"
        bg="green.400" 
        borderRadius="full"
      />
    </Box>
24 
    </MenuButton>
    </HStack>
  <MenuList minW={0} bg='brand.100' >
  {Object.entries(names).map(([key, name]) => (
        <MenuItem key={key} bg='brand.100' color='brand.200'>
          {name}
        </MenuItem>
      ))}
  </MenuList>
</Menu>



<Center>
        <Text color="brand.100" fontWeight="black" fontSize="md">
          Chatty
          <Text as="span" color='brand.50'>.</Text>
        </Text>
      </Center>

    
    <Button
      bg='brand.50'
      _hover={{ bg: 'brand.100', color: 'brand.50' }}
      color='brand.200'
      size='sm'
    >
      Leave
    </Button>

      </Flex>









    </Box>
  )
}
