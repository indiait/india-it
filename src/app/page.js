"use client"

import Image from "next/image";
import Solutions from "./solutions/page";
import AboutUs from "./about/page";
import Footer from "./components/Footer/Footer";
import { useEffect } from "react";
import Link from "next/link";

export default function Home() {

  useEffect(() => {
    if (window.location.hash) {
      window.history.replaceState(null, null, " "); // Remove hash from URL
      window.scrollTo(0, 0); // Scroll to the top of the page
    }
  }, []);

  return (
    <div
      className="h-screen w-full"
    >
      <div className="h-3/4 w-[100%] relative"
        style={{ zIndex: 0 }}
      >
        <Image src={"/bg-luxury-gold.jpg"}
          alt="bgHeroImage"
          fill
          style={{
            objectFit: "cover",
            filter: "brightness(100%)"
          }}
        />

        <div 
          className="flex flex-col h-full w-full justify-center text-white absolute">
          <h2 className="text-[38px] lg:text-[52px] mx-4 md:mx-[12rem] leading-[44px] lg:leading-[64px]">
            <span className="text-[36px] md:text-[38px] lg:text-[52px]">
              Soluciones digitales
            </span>
            <br></br>para optimizar
            <br className="lg:hidden md:hidden"></br> tu negocio</h2>

            <Link href="#solutions" className="hover:text-dark cursor-pointer" >
          <div
            className="mx-4 md:mx-[12rem] w-fit text-[1rem] px-[1.6rem] py-[0.5rem] text-dark rounded-lg mt-4 md:mt-8 font-semibold md:text-[1.8rem] md:font-normal"
            style={{
              background: "linear-gradient(90deg, #d1d1d1, #fff)",
            }}
          >
            
              <p>Qué hacemos</p>
            

          </div>
          </Link>
        </div>

      </div>
      <Solutions />
      <AboutUs />
      <Footer />
    </div>
  );
}
