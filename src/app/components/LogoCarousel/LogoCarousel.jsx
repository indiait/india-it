"use client"

import Image from "next/image";

export default function LogoCarousel({ logos = [], title = "Empresas que eligieron nuestras soluciones" }) {
  // Si no hay logos, no renderizamos el componente
  if (!logos || logos.length === 0) {
    return null;
  }

  // Duplicamos los logos para crear el efecto infinito sin cortes
  const duplicatedLogos = [...logos, ...logos];

  return (
    <div className="w-full bg-gray-50 py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Encabezado */}
        {title && (
          <h2 className="text-[36px] pb-4 text-center text-slate-900">
            <strong>{title}</strong>
          </h2>
        )}

        {/* Contenedor del carrusel con overflow hidden */}
        <div className="relative w-full overflow-hidden">
          {/* Carrusel animado */}
          <div className="flex logo-carousel">
            {duplicatedLogos.map((logo, index) => (
              <div
                key={`logo-${index}`}
                className="flex-shrink-0 mx-6 md:mx-8 lg:mx-12 flex items-center justify-center"
                style={{ minWidth: '140px', height: '96px' }}
              >
                {logo.href ? (
                  <a
                    href={logo.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Ir al sitio web de ${logo.alt || `Logo ${index + 1}`}`}
                    className="relative w-full h-full grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100"
                  >
                    <Image
                      src={logo.src}
                      alt={logo.alt || `Logo ${index + 1}`}
                      fill
                      style={{ objectFit: "contain" }}
                      className="filter"
                      unoptimized
                    />
                  </a>
                ) : (
                  <div className="relative w-full h-full grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100">
                    <Image
                      src={logo.src}
                      alt={logo.alt || `Logo ${index + 1}`}
                      fill
                      style={{ objectFit: "contain" }}
                      className="filter"
                      unoptimized
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
