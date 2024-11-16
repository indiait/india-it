import Image from "next/image";
import Solutions from "./solutions/page";
import AboutUs from "./about/page";

export default function Home() {
  return (
    <div 
      className="h-screen w-full"
    >
      <div className="h-3/4 relative"
        style={{ zIndex: -1}}
      >
        <Image src={"/conny-schneider-xuTJZ7uD7PI-unsplash.jpg"}
          // width={375}
          // height={500}
          alt="bgHeroImage"
          fill
          style={{ objectFit: "cover", filter: "brightness(65%)" }}
        />
        <div className="flex h-full w-full items-center text-white absolute ">
        <h2 className="text-[38px] mx-4">Soluciones digitales para optimizar <br></br> tu negocio</h2>
      </div>
      </div>
      <Solutions />
      <AboutUs />
    </div>
  );
}
