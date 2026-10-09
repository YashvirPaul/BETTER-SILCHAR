import React from 'react';
import { Instagram, MessageSquare, Phone, MapPin, ShieldCheck, ArrowUpRight } from 'lucide-react';
import { BetterSilcharLogo } from './BetterSilcharLogo.tsx';
import { EVENT_DATA, getWhatsAppLink } from '../data/eventData.ts';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-slate-400 pt-16 pb-24 border-t border-slate-800 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          
          {/* Brand Col */}
          <div className="lg:col-span-5 space-y-4">
            <BetterSilcharLogo size="md" className="brightness-110" />

            <p className="text-slate-400 leading-relaxed max-w-sm font-normal">
              Better Silchar is a youth-led civic sanitation and public welfare initiative organized under Silchar Youth Voice. Dedicated to fostering civic pride, clean urban corridors, and active community participation in Cachar district.
            </p>

            <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-emerald-400 font-mono text-[11px] inline-block">
              "{EVENT_DATA.motto}"
            </div>
          </div>

          {/* Nav Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-white text-xs font-bold uppercase tracking-wider">
              Navigation
            </h4>
            <ul className="space-y-2 text-slate-400">
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  The Mission & Pillars
                </a>
              </li>
              <li>
                <a href="#circular" className="hover:text-white transition-colors">
                  Official Public Notice
                </a>
              </li>
              <li>
                <a href="#details" className="hover:text-white transition-colors">
                  Operations & Logistics
                </a>
              </li>
              <li>
                <a href="#location" className="hover:text-white transition-colors">
                  Premtala Venue Map
                </a>
              </li>
              <li>
                <a href="#enroll" className="hover:text-white transition-colors">
                  Volunteer Enrollment
                </a>
              </li>
              <li>
                <a href="#pledge" className="hover:text-white transition-colors">
                  Citizen Pledge
                </a>
              </li>
              <li>
                <a href="#faqs" className="hover:text-white transition-colors">
                  Frequently Asked Questions
                </a>
              </li>
            </ul>
          </div>

          {/* Official Contacts & Links */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-white text-xs font-bold uppercase tracking-wider">
              Field Desk & Channels
            </h4>

            <div className="space-y-2.5">
              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-slate-300 hover:text-white transition-colors p-2.5 rounded-lg bg-slate-900 border border-slate-800"
              >
                <div className="w-7 h-7 rounded bg-emerald-950 text-emerald-400 flex items-center justify-center shrink-0 border border-emerald-800">
                  <MessageSquare className="w-3.5 h-3.5" />
                </div>
                <div>
                  <span className="block text-[11px] text-slate-400">WhatsApp Coordinator</span>
                  <span className="font-mono font-bold text-white text-xs">{EVENT_DATA.phoneNumber}</span>
                </div>
              </a>

              <a
                href={EVENT_DATA.phoneTel}
                className="flex items-center gap-3 text-slate-300 hover:text-white transition-colors p-2.5 rounded-lg bg-slate-900 border border-slate-800"
              >
                <div className="w-7 h-7 rounded bg-slate-800 text-slate-300 flex items-center justify-center shrink-0">
                  <Phone className="w-3.5 h-3.5 text-emerald-400" />
                </div>
                <div>
                  <span className="block text-[11px] text-slate-400">Voice Helpline</span>
                  <span className="font-mono font-bold text-white text-xs">{EVENT_DATA.phoneNumber}</span>
                </div>
              </a>

              <a
                href={EVENT_DATA.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between text-slate-300 hover:text-white transition-colors p-2.5 rounded-lg bg-slate-900 border border-slate-800"
              >
                <div className="flex items-center gap-3">
                  <div className="w-7 h-7 rounded bg-pink-950 text-pink-400 flex items-center justify-center shrink-0 border border-pink-800">
                    <Instagram className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <span className="block text-[11px] text-slate-400">Instagram Official</span>
                    <span className="font-bold text-white text-xs">@{EVENT_DATA.instagramHandle}</span>
                  </div>
                </div>
                <ArrowUpRight className="w-3.5 h-3.5 text-slate-500" />
              </a>
            </div>

            <p className="text-[11px] text-slate-400">
              📍 Premtala Point, Central Road, Silchar, Cachar, Assam 788001
            </p>
          </div>

        </div>

        {/* Bottom Credits */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-400">
          <p>
            © {new Date().getFullYear()} Better Silchar • Silchar Youth Voice. Public civic initiative.
          </p>
          <div className="flex items-center gap-2">
            <span className="font-bold tracking-wider text-emerald-400">THE WEBSITE IS DEVELOPED BY YASHVIR PAUL</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
