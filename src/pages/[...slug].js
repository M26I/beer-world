import Head from 'next/head'
import data from "../beer-list.json";
import Navbar from '@/components/navbar';
import { Bebas_Neue } from 'next/font/google';

const bebas = Bebas_Neue({
  weight: "400",
   subsets: ['latin'] })

export default function SingleBeer({style}) {
  const styles = data.styles
  return (
    <>
      <Head>
        <title>{style.name}</title>
        <meta name="description" content="2021. Beer Guide" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/mug.svg" />
      </Head>
      <Navbar />
      <div className="pt-12 md:pt-36 bg-light"></div>
      <div  key={style.id} className=''>
      <header className="pt-10 px-6 flex items-center md:justify-between mx-auto w-5/6">
      <div className={bebas.className}>
      <div className="text-title-brown text-4xl md:text-6xl">{style.name}</div>
      </div>
      
      <img
        src={style.image_url}
        alt="Your Image"
        className="w-42 h-42 object-contain pr-28 rounded-3xl"
      />
    </header>
       
          
      </div>
      </>
  )
}

export async function getStaticPaths() {
  // Extract style IDs from your JSON data
  const styleIds = data.beerjson.styles.map((style) => style.style_id);

  // Create an array of paths based on the style IDs
  const paths = styleIds.map((styleId) => ({
    params: { slug: [styleId] },
  }));

  return { paths, fallback: false }; // Set fallback to false for static generation
}



export async function getStaticProps({ params }) {
  const styleId = params.slug[0]; // Extract the style ID from the slug
  const style = data.beerjson.styles.find((style) => style.style_id === styleId) || { notfound: true };

  return { props: { style } };
}
