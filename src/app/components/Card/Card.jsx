"use client"

import Image from "next/image";
import Link from "next/link";


export default function Card({ image, title, description }) {

  return (
    <div className="flex flex-col w-1/2 h-auto px-[15px] text-xs my-[1.5rem]">
        <div className="w-full h-[4rem] relative">
            <Image
            src={image}
             fill
             style={{ objectFit: "cover"}}
             alt="web apps"
            />
        </div>

        <Link href="#">
        <h1 className="text-cyan leading-8 font-semibold">
            {title.toUpperCase()}
        </h1>
        <p className="text-dark text-sm leading-5">
            {description}
        </p>
        </Link>
    </div>
    );
}
