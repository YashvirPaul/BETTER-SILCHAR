import React, { useState } from 'react';
import { MessageSquare, ArrowRight, ShieldCheck, Phone, Sparkles, CheckCircle2 } from 'lucide-react';
import { EVENT_DATA, getWhatsAppLink } from '../data/eventData.ts';

interface JoinProgramCardProps {
  className?: string;
  source?: string;
}

export const JoinProgramCard: React.FC<JoinProgramCardProps> = ({ className = '', source = 'hero' }) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = (e: React.MouseEvent) => {
    setIsClicked(true);
    setTimeout(() => setIsClicked(false), 2000);
    // WhatsApp redirect
    const url = getWhatsAppLink();
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className={`relative overflow-hidden rounded-2xl bg-white border-2 border-slate-900 shadow-[0_10px_30px_-10px_rgba(4,120,87,0.25)] p-5 sm:p-6 transition-all ${className}`}>
      
      {/* Top Banner Tag */}
      <div className="flex items-center justify-between gap-2 mb-3.5 pb-3 border-b border-slate-100">
        <div className="flex items-center gap-2">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-600"></span>
          </span>
          <span className="text-xs font-black uppercase tracking-wider text-emerald-800">
            REGISTRATIONS ACTIVE • PREMTALA DRIVE
          </span>
        </div>
        <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-emerald-50 text-emerald-800 border border-emerald-200">
          FREE ENTRY
        </span>
      </div>

      {/* Heading */}
      <div className="mb-4">
        <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight leading-tight">
          Join The Movement for Silchar
        </h3>
        <p className="text-xs sm:text-sm text-slate-600 font-medium mt-1">
          Connect directly on WhatsApp with our coordinator desk at <strong className="font-mono text-slate-900">{EVENT_DATA.phoneNumber}</strong> to confirm your presence for Sunday, 11/10/26.
        </p>
      </div>

      {/* The Primary Standout "JOIN THE PROGRAM" Button - cockroachjantaparty-style high-impact CTA */}
      <a
        href={getWhatsAppLink()}
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleClick}
        className="group relative block w-full bg-linear-to-r from-emerald-600 via-green-600 to-emerald-700 hover:from-emerald-700 hover:via-green-700 hover:to-emerald-800 text-white rounded-xl p-4 sm:p-4.5 text-center shadow-lg shadow-emerald-700/25 border-2 border-emerald-500 hover:border-emerald-400 transition-all transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer overflow-hidden"
      >
        {/* Shimmer light sweep effect */}
        <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-linear-to-r from-transparent via-white/20 to-transparent pointer-events-none"></div>

        <div className="relative z-10 flex items-center justify-between gap-3">
          {/* Left Icon with pulse */}
          <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-white text-emerald-700 flex items-center justify-center shrink-0 shadow-sm group-hover:scale-105 transition-transform">
            <MessageSquare className="w-6 h-6 fill-emerald-600 text-emerald-600" />
          </div>

          {/* Central Button Copy */}
          <div className="text-left flex-1 pl-1">
            <span className="block text-[10px] sm:text-[11px] font-black uppercase tracking-widest text-emerald-200">
              OFFICIAL VOLUNTEER DESK
            </span>
            <span className="block text-lg sm:text-xl font-black tracking-wide text-white uppercase leading-none mt-0.5">
              JOIN THE PROGRAM
            </span>
            <span className="block text-[11px] font-semibold text-emerald-100/90 mt-1">
              Redirects instantly to WhatsApp ({EVENT_DATA.phoneNumber})
            </span>
          </div>

          {/* Right Action Arrow */}
          <div className="w-9 h-9 rounded-lg bg-emerald-800/80 group-hover:bg-emerald-900 flex items-center justify-center shrink-0 text-white transition-colors">
            <ArrowRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
          </div>
        </div>
      </a>

      {/* Auxiliary Actions & Information */}
      <div className="mt-3.5 pt-3 border-t border-slate-100 flex flex-wrap items-center justify-between gap-2 text-xs">
        <a
          href={EVENT_DATA.phoneTel}
          className="text-slate-700 hover:text-slate-900 font-bold flex items-center gap-1.5 transition-colors"
        >
          <Phone className="w-3.5 h-3.5 text-emerald-700" />
          <span>Call Helpline: <strong className="font-mono">{EVENT_DATA.phoneNumber}</strong></span>
        </a>

        <div className="flex items-center gap-1 text-[11px] text-slate-500 font-medium">
          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
          <span>100% Free Civic Participation</span>
        </div>
      </div>

      {isClicked && (
        <div className="mt-3 p-2.5 rounded-lg bg-emerald-50 border border-emerald-200 text-xs font-semibold text-emerald-900 text-center animate-in fade-in duration-200">
          Redirecting to WhatsApp coordinator now...
        </div>
      )}

    </div>
  );
};
