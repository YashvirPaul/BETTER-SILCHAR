import React, { useState } from 'react';
import { Instagram, Share2, Copy, Check, ExternalLink, Megaphone, ArrowUpRight, ShieldCheck } from 'lucide-react';
import { EVENT_DATA } from '../data/eventData.ts';

export const InstagramFollowSection: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    const shareData = {
      title: 'Better Silchar Cleanliness Drive: Premtala',
      text: `Join the Better Silchar Cleanliness Drive at Premtala on Sunday 11/10/26. Confirm spot via WhatsApp/Call: ${EVENT_DATA.phoneNumber}. Follow official updates on Instagram: ${EVENT_DATA.instagramUrl}`,
      url: window.location.href,
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch {
        copyNoticeLink();
      }
    } else {
      copyNoticeLink();
    }
  };

  const copyNoticeLink = () => {
    navigator.clipboard.writeText(
      `Better Silchar Cleanliness Drive at Premtala (Sunday 11/10/26). Register: ${EVENT_DATA.phoneNumber} | Follow Instagram: ${EVENT_DATA.instagramUrl}`
    );
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="social" className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Banner Card */}
        <div className="bg-white rounded-2xl p-6 sm:p-10 border border-slate-200 shadow-2xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-pink-50 text-pink-700 text-xs font-bold uppercase tracking-wider border border-pink-200">
                <Instagram className="w-3.5 h-3.5" />
                <span>Official Digital Channel</span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                Follow @{EVENT_DATA.instagramHandle} on Instagram
              </h2>

              <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed max-w-2xl">
                Stay updated with real-time field notices, volunteer debriefs, photos from the Premtala drive, and upcoming civic actions organized by Silchar Youth Voice across the Barak Valley.
              </p>

              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 inline-block text-xs font-semibold text-slate-700">
                📢 Flyer Directive: <strong className="text-slate-900 font-bold">"PLZ FOLLOW & SHARE for the betterment of SILCHAR"</strong>
              </div>
            </div>

            {/* Right Action Column */}
            <div className="lg:col-span-4 flex flex-col gap-3">
              <a
                href={EVENT_DATA.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl bg-linear-to-r from-pink-600 via-rose-600 to-purple-600 hover:opacity-95 text-white font-bold text-sm shadow-sm transition-all"
              >
                <Instagram className="w-4 h-4" />
                <span>Follow on Instagram</span>
                <ArrowUpRight className="w-4 h-4 opacity-80" />
              </a>

              <button
                onClick={handleShare}
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs transition-colors cursor-pointer border border-slate-200"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Link Copied to Clipboard</span>
                  </>
                ) : (
                  <>
                    <Share2 className="w-3.5 h-3.5 text-slate-600" />
                    <span>Share Campaign Notice</span>
                  </>
                )}
              </button>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
