'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

type CaregiverJoinSplitSectionProps = {
  clickfn?: (val: boolean) => void;
};

export default function CaregiverJoinSplitSection({ clickfn }: CaregiverJoinSplitSectionProps) {
  const [scrollY, setScrollY] = useState(0);
  const [isFixedMode, setIsFixedMode] = useState(true);

  useEffect(() => {
    if (isFixedMode) return;

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isFixedMode]);

  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden py-24 px-6 sm:px-12">
      {/* Background Layer with Parallax */}
      <div
        className={`absolute inset-0 z-0 bg-cover bg-center transition-transform duration-100 ease-out ${
          isFixedMode ? 'bg-fixed' : ''
        }`}
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?q=80&w=2000&auto=format&fit=crop')`,
          transform: !isFixedMode ? `translateY(${scrollY * 0.15}px) scale(1.1)` : 'none',
        }}
      >
        {/* Deep Emerald Dark Overlay */}
        <div className="absolute inset-0 bg-green/55 backdrop-blur-[2px]" />
        <div className="absolute inset-0 bg-gradient-to-b from-green via-transparent to-emerald-950" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-6xl mx-auto w-full">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#c5a059] uppercase tracking-widest text-sm font-semibold">
            Tailored Care Solutions
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-stone-100 mt-2 mb-4">
            How Can We Assist You Today?
          </h2>
          <p className="text-stone-300 text-base sm:text-lg">
            Whether you are seeking dedicated care for a family member or looking to join our professional care team, we are here to support your journey.
          </p>
        </div>

        {/* Dual Choice Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {/* Card 1: Find a Caregiver */}
          <div className="group relative bg-green/20 border border-[#c5a059]/40 rounded-2xl p-8 sm:p-10 flex flex-col justify-between hover:border-[#c5a059] hover:bg-emerald-900/60 transition-all duration-300 shadow-xl backdrop-blur-md">
            <div>
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#c5a059]/10 text-stone-100 font-bold text-xl mb-6 border border-[#c5a059]/30">
                01
              </div>
              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-stone-100 mb-4">
                Need a Caregiver?
              </h3>
              <p className="text-stone-200 text-sm sm:text-base leading-relaxed mb-8">
                Tell us about your family’s unique needs. We match your loved one with certified, compassionate care professionals for home assistance, post-hospital recovery, or elderly care.
              </p>
            </div>

            <div>
              <Link
                href="/find-caregiver"
                onClick={() => clickfn?.(false)}
                className="inline-flex w-full items-center justify-center px-6 py-4 rounded-lg bg-[#c5a059] text-emerald-950 font-bold text-base hover:bg-amber-300 transition-colors duration-300 shadow-md"
              >
                Find a Caregiver →
              </Link>
            </div>
          </div>

          {/* Card 2: Join as Caregiver */}
          <div className="group relative bg-emerald-900/40 border border-emerald-700/50 rounded-2xl p-8 sm:p-10 flex flex-col justify-between hover:border-[#c5a059]/80 hover:bg-emerald-900/60 transition-all duration-300 shadow-xl backdrop-blur-md">
            <div>
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-emerald-800/40 text-stone-200 font-bold text-xl mb-6 border border-emerald-700">
                02
              </div>
              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-stone-100 mb-4">
                Are You a Caregiver?
              </h3>
              <p className="text-stone-300 text-sm sm:text-base leading-relaxed mb-8">
                Join our trusted team of caregivers. We offer flexible schedules, competitive compensation, and rewarding placement opportunities with respectful families.
              </p>
            </div>

            <div>
              <Link
                href="/join-as-caregiver"
                onClick={() => clickfn?.(false)}
                className="inline-flex w-full items-center justify-center px-6 py-4 rounded-lg border-2 border-[#c5a059] text-[#c5a059] font-bold text-base hover:bg-[#c5a059] hover:text-emerald-950 transition-colors duration-300 shadow-md"
              >
                Apply as Caregiver →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}