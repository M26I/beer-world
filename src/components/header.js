import React from 'react';
import { Bebas_Neue } from 'next/font/google';

const bebas = Bebas_Neue({
    weight: "400",
     subsets: ['latin'] })
  

const Header = () => {
  return (
    <>
    <div className='hidden md:block'>
    <div className=" h-screen bg-cover bg-center" style={{ backgroundImage: 'url("/header.jpg")' }}>
      <div className="absolute bottom-10 left-10 p-6 ml-4">
        <div className={bebas.className}>
        <h1 className="md:text-9xl text-title-brown">BEER GUIDE</h1>
        </div>
      </div>
    </div>
    </div>
    <div className='block md:didden'>
    <div className=" h-screen bg-cover bg-center" style={{ backgroundImage: 'url("/phoneh.png")' }}>
      <div>
        <div className={bebas.className}>
        <h1 className="text-6xl text-title-brown text-center pt-16">BEER GUIDE</h1>
        </div>
      </div>
    </div>

    </div>
    </>
  );
};

export default Header;
