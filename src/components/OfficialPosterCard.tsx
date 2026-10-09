import React, { useState } from 'react';
import { Phone, MessageSquare, MapPin, Calendar, Share2, Check, ExternalLink, ShieldCheck, Megaphone, FileText, Sparkles } from 'lucide-react';
import { EVENT_DATA, getWhatsAppLink } from '../data/eventData.ts';
import { BetterSilcharLogo } from './BetterSilcharLogo.tsx';

export const OfficialPosterCard: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(
      `Better Silchar Cleanliness Drive at Premtala on Sunday 11/10/26. Contact: ${EVENT_DATA.phoneNumber}. Follow on Instagram: ${EVENT_DATA.instagramUrl}`
    );
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div id="circular" className="relative mx-auto max-w-xl bg-white rounded-2xl border border-slate-300/80 shadow-md overflow-hidden">
      
      {/* Official Circular Header */}
      <div className="bg-slate-900 text-white px-6 py-4 flex items-center justify-between border-b border-slate-800">
        <div className="flex items-center gap-2.5">
          <FileText className="w-4 h-4 text-emerald-400" />
          <span className="text-xs font-bold uppercase tracking-wider text-slate-200">
            Public Notice & Event Circular
          </span>
        </div>
        <span className="text-[11px] font-mono font-semibold px-2.5 py-0.5 rounded bg-slate-800 text-emerald-300 border border-slate-700">
          REF: SYV-2026/01
        </span>
      </div>

      <div className="p-6 sm:p-8 space-y-6">
        
        {/* Brand Crest & Tagline */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pb-5 border-b border-slate-200">
          <BetterSilcharLogo size="md" />
          <div className="text-center sm:text-right">
            <span className="inline-block text-xs font-bold text-emerald-800 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full">
              Small Steps, Big Change 🍃
            </span>
            <p className="text-[11px] text-slate-500 font-medium mt-1">
              Silchar, Cachar, Assam
            </p>
          </div>
        </div>

        {/* Public Appeal Banner */}
        <div className="bg-linear-to-r from-emerald-50 via-amber-50/50 to-emerald-50 rounded-xl p-4 border border-emerald-200/90 text-center">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-emerald-800 mb-1">
            <Megaphone className="w-3.5 h-3.5 text-emerald-700" />
            <span>Public Mobilization Appeal</span>
          </div>
          <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 tracking-tight">
            PLZ FOLLOW & SHARE
          </h3>
          <p className="text-xs sm:text-sm font-bold text-emerald-800 mt-0.5">
            for the betterment of <span className="underline font-extrabold text-slate-900">SILCHAR</span>
          </p>
        </div>

        {/* Core Cleanliness Target Notice */}
        <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
          <p className="text-xs sm:text-sm font-semibold text-slate-700">
            We are going to clean one of the parts of our city that is:
          </p>
          <div className="flex items-center gap-2 bg-white p-3 rounded-lg border border-slate-200">
            <MapPin className="w-5 h-5 text-red-600 shrink-0" />
            <div>
              <span className="text-base sm:text-lg font-black text-slate-900 tracking-wide">
                📍 PREMTALA
              </span>
              <span className="block text-[11px] text-emerald-700 font-bold">
                CLEAN CITY • HAPPY CITY 🌱
              </span>
            </div>
          </div>
        </div>

        {/* Verbatim Joining Instructions */}
        <div className="text-center space-y-2 py-1">
          <p className="text-xs sm:text-sm font-medium text-slate-700 leading-relaxed">
            Those who are interested to join our team and wants to clean at first call in this number,{' '}
            <strong className="text-slate-900 font-bold underline decoration-emerald-600 decoration-2">
              confirm and join 🙏
            </strong>
          </p>
        </div>

        {/* Coordinator Number CTA Box */}
        <div className="bg-linear-to-r from-emerald-800 to-slate-900 text-white rounded-xl p-4 text-center">
          <span className="text-[11px] font-bold text-emerald-300 uppercase tracking-widest block mb-1">
            CALL NOW / WHATSAPP REGISTRATION
          </span>
          <div className="flex items-center justify-center gap-2 my-1">
            <Phone className="w-5 h-5 text-emerald-400" />
            <a
              href={EVENT_DATA.phoneTel}
              className="text-2xl sm:text-3xl font-black font-mono tracking-wider hover:text-emerald-300 transition-colors"
            >
              {EVENT_DATA.phoneNumber}
            </a>
          </div>
          <span className="text-[11px] text-slate-300 font-medium">
            Direct Line: Silchar Youth Voice Volunteer Desk
          </span>
        </div>

        {/* Date and Day Row */}
        <div className="grid grid-cols-2 gap-3">
          <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-center">
            <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block">
              DAY
            </span>
            <span className="text-base font-extrabold text-slate-900">
              {EVENT_DATA.day}
            </span>
          </div>

          <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-center">
            <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block">
              DATE
            </span>
            <span className="text-base font-extrabold text-slate-900 font-mono">
              {EVENT_DATA.dateFormatted}
            </span>
          </div>
        </div>

        {/* Motto Footer */}
        <div className="pt-3 border-t border-slate-200 text-center space-y-1.5">
          <p className="text-xs font-semibold text-slate-600 italic">
            "{EVENT_DATA.motto}"
          </p>
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-800 bg-slate-100 px-3 py-1 rounded-full">
            <span>🤝 UNITED FOR POSITIVE CHANGE</span>
          </div>
        </div>

        {/* Quick Interaction Buttons */}
        <div className="pt-2 flex flex-wrap items-center justify-between gap-2 text-xs">
          <a
            href={getWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-emerald-700 text-white font-bold hover:bg-emerald-800 transition-colors"
          >
            <MessageSquare className="w-3.5 h-3.5 fill-white" />
            <span>Open in WhatsApp</span>
          </a>

          <button
            onClick={handleCopy}
            className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-slate-100 text-slate-700 font-semibold hover:bg-slate-200 transition-colors cursor-pointer"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-600" />
                <span>Notice Copied</span>
              </>
            ) : (
              <>
                <Share2 className="w-3.5 h-3.5" />
                <span>Copy Notice</span>
              </>
            )}
          </button>
        </div>

      </div>
    </div>
  );
};
