import { useRouter } from 'next/router'

import { ChakraProvider } from '@chakra-ui/react'
import theme from '../src/theme'
import { Fonts, MainLayout } from '../src/components'
function MyApp({ Component, pageProps }) {
  const router = useRouter()
  return (
    <ChakraProvider theme={theme}>
      <Fonts />
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </ChakraProvider>
  )
}

export default MyApp
