
import { prefix } from "@/utils/prefix";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Our Philosophy | Senior Citizen Villa Horana",
  description: "Learn about our vision, leadership, and luxury senior sanctuary in Horana, Sri Lanka.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#F7F4EE]">
      <header className="header-blk relative  py-16 px-6 border-b border-[#1C2C21]">
        <div className="relative max-w-4xl mx-auto space-y-4 text-center md:text-left z-2">
          <Link href="/" className="inline-flex items-center text-xs font-mono uppercase tracking-[0.2em] text-[#C5A059] hover:underline mb-2">
            ← Back to Sanctuary Home
          </Link>
          <h1 className="font-serif text-3xl md:text-5xl font-normal">
            Our Guiding Philosophy
          </h1>
          <p className="text-sm md:text-base font-light max-w-2xl">
            Blending peaceful retreat living with uncompromised medical care and family peace of mind.
          </p>
        </div>
        <div className="absolute inset-0 w-full h-full bg-teal-800/70 z-1" />
        <div className="absolute top-0 left-0 w-full h-full z-0">
          <Image src={`${prefix}/images/citizen-care.jpg`} alt="Senior citizen villa-Horana"
          fill  className="object-cover object-center" />
        </div>
      </header>

      <main className="py-16 px-6 max-w-4xl mx-auto space-y-12 leading-relaxed font-light text-[#3A453F]">
        <section className="space-y-4">
          <h2 className="font-serif text-2xl text-[#0D1A12] border-b border-[#EAE5DC] pb-2">
            A Haven Built for Dignity
          </h2>
          <p>
            Situated amidst the serene foliage of Horana, Senior Citizen Villa was founded to redefine eldercare in Sri Lanka. We believe senior years should be characterized by comfort, dignity, and independence, supported by unobtrusive 24/7 care.
          </p>
          <p>
            Whether serving residents locally or providing complete assurance to family members living overseas, our sanctuary balances professional clinical support with the warmth of a true home.
          </p>
        </section>
      </main>

    </div>
  );
}