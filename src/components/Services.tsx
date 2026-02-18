import WhatsAppButton from "./WhatsAppButton";

const services = [
  {
    title: "Cozinhas Planejadas",
    description:
      "Cozinhas funcionais e elegantes, projetadas sob medida para otimizar cada centímetro do seu espaço.",
    icon: (
      <svg
        className="w-12 h-12"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
        />
      </svg>
    ),
  },
  {
    title: "Salas e Home Theaters",
    description:
      "Painéis de TV, estantes e móveis para criar o ambiente perfeito para entretenimento e lazer em família.",
    icon: (
      <svg
        className="w-12 h-12"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
    ),
  },
  {
    title: "Escritórios",
    description:
      "Ambientes de trabalho produtivos com mesas, armários e estantes planejadas para home office ou empresas.",
    icon: (
      <svg
        className="w-12 h-12"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
    ),
  },
  {
    title: "Banheiros",
    description:
      "Gabinetes e armários para banheiros que combinam funcionalidade e beleza, resistentes à umidade.",
    icon: (
      <svg
        className="w-12 h-12"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4"
        />
      </svg>
    ),
  },
  {
    title: "Móveis Comerciais",
    description:
      "Soluções para empresas: balcões, recepções, expositores e mobiliário corporativo personalizado.",
    icon: (
      <svg
        className="w-12 h-12"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
        />
      </svg>
    ),
  },
  {
    title: "E muito mais",
    description:
      "Sala, sapateira, closet, cristaleira, adega, nichos, aparador, baú de sala e muito mais!",
    icon: (
      <svg
        className="w-12 h-12"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
        />
      </svg>
    ),
  },
];

export default function Services() {
  return (
    <section id="servicos" className="py-20 bg-beige-light">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Nossos Serviços</h2>
        <p className="section-subtitle">
          Oferecemos soluções completas em móveis planejados para todos os
          ambientes da sua casa ou empresa
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="card p-8 text-center group hover:-translate-y-2"
            >
              <div className="inline-flex items-center justify-center w-20 h-20 bg-beige-light rounded-2xl text-wood mb-6 group-hover:bg-wood group-hover:text-white transition-all duration-300">
                {service.icon}
              </div>

              <h3 className="font-heading text-xl font-semibold text-wood-dark mb-4">
                {service.title}
              </h3>

              <p className="text-wood-dark/70 mb-6 leading-relaxed">
                {service.description}
              </p>

              <WhatsAppButton
                variant="small"
                text="Solicitar Orçamento"
                className="w-full justify-center"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
