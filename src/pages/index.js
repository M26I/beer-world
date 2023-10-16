import Head from 'next/head'
import Image from 'next/image'
import { Inter, Bebas_Neue } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Header from '@/components/header'
import Navbar from '@/components/navbar'

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
      <Navbar />
     <Header />
     
      <div className=' mx-auto w-5/6'>
      <div className={bebas.className}>
     <h1 className='text-title-brown text-4xl md:text-6xl  pt-16'>FEW WORDS ABOUT BEER STYLES</h1>
     </div>
     <p className=' text-xl pt-10 '>The most general categorization of beer styles by yeast type is a modern craft brewing phenomenon.
       American brewers and most other craft brewers call beers ales if they use top-fermenting (ale)
        yeast and lagers if they use bottom-fermenting (lager) yeast. Most categorization systems will allow for
         a third classification, often called spontaneously-fermented because of the method; however, wild or mixed
          fermentation are perhaps more widely-used modern craft beer terms for these beers fermented with bacteria or
           non-Saccharomyces yeast. The term wild in this context should not be interpreted to imply 
           spontaneously-fermented; most are directly inoculated with the desired fermentation strains.</p>

           <p className=' text-xl pt-10 '>In Germany and other old-world brewing centers, the terminology most typically used to differentiate beers 
            is to refer to them as top-fermented or bottom-fermented. Germans think of ale as a type of English beer, and 
            lager as a method of conditioning beer. So, Germans would typically speak of Kölsch as a top-fermented lager beer,
             not an ale, for example.</p>

             <p className=' text-xl pt-10 '>English brewers, particularly when dealing in a historical context, might separate ales from porters and 
              stouts as types of beer (although in the next breath, saying there is no difference between porters and stouts).
               They might go even further to describe ale as historically distinct from beer in that beer was hopped 
               (or more highly hopped) than ale. These historical notes are important for understanding old recipes and writings,
                but have little relevance today in the common usages of terms describing beer.</p>
                
           </div>
     
      
    </>
  )
}
