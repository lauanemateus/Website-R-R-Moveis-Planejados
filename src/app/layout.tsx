import type { Metadata, Viewport } from "next";
import Script from "next/script";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "R&R Móveis Planejados | Móveis Sob Medida em Goiânia",
  description:
    "Móveis planejados sob medida em Goiânia. Cozinhas, closets, home theaters, escritórios e muito mais. Qualidade premium com preço acessível. Solicite seu orçamento!",
  keywords: [
    "móveis planejados",
    "móveis sob medida",
    "marcenaria",
    "Goiânia",
    "cozinha planejada",
    "closet",
    "home theater",
    "escritório planejado",
    "R&R Móveis",
  ],
  authors: [{ name: "R&R Móveis Planejados" }],
  openGraph: {
    title: "R&R Móveis Planejados | Móveis Sob Medida em Goiânia",
    description:
      "Transformamos seus sonhos em realidade. Móveis planejados com qualidade premium e preço acessível.",
    url: "https://www.rrmoveisplanejados-goiania.com.br",
    siteName: "R&R Móveis Planejados",
    locale: "pt_BR",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-17974431501"
          strategy="afterInteractive"
        />
        <Script id="google-ads" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-17974431501');
          `}
        </Script>
        <Script id="google-ads-conversion" strategy="afterInteractive">
          {`
            function gtag_report_conversion(url) {
              var callback = function () {
                if (typeof(url) != 'undefined') {
                  window.location = url;
                }
              };
              gtag('event', 'conversion', {
                  'send_to': 'AW-17974431501/TcVMCLOYyp4cEI2e8PpC',
                  'value': 1.0,
                  'currency': 'BRL',
                  'event_callback': callback
              });
              return false;
            }
          `}
        </Script>
      </head>
      
      <body className="antialiased">{children}</body>
    </html>
  );
}
