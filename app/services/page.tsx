'use client';

import Link from 'next/link';

type ServiceCategory = {
  id: string;
  title: string;
  badge?: string;
  description?: string;
  items?: string[];
  highlight?: boolean;
};

const serviceCategories: ServiceCategory[] = [
  {
    id: 'elderly-care',
    title: 'Elderly Care',
    description: 'Comprehensive daily assistance tailored for seniors seeking comfort and dignity in their golden years.',
    items: [
      'Daily assistance',
      'Personal care',
      'Companionship',
      'Mobility assistance',
      'Meal assistance',
      'Medication reminders',
      'Household support',
    ],
  },
  {
    id: 'patient-care',
    title: 'Patient Care',
    description: 'Dedicated assistance for individuals navigating physical rehabilitation and recovery.',
    items: [
      'Post-surgery recovery',
      'Post-hospitalization support',
      'Illness care & management',
      'Injury recovery assistance',
    ],
  },
  {
    id: 'bedridden-care',
    title: 'Bedridden Care',
    description: 'Attentive, dignified care for individuals requiring total assistance with personal care and positioning.',
    items: [
      'Feeding & nutritional support',
      'Personal hygiene care',
      'Regular position changes',
      'Mobility & transfer support',
      'Basic daily life activities',
    ],
  },
  {
    id: 'dementia-alzheimers',
    title: "Dementia & Alzheimer's Support",
    description: 'Specialized caregiver matching for families caring for loved ones with cognitive decline.',
  },
  {
    id: 'post-hospital-care',
    title: 'Post-Hospital Care',
    description: 'Short-term caregiver support after hospital discharge to ensure safe recovery at home.',
  },
  {
    id: 'companion-care',
    title: 'Companion Care',
    description: 'Warm, engaging support focused on mental wellness and friendly personal connection.',
    items: [
      'Engaging company & conversation',
      'Assistance with daily activities',
      'Safety supervision & peace of mind',
    ],
  },
  {
    id: '24-hour-care',
    title: '24-Hour Care',
    description: 'Continuous live-in or shift-based care arrangements tailored to your loved one’s specific support level.',
  },
  {
    id: 'short-term-care',
    title: 'Short-Term Care',
    badge: 'Popular Option',
    highlight: true,
    description: 'Flexible caregiver coverage for 1 day, several days, 1 week, or temporary relief/respite replacement.',
  },
];

export default function ServicesPage({ clickfn }: { clickfn?: (val: boolean) => void }) {
  return (
    <section className="bg-emerald-950 text-stone-100 py-16 px-6 sm:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Header Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#c5a059] uppercase tracking-widest text-sm font-semibold">
            Personalized Assistance
          </span>
          <h1 className="text-4xl sm:text-5xl font-serif font-bold text-stone-100 mt-2 mb-4">
            Our Care Services
          </h1>
          <p className="text-stone-300 text-lg">
            Providing compassionate, professional care tailored to every stage of senior wellness and recovery.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceCategories.map((service) => (
            <div
              key={service.id}
              className={`relative flex flex-col justify-between rounded-xl p-8 border transition-all duration-300 ${
                service.highlight
                  ? 'bg-emerald-900/40 border-[#c5a059] shadow-lg shadow-[#c5a059]/10'
                  : 'bg-emerald-900/20 border-emerald-800/60 hover:border-[#c5a059]/50'
              }`}
            >
              <div>
                {/* Badge for featured services */}
                {service.badge && (
                  <span className="inline-block bg-[#c5a059] text-emerald-950 font-bold text-xs uppercase px-3 py-1 rounded-full mb-4">
                    {service.badge}
                  </span>
                )}

                <h3 className="text-2xl font-serif font-bold text-[#c5a059] mb-3">
                  {service.title}
                </h3>

                <p className="text-stone-300 mb-6 text-sm leading-relaxed">
                  {service.description}
                </p>

                {/* Bullet List for sub-features */}
                {service.items && (
                  <ul className="space-y-2 mb-6">
                    {service.items.map((item, index) => (
                      <li key={index} className="flex items-start text-sm text-stone-200">
                        <span className="text-[#c5a059] mr-2 font-bold">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              {/* Action Link */}
              <div className="pt-4 border-t border-emerald-800/40 mt-auto">
                <Link
                  href="/contact"
                  onClick={() => clickfn?.(false)}
                  className="inline-flex items-center text-sm font-semibold text-[#c5a059] hover:text-amber-300 transition-colors"
                >
                  Inquire About This Service →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}