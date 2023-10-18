import Head from 'next/head'
import data from "../beer-list.json";
import Navbar from '@/components/navbar';
import { Bebas_Neue } from 'next/font/google';
import { useEffect, useState } from 'react';



const bebas = Bebas_Neue({
  weight: "400",
  subsets: ['latin']
})

export default function SingleBeer({ style }) {
  const styles = data.styles

  useEffect(() => {

    function Util() { }

    Util.osHasReducedMotion = function () {
      if (!window.matchMedia) return false;
      var matchMediaObj = window.matchMedia('(prefers-reduced-motion: reduce)');
      if (matchMediaObj) return matchMediaObj.matches;
      return false;
    };

  }, []);

  const hasIBUData = style && style.international_bitterness_units && style.international_bitterness_units.minimum && style.international_bitterness_units.maximum && style.alcohol_by_volume.minimum && style.alcohol_by_volume.maximum && style.color.minimum && style.color.maximum;

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
      <div key={style.id} className=''>

        <div className="w-52 h-52 relative overflow-hidden flex items-center justify-between mx-auto w-5/6 mt-6">
          <img
            src={style.image_url}
            alt={style.name}
            className="object-cover w-full h-full rounded-full "
          />
        </div>
        <div className={bebas.className}>
          <div className="text-title-brown text-4xl md:text-6xl pt-6 mx-auto w-5/6 text-center">{style.name}</div>
        </div>

        <section key={style.id} className='hidden md:block'>
          <div className='mx-auto w-5/6'>
            <div className="stack-cards js-stack-cards">
              <div className="stack-cards__item bg-white rounded-lg shadow-lg js-stack-cards__item">
                <div className="flex flex-col justify-center items-center">
                  <div className={bebas.className}>
                    <h2 className='text-title-brown text-3xl md:text-5xl  pt-16 '>CATEGORY DESCRIPTION</h2>
                  </div>
                  <p className='text-title-brown  text-lg pt-10 pb-10 px-6 mx-auto w-5/6 '>{style.category_description}</p>
                </div>


              </div>
              <div className="stack-cards__item bg-light rounded-lg shadow-lg js-stack-cards__item">
                <div className="flex flex-col justify-center items-center">
                  <div className={bebas.className}>
                    <h2 className='text-white text-3xl md:text-5xl  pt-16 '>OVERALL IMPRESSION</h2>
                  </div>
                  <p className=' text-white text-xl pt-10 pb-10 px-6 mx-auto w-5/6'>{style.overall_impression}</p>
                </div>


              </div>

              <div className="stack-cards__item bg-white rounded-lg shadow-lg js-stack-cards__item">
                <div className="flex flex-col justify-center items-center">
                  <div className={bebas.className}>
                    <h2 className='text-title-brown text-3xl md:text-5xl  pt-16 '>AROMA</h2>
                  </div>
                  <p className=' text-title-brown text-xl pt-10 pb-10 px-6 mx-auto w-5/6'>{style.aroma}</p>
                </div>
              </div>

              <div className="stack-cards__item bg-light rounded-lg shadow-lg js-stack-cards__item">
                <div className="flex flex-col justify-center items-center">
                  <div className={bebas.className}>
                    <h2 className='text-white text-3xl md:text-5xl  pt-16 '>APPEREANCE</h2>
                  </div>
                  <p className=' text-white text-xl pt-10 pb-10 px-6 mx-auto w-5/6'>{style.appearance}</p>
                </div>
              </div>


              <div className="stack-cards__item bg-white rounded-lg shadow-lg js-stack-cards__item">
                <div className="flex flex-col justify-center items-center">
                  <div className={bebas.className}>
                    <h2 className='text-title-brown text-3xl md:text-5xl  pt-16 '>FLAVOUR</h2>
                  </div>
                  <p className=' text-title-brown text-xl pt-10 pb-10 px-6 mx-auto w-5/6'>{style.flavor}</p>
                </div>
              </div>
              <div className="stack-cards__item bg-light rounded-lg shadow-lg js-stack-cards__item">
                <div className="flex flex-col justify-center items-center">
                  <div className={bebas.className}>
                    <h2 className='text-white text-3xl md:text-5xl  pt-16 '>MOUTHFEEL</h2>
                  </div>
                  <p className=' text-white text-xl pt-10 pb-10 px-6 mx-auto w-5/6 '>{style.mouthfeel}</p>
                </div>
              </div>
              <div className="stack-cards__item bg-white rounded-lg shadow-lg js-stack-cards__item">
                <div className="flex flex-col justify-center items-center">
                  <div className={bebas.className}>
                    <h2 className='text-title-brown text-3xl md:text-5xl  pt-16 '>HISTORY</h2>
                  </div>
                  <p className='text-title-brown text-xl pt-10 pb-10 px-6 mx-auto w-5/6'>{style.history}</p>
                </div>
              </div>
              <div className="stack-cards__item bg-light rounded-lg shadow-lg js-stack-cards__item">
                <div className="flex flex-col justify-center items-center">
                  <div className={bebas.className}>
                    <h2 className='text-white text-3xl md:text-5xl  pt-16 '>INGRIDIENTS</h2>
                  </div>
                  <p className=' text-white text-xl pt-10 pb-10 px-6 mx-auto w-5/6'>{style.ingredients}</p>
                </div>
              </div>
              {hasIBUData && (
          <section key={style.id} className="hidden md:block">
           
           <div className="stack-cards__item bg-white rounded-lg shadow-lg js-stack-cards__item">
                <div className="flex flex-col justify-center items-center">
                  <div className={bebas.className}>
                    <h2 className='text-title.brown text-3xl md:text-5xl  pt-16  pb-10'>{style.name} IN NUMBERS</h2>
                  </div>
                  <table className="border-collapse table-auto border border-title-brown...">

                    <tbody>
                      <tr>
                        <td className="border border-title-brown text-title-brown p-4 text-xl">International Bitternes Unit</td>
                        <td className="border border-title-brown text-title-brown p-4 text-xl">{style.international_bitterness_units.minimum.value} - {style.international_bitterness_units.maximum.value} {style.international_bitterness_units.maximum.unit}</td>
                      </tr>
                      <tr>
                        <td className="border border-title-brown text-title-brown p-4 text-xl">Alcohol by volume</td>
                        <td className="border border-title-brown text-title-brown p-4 text-xl">{style.alcohol_by_volume.minimum.value}{style.alcohol_by_volume.minimum.unit}-{style.alcohol_by_volume.maximum.value}{style.alcohol_by_volume.maximum.unit}</td>
                      </tr>
                      <tr>
                        <td className="border border-title-brown text-title-brown p-4 text-xl">Color</td>
                        <td className="border border-title-brown text-title-brown p-4 text-xl">{style.color.minimum.value} {style.color.minimum.unit}-{style.color.maximum.value} {style.color.maximum.unit}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
          </section> )}
              
            </div>
          </div>
        </section>
        <section className='block md:hidden'>
          <div className='mx-auto w-5/6 pt-10'>
            <div className='bg-White rounded-xl'>
              <div className={bebas.className}>
                <h2 className='text-title-brown text-3xl text-center p-4 pt-10'>CATEGORY DESCRIPTION</h2>
              </div>
              <p className='text-title-brown  text-lg pt-10 pb-10 p-4 '>{style.category_description}</p>
            </div>

            <div className='bg-light rounded-xl'>
              <div className={bebas.className}>
                <h2 className='text-white text-3xl text-center p-4 pt-10'>OVERALL IMPRESSION</h2>
              </div>
              <p className='text-white  text-lg pt-10 pb-10 p-4 '>{style.overall_impression}</p>
            </div>

            <div className='bg-White rounded-xl'>
              <div className={bebas.className}>
                <h2 className='text-title-brown text-3xl text-center p-4 pt-10'>AROMA</h2>
              </div>
              <p className='text-title-brown text-lg pt-10 pb-10 p-4 '>{style.aroma}</p>
            </div>

            <div className='bg-light rounded-xl'>
              <div className={bebas.className}>
                <h2 className='text-white text-3xl text-center p-4 pt-10'>APPEREANCE</h2>
              </div>
              <p className='text-white  text-lg pt-10 pb-10 p-4 '>{style.appearance}</p>
            </div>
            <div className='bg-White rounded-xl'>
              <div className={bebas.className}>
                <h2 className='text-title-brown text-3xl text-center p-4 pt-10'>FLAVOUR</h2>
              </div>
              <p className='text-title-brown text-lg pt-10 pb-10 p-4 '>{style.flavor}</p>
            </div>
            <div className='bg-light rounded-xl'>
              <div className={bebas.className}>
                <h2 className='text-white text-3xl text-center p-4 pt-10'>MOUTHFEEl</h2>
              </div>
              <p className='text-white  text-lg pt-10 pb-10 p-4 '>{style.mouthfeel}</p>
            </div>
            <div className='bg-White rounded-xl'>
              <div className={bebas.className}>
                <h2 className='text-title-brown text-3xl text-center p-4 pt-10'>HISTORY</h2>
              </div>
              <p className='text-title-brown text-lg pt-10 pb-10 p-4 '>{style.history}</p>
            </div>
            <div className='bg-light rounded-xl'>
              <div className={bebas.className}>
                <h2 className='text-white text-3xl text-center p-4 pt-10'>INGREDIENTS</h2>
              </div>
              <p className='text-white  text-lg pt-10 pb-10 p-4 '>{style.ingredients}</p>
            </div>

            {hasIBUData && (
          <section key={style.id} className="block md:hidden">
             <div className='bg-White rounded-xl'>
              <div className={bebas.className}>
                <h2 className='text-title-brown text-3xl text-center p-4 pt-10 pb-10'>{style.name} IN NUMBERS</h2>
              </div>
              <table className="border-collapse table-auto border border-title-brown...">

                <tbody>
                  <tr>
                    <td className="border border-title-brown text-title-brown p-4 text-xl">International Bitternes Unit</td>
                    <td className="border border-title-brown text-title-brown p-4 text-xl">{style.international_bitterness_units.minimum.value} - {style.international_bitterness_units.maximum.value} {style.international_bitterness_units.maximum.unit}</td>
                  </tr>
                  <tr>
                    <td className="border border-title-brown text-title-brown p-4 text-xl">Alcohol by volume</td>
                    <td className="border border-title-brown text-title-brown p-4 text-xl">{style.alcohol_by_volume.minimum.value}{style.alcohol_by_volume.minimum.unit}-{style.alcohol_by_volume.maximum.value}{style.alcohol_by_volume.maximum.unit}</td>
                  </tr>
                  <tr>
                    <td className="border border-title-brown text-title-brown p-4 text-xl">Color</td>
                    <td className="border border-title-brown text-title-brown p-4 text-xl">{style.color.minimum.value} {style.color.minimum.unit}-{style.color.maximum.value} {style.color.maximum.unit}</td>
                  </tr>
                </tbody>
              </table>
            </div>
           </section> )}


           

          </div>
        </section>



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
