import React from "react";

interface Feature {
  icon: string;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    icon: "🩺",
    title: "24/7 Care",
    description: "Professional caregivers available around the clock.",
  },
  {
    icon: "🥗",
    title: "Healthy Meals",
    description: "Fresh and nutritious meals prepared daily.",
  },
  {
    icon: "🏡",
    title: "Safe Living",
    description: "Secure accommodation designed for seniors.",
  },
  {
    icon: "💊",
    title: "Healthcare Support",
    description: "Regular health monitoring and medical assistance.",
  },
  {
    icon: "🎨",
    title: "Social Activities",
    description: "Fun programs that encourage friendships.",
  },
  {
    icon: "🚐",
    title: "Transportation",
    description: "Reliable transport for appointments and outings.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-16 px-14 bg-white border-y border-slate-100 shadow-sm">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-teal-700 font-bold tracking-wide uppercase text-sm">
            Our Commitment
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-2">
            Why Choose Us
          </h2>
          <p className="text-slate-600 mt-3 text-lg">
            Dedicated services crafted to ensure comfort, dignity, and safety at Senior Citizen Villa, Horana.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 bg-slate-50 hover:bg-teal-50/50 rounded-2xl border border-slate-200/80 transition-all duration-200 hover:shadow-md flex flex-col items-start"
            >
              <div className="w-14 h-14 bg-white rounded-xl shadow-sm border border-slate-200 flex items-center justify-center text-2xl mb-5">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-slate-600 text-base leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}