import React from 'react';
import { Calendar, Clock, MapPin, CheckCircle2, ShieldCheck, Wrench, AlertCircle, Sparkles } from 'lucide-react';
import { EVENT_DATA } from '../data/eventData.ts';

export const EventDetailsSection: React.FC = () => {
  const operations = [
    {
      icon: MapPin,
      title: 'Target Operational Zone',
      primary: 'Premtala Junction & Retail Corridors',
      secondary: 'Silchar Municipal Area, Cachar, Assam',
    },
    {
      icon: Calendar,
      title: 'Operation Date',
      primary: `${EVENT_DATA.day}, ${EVENT_DATA.dateFormatted}`,
      secondary: 'October 11, 2026',
    },
    {
      icon: Clock,
      title: 'Assembly & Briefing',
      primary: '07:00 AM Sharp (IST)',
      secondary: 'Volunteers report at 06:45 AM for gear distribution',
    },
    {
      icon: ShieldCheck,
      title: 'Safety & First Aid',
      primary: 'Designated Medical & Hydration Station',
      secondary: 'Supervised by trained team leads',
    },
  ];

  const equipmentSupplied = [
    'Industrial heavy-duty protective gloves for every volunteer',
    'High-gauge biodegradable waste collection sacks (dry vs. wet segregation)',
    'Road rakes, litter tongs, and street sweepers',
    'Filtered drinking water refilling station (bring reusable bottles)',
    'Medical first aid kit and hand sanitization stations',
    'Safety briefing and zone assignment prior to deployment',
  ];

  const volunteerProtocol = [
    'Dress in durable casual attire (preferably green t-shirt if available)',
    'Wear closed sports or work footwear (no open sandals/slippers for safety)',
    'Carry personal reusable water flask to eliminate single-use plastics',
    'Report directly to the registration desk at Premtala Point',
    'Follow team leads for zone demarcation and non-hazardous collection guidelines',
  ];

  return (
    <section id="details" className="py-16 sm:py-24 bg-slate-50 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Heading */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white text-slate-700 text-xs font-bold uppercase tracking-wider mb-3 border border-slate-200">
            <Wrench className="w-3.5 h-3.5 text-emerald-700" />
            <span>Field Operations & Protocol</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Operational Blueprint & Logistics
          </h2>
          <p className="mt-3 text-base text-slate-600 font-normal">
            Everything is structured to ensure safety, civic discipline, and maximum sanitization impact on the ground.
          </p>
        </div>

        {/* 4 Cards Overview */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 mb-10">
          {operations.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl p-5 border border-slate-200 shadow-2xs hover:border-slate-300 transition-colors"
              >
                <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center mb-4 text-emerald-800">
                  <Icon className="w-5 h-5" />
                </div>
                <span className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1">
                  {item.title}
                </span>
                <h3 className="text-base font-extrabold text-slate-900 mb-1 leading-snug">
                  {item.primary}
                </h3>
                <p className="text-xs text-slate-500 font-medium">
                  {item.secondary}
                </p>
              </div>
            );
          })}
        </div>

        {/* Two Columns: Supplied Kit vs Volunteer Safety Protocol */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Supplied Equipment */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-2xs">
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-100">
              <div className="w-9 h-9 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-black text-slate-900">
                  Safety Equipment Provided On-Site
                </h3>
                <p className="text-xs text-slate-500 font-medium">
                  Complimentary provision for all confirmed volunteers
                </p>
              </div>
            </div>

            <ul className="space-y-3">
              {equipmentSupplied.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm font-medium text-slate-700 leading-normal">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Volunteer Protocol */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-2xs">
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-100">
              <div className="w-9 h-9 rounded-lg bg-slate-100 text-slate-800 flex items-center justify-center font-bold">
                <AlertCircle className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-black text-slate-900">
                  Volunteer Preparation Guidelines
                </h3>
                <p className="text-xs text-slate-500 font-medium">
                  Standard safety instructions for Sunday field participation
                </p>
              </div>
            </div>

            <ul className="space-y-3">
              {volunteerProtocol.map((rule, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="w-4 h-4 rounded-full bg-slate-200 text-slate-800 font-bold text-[10px] flex items-center justify-center shrink-0 mt-0.5 font-mono">
                    {idx + 1}
                  </span>
                  <span className="text-xs sm:text-sm font-medium text-slate-700 leading-normal">
                    {rule}
                  </span>
                </li>
              ))}
            </ul>
          </div>

        </div>

      </div>
    </section>
  );
};
