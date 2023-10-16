import Head from "next/head";
import Navbar from "@/components/navbar";
import { Bebas_Neue } from "next/font/google";
import MainCategories from "@/components/main-ctgs";



const bebas = Bebas_Neue({
  weight: "400",
   subsets: ['latin'] })

export default function BeerStyles () {
    return(
        <>
        <Head>
        <title>Beer Styles</title>
        <meta name="description" content="2021. Beer Guide" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/mug.svg" />
      </Head>
      <Navbar />
      <div className="pt-12 md:pt-36 bg-light"></div>
      <section  className="hidden md:block h-96 bg-cover bg-center" style={{ backgroundImage: 'url("/bstyles1.png")' }}></section>
      <section  className="block md:hidden h-60 bg-cover bg-center" style={{ backgroundImage: 'url("/bstyles-phone.png")' }}>
      </section>
      <section className={bebas.className}>
        <div className=" mx-auto w-5/6">
          <h1 className="text-title-brown text-4xl md:text-6xl  pt-16">BEER STYLES</h1>
        </div>
      </section>
      <div className=" mx-auto w-5/6">
        <p className="text-xl pt-10 pb-10">Beer is a beverage that knows no boundaries, and its diverse range of flavors
         and brewing traditions have given rise to a wide array of categories and styles. Whether you're a seasoned beer 
         enthusiast or just beginning your exploration of this delightful libation, this page will be your gateway to understanding 
         the most common categorizations of beer. From the classic and time-honored UK and Irish ales to the innovative and
          boundary-pushing alternative styles, we've broken down the world of beer into six distinct categories:
           American beer styles, Lager, UK and Ireland, European beer styles, Alternative beer styles, and International styles.
            Join us on a journey through the rich tapestry of beer, each category offering a unique and exciting experience
             for your taste buds.</p>
      </div>
      <section className={bebas.className}>
        <div className=" mx-auto w-5/6">
          <h1 className="text-title-brown text-4xl md:text-6xl  pt-16">MAIN CATEGORIES</h1>
        </div>
      </section>
      <section>
        <MainCategories />
      </section>
      </>
      
    )

}


