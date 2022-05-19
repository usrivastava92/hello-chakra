import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {ChakraProvider} from '@chakra-ui/react'
import theme from "./config/theme";


const rootElement = document.getElementById('root')
ReactDOM.createRoot(rootElement!).render(
    <React.StrictMode>
        <ChakraProvider theme={theme}>
            <App/>
        </ChakraProvider>
    </React.StrictMode>,
)