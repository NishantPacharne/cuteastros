import Layout from '../components/Layout';
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ThirdwebProvider, ChainId } from '@thirdweb-dev/react'

const activeChainId = ChainId.Mumbai;

function MyApp({ Component, pageProps }: AppProps) {
    return (
      <Layout>
        <ThirdwebProvider desiredChainId={activeChainId}>
          <Component {...pageProps} activeChainId={activeChainId} />
        </ThirdwebProvider>
      </Layout>
    )
}

export default MyApp
