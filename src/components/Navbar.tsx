import React, { useState } from 'react';
import { Phone, MessageSquare, Instagram, Menu, X, ArrowUpRight, ShieldCheck } from 'lucide-react';
import { BetterSilcharLogo } from './BetterSilcharLogo.tsx';
import { EVENT_DATA, getWhatsAppLink } from '../data/eventData.ts';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-xs">
      {/* Official Civic Notice Bar */}
      <div className="bg-slate-900 text-slate-300 text-xs py-2 px-4 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2 text-[11px] sm:text-xs">
            <span className="inline-flex items-center gap-1 font-semibold text-emerald-400 bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-800/60">
              <ShieldCheck className="w-3 h-3" /> Official Civic Action
            </span>
            <span className="text-slate-400 hidden sm:inline">•</span>
            <span className="text-slate-200 font-medium hidden sm:inline">
              Cleanliness Drive at <strong>Premtala, Silchar</strong> ({EVENT_DATA.day}, {EVENT_DATA.dateFormatted})
            </span>
          </div>

          <div className="flex items-center gap-4 text-xs font-semibold">
            <a
              href={EVENT_DATA.phoneTel}
              className="text-slate-300 hover:text-white flex items-center gap-1.5 transition-colors font-mono"
            >
              <Phone className="w-3 h-3 text-emerald-400" />
              <span>{EVENT_DATA.phoneNumber}</span>
            </a>
            <span className="text-slate-700 hidden md:inline">|</span>
            <span className="text-emerald-400 text-[11px] uppercase tracking-wider font-bold hidden md:inline">
              Silchar Youth Voice Initiative
            </span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center group">
            <BetterSilcharLogo size="md" />
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-8 text-xs font-bold text-slate-600 tracking-wide uppercase">
            <a href="#about" className="hover:text-emerald-700 transition-colors">
              The Mission
            </a>
            <a href="#circular" className="hover:text-emerald-700 transition-colors">
              Official Notice
            </a>
            <a href="#details" className="hover:text-emerald-700 transition-colors">
              Operations & Schedule
            </a>
            <a href="#location" className="hover:text-emerald-700 transition-colors">
              Premtala Zone
            </a>
            <a href="#enroll" className="hover:text-emerald-700 transition-colors">
              Join Drive
            </a>
            <a href="#faqs" className="hover:text-emerald-700 transition-colors">
              Inquiries
            </a>
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Instagram Link */}
            <a
              href={EVENT_DATA.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow Silchar Youth Voice on Instagram"
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-bold text-slate-700 bg-slate-50 hover:bg-slate-100 border border-slate-200 transition-colors"
            >
              <Instagram className="w-3.5 h-3.5 text-pink-600" />
              <span>@{EVENT_DATA.instagramHandle}</span>
              <ArrowUpRight className="w-3 h-3 text-slate-400" />
            </a>

            {/* WhatsApp CTA */}
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold text-white bg-emerald-700 hover:bg-emerald-800 border border-emerald-600/50 shadow-xs transition-colors"
            >
              <MessageSquare className="w-3.5 h-3.5 fill-white" />
              <span>Join via WhatsApp</span>
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-slate-200 px-4 pt-3 pb-6 shadow-lg">
          <nav className="flex flex-col gap-1 font-semibold text-sm text-slate-700 mb-4">
            <a
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2.5 px-3 rounded-lg hover:bg-slate-50"
            >
              The Mission
            </a>
            <a
              href="#circular"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2.5 px-3 rounded-lg hover:bg-slate-50"
            >
              Official Notice
            </a>
            <a
              href="#details"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2.5 px-3 rounded-lg hover:bg-slate-50"
            >
              Operations & Schedule
            </a>
            <a
              href="#location"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2.5 px-3 rounded-lg hover:bg-slate-50"
            >
              Premtala Zone
            </a>
            <a
              href="#enroll"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2.5 px-3 rounded-lg hover:bg-slate-50"
            >
              Join Drive
            </a>
            <a
              href="#faqs"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2.5 px-3 rounded-lg hover:bg-slate-50"
            >
              Inquiries
            </a>
          </nav>

          <div className="space-y-2 pt-3 border-t border-slate-100">
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-emerald-700 text-white font-bold text-sm shadow-xs"
            >
              <MessageSquare className="w-4 h-4 fill-white" />
              <span>Join on WhatsApp ({EVENT_DATA.phoneNumber})</span>
            </a>

            <a
              href={EVENT_DATA.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-slate-100 text-slate-800 font-semibold text-sm"
            >
              <Instagram className="w-4 h-4 text-pink-600" />
              <span>Follow @{EVENT_DATA.instagramHandle}</span>
            </a>

            <a
              href={EVENT_DATA.phoneTel}
              className="w-full flex items-center justify-center gap-2 py-2 text-slate-600 text-xs font-mono font-bold"
            >
              <Phone className="w-3.5 h-3.5 text-emerald-600" /> Direct Call: {EVENT_DATA.phoneNumber}
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
