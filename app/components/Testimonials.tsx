
const reviews = [
  {
    quote: "Placing my mother at Horana Villa was the best decision. The 24/7 nursing attention and calm garden environment gave us complete peace of mind while living overseas.",
    author: "Dr. K. Jayawardena",
    sub: "Son of Resident • Living in London, UK",
  },
  {
    quote: "The facility feels more like a private luxury resort than a care home. The meals are tailored to my father's diabetic diet, and the staff treat residents like family.",
    author: "Nishanthi Silva",
    sub: "Daughter of Resident • Colombo",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 px-6 bg-[#F7F4EE] text-[#0D1A12]">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16 space-y-3">
          <span className="text-[#C5A059] text-xs font-semibold tracking-[0.3em] uppercase">
            Family Stories
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-normal">
            Trusted by Families Worldwide
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {reviews.map((r, i) => (
            <div key={i} className="bg-white p-8 md:p-10 border border-[#EAE5DC] flex flex-col justify-between shadow-sm">
              <p className="font-serif italic text-base md:text-lg text-[#2A352E] leading-relaxed mb-6">
                “{r.quote}”
              </p>
              <div className="pt-4 border-t border-[#F0EBE1]">
                <h4 className="font-semibold text-sm text-[#0D1A12]">{r.author}</h4>
                <p className="text-xs text-[#7A857E] font-mono">{r.sub}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}