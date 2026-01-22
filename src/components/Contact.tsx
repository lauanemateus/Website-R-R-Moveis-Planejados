import WhatsAppButton from "./WhatsAppButton";

export default function Contact() {
  return (
    <section id="contato" className="py-20 bg-beige-light">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Entre em Contato</h2>
        <p className="section-subtitle">
          Estamos prontos para transformar seu espaço. Fale conosco!
        </p>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            {/* Phone/WhatsApp */}
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-14 h-14 bg-whatsapp/10 rounded-2xl flex items-center justify-center">
                <svg
                  className="w-7 h-7 text-whatsapp"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </div>
              <div>
                <h3 className="font-heading text-lg font-semibold text-wood-dark mb-1">
                  WhatsApp
                </h3>
                <a
                  href="tel:+5562991723696"
                  className="text-wood hover:text-wood-dark transition-colors text-lg"
                >
                  (62) 99172-3696
                </a>
                <p className="text-wood-dark/60 text-sm mt-1">
                  Atendimento rápido e personalizado
                </p>
              </div>
            </div>

            {/* Address */}
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-14 h-14 bg-wood/10 rounded-2xl flex items-center justify-center">
                <svg
                  className="w-7 h-7 text-wood"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="font-heading text-lg font-semibold text-wood-dark mb-1">
                  Endereço
                </h3>
                <p className="text-wood-dark/80">
                  Av. La Paz, Qd 01 - Lt 27 Sala 2
                </p>
                <p className="text-wood-dark/80">
                  Res. Mendanha, Goiânia - GO
                </p>
                <p className="text-wood-dark/60 text-sm mt-1">CEP: 74495-770</p>
              </div>
            </div>

            {/* CTA */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="font-heading text-2xl font-semibold text-wood-dark mb-4">
                Pronto para começar seu projeto?
              </h3>
              <p className="text-wood-dark/70 mb-6">
                Entre em contato pelo WhatsApp e receba um orçamento
                personalizado sem compromisso.
              </p>
              <WhatsAppButton
                text="Solicitar Orçamento Grátis"
                className="w-full justify-center"
              />
            </div>
          </div>

          {/* Map */}
          <div className="h-[400px] lg:h-auto min-h-[400px] rounded-2xl overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3821.8494834!2d-49.3857!3d-16.7833!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTbCsDQ3JzAwLjAiUyA0OcKwMjMnMDguNSJX!5e0!3m2!1spt-BR!2sbr!4v1642000000000!5m2!1spt-BR!2sbr"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização R&R Móveis Planejados"
              className="grayscale hover:grayscale-0 transition-all duration-500"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
