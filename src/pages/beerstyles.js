import Head from "next/head";
import { useState } from "react";
import Navbar from "@/components/navbar";
import { Bebas_Neue } from "next/font/google";
import data from "../beer-list.json";
import Link from "next/link";
import Image from "next/image";
import Search from "@/components/search";





const bebas = Bebas_Neue({
  weight: "400",
  subsets: ['latin']
})

export default function BeerStyles({ styles }) {
  const [query, setQuery] = useState(null); // Set to null to display all initially
  const [continentToSort, setContinentToSort] = useState(null); // Set to null to display all initially
  const [selectedCategory, setSelectedCategory] = useState('');
  const categories = Array.from(new Set(styles?.map((style) => style.main_cat)));

  console.log(styles)
  console.log(categories)



  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  const filteredStyles = styles
    ? styles.filter((style) => {
      // Check if the category matches the selected category
      const matchesCategory = selectedCategory === '' || style.main_cat === selectedCategory;

      // Check if the name includes the search query
      const matchesQuery = query === null || style.name.toLowerCase().includes(query);

      // Return true only if both category and query conditions are met
      return matchesCategory && matchesQuery;
    })
    : [];






  const multipleSearch = (array) => {
    if (!Array.isArray(array)) {
      return [];
    }

    return array.filter((el) => {
      // Check if the category includes the selected continentToSort
      const matchesContinent =
        continentToSort === null || el.category.includes(continentToSort);

      // Check if any of the specified parameters include the query
      const matchesQuery =
        query === null || el.name.toLowerCase().includes(query);

      // Return true only if both conditions are met
      return matchesContinent && matchesQuery;
    });
  };



  const filtered = multipleSearch(styles);



  const handleChange = (e) => {
    const newQuery = e.target.value.toLowerCase();
    setQuery(newQuery);
    console.log('Query:', newQuery);
  };


  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };



  return (
    <>
      <Head>
        <title>Beer Styles</title>
        <meta name="description" content="2021. Beer Guide" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/mug.svg" />
      </Head>
      <Navbar />
      <div className="pt-12 md:pt-36 bg-light"></div>
      <section className="hidden md:block h-96 bg-cover bg-center" style={{ backgroundImage: 'url("/bstyles1.png")' }}></section>
      <section className="block md:hidden h-60 bg-cover bg-center" style={{ backgroundImage: 'url("/bstyles-phone.png")' }}>
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
          <h1 className="text-title-brown text-4xl md:text-6xl  pt-16">EXPLORE BEER STYLES</h1>
        </div>
      </section>
      <div className=" mx-auto w-5/6 pt-10">
        <div className=" w-full bg-light  rounded-xl">
          <Search handleChange={handleChange} />
          <div className="p-4">
            <select value={selectedCategory} onChange={handleCategoryChange} className=" rounded-xl p-2" >
              <option value="" className="text-xl  bg-light text-white custom-select-option mt-2">All Categories</option>
              {categories.map((category) => (
                <option key={category} value={category} className="rounded-xl text-xl custom-select-option bg-light text-white   mb-2">
                  {category}
                </option>
              ))}
            </select>
          </div>







        </div>
      </div>



      <section>
        <div className="grid py-10 md:grid-cols-2 lg:grid-cols-3 md:pt-16 md:pb-20 gap-12 mx-auto w-5/6">
          {filteredStyles.map((style) =>
            <Link
              key={style.id}
              href={style.style_id}
              className="shadow hover:shadow-2xl rounded-xl transition ease-in-out delay-150 duration-300"
            >
              <div className="bg-light rounded-xl h-full">
                <div
                  className="  mx-auto w-full rounded-t-xl"
                  title={style.name}
                  style={{
                    backgroundImage: `url(${style.image_url})`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    height: "300px",
                  }}
                ></div>





                <div className="py-6 flex flex-row justify-between">
                  <p className=" text-white text-2xl font-bold pl-4">{style.name}</p>

                  <Image
                    src="/arrow.svg"
                    width={50}
                    height={50}
                    className="pr-4"
                    alt="See more about this beer"
                    title="See more about this beer"
                  />
                </div>

              </div>
            </Link>)}



        </div>
      </section>
    </>

  )

}




export async function getStaticProps() {
  // Extract the styles from the JSON data
  const styles = data.beerjson.styles;

  return {
    props: {
      styles,
    },
  };
}
