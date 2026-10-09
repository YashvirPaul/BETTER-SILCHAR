import React, { useState } from 'react';
import { ChevronDown, HelpCircle, Phone, MessageSquare } from 'lucide-react';
import { EVENT_DATA, getWhatsAppLink } from '../data/eventData.ts';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: 'How do I officially register my participation for the Premtala drive?',
      a: `Simply click the WhatsApp button on this site or dial our coordinator helpline at ${EVENT_DATA.phoneNumber}. You will be acknowledged and added to the volunteer coordination desk for updates and morning assembly instructions.`,
    },
    {
      q: 'Is there any monetary registration fee or contribution required?',
      a: 'No. This is an entirely free, non-commercial community initiative organized by Silchar Youth Voice. All waste bags, heavy gloves, sanitizers, and sanitation gear are provided free of cost.',
    },
    {
      q: 'What is the assembly time and exact gathering spot on Sunday?',
      a: `Assembly begins at 06:45 AM at Premtala Point, Silchar on Sunday, ${EVENT_DATA.dateFormatted}. The formal operational briefing and zone distributions commence promptly at 07:00 AM.`,
    },
    {
      q: 'Can students from local schools, colleges, and Assam University participate?',
      a: 'Yes, students from Gurucharan (GC) College, Cachar College, Ramanuj Gupta, Radhamadhab College, Assam University, NIT Silchar, and SMCH are highly encouraged to participate.',
    },
    {
      q: 'What should volunteers wear and bring along?',
      a: 'Please wear comfortable casual clothing (preferably dark or green tones) and sturdy closed shoes or sneakers. Bring a personal reusable water flask to stay hydrated without generating plastic waste.',
    },
    {
      q: 'How can Premtala shop owners and merchant associations cooperate?',
      a: 'Merchants and shop owners are urged to keep designated bins outside their storefronts, refrain from dumping packing debris on pedestrian walks, and facilitate waste collection by our volunteer groups.',
    },
  ];

  return (
    <section id="faqs" className="py-16 sm:py-20 bg-white border-b border-slate-200/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-bold uppercase tracking-wider mb-3 border border-slate-200">
            <HelpCircle className="w-3.5 h-3.5 text-emerald-700" />
            <span>Frequently Asked Questions</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Administrative & Field Inquiries
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600 font-normal">
            Essential operational guidelines for all volunteers and partners.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-2.5">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-slate-50/80 rounded-xl border border-slate-200 overflow-hidden transition-all"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 font-bold text-slate-900 hover:text-emerald-800 transition-colors cursor-pointer"
                >
                  <span className="text-sm sm:text-base">{faq.q}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-slate-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-emerald-700' : ''
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-4 sm:px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-200/60 bg-white">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Support Banner */}
        <div className="mt-10 p-6 bg-slate-900 text-white rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h4 className="font-extrabold text-base">Have an additional inquiry?</h4>
            <p className="text-xs text-slate-400 mt-0.5">
              Contact our volunteer coordinator desk directly for real-time support.
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs px-4 py-2.5 rounded-lg transition-colors"
            >
              <MessageSquare className="w-3.5 h-3.5 fill-white" />
              <span>WhatsApp Coordinator</span>
            </a>
            <a
              href={EVENT_DATA.phoneTel}
              className="inline-flex items-center gap-2 bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-xs px-4 py-2.5 rounded-lg border border-slate-700 transition-colors font-mono"
            >
              <Phone className="w-3.5 h-3.5 text-emerald-400" />
              <span>{EVENT_DATA.phoneNumber}</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
