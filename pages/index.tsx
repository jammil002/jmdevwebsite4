// Components
import Head from 'next/head'
import Navbar from '../components/Navbar'
import Centerpiece from '../components/Centerpiece'
// Fonts
import { Inter } from '@next/font/google'
import {Press_Start_2P} from '@next/font/google'

const inter = Inter({ subsets: ['latin'] })
const PressStart = Press_Start_2P({
  subsets: ['latin'],
  weight: ['400'],
});

export default function Home() {
  return (
    <>
      <Head>
        <title>jm.dev</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='min-h-screen p-6 {PressStart.className}'>
        <div>
         <Navbar/>
         <Centerpiece/>
        </div>
      </main>
    </>
  )
}
