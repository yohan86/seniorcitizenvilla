
const rooms = [
  {
    title: "Deluxe Private Suite",
    desc: "Spacious individual room with private verandah overlooking the Horana garden grounds.",
    features: ["Attached Modern Bath", "24/7 Nurse Call Button", "Air Conditioned", "Garden View"],
    tag: "Most Popular",
  },
  {
    title: "Executive Shared Suite",
    desc: "Comfortable twin-sharing suite designed for companionship while maintaining personal privacy.",
    features: ["Shared Ensuite Bath", "24/7 Nurse Call Button", "Wheelchair Friendly", "Daily Housekeeping"],
    tag: "Companionship",
  },
  {
    title: "Full Assistance Care Room",
    desc: "Specially adapted room for seniors requiring specialized medical and physical support.",
    features: ["Adjustable Medical Bed", "Dedicated Caregiver Support", "Vital Signs Station", "Non-slip Flooring"],
    tag: "High Care",
  },
];

export default function Accommodations() {
  return (
    <section className="py-24 px-6 bg-[e4f3e0]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="text-[#C5A059] text-xs font-semibold tracking-[0.3em] uppercase">
            Living Spaces
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-normal text-[#3b485a]">
            Residences Built for Comfort & Safety
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {rooms.map((room, idx) => (
            <div
              key={idx}
              className="bg-white border border-[#EAE5DC] p-8 flex flex-col justify-between hover:border-[#C5A059] transition-all shadow-sm"
            >
              <div className="space-y-4">
                <span className="text-[10px] font-mono tracking-widest uppercase bg-teal-800 text-[#C5A059] px-3 py-1 inline-block">
                  {room.tag}
                </span>
                <h3 className="font-serif text-2xl font-medium text-[#0D1A12]">
                  {room.title}
                </h3>
                <p className="text-[#646D67] text-sm font-light leading-relaxed">
                  {room.desc}
                </p>
                <ul className="pt-4 border-t border-[#F0EBE1] space-y-2 text-xs text-[#525B56]">
                  {room.features.map((feat, fIdx) => (
                    <li key={fIdx} className="flex items-center gap-2">
                      <span className="text-[#C5A059]">✦</span>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-8 mt-6 border-t border-[#F0EBE1]">
                <a
                  href="#contact"
                  className="block text-center border border-[#0D1A12] hover:bg-teal-800 hover:text-white text-[#0D1A12] py-2.5 text-xs font-semibold uppercase tracking-[0.2em] transition-all duration-300 shadow-sm hover:shadow-md"
                >
                  Inquire Availability
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}