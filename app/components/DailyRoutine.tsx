import React from "react";

const routine = [
  { time: "06:30 AM", title: "Morning Wellness & Tea", desc: "Gentle stretch exercises, lawn walks, and fresh herbal or Ceylon tea." },
  { time: "08:00 AM", title: "Nutritious Breakfast", desc: "Customized traditional Sri Lankan or Western breakfasts tailored to doctor guidelines." },
  { time: "10:30 AM", title: "Recreational & Social Time", desc: "Guided gardening, light board games, library reading, or musical therapy." },
  { time: "01:00 PM", title: "Organic Lunch & Rest", desc: "Balanced farm-to-table lunch followed by quiet afternoon rest in air-conditioned suites." },
  { time: "04:30 PM", title: "Evening Tea & Family Calls", desc: "Evening snacks, socializing on the verandah, and high-speed video calls with family abroad." },
  { time: "07:30 PM", title: "Dinner & Vital Health Checks", desc: "Light dinner, medication administration, and nighttime nurse vital logging." },
];

export default function DailyRoutine() {
  return (
    <section className="py-24 px-6 bg-[#0D1A12] text-[#F7F4EE]">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16 space-y-3">
          <span className="text-[#C5A059] text-xs font-semibold tracking-[0.3em] uppercase">
            Life at the Villa
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-light">
            A Day of Comfort, Health & Purpose
          </h2>
        </div>

        <div className="space-y-6">
          {routine.map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-6 bg-[#122218] border border-[#233529] hover:border-[#C5A059] transition-all"
            >
              <div className="sm:w-1/4 mb-2 sm:mb-0">
                <span className="font-mono text-[#C5A059] text-sm font-medium tracking-wider">
                  {item.time}
                </span>
              </div>
              <div className="sm:w-3/4 space-y-1">
                <h3 className="font-serif text-xl text-white font-normal">{item.title}</h3>
                <p className="text-[#A3B0A7] text-sm font-light leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}