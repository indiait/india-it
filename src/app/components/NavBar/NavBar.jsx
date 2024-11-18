import Image from "next/image";


export default function NavBar() {
  return (
    <div className="z-50">
    <nav className="w-full h-[4.2rem] bg-slate-900 absolute">
        <div className="my-[0.9rem] mx-[1.5rem]">
            {/* <h1 className="text-gold">India IT</h1> */}
            <Image 
                src="/India-Isologo-teal-crop-content.png"
                width={24}
                height={48}
                alt="logo-footer"
            />
        </div>
        <button className="top-[1.5rem] right-[2rem] absolute">
 
            <Image src={"/bars-4.svg"} height={24} width={24} alt="bars-4"/>
        </button>
    </nav>
    <ul className="">
        <li>Nuestros servicios</li>
    </ul>
    </div>
    );
}
