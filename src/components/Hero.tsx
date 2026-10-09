import React from 'react';
import { MessageSquare, Instagram, Phone, MapPin, Calendar, Clock, ArrowRight, ShieldCheck, CheckCircle2, ArrowUpRight } from 'lucide-react';
import { EVENT_DATA, getWhatsAppLink } from '../data/eventData.ts';
import { JoinProgramCard } from './JoinProgramCard.tsx';
import { AnimatedHeadline } from './AnimatedHeadline.tsx';
import heroImage from '../assets/images/silchar_cleanliness_drive_1791532290999.jpg';

interface HeroProps {
  onOpenJoinSection: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenJoinSection }) => {
  return (
    <section className="relative pt-8 pb-16 sm:pt-12 sm:pb-20 bg-linear-to-b from-slate-50 via-emerald-50/20 to-white border-b border-slate-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Institutional Super-Tag */}
        <div className="flex flex-wrap items-center gap-2 mb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-100/80 text-emerald-900 text-xs font-bold uppercase tracking-wider border border-emerald-200">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-700" />
            <span>Community Civic Initiative • Silchar Youth Voice</span>
          </div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-slate-100 text-slate-700 text-xs font-semibold border border-slate-200">
            <span>Barak Valley, Assam</span>
          </div>
        </div>

        {/* Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* Left Column: Briefing, Media & Core Narrative */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="space-y-3">
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-700 block">
                Public Cleanliness Campaign
              </span>
              <AnimatedHeadline />
            </div>

            <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed max-w-2xl">
              Better Silchar brings together youth, students, and conscientious citizens for a comprehensive cleanup of Premtala — one of our city's primary economic and transit arteries.
            </p>

            {/* Official Callout verbatim from the flyer */}
            <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200/80 text-emerald-950">
              <p className="text-xs sm:text-sm font-semibold leading-relaxed">
                📢 <strong className="font-bold">Official Invitation:</strong>{' '}
                "{EVENT_DATA.officialCallout}"
              </p>
            </div>

            {/* Action Buttons */}
            <div className="pt-1 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              {/* WhatsApp Quick Link */}
              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-sm shadow-sm transition-all"
              >
                <MessageSquare className="w-4 h-4 fill-white" />
                <span>Confirm Spot on WhatsApp</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              {/* Instagram Channel Link */}
              <a
                href={EVENT_DATA.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-white hover:bg-slate-50 text-slate-800 font-bold text-sm border border-slate-300 shadow-2xs transition-colors"
              >
                <Instagram className="w-4 h-4 text-pink-600" />
                <span>Follow @{EVENT_DATA.instagramHandle}</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-slate-400" />
              </a>

              {/* Helpline Call */}
              <a
                href={EVENT_DATA.phoneTel}
                className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-mono font-bold text-xs transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-emerald-700" />
                <span>Call {EVENT_DATA.phoneNumber}</span>
              </a>
            </div>

            {/* Visual Media Card */}
            <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-md bg-white">
              <img
                src={heroImage}
                alt="Silchar youth volunteers during cleanliness drive with Barak bridge and hills"
                className="w-full h-56 sm:h-72 object-cover object-center"
              />
              <div className="absolute inset-0 bg-linear-to-t from-slate-950/80 via-transparent to-transparent"></div>
              
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-300">
                      On-Ground Initiative
                    </span>
                    <h3 className="text-base font-bold text-white">
                      Premtala Urban Sanitization Drive
                    </h3>
                  </div>
                  <span className="text-xs bg-emerald-600/90 text-white font-bold px-2.5 py-1 rounded-md">
                    Silchar, Assam
                  </span>
                </div>
              </div>
            </div>

            {/* Credibility Highlights */}
            <div className="pt-2 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-slate-600 font-medium">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Free Community Participation</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Sanitation & Safety Equipment Provided</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Youth Volunteer Certificates</span>
              </div>
            </div>

          </div>

          {/* Right Column: Prominent "JOIN THE PROGRAM" Button Card in place of countdown */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* The Dedicated CockroachJantaParty-Style Join Button Card */}
            <JoinProgramCard />

            {/* Structured Event Metadata Card */}
            <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-xs">
              <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3">
                Event Schedule & Location Overview
              </h4>

              <div className="grid grid-cols-2 gap-3 text-xs">
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
                  <div className="flex items-center gap-1.5 text-slate-500 font-bold mb-1">
                    <Calendar className="w-3.5 h-3.5 text-emerald-700" />
                    <span>DATE & DAY</span>
                  </div>
                  <p className="text-sm font-extrabold text-slate-900">
                    {EVENT_DATA.day}, {EVENT_DATA.dateFormatted}
                  </p>
                  <p className="text-[11px] text-slate-500">October 11, 2026</p>
                </div>

                <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
                  <div className="flex items-center gap-1.5 text-slate-500 font-bold mb-1">
                    <Clock className="w-3.5 h-3.5 text-emerald-700" />
                    <span>REPORTING TIME</span>
                  </div>
                  <p className="text-sm font-extrabold text-slate-900">
                    07:00 AM IST
                  </p>
                  <p className="text-[11px] text-slate-500">Morning Assembly</p>
                </div>

                <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 col-span-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1.5 text-slate-500 font-bold mb-1">
                      <MapPin className="w-3.5 h-3.5 text-rose-600" />
                      <span>TARGET VENUE</span>
                    </div>
                    <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                      Central Silchar
                    </span>
                  </div>
                  <p className="text-sm font-extrabold text-slate-900">
                    Premtala Junction & Commercial Corridors
                  </p>
                  <p className="text-[11px] text-slate-500">
                    Silchar, Cachar, Assam • PIN 788001
                  </p>
                </div>
              </div>

              {/* Direct Card Action */}
              <div className="mt-3 pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                <span className="text-slate-600 font-medium">
                  Coordinator: <strong className="font-mono text-slate-900">{EVENT_DATA.phoneNumber}</strong>
                </span>
                <a
                  href={getWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-700 hover:text-emerald-900 font-bold flex items-center gap-1"
                >
                  WhatsApp Helpline &rarr;
                </a>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
