import Head from "next/head";

export default function BeerStyles () {
    return(
        <>
        <Head>
        <title>Beer Styles</title>
        <meta name="description" content="2021. Beer Guide" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/mug.svg" />
      </Head>
      <section  className=" h-suto bg-cover bg-center" style={{ backgroundImage: 'url("/bstyles.png")' }}>
      </section></>
    )

}


