import { aboutUs } from "@/app/constants/data";
import Image from "next/image";

export default function AboutUs() {
    return (
        <>
        <div className="flex flex-col lg:flex-row w-full h-[450px] mb-3 lg:mb-0">
            <Image
                src="/teamwork.jpg"
                width={375}
                height={450}
                alt="teamwork"
                style={{
                    objectFit: "cover",
                    zIndex: -1,
                }}
                className="w-[428px] h-[450px] md:w-full  md:h-[309px] lg:w-1/2 lg:h-auto lg:rounded-md"

            />
            <div
                className="w-fit lg:w-1/2 self-end py-[2rem] px-[1rem] rounded-md  relative opacity-75 bottom-[20px] text-slate-900"
                style={{
                    zIndex: 9,
                    background: "linear-gradient(white, #d1d1d1)",
                }}
            >
                <h1 className="text-[36px] pb-4">
                    {/* {aboutUs.title.toUpperCase()} */}
                    <strong>SOMOS</strong> INDIA IT
                </h1>
                <p className="text-[16px] lg:text-[24px] leading-5 lg:leading-10">
                    {aboutUs.description}
                </p>
                
            </div>
            
        </div>
        
        <div
        className="w-full h-2 absolute"    
        style={{
            background: "linear-gradient(to left,#37abb4,#d49e4a)",
            zIndex: 19,
        }}
    ></div>
    </>
    );
}
