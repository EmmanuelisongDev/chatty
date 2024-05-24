import { Box,Text, VStack } from "@chakra-ui/react";

export default function ChatBoxSender() {
  return (
    <Box p={4} borderWidth="1px" borderRadius="lg">
      <VStack spacing={4}>
      <Text>Hi</Text>
      <Text>5:50 pm</Text>
      </VStack>
    </Box>

  )
}



export function ChatBoxReceiver() {
  return (
    <Box p={4} borderWidth="1px" borderRadius="lg" maxHeight="300px" overflowY="auto">
    <VStack spacing={4}>
     <Text>How You doing</Text>
     <Text>5:54 pm</Text>
    </VStack>
  </Box>
  )
}
