import React from 'react';
import { CurtainIntro } from './components/CurtainIntro.tsx';
import { Navbar } from './components/Navbar.tsx';
import { Hero } from './components/Hero.tsx';
import { AboutMovement } from './components/AboutMovement.tsx';
import { EventDetailsSection } from './components/EventDetailsSection.tsx';
import { JoinSection } from './components/JoinSection.tsx';
import { InstagramFollowSection } from './components/InstagramFollowSection.tsx';
import { PremtalaLocation } from './components/PremtalaLocation.tsx';
import { PledgeWall } from './components/PledgeWall.tsx';
import { FaqSection } from './components/FaqSection.tsx';
import { Footer } from './components/Footer.tsx';
import { FloatingActionBar } from './components/FloatingActionBar.tsx';

export default function App() {
  const scrollToJoin = () => {
    const el = document.getElementById('enroll');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 flex flex-col font-sans selection:bg-emerald-200 selection:text-emerald-950 relative">
      {/* Curtain Opening Animation on Load */}
      <CurtainIntro />

      {/* Navigation Header */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero onOpenJoinSection={scrollToJoin} />

        {/* About Movement & Official Poster Showcase */}
        <AboutMovement />

        {/* Schedule, What to Bring & Logistics */}
        <EventDetailsSection />

        {/* Core Join Section: WhatsApp Redirection & Helpline */}
        <JoinSection />

        {/* Follow us on Instagram & Share Callout */}
        <InstagramFollowSection />

        {/* Premtala Location & Route Guides */}
        <PremtalaLocation />

        {/* Digital Citizen Pledge & Badge */}
        <PledgeWall />

        {/* FAQs */}
        <FaqSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Sticky Quick-Access Floating CTA for Mobile & Desktop */}
      <FloatingActionBar />
    </div>
  );
}
