import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsappButton";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Senior Citizen Villa | Luxury Elderly Care Horana",
    template: "%s | Senior Citizen Villa",
  },
  description:
    "A peaceful sanctuary offering premium residential care, 24/7 medical supervision, and holistic wellness for seniors in Horana, Sri Lanka.",
  keywords: [
    "Senior Citizen Villa",
    "Elderly Care Horana",
    "Retirement Home Sri Lanka",
    "Assisted Living Colombo",
  ],
  openGraph: {
    title: "Senior Citizen Villa Horana",
    description: "Serene, professional, and compassionate senior living.",
    type: "website",
    locale: "en_LK",
    siteName: "Senior Citizen Villa",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Header />
        {children}
        
        <WhatsAppButton />
        <Footer />
        </body>
    </html>
  );
}
