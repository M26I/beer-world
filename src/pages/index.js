import Head from 'next/head'
import Image from 'next/image'
import { Inter, Bebas_Neue } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Header from '@/components/header'

const inter = Inter({ subsets: ['latin'] })
const bebas = Bebas_Neue({
  weight: "400",
   subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Beer Guide</title>
        <meta name="description" content="2021. Beer Guide" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/mug.svg" />
      </Head>
     <Header />
      
    </>
  )
}
