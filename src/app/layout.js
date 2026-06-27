import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SmoothScrollProvider from "@/components/SmoothScrollProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "MASTIM // EXPERIENCE",
  description: "Toda grande construção começa com curiosidade. Um ecossistema onde tecnologia, criatividade, empreendedorismo e comunidade se conectam.",
  openGraph: {
    title: "MASTIM // EXPERIENCE",
    description: "Toda grande construção começa com curiosidade.",
    url: "https://mastim.experience",
    siteName: "MASTIM // EXPERIENCE",
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col relative">
        <SmoothScrollProvider>
          {children}
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
