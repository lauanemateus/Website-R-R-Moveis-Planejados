import type { Metadata, Viewport } from "next";
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
    url: "https://rrmoveis.com.br",
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
      <body className="antialiased">{children}</body>
    </html>
  );
}
