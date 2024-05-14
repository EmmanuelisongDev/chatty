import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import '@fontsource/inter'
import { ChakraProvider,extendTheme } from '@chakra-ui/react'


    const theme =  extendTheme({
      colors:{
        brand:{
          50:"#FF6E40",
          100:"#1E3D59",
          200:"#F5F0E1"
        },
      },
      fonts: {
        heading: `'Inter', sans-serif`,
        body: `'Inter', sans-serif`,
      },
    })


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
    <App />
    </ChakraProvider>
  </React.StrictMode>,
)
