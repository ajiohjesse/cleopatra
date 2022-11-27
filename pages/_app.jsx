import NextProgress from 'next-progress'
import { Toaster } from 'react-hot-toast'
import '@styles/globals.css'
import '@styles/reset.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <NextProgress delay={300} options={{ showSpinner: false }} height="4px" />
      <Toaster />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
