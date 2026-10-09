import React from 'react';
import { Leaf, ShieldCheck, CheckCircle2, ArrowRight } from 'lucide-react';
import { OfficialPosterCard } from './OfficialPosterCard.tsx';
import { EVENT_DATA } from '../data/eventData.ts';

export const AboutMovement: React.FC = () => {
  const pillars = [
    {
      title: 'CLEANER SILCHAR',
      badge: 'Civic Hygiene & Sanitization',
      desc: 'Systematic debris clearing, eradicating open roadside garbage dumps at Premtala, and initiating structured waste collection.',
    },
    {
      title: 'GREENER SILCHAR',
      badge: 'Environmental Stewardship',
      desc: 'Campaigning against single-use plastics among local vendors and commuters, promoting reusable alternatives, and maintaining green pathways.',
    },
    {
      title: 'STRONGER SILCHAR',
      badge: 'Youth Leadership & Unity',
      desc: 'Unifying youth from colleges, universities, and citizen groups under Silchar Youth Voice to build permanent community accountability.',
    },
  ];

  return (
    <section id="about" className="py-16 sm:py-24 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-bold uppercase tracking-wider mb-3">
            <Leaf className="w-3.5 h-3.5 text-emerald-700" />
            <span>Civic Purpose & Principles</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Small Steps, Big Change.
          </h2>
          <p className="mt-3 text-base text-slate-600 font-normal leading-relaxed">
            Our cities reflect the care we invest in them. Better Silchar is a grassroots collective founded on the premise that visible civic transformation starts with organized citizen volunteerism.
          </p>
        </div>

        {/* 2-Column Grid: Strategic Pillars on Left, Official Circular on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* Left Column: Pillars */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider">
                Three Strategic Pillars
              </span>
              <h3 className="text-2xl font-black text-slate-900 tracking-tight">
                Our Framework for Urban Revitalization
              </h3>
            </div>

            <div className="space-y-4">
              {pillars.map((pillar, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-emerald-300 transition-colors"
                >
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-base font-extrabold text-slate-900">
                      {pillar.title}
                    </h4>
                    <span className="text-[11px] font-semibold text-emerald-800 bg-emerald-100/70 px-2.5 py-0.5 rounded-full">
                      {pillar.badge}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Institutional Endorsement Box */}
            <div className="p-4 rounded-xl bg-slate-100 border-l-4 border-emerald-700 text-slate-800">
              <p className="text-xs sm:text-sm font-medium italic">
                "{EVENT_DATA.motto}"
              </p>
              <div className="flex items-center justify-between mt-2 pt-2 border-t border-slate-200 text-xs">
                <span className="font-bold text-slate-900">
                  Silchar Youth Voice Organizing Committee
                </span>
                <span className="text-slate-500 font-mono text-[11px]">
                  #BetterSilchar
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Public Circular Card */}
          <div className="lg:col-span-6">
            <OfficialPosterCard />
          </div>

        </div>

      </div>
    </section>
  );
};
