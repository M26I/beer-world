import { useState, useEffect } from "react";
import Link from "next/link";
import Hamburger from "./hamburger";
import { Bebas_Neue } from 'next/font/google';

const bebas = Bebas_Neue({
    weight: "400",
     subsets: ['latin'] })

export default function Navbar({ links }) {
    const [isDropdownOpen, setDropdownOpen] = useState(false);
    const handleKeyDown = (event) => {
      if (event.key === "Enter") {
        setDropdownOpen(!isDropdownOpen);
      }
    };
    const [top, setTop] = useState(true);
    const closeMenu = () => {
      setShowMenu(false);
    };
  
  
    const [showMenu, setShowMenu] = useState(false);
  
  
    let menu;
  
  
    if (showMenu) {
      menu = (
        <div className="h-screen w-full bg-light z-50 fixed top-16 ">
          <div className={bebas.className}>
            <div className="pt-4 mx-auto">
              <div className="p-2">
                <ul className="row text-white">
                  <Link
                    href="/beerstyles"
                    onClick={closeMenu}
                    
                    className="px-4 link link--underline block mt-4 lg:inline-block lg:mt-0 hover:text-stone-200"
                  >
                    Beer styles
                  </Link>
                  <Link
                    href="/"
                    
                    onClick={closeMenu}
                    className="px-4 link link--underline block mt-4 lg:inline-block lg:mt-0 hover:text-stone-200"
                  >
                    History of beer
                  </Link>
  
  
                 
                </ul>
              </div>
            </div>
          </div>
        </div>
      );
    }
  
  
    useEffect(() => {
      const scrollHandler = () => {
        window.pageYOffset > 10 ? setTop(false) : setTop(true);
      };
      window.addEventListener("scroll", scrollHandler);
      return () => window.removeEventListener("scroll", scrollHandler);
    }, [top]);
  
  
    return (
      <div className={bebas.className}>
        <nav
          className={`fixed w-full z-50 transition duration-300 ease-in-out text-white ${
            !top && "bg-light shadow-lg text-white"
          } hidden md:block z-50`}
        >
          <div className="w-5/6 mx-auto">
            <div className="hidden lg:visible w-full block flex-grow lg:flex lg:items-center lg:w-auto grid grid-cols-2 text-title-brown  py-6 bg-forestgreen">
              <div className="text-left">
                <Link
                  title="Beer logo- home link"
                  href="/"
                  aria-label="home link"
                >
                  <div
                    className="logo w-40 h-28 "
                    title="Beer logo- home link"
                    alt="Beer logo- home link"
                  ></div>
                </Link>
              </div>
              <div className="text-3xl font-medium  lg:flex-grow text-right">
                <Link
                  href="/beerstyles"
                  className="px-4 link link--underline block mt-4 lg:inline-block lg:mt-0 hover:text-stone-200"
                  
                >
                  Beer styles
                </Link>
                <Link
                  href="/"
                  className="px-4 link link--underline block mt-4 lg:inline-block lg:mt-0 hover:text-stone-200"
                  
                >
                  History of beer
                </Link>
  
  
                
  
  
                
              </div>
            </div>
          </div>
        </nav>
  
  
        <nav
          className={`fixed w-full z-50 bg-light transition duration-300 ease-in-out block lg:hidden z-50`}
        >
          <div className="w-screen flex items-center justify-between h-16 md:h-20">
            <div className="p-5">
              <Link
                href="/"
                title="Beer logo- home link"
                aria-label="home link"
              >
                <div
                  className="logo2 w-14 h-20 "
                  aria-label="home link"
                  title="Beer logo- home link"
                  alt="Beer logo- home link"
                ></div>
              </Link>
            </div>
            <div className="p-5 right-0 fixed">
              <div
                className="menu-btn"
                onClick={() => setShowMenu(!showMenu)}
                aria-label="Toggle Mobile Menu"
              >
                <div>
                  <Hamburger isOpen={showMenu} />
                </div>
              </div>
            </div>
          </div>
        </nav>
        {menu}
      </div>
    );
  }
  