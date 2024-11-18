"use client"

import Image from "next/image";
import { useState } from "react";
import NavBarIsOpen from "./NavBarIsOpen";
import Link from "next/link";


export default function NavBar() {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <div>
            <nav 
                className="w-full h-[4.2rem] bg-slate-900 absolute"
                style={{
                    zIndex: 9
                }}
            >
                <div className="my-[0.9rem] mx-[1.5rem]">

                    <Image
                        src="/India-Isologo-teal-crop-content.png"
                        width={24}
                        height={48}
                        alt="logo-footer"
                    />
                </div>

                {/* Navbar links visible on screens largar than 992px */}

                <ul className="hidden lg:flex space-x-4 text-sm top-[1.5rem] right-[2rem] absolute">
                    <Link 
                        href="#solutions"
                        className="text-gold hover:text-lightGrey cursor-pointer px-[0.8rem]">
                        Nuestros servicios
                    </Link>
                    <Link
                        href="#aboutUs"
                        className="text-gold hover:text-lightGrey cursor-pointer px-[0.8rem]"
                    >
                        Quienes Somos
                    </Link>
                    <Link
                        href="#contactMe" 
                        className="text-gold hover:text-lightGrey cursor-pointer px-[0.8rem]"
                    >
                        Contacto
                    </Link>
                </ul>

                {/* Menu button for smaller screens */}
                <button
                    onClick={(e) => setIsOpen(!isOpen)}
                    className="lg:hidden top-[1.5rem] right-[2rem] absolute">
                    
                    {isOpen ? 
                        (
                            <Image src={"/x-mark.svg"} height={24} width={24} alt="x-mark" />
                        ) : 
                        (
                            <Image src={"/bars-4.svg"} height={24} width={24} alt="bars-4" />
                        )}
                    
                </button>
            </nav>
            {/* <ul className="">
        <li>Nuestros servicios</li>
    </ul> */}
            {isOpen &&
                <NavBarIsOpen />

            }
        </div>
    );
}
