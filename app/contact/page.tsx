
import Link from "next/link";
import ContactSection from "../components/ContactSection";

export const metadata = {
  title: "Arrange a Tour | Senior Citizen Villa Horana",
  description: "Book a private estate tour or contact our admissions desk in Horana.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#F7F4EE] text-[#0D1A12]">
    
      <ContactSection />

    </div>
  );
}