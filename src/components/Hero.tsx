import Image from "next/image";
import WhatsAppButton from "./WhatsAppButton";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero.png"
          alt="R&R Móveis Planejados - Ambiente planejado"
          fill
          className="object-cover"
          priority
          quality={90}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white pt-20">
        <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
          R&R Móveis Planejados
          <span className="block text-white">Goiânia</span>
        </h1>

        <p className="text-lg sm:text-xl md:text-2xl mb-8 max-w-2xl mx-auto opacity-90">
          Transformamos seus sonhos em realidade com qualidade premium e preço
          acessível
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <WhatsAppButton
            text="Solicitar Orçamento Grátis"
            className="text-lg px-8 py-4"
          />
          <a
            href="#portfolio"
            className="inline-flex items-center gap-2 text-white border-2 border-white/50 hover:border-white hover:bg-white/10 font-semibold py-3 px-6 rounded-full transition-all duration-300"
          >
            Ver Nossos Trabalhos
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg
            className="w-8 h-8 text-white/70"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}
