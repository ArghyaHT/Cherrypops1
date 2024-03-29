import Footer from '@/components/Footer'
import NavBar from '@/components/NavBar'
import '@/styles/globals.css'
import { AnimatePresence } from 'framer-motion'
import { Montserrat } from "next/font/google"
import { useRouter } from 'next/router'

import { Provider } from 'react-redux'
import {store,persistor} from '../../store/store'
import { PersistGate } from "redux-persist/integration/react";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-mont"
})
export default function App({ Component, pageProps }) {

  const router = useRouter();
  return (
    <>
    <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <main className={`${montserrat.variable} font-mont bg-light dark:bg-dark w-full min-h-screen`}>
        <NavBar />
        <AnimatePresence mode='wait'>
          <Component key={router.asPath} {...pageProps} />
        </AnimatePresence>
        <Footer />
      </main>
      </PersistGate>
      </Provider>
    </>
  )
}

