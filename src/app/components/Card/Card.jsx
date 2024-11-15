import Image from "next/image";
import Link from "next/link";


export default function Card() {
  return (
    <div className="flex flex-col w-1/2 h-auto px-[15px] text-xs ">
        {/* Imagen */}
        <Link href="#">
        <h1 className="text-cyan leading-8">
            DESCRIPCIÓN SERVICIO
        </h1>
        <p className="text-dark text-sm leading-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero nulla eos velit natus impedit. Quisquam?
        </p>
        </Link>
    </div>
    );
}
