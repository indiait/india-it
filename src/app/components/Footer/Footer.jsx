

export default function Footer() {
    return (
        <div
            className="w-full h-auto bg-slate-900 p-section leading-3 relative"
        >
            {/* Footer logo Image */}
            <p
                className="text-gold text-xs mt-1 leading-8"
            >
                Todos los derechos reservados 2025
            </p>
            <div className="w-full h-fit text-sm text-gold">
                <p className="font-semibold">Contáctanos</p>
                <p>Escríbenos</p>
                <a href="#">nombre@ejemplo.com</a>
            </div>

            <div className="w-full h-fit text-sm text-gold mt-[2rem]">
                <p className="font-semibold">Síguenos</p>
                <div className="flex flex-row w-3/4 justify-between">
                    <a href="#">Instagram</a>
                    <a href="#">Linkedin</a>
                </div>

            </div>
        </div>);
}
