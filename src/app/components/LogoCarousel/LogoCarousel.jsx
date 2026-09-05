import Image from "next/image";

export default function LogoCarousel({ logos = [], title = "Empresas que nos eligieron" }) {
  if (!logos || logos.length === 0) {
    return null;
  }

  return (
    <section className="w-full bg-gray-50 py-8 md:py-16">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        {title && (
          <h2 className="pb-8 text-center text-[24px] leading-tight text-slate-900 md:pb-10 md:text-[36px]">
            <strong>{title}</strong>
          </h2>
        )}

        <ul className="mx-auto grid max-w-4xl grid-cols-3 items-center gap-x-4 gap-y-6 md:gap-x-12">
          {logos.map((logo, index) => {
            const image = (
              <span className={`relative block h-16 w-full md:h-28 ${logo.sizeClassName || "max-w-[104px] md:max-w-[240px]"}`}>
                <Image
                  src={logo.src}
                  alt={logo.alt || `Logo ${index + 1}`}
                  fill
                  sizes={logo.sizes || "(min-width: 768px) 240px, 104px"}
                  className="object-contain"
                />
              </span>
            );

            return (
              <li key={logo.id || logo.src} className="flex min-w-0 items-center justify-center">
                {logo.href ? (
                  <a
                    href={logo.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Ir al sitio web de ${logo.alt || `Logo ${index + 1}`}`}
                    className="flex w-full items-center justify-center rounded-md grayscale focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan"
                  >
                    {image}
                  </a>
                ) : (
                  <div className="flex w-full items-center justify-center grayscale">{image}</div>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
