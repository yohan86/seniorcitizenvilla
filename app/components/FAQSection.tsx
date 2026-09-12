"use client";

import React, { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

const faqs: FAQItem[] = [
  {
    category: "Care & Health",
    question: "How are medical emergencies handled at the villa?",
    answer:
      "We maintain 24/7 on-site nursing staff and vital monitoring stations. For acute medical needs, our villa is situated just 10 minutes from the Horana Base Hospital, and we have emergency transport protocols and visiting doctors on call at all times.",
  },
  {
    category: "Living & Stay",
    question: "Are short-term or convalescent stays available?",
    answer:
      "Yes. While most of our residents choose long-term residential living, we offer short-term respite care and post-operative recovery stays (minimum 2-week duration) subject to suite availability.",
  },
  {
    category: "Dietary",
    question: "Can meals be customized for specific health conditions?",
    answer:
      "Absolutely. Our culinary team prepares fresh, farm-to-table traditional Sri Lankan and Western meals tailored directly to individual physician recommendations (including low-sodium, diabetic-friendly, and easy-to-chew textures).",
  },
  {
    category: "Family Visits",
    question: "What are the visiting hours for family members and diaspora?",
    answer:
      "We encourage strong family connections. Visiting hours are open daily from 9:00 AM to 6:00 PM. For family members visiting from abroad (UK, Australia, US, etc.), flexible extended visiting arrangements can be pre-coordinated.",
  },
  {
    category: "Pricing & Inclusions",
    question: "What is included in the monthly residential care fee?",
    answer:
      "The monthly fee covers full suite accommodation, three nutritious main meals plus morning/evening tea, daily housekeeping, laundry services, 24/7 nursing supervision, scheduled recreational activities, and high-speed Wi-Fi for family video calls.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 px-6 bg-[#F7F4EE] text-[#0D1A12]">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 space-y-3">
          <span className="text-[#C5A059] text-xs font-semibold tracking-[0.3em] uppercase font-mono">
            Essential Clarity
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-normal text-[#0D1A12]">
            Frequently Asked Questions
          </h2>
          <p className="text-[#646D67] text-base font-light max-w-xl mx-auto">
            Everything you need to know about residence, medical safety, and day-to-day living at our Horana estate.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-white border border-[#EAE5DC] transition-colors duration-200 overflow-hidden shadow-sm"
              >
                <button
                  onClick={() => toggleAccordion(idx)}
                  className="w-full p-6 md:p-8 text-left flex items-center justify-between gap-4 focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <div className="space-y-1">
                    <span className="text-[10px] font-mono tracking-widest uppercase text-[#C5A059]">
                      {faq.category}
                    </span>
                    <h3 className="font-serif text-xl md:text-2xl text-[#0D1A12] font-normal leading-snug">
                      {faq.question}
                    </h3>
                  </div>
                  <span
                    className={`flex-shrink-0 w-8 h-8 rounded-full border border-[#C5A059]/40 flex items-center justify-center text-[#C5A059] text-lg transition-transform duration-300 ${
                      isOpen ? "rotate-45 bg-[#0D1A12] text-white" : ""
                    }`}
                  >
                    +
                  </span>
                </button>

                {/* Expandable Content Panel */}
                {isOpen && (
                  <div className="px-6 pb-6 md:px-8 md:pb-8 pt-0 border-t border-[#F0EBE1] text-[#525B56] text-sm md:text-base font-light leading-relaxed animate-fade-in">
                    <p className="pt-4">{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}