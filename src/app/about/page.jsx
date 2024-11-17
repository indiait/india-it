import { aboutUs } from "@/app/constants/data";
import Image from "next/image";

export default function AboutUs() {
  return (
    <div className="flex flex-col w-full h-[450px]">
        <Image 
            src="/teamwork.jpg" 
            width={375}
            height={450}
            alt="teamwork"
            style={{ 
                    objectFit: "cover",
                    zIndex: -1,
                  }}
            
        />
        <div 
            className="w-fit bg-white self-end py-[2rem] px-[1rem] rounded-md  relative opacity-75 bottom-[20px]"
            style={{ zIndex: 9}}
        >
        <h1 className="text-[36px] pb-4">
            {aboutUs.title.toUpperCase()}
        </h1>
        <p className="text-[16px] leading-5">
            {aboutUs.description}
        </p>
        </div>
    </div>);
}
