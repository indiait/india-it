import Image from "next/image";


export default function Footer() {
    return (
        <div
            id="contactMe"
            className="w-full h-auto md:flex md:flex bg-slate-900 p-section leading-3 relative"
        >
            {/* Footer logo Image */}
            <div className="flex flex-col w-full">
                <Image
                    src="/India-Isologo-teal-crop-content.png"
                    width={24}
                    height={48}
                    alt="logo-footer"
                    className=""
                />
                <p
                    className="text-gold text-xs mt-1 leading-8"
                >
                    Todos los derechos reservados 2026
                </p>
            </div>
            <div className="w-full h-fit text-sm text-gold ">
                <p className="font-semibold">Contáctanos</p>
                <p>Escríbenos</p>
                <a href="mailto:india.solutions@outlook.com">india.solutions@outlook.com</a>
            </div>

            <div className="w-full h-fit text-sm text-gold mt-[2rem] md:mt-0">
                <p className="font-semibold">Síguenos</p>
                <div className="flex flex-row md:flex-col w-3/4 justify-between">
                    <a 
                        href="#"
                        className="text-dark"
                        style={{
                            pointerEvents: "none",
                        }}
                    >Instagram</a>
                    <a href="https://www.linkedin.com/company/indiait/">LinkedIn</a>
                </div>

            </div>
        </div>);
}
