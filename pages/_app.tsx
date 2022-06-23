import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { QueryClient, QueryClientProvider } from 'react-query'
import AxiosProvider, { getAxios } from 'contexts/AxiosProvider'

const client = new QueryClient()
const axios = getAxios()

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <AxiosProvider value={axios}>
      <QueryClientProvider client={client}>
        <Component {...pageProps} />
      </QueryClientProvider>
    </AxiosProvider>
  )
}

export default MyApp
