import Image from "next/image";
import WhatsAppButton from "./WhatsAppButton";

export default function About() {
  return (
    <section id="sobre" className="py-20 bg-beige-light">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/sobre.jpg"
                alt="R&R Móveis Planejados - Nossos marceneiros"
                fill
                className="object-cover"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-wood-light/20 rounded-2xl -z-10" />
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-wood/10 rounded-2xl -z-10" />
          </div>

          {/* Content */}
          <div>
            <h2 className="section-title text-left mb-6">
              Quem Somos
            </h2>

            <p className="text-lg text-wood-dark/80 mb-6 leading-relaxed">
              Somos a <strong className="text-wood">R&R Móveis Planejados</strong>,
              uma marcenaria familiar que nasceu do amor pelo trabalho artesanal
              e da paixão por transformar ambientes.
            </p>

            <p className="text-lg text-wood-dark/80 mb-6 leading-relaxed">
              Com <strong className="text-wood">mais de 4 anos de experiência</strong> no
              mercado de móveis planejados, iniciamos nossa jornada no Tocantins,
              onde construímos nossa reputação de excelência. Agora, trazemos todo
              esse conhecimento e dedicação para <strong className="text-wood">Goiânia</strong>.
            </p>

            <p className="text-lg text-wood-dark/80 mb-8 leading-relaxed">
              Nosso diferencial está no compromisso com a qualidade: utilizamos
              apenas os <strong className="text-wood">melhores materiais do mercado</strong>
              para garantir móveis duráveis e bonitos, sempre com <strong className="text-wood">
              preços acessíveis</strong> e atendimento personalizado.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <WhatsAppButton text="Fale Conosco" />
              <a
                href="#portfolio"
                className="inline-flex items-center justify-center gap-2 border-2 border-wood text-wood hover:bg-wood hover:text-white font-semibold py-3 px-6 rounded-full transition-all duration-300"
              >
                Ver Portfólio
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
