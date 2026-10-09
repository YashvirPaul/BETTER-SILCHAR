import React, { useState } from 'react';
import { Award, CheckCircle2, Share2, Sparkles, Send, User, ShieldCheck } from 'lucide-react';
import { EVENT_DATA, getWhatsAppLink } from '../data/eventData.ts';

export const PledgeWall: React.FC = () => {
  const [pledgerName, setPledgerName] = useState('');
  const [pledged, setPledged] = useState(false);
  const [pledgeCount, setPledgeCount] = useState(164);

  const handlePledge = (e: React.FormEvent) => {
    e.preventDefault();
    if (!pledgerName.trim()) return;
    setPledged(true);
    setPledgeCount((prev) => prev + 1);
  };

  const handleShareBadge = () => {
    const text = `I pledged to support the Better Silchar Cleanliness Drive at Premtala on Sunday 11/10/26. Confirm your spot via WhatsApp: ${EVENT_DATA.phoneNumber}. United for positive civic change!`;
    const url = `https://wa.me/?text=${encodeURIComponent(text + ' ' + window.location.href)}`;
    window.open(url, '_blank');
  };

  return (
    <section id="pledge" className="py-16 sm:py-24 bg-slate-50 border-b border-slate-200/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white text-slate-700 text-xs font-bold uppercase tracking-wider mb-3 border border-slate-200">
            <Award className="w-3.5 h-3.5 text-emerald-700" />
            <span>Civic Responsibility</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            The Citizen's Pledge
          </h2>
          <p className="mt-2 text-base text-slate-600 font-normal">
            Commit your support to maintaining civic hygiene in Premtala and across Silchar.
          </p>

          <div className="mt-4 inline-flex items-center gap-2 bg-white border border-slate-200 px-4 py-1.5 rounded-full text-xs font-semibold text-slate-700 shadow-2xs">
            <span className="w-2 h-2 rounded-full bg-emerald-600"></span>
            <span><strong>{pledgeCount}</strong> Citizens Officially Pledged</span>
          </div>
        </div>

        {/* Pledge Card */}
        <div className="bg-white rounded-2xl p-6 sm:p-10 border border-slate-200 shadow-xs">
          {!pledged ? (
            <form onSubmit={handlePledge} className="max-w-lg mx-auto space-y-5">
              <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
                <strong className="text-slate-900 block mb-1">Declaration of Commitment:</strong>
                "I pledge to stand for a cleaner, greener, and stronger Silchar. I support the youth cleanliness drive at Premtala on Sunday 11/10/26, commit to non-littering practices, and encourage civic responsibility in my neighborhood."
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                  Enter Your Full Name to Sign the Digital Pledge:
                </label>
                <div className="relative">
                  <User className="absolute left-3.5 top-3.5 w-4 h-4 text-slate-400" />
                  <input
                    type="text"
                    required
                    value={pledgerName}
                    onChange={(e) => setPledgerName(e.target.value)}
                    placeholder="e.g. Yashvir Paul"
                    className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 bg-slate-50/50 text-slate-900 placeholder:text-slate-400 font-medium text-sm focus:outline-none focus:ring-2 focus:ring-emerald-700"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-3.5 px-6 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm shadow-sm transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Sign Pledge & Issue Volunteer Credential</span>
              </button>
            </form>
          ) : (
            <div className="text-center space-y-6">
              {/* Formal Digital Credential */}
              <div className="max-w-md mx-auto bg-slate-900 text-white rounded-2xl p-6 sm:p-8 border border-slate-700 shadow-lg relative overflow-hidden text-left">
                <div className="flex items-center justify-between pb-3 border-b border-slate-800 mb-4">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-emerald-400">
                    SILCHAR YOUTH VOICE CIVIC CERTIFICATE
                  </span>
                  <span className="text-[10px] font-mono text-slate-400">
                    #BS-2026-{pledgeCount}
                  </span>
                </div>

                <div className="space-y-1 mb-4">
                  <span className="text-xs text-slate-400">Certified Participant:</span>
                  <h3 className="text-2xl font-black text-white tracking-tight">
                    {pledgerName}
                  </h3>
                  <p className="text-xs text-emerald-300 font-semibold">
                    Premtala Cleanliness Drive Supporter
                  </p>
                </div>

                <div className="bg-slate-800/80 rounded-lg p-3 text-xs space-y-1 text-slate-300 border border-slate-700 font-mono">
                  <div className="flex justify-between">
                    <span className="text-slate-400">Schedule:</span>
                    <span>Sunday, 11/10/26</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Venue:</span>
                    <span>Premtala, Silchar</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Helpline:</span>
                    <span className="text-emerald-400">{EVENT_DATA.phoneNumber}</span>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-800 flex justify-between items-center text-[10px] text-slate-400">
                  <span>Small Steps, Big Change</span>
                  <span>Better Silchar</span>
                </div>
              </div>

              {/* Actions */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <a
                  href={getWhatsAppLink(pledgerName, 'Pledged Citizen')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs py-3 px-6 rounded-xl transition-colors"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Confirmation to {EVENT_DATA.phoneNumber}</span>
                </a>

                <button
                  onClick={handleShareBadge}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs py-3 px-6 rounded-xl transition-colors cursor-pointer border border-slate-200"
                >
                  <Share2 className="w-4 h-4 text-slate-600" />
                  <span>Share Commitment</span>
                </button>
              </div>

              <button
                onClick={() => setPledged(false)}
                className="text-xs text-slate-500 hover:text-slate-800 underline font-semibold cursor-pointer"
              >
                Sign for another person
              </button>
            </div>
          )}
        </div>

      </div>
    </section>
  );
};
