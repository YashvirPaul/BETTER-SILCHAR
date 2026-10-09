import React, { useState } from 'react';
import { MessageSquare, Phone, Send, CheckCircle2, User, MapPin, ArrowRight, ShieldCheck, ExternalLink } from 'lucide-react';
import { EVENT_DATA, getWhatsAppLink } from '../data/eventData.ts';

export const JoinSection: React.FC = () => {
  const [name, setName] = useState('');
  const [area, setArea] = useState('');
  const [role, setRole] = useState('Volunteer');
  const [hasTriggered, setHasTriggered] = useState(false);

  const localities = [
    'Premtala',
    'Rangirkhari',
    'Tarapur',
    'Ambicapatty',
    'Malugram',
    'Meherpur',
    'Shillongpatty',
    'Central Road',
    'Janiganj',
    'Gungoor / SMCH',
    'Hailakandi Road',
    'Fatokbazar',
    'Other Locality',
  ];

  const handleLaunchWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    const link = getWhatsAppLink(name, area ? `${area} (${role})` : role);
    setHasTriggered(true);
    window.open(link, '_blank', 'noopener,noreferrer');
  };

  const handleQuickInstantJoin = () => {
    const link = getWhatsAppLink();
    window.open(link, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="enroll" className="py-16 sm:py-24 bg-white border-b border-slate-200/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Heading */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-bold uppercase tracking-wider mb-3">
            <User className="w-3.5 h-3.5 text-emerald-700" />
            <span>Volunteer Enrollment Portal</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Confirm Your Participation
          </h2>
          <p className="mt-3 text-base text-slate-600 font-normal leading-relaxed">
            "{EVENT_DATA.officialCallout}"
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Quick Direct Desk (Left) */}
          <div className="lg:col-span-5 bg-slate-900 text-white rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-sm">
            <div className="space-y-5">
              <div className="inline-block px-3 py-1 rounded bg-slate-800 text-emerald-400 font-mono text-xs font-bold tracking-wider uppercase border border-slate-700">
                Direct Coordinator Line
              </div>

              <div>
                <h3 className="text-2xl font-black text-white tracking-tight">
                  Instant WhatsApp Confirmation
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-slate-300 font-normal leading-relaxed">
                  Connect immediately with our field coordinator on WhatsApp to register your presence and receive real-time briefing updates.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-800/90 border border-slate-700">
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-1">
                  OFFICIAL COORDINATOR CONTACT
                </span>
                <span className="text-3xl font-black font-mono tracking-wider text-emerald-400">
                  {EVENT_DATA.phoneNumber}
                </span>
                <span className="block text-xs text-slate-400 mt-1">
                  Available for calls & WhatsApp confirmations
                </span>
              </div>
            </div>

            <div className="space-y-3 pt-6">
              <button
                onClick={handleQuickInstantJoin}
                className="w-full flex items-center justify-center gap-2.5 py-4 px-6 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm sm:text-base shadow-sm transition-all cursor-pointer"
              >
                <MessageSquare className="w-5 h-5 fill-white" />
                <span>Launch WhatsApp Directly</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </button>

              <a
                href={EVENT_DATA.phoneTel}
                className="w-full flex items-center justify-center gap-2 py-3 px-6 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-xs sm:text-sm transition-colors border border-slate-700"
              >
                <Phone className="w-4 h-4 text-emerald-400" />
                <span>Call Directly: {EVENT_DATA.phoneNumber}</span>
              </a>

              <div className="pt-3 border-t border-slate-800 flex items-center gap-2 text-[11px] text-slate-400">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Free participation • Open to students, professionals & residents</span>
              </div>
            </div>
          </div>

          {/* Form Option (Right) */}
          <div className="lg:col-span-7 bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-2xs flex flex-col justify-between">
            <div>
              <div className="mb-6 pb-4 border-b border-slate-100">
                <h3 className="text-xl font-black text-slate-900 tracking-tight">
                  Pre-Populated Volunteer Registration
                </h3>
                <p className="text-xs text-slate-500 font-medium mt-1">
                  Provide your details below to generate a tailored confirmation message directly in WhatsApp.
                </p>
              </div>

              <form onSubmit={handleLaunchWhatsApp} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                    <User className="w-3.5 h-3.5 text-slate-500" />
                    <span>Full Name *</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter your name"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50/50 text-slate-900 placeholder:text-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-600 text-sm font-medium transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-slate-500" />
                    <span>Silchar Locality</span>
                  </label>
                  <select
                    value={area}
                    onChange={(e) => setArea(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50/50 text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-600 text-sm font-medium transition-all"
                  >
                    <option value="">Select your area (e.g. Premtala, Rangirkhari...)</option>
                    {localities.map((item) => (
                      <option key={item} value={item}>
                        {item}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Affiliation Category
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {['Individual Citizen', 'College Student', 'Civic Group'].map((cat) => (
                      <button
                        type="button"
                        key={cat}
                        onClick={() => setRole(cat)}
                        className={`py-2 px-3 rounded-lg text-xs font-bold border transition-colors cursor-pointer ${
                          role === cat
                            ? 'bg-slate-900 text-white border-slate-900'
                            : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                        }`}
                      >
                        {cat}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Structured WhatsApp Preview */}
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs">
                  <span className="font-bold text-slate-600 block mb-1">
                    Generated WhatsApp Message:
                  </span>
                  <p className="font-mono text-[11px] text-slate-700 bg-white p-2.5 rounded border border-slate-200">
                    "{name.trim() ? `Hello! My name is ${name.trim()}${area ? ` from ${area}` : ''} (${role}). I want to confirm my participation for the Better Silchar Cleanliness Drive at Premtala on Sunday, 11/10/26. Please confirm my spot! 🙏` : EVENT_DATA.defaultWhatsAppMessage}"
                  </p>
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 px-6 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-sm shadow-sm transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4 fill-white" />
                  <span>Send Confirmation via WhatsApp</span>
                </button>
              </form>
            </div>

            {hasTriggered && (
              <div className="mt-4 p-3 rounded-lg bg-emerald-50 border border-emerald-200 text-xs font-medium text-emerald-900 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>
                  WhatsApp triggered. In case your device blocked the popup,{' '}
                  <a
                    href={getWhatsAppLink(name, area)}
                    target="_blank"
                    rel="noreferrer"
                    className="underline font-bold text-emerald-800"
                  >
                    click here to open manually
                  </a>
                  .
                </span>
              </div>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
