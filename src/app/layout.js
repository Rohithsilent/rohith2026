import { Instrument_Serif, Space_Mono, Hanken_Grotesk, Outfit, Syne, Caveat } from "next/font/google";
import "./globals.css";
import FloatingDock from "@/components/FloatingDock";
import { Analytics } from "@vercel/analytics/next";

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: ["400"],
});

const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const hankenGrotesk = Hanken_Grotesk({
  variable: "--font-hanken-grotesk",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata = {
  title: "Rohith Pullola",
  description: "A Flutter Developer & Applied ML Engineer focused on building intelligent, scalable, and high-performance mobile & web experiences.",
  keywords: ["Rohith Pullola", "pullola rohith", "rohith", "p rohith", "rohith p", "Flutter Developer", "Machine Learning Engineer", "React", "Next.js", "Portfolio"],
  openGraph: {
    title: "Rohith Pullola | Flutter Developer & ML Engineer",
    description: "A Flutter Developer & Applied ML Engineer focused on building intelligent, scalable, and high-performance mobile & web experiences.",
    url: "https://rohithpullola.me",
    siteName: "Rohith Pullola Portfolio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://rohithpullola.me/og-image.jpeg",
        width: 1200,
        height: 630,
        alt: "Rohith Pullola - Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rohith Pullola | Flutter Developer & ML Engineer",
    description: "A Flutter Developer & Applied ML Engineer focused on building intelligent, scalable, and high-performance mobile & web experiences.",
    images: ["https://rohithpullola.me/og-image.jpeg"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${instrumentSerif.variable} ${spaceMono.variable} ${hankenGrotesk.variable} ${outfit.variable} ${syne.variable} ${caveat.variable} antialiased`}
      >
        <FloatingDock />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
