import Image from "next/image";
import Solutions from "./solutions/page";
import AboutUs from "./about/page";
import Footer from "./components/Footer/Footer";

export default function Home() {
  return (
    <div
      className="h-screen w-full"
    >
      <div className="h-3/4 w-[115%] relative"
        style={{ zIndex: -1 }}
      >
        <Image src={"/bg-luxury-gold.jpg"}
          alt="bgHeroImage"
          fill
          style={{ 
            objectFit: "cover", 
            filter: "brightness(100%)" 
          }}
        />
        
        <div className="flex flex-col h-full w-full justify-center text-white absolute">
          <h2 className="text-[38px] mx-4 md:mx-[15rem] leading-[44px]">
            <span className="text-[36px]">Soluciones digitales</span>
            <br></br>para optimizar  
            <br></br>tu negocio</h2>
          <div 
            className="mx-4 md:mx-[15rem] w-fit text-[1rem] px-[1.6rem] py-[0.5rem] text-dark rounded-md mt-4 font-semibold"
            style={{
              background: "linear-gradient(90deg, #d1d1d1, #fff)"
            }}
          >
            <a>Qué hacemos</a>
          </div>
        </div>

      </div>
      <Solutions />
      <AboutUs />
      <Footer />
    </div>
  );
}
