import type { Metadata } from "next";
import { Barlow_Condensed, Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const barlow = Barlow_Condensed({
  subsets: ["latin"],
  variable: "--font-barlow",
  weight: ["600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Tropa do Tubarão | Comunidade de Corrida em Paulista, PE",
  description:
    "Treinos de corrida para diferentes níveis e idades em Paulista, PE. Corra com a Tropa do Tubarão e supere seus limites.",
  keywords: [
    "corrida em Paulista",
    "grupo de corrida Pernambuco",
    "treino de corrida Paulista PE",
    "Tropa do Tubarão",
    "corrida para iniciantes",
    "assessoria de corrida",
  ],
  authors: [{ name: "Tropa do Tubarão" }],
  creator: "Tropa do Tubarão",
  openGraph: {
    title: "Tropa do Tubarão | Corra com a Tropa",
    description:
      "Uma comunidade para começar, evoluir e conquistar novos objetivos em Paulista, PE.",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "https://images.pexels.com/photos/8556686/pexels-photo-8556686.jpeg?auto=compress&cs=tinysrgb&w=1200",
        width: 1200,
        height: 630,
        alt: "Comunidade de corredores em treino",
      },
    ],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${barlow.variable}`}>
      <body>
        <a
          href="#conteudo"
          className="fixed left-4 top-3 z-[100] -translate-y-24 bg-cyan px-4 py-3 text-sm font-extrabold text-ink transition-transform focus:translate-y-0"
        >
          Pular para o conteúdo
        </a>
        {children}
      </body>
    </html>
  );
}
