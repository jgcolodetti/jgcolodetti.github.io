import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import GlobalState from '../components/global/GlobalState'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <GlobalState>
      <ChakraProvider>
        <Component {...pageProps} />
      </ChakraProvider>
    </GlobalState>
  )
}

export default MyApp
