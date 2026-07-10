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

export const viewport = {
  themeColor: '#050505',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  viewportFit: 'cover',
};

export const metadata = {
  title: "MASTIM // EXPERIENCE",
  description: "Toda grande construção começa com curiosidade. Um ecossistema onde tecnologia, criatividade, empreendedorismo e comunidade se conectam.",
  icons: {
    icon: '/icon.png',
    apple: '/icon.png',
  },
  openGraph: {
    title: "MASTIM // EXPERIENCE",
    description: "Toda grande construção começa com curiosidade. Um ecossistema onde tecnologia e criatividade se conectam.",
    url: "https://mastim.experience",
    siteName: "MASTIM",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: '/icon.png',
        width: 800,
        height: 600,
        alt: 'Mastim Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "MASTIM // EXPERIENCE",
    description: "Toda grande construção começa com curiosidade.",
    images: ['/icon.png'],
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <body className="relative">
        <SmoothScrollProvider>
          {children}
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
