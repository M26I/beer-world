import Navbar from "@/components/navbar";
import Head from "next/head";
import { Bebas_Neue } from "next/font/google";


const bebas = Bebas_Neue({
  weight: "400",
  subsets: ['latin']
})

export default function History() {
  return (
    <>
      <Head>
        <title>History of Beer</title>
        <meta name="description" content="2021. Beer Guide" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/mug.svg" />
      </Head>
      <Navbar />
      <div className="pt-12 md:pt-36 bg-light"></div>
      <section className="hidden md:block h-96 bg-cover bg-center" style={{ backgroundImage: 'url("/history.png")' }}></section>
      <section className="block md:hidden h-60 bg-cover bg-center" style={{ backgroundImage: 'url("/history-phone.png")' }}>
      </section>
      <section className={bebas.className}>
        <div className=" mx-auto w-5/6">
          <h1 className="text-title-brown text-4xl md:text-6xl  pt-16">HISTORY OF BEER</h1>
        </div>
      </section>
      <div className=" mx-auto w-5/6">
        <p className="text-xl pt-10 pb-10">It is true that modern-day beer styles were mostly developed in Europe (especially in Germany). But through research, we now know that beer was first enjoyed in ancient Mesopotamia.

          The Germans do love their beer, but it was not actually first created there. Zum wohl!

          Here are some of the key civilizations involved in the foundation of the beer we know and love today.</p>
      </div>
      <section className={bebas.className}>
        <div className=" mx-auto w-5/6">
          <h1 className="text-title-brown text-3xl md:text-5xl  pt-16">The Sumerians</h1>
        </div>
      </section>
      <p className="text-xl pt-10 pb-10 mx-auto w-5/6">There are some theories that beer brewing happened at Godin Tepe settlement (now in modern-day Iran) as early as 10,000 BCE when agriculture first developed in the region.

        The people who lived in the land between the Euphrates and Tigris rivers considered beer a very important part of their diet. They called it “the divine drink” because of its intoxicating effect.
        The first solid proof of beer production comes from the period of the Sumerians around 4,000 BCE. During an archeological excavation in Mesopotamia, a tablet was discovered that showed villagers drinking a beverage from a bowl with straws.

        Archeologists also found an ode to Ninkasi, the patron goddess of brewing. This poem also contained the oldest known recipe for making beer using barley from bread.</p>
      <section className={bebas.className}>
        <div className=" mx-auto w-5/6">
          <h1 className="text-title-brown text-3xl md:text-5xl  pt-16">The Babylonians</h1>
        </div>
      </section>
      <p className="text-xl pt-10 pb-10 mx-auto w-5/6">The next civilization known for beer consumption was also from Mesopotamia - the people from the great city of Babylon.

        Babylonians produced over 20 different types of beer around 3,000 BCE.

        Beer was also considered divine in Babylon, a true gift from the Gods. It was also a sign of wealth. The Code of Hammurabi, the ancient Babylonian set of laws, decreed a daily beer ration to citizens.

        Every citizen had his daily dose of beer, depending on his wealth.</p>
      <div className="flex flex-col items-center mx-auto w-5/6">
        <img
          src="/sumer.jpg"
          alt="Mosaic floor with slaves serving beer at a banquet, found in Dougga (3rd century CE)"
          className="mx-auto w-5/6 w-auto"
        />
        <p className="text-center">
          Alulu beer receipt - This records a purchase of “best” beer from a brewer, c. 2050 BC from the Sumerian city of Umma in ancient Iraq
        </p>
      </div>
      <p className="text-xl pt-10 pb-10 mx-auto w-5/6"> The drink was so respected that people were sometimes paid for work in beer, instead of money.

        There was no way of filtering beer back then, so their beer was pretty thick (like porridge) and hard to drink.

        To avoid this problem, ancient Babylonians were the first to use straws for drinking a beverage.</p>
      <section className={bebas.className}>
        <div className=" mx-auto w-5/6">
          <h1 className="text-title-brown text-3xl md:text-5xl  pt-16">The Egyptians</h1>
        </div>
      </section>
      <p className="text-xl pt-10 pb-10 mx-auto w-5/6">Although Sumerians and Babylonians both considered beer sacred, there was hardly a civilization that adored beer as much as the ancient Egyptians did around 1500 BCE.

        The Egyptian goddess of beer was Tenenit. Her name derives from tenemu, one of the many words in the Egyptian language for beer.

        Egyptians were excellent brewers, and they were constantly working on the taste of beer step-by-step so that it would be less bitter and taste better. The most popular beer in Egypt was Heqet (or Hecht). This was a honey-flavored brew and their general word for beer was zytum.

        Beer was often used throughout Egypt as compensation for labor. The workers at the Giza plateau received beer rations three times a day and workers on the Nile were often paid for their work in beer.

        Archeologists have even found beer buried in the tombs of the Pharaohs, so they could enjoy the taste of this delicious beverage in the afterlife.</p>
      <section className={bebas.className}>
        <div className=" mx-auto w-5/6">
          <h1 className="text-title-brown text-3xl md:text-5xl  pt-16">Ancient Greece and Rome</h1>
        </div>
      </section>
      <p className="text-xl pt-10 pb-10 mx-auto w-5/6">How did beer migrate to Europe and become popular around that continent? The Greeks and Romans!

        Beer brewing techniques made its way from Egypt to Greece (as we know from the Greek word for beer, zythos from the Egyptian zytum) but was not a huge hit right away.

        At this time, wine was so popular that it was the drink considered a gift from the gods. Therefore, beer was considered a barbaric drink and only fit for lower classes to imbibe</p>

      <div className="flex flex-col items-center mx-auto w-5/6">
        <img
          src="/egypt-beer.jpg"
          alt="Mosaic floor with slaves serving beer at a banquet, found in Dougga (3rd century CE)"
          className="mx-auto w-5/6 w-auto"
        />
        <p className="text-center">
          Mosaic floor with slaves serving beer at a banquet, found in Dougga (3rd century CE)
        </p>
      </div>

      <p className="text-xl pt-10 pb-10 mx-auto w-5/6">Even so, the Romans were brewing beer (called cerevisia) quite early, as evidenced by discoveries in the tomb of a beer brewer and merchant (a Cerveserius) in ancient Treveris (modern-day Trier).

        Beer was one of the most common drinks on the outskirts of the empire, and the legions of Rome brought beer to Northern Europe. Roman soldiers could enjoy a refreshing cup of beer on their long journeys.</p>
      <section className={bebas.className}>
        <div className=" mx-auto w-5/6">
          <h1 className="text-title-brown text-3xl md:text-5xl  pt-16">The Middle Ages</h1>
        </div>
      </section>
      <p className="text-xl pt-10 pb-10 mx-auto w-5/6">And then came the Middle Ages. During this period, beer was mostly produced in monasteries all across Europe.

        With its high nutritional value, beer was a perfect beverage for monks during times of fasting. Since monks liked the beverage, in some monasteries, monks could drink up to five liters of beer per day.
        The beer production helped the monasteries survive the Dark Ages, as they made enough money to live from selling their beer.</p>
      <section className={bebas.className}>
        <div className=" mx-auto w-5/6">
          <h1 className="text-title-brown text-3xl md:text-5xl  pt-16">Introduction of Hops</h1>
        </div>
      </section>
      <p className="text-xl pt-10 pb-10 mx-auto w-5/6">Around 1000 AD, people started using hops in the brewing process. This refined its taste by making it much less bitter and gave us the beer as we know it today.

        Usage of hops in beer production started spreading across Europe.</p>
      <section className={bebas.className}>
        <div className=" mx-auto w-5/6">
          <h1 className="text-title-brown text-3xl md:text-5xl  pt-16">First Commercial Breweries</h1>
        </div>
      </section>
      <p className="text-xl pt-10 pb-10 mx-auto w-5/6">In the 13th century AD, beer was finally produced commercially in Germany, England, and Austria.

        You know we would get back to Germany at some point!

        The Germans were brewing beer (which they called ol, for `ale') as early as 800 BCE.

        Large quantities of beer jugs, still containing evidence of the beer, were discovered in a tomb in the Village of Kasendorf in northern Bavaria, near Kulmbach.

        The German brewers soon set the standard for most beer makers in Europe. Their beer was of the highest quality, particularly because it was really cold and had a better taste.</p>
      <section className={bebas.className}>
        <div className=" mx-auto w-5/6">
          <h1 className="text-title-brown text-3xl md:text-5xl  pt-16">The Renaissance Period</h1>
        </div>
      </section>
      <p className="text-xl pt-10 pb-10 mx-auto w-5/6">According to this German law, beer could only contain water, barley, and hops. In the mid-1800s, the importance of yeast was discovered by people such as Louis Pasteur and it was added to the “approved” ingredient list.

        The Reinheitsgebot was the world's first consumer protection law, as it regulated the ingredients which could legally be used in brewing beer. It also guaranteed that there was a certain level of purity in German-made beer, which gave it the perception that it was safe to drink.

        Like those who preceded them, the Germans also instituted a daily beer ration and considered beer a necessary staple of their diet.</p>
      <section className={bebas.className}>
        <div className=" mx-auto w-5/6">
          <h1 className="text-title-brown text-3xl md:text-5xl  pt-16">The Modern ages</h1>
        </div>
      </section>
      <p className="text-xl pt-10 pb-10 mx-auto w-5/6 md:pb-16 pb-10">Breweries were emerging one after another in the colonies of North America. The first brewery on the New Continent was in New Amsterdam (which would later become New York City). Both George Washington and Thomas Jefferson were producing beer. George Washington himself wrote a recipe on how to brew beer.

        In the nineteenth century, beer was widely famous as the world's number one alcoholic beverage. This period of modern history marks the start of the biggest changes in beer production, such as using yeast for fermentation.

        In 1810, Oktoberfest was first held in Munich. Its origins can be traced back to wedding festivities that actually featured mostly wine.Prince Regent Ludwig of Bavaria, the later King Ludwig I, and Princess Therese of Saxony-Hildburghausen were married on October 17, 1810. The entire city was invited to the city gates to celebrate and observe a huge horse race.

        Over two hundred years later, it's now the world's largest beer festival. Munich traditionally hosts millions of beer lovers who all gather annually to enjoy the finest German beer.

        As mentioned earlier, the famous Louis Pasteur discovered that yeast causes fermentation. His writings on the impact of yeast to control fermentation marked the single biggest discovery to allow for faithful replication of consistent beer batches.

        Along with the newly invented automatic bottling and refrigeration processes, breweries and beer grew tremendously worldwide. By the end of the nineteenth century, there were 3200 breweries in the United States of America alone.</p>
    </>
  )
}