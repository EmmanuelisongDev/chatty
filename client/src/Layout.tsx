import { Box } from "@chakra-ui/react"
import { Outlet } from "react-router-dom"

export default function Layout() {
  return (
    <Box  as="div" bg="brand.200">

      <Outlet/>
    </Box>
    
  )
}
