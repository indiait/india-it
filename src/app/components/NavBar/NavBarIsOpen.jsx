

export default function NavBarIsOpen() {
  return (
    <div 
        className="lg:hidden w-full h-auto text-dark font-semibold text-sm absolute mt-[4.2rem] rounded-b-lg bg-white"
        style={{
            zIndex: 2
        }}
    >
        <div className="flex flex-col px-[1.5rem]">
            <a
                href="#solutions"
                className="py-[0.8rem] border-b border-lightGrey"
            >
                Nuestros Servicios
            </a>
            
            <a 
                href="#aboutUs"
                className="py-[0.8rem] border-b border-lightGrey"
            >
                Quiénes somos
            </a>
            <a
                href="#contactMe" 
                className="py-[0.8rem] border-b border-lightGrey"
            >
                Contacto
                </a>
        </div>
        
    </div>);
}
