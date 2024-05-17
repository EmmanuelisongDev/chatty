import { Box, Button, HStack,Menu, MenuButton, MenuItem, MenuList} from '@chakra-ui/react';
import {HamburgerIcon, } from '@chakra-ui/icons'


export default function Navbar() {
  return (
    <Box>
        <Menu>
           
           
    <HStack>
    <MenuButton
      rightIcon={
      <Box 
        as={HamburgerIcon} 
        w={{ base: 5, md: 7 }} 
        h={{ base: 5, md: 7 }} 
        color='brand.50' 
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
      24 online
    </MenuButton>
    </HStack>


  <MenuList minW={0}>
    <MenuItem  >
      New Tab
    </MenuItem>
    {/* <MenuItem  >
      New Window
    </MenuItem> */}
    {/* <MenuItem >
      Open Closed Tab
    </MenuItem> */}
    <MenuItem >
      Open File...
    </MenuItem>
  </MenuList>
</Menu>
    </Box>
  )
}
