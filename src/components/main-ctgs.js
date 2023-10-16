import Link from "next/link";
import Head from "next/head";
import Image from "next/image";



export default function MainCategories() {
  return (
    <>
    <Head>
        <title>Beer Styles</title>
        <meta name="description" content="2021. Beer Guide" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/mug.svg" />
      </Head>
    <div className="grid py-10 md:grid-cols-2 lg:grid-cols-3 md:pt-16 md:pb-20 gap-12 mx-auto w-5/6">
    <Link
      href= "/"
      className="shadow hover:shadow-2xl rounded-xl transition ease-in-out delay-150 duration-300"
    >
      <div className="bg-light rounded-xl h-full">
        <div
          className="  mx-auto w-full rounded-t-xl"
          title= "American beer styles"
          style={{
            backgroundImage: `url(/america.jpg)`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            height: "300px",
          }}
        ></div>


        <h3 className="text-white font-medium text-xl py-6 px-4">American beer styles encompass a wide spectrum of brews, 
        from the hoppy brilliance of American IPAs to the rich and robust stouts and porters. 
        This category often features bold and innovative flavors, with craft breweries leading the
         charge in experimentation and creativity.</h3>


        <div className="py-6 flex flex-row justify-between">
          <p className=" text-white text-2xl font-bold pl-4">American beer styles</p>
          <Image
            src="/arrow.svg"
            width={50} 
            height={50}
            className="pr-4"
            alt="See beers in this category"
            title="See beers in this category"
          />
        </div>
      </div>
    </Link>
     <Link
     href= "/"
     className="shadow hover:shadow-2xl rounded-xl transition ease-in-out delay-150 duration-300"
   >
     <div className="bg-light rounded-xl h-full">
       <div
         className="  mx-auto w-full rounded-t-xl"
         title= "Lager"
         style={{
           backgroundImage: `url(/lager.jpg)`,
           backgroundSize: "cover",
           backgroundRepeat: "no-repeat",
           backgroundPosition: "center",
           height: "300px",
         }}
       ></div>


       <h3 className="text-white font-medium text-xl py-6 px-4"> Lagers, with their crisp and clean profiles,
        are a dominant category in the beer world. German-style Pilsners and light American lagers are popular 
        subcategories, appealing to those who prefer a refreshing and easy-drinking beer experience.</h3>


       <div className="py-6 flex flex-row justify-between">
         <p className=" text-white text-2xl font-bold pl-4">Lager</p>
         <Image
            src="/arrow.svg"
            width={50} 
            height={50}
            className="pr-4"
            alt="See beers in this category"
            title="See beers in this category"
          />
       </div>
     </div>
   </Link>
   <Link
     href= "/"
     className="shadow hover:shadow-2xl rounded-xl transition ease-in-out delay-150 duration-300"
   >
     <div className="bg-light rounded-xl h-full">
       <div
         className="  mx-auto w-full rounded-t-xl"
         title= "UK and Ireland"
         style={{
           backgroundImage: `url(/uk.jpg)`,
           backgroundSize: "cover",
           backgroundRepeat: "no-repeat",
           backgroundPosition: "center",
           height: "300px",
         }}
       ></div>


       <h3 className="text-white  font-medium text-xl py-6 px-4">This category includes classic ales like Bitters 
       and ESBs from the UK and rich, creamy stouts from Ireland, such as the famous Guinness. 
       These traditional brews are often characterized by their malt-forward, well-balanced flavors.</h3>


       <div className="py-6 flex flex-row justify-between">
         <p className=" text-white text-2xl font-bold pl-4">UK and Ireland</p>
         <Image
            src="/arrow.svg"
            width={50} 
            height={50}
            className="pr-4"
            alt="See beers in this category"
            title="See beers in this category"
          />
       </div>
     </div>
   </Link>
   <Link
     href= "/"
     className="shadow hover:shadow-2xl rounded-xl transition ease-in-out delay-150 duration-300"
   >
     <div className="bg-light rounded-xl h-full">
       <div
         className="  mx-auto w-full rounded-t-xl"
         title= "European beer styles"
         style={{
           backgroundImage: `url(/europe.jpg)`,
           backgroundSize: "cover",
           backgroundRepeat: "no-repeat",
           backgroundPosition: "center",
           height: "300px",
         }}
       ></div>


       <h3 className="text-white  font-medium text-xl py-6 px-4">European beer styles feature a 
       diverse array of options. German wheat beers like Hefeweizens and Belgian ales with their fruity 
       and spicy notes are just a few examples of the continental beer heritage that spans centuries.</h3>


       <div className="py-6 flex flex-row justify-between">
         <p className=" text-white text-2xl font-bold pl-4">European beer styles</p>
         <Image
            src="/arrow.svg"
            width={50} 
            height={50}
            className="pr-4"
            alt="See beers in this category"
            title="See beers in this category"
          />
       </div>
     </div>
   </Link>
   <Link
     href= "/"
     className="shadow hover:shadow-2xl rounded-xl transition ease-in-out delay-150 duration-300"
   >
     <div className="bg-light rounded-xl h-full">
       <div
         className="  mx-auto w-full rounded-t-xl"
         title= "Alternative beer styles"
         style={{
           backgroundImage: `url(/alternative.jpg)`,
           backgroundSize: "cover",
           backgroundRepeat: "no-repeat",
           backgroundPosition: "center",
           height: "300px",
         }}
       ></div>


       <h3 className="text-white font-medium text-xl py-6 px-4">This category embraces the quirky and unique, 
       showcasing experimental brews such as sours, barrel-aged beers, and hybrids like Black IPAs or Rye Saisons.
        Alternative beer styles often push the boundaries of what beer can be.</h3>


       <div className="py-6 flex flex-row justify-between">
         <p className=" text-white text-2xl font-bold pl-4">Alternative beer styles</p>
         <Image
            src="/arrow.svg"
            width={50} 
            height={50}
            className="pr-4"
            alt="See beers in this category"
            title="See beers in this category"
          />
       </div>
     </div>
   </Link>
   <Link
     href= "/"
     className="shadow hover:shadow-2xl rounded-xl transition ease-in-out delay-150 duration-300"
   >
     <div className="bg-light rounded-xl h-full">
       <div
         className="  mx-auto w-full rounded-t-xl"
         title= "International styles"
         style={{
           backgroundImage: `url(/international.jpg)`,
           backgroundSize: "cover",
           backgroundRepeat: "no-repeat",
           backgroundPosition: "center",
           height: "300px",
         }}
       ></div>


       <h3 className="text-white font-medium text-xl py-6 px-4">TThis category draws inspiration from New Zealand, 
       Argentina, Brazil, and beyond, featuring globally loved styles such as Mexican lagers, Belgian Dubbels, and Japanese rice beers. 
       These brews offer a diverse, border-defying flavor palette that delights beer enthusiasts worldwide.</h3>


       <div className="py-6 flex flex-row justify-between">
         <p className=" text-white text-2xl font-bold pl-4">International styles</p>
         <Image
            src="/arrow.svg"
            width={50} 
            height={50}
            className="pr-4"
            alt="See beers in this category"
            title="See beers in this category"
          />
       </div>
     </div>
   </Link>
   </div>
   </>
  );
}
