import React from 'react';
import { MapPin, Navigation, ExternalLink, Info, Compass } from 'lucide-react';
import { EVENT_DATA } from '../data/eventData.ts';

export const PremtalaLocation: React.FC = () => {
  const googleMapsUrl = 'https://www.google.com/maps/search/?api=1&query=Premtala+Silchar+Assam';

  const routeGuides = [
    {
      from: 'Tarapur / Silchar Railway Station',
      distance: '~3.2 km',
      instructions: 'Head southeast via Central Road towards Premtala Point. Shared e-rickshaws (toto) and autos connect directly.',
    },
    {
      from: 'Rangirkhari / National Highway 37',
      distance: '~2.1 km',
      instructions: 'Proceed north through Central Road & Shillongpatty into Premtala commercial crossing.',
    },
    {
      from: 'Malugram & Sadarghat Area',
      distance: '~2.8 km',
      instructions: 'Cross Sadarghat via Janiganj and proceed straight to the Premtala assembly junction.',
    },
    {
      from: 'Silchar Medical College (SMCH) & Gungoor',
      distance: '~6.5 km',
      instructions: 'Board town service buses or shared autos directly terminating near Premtala / Central Market.',
    },
  ];

  return (
    <section id="location" className="py-16 sm:py-24 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-bold uppercase tracking-wider mb-3 border border-slate-200">
            <Compass className="w-3.5 h-3.5 text-emerald-700" />
            <span>Target Zone Geography</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Target Location: Premtala, Silchar
          </h2>
          <p className="mt-3 text-base text-slate-600 font-normal leading-relaxed">
            Premtala functions as the commercial heartbeat connecting Silchar's major markets. Restoring its cleanliness creates an immediate ripple effect throughout Cachar.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Cartographic & Landmark Details (Left) */}
          <div className="lg:col-span-7 bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-2xs">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-slate-100 text-rose-600 flex items-center justify-center font-bold">
                  <MapPin className="w-5 h-5 fill-rose-600" />
                </div>
                <div>
                  <h3 className="text-lg font-black text-slate-900">
                    Premtala Junction & Retail Corridors
                  </h3>
                  <p className="text-xs text-slate-500 font-medium">
                    Central Silchar, Cachar, Assam • PIN 788001
                  </p>
                </div>
              </div>

              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold transition-colors border border-slate-200"
              >
                <Navigation className="w-3 h-3 text-emerald-700" />
                <span>Google Maps</span>
                <ExternalLink className="w-3 h-3 text-slate-400" />
              </a>
            </div>

            {/* Stylized Schematic Vector Map */}
            <div className="relative rounded-xl overflow-hidden border border-slate-200 bg-slate-50 h-64 sm:h-72 flex items-center justify-center">
              <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id="cityGrid" width="30" height="30" patternUnits="userSpaceOnUse">
                    <path d="M 30 0 L 0 0 0 30" fill="none" stroke="#e2e8f0" strokeWidth="1" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#cityGrid)" />
                
                {/* Barak River */}
                <path d="M 0 25 Q 180 8 320 28 T 700 18" fill="none" stroke="#bae6fd" strokeWidth="20" strokeLinecap="round" />
                <text x="24" y="24" fill="#0369a1" fontSize="10" fontWeight="bold">Barak River Basin</text>

                {/* Primary Roads Intersection */}
                <line x1="50%" y1="0" x2="50%" y2="100%" stroke="#cbd5e1" strokeWidth="14" />
                <line x1="50%" y1="0" x2="50%" y2="100%" stroke="#f8fafc" strokeWidth="8" strokeDasharray="6 4" />
                
                <line x1="0" y1="52%" x2="100%" y2="52%" stroke="#cbd5e1" strokeWidth="14" />
                <line x1="0" y1="52%" x2="100%" y2="52%" stroke="#f8fafc" strokeWidth="8" strokeDasharray="6 4" />

                {/* Road Labels */}
                <text x="52%" y="28%" fill="#64748b" fontSize="10" fontWeight="bold">Central Road</text>
                <text x="8%" y="48%" fill="#64748b" fontSize="10" fontWeight="bold">To Shillongpatty</text>
                <text x="70%" y="48%" fill="#64748b" fontSize="10" fontWeight="bold">To Nazirpatty</text>
              </svg>

              {/* Pin at the epicenter */}
              <div className="relative z-10 flex flex-col items-center">
                <div className="w-10 h-10 rounded-full bg-red-600 text-white flex items-center justify-center shadow-lg ring-4 ring-red-100">
                  <MapPin className="w-5 h-5 fill-white" />
                </div>
                <div className="mt-2 bg-slate-900 text-white text-[11px] font-bold px-3 py-1 rounded-md shadow-sm">
                  Assembly Point: Premtala Point
                </div>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
              <span className="flex items-center gap-1.5">
                <Info className="w-3.5 h-3.5 text-emerald-700" />
                Assembly point coordinates will be staffed by volunteer guides from 06:30 AM.
              </span>
              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-emerald-700 hover:text-emerald-900 font-bold"
              >
                Get Directions &rarr;
              </a>
            </div>
          </div>

          {/* Transit Access Guides (Right) */}
          <div className="lg:col-span-5 space-y-3">
            <h3 className="text-sm font-bold text-slate-800 uppercase tracking-wider mb-2">
              Transit & Access Routes
            </h3>

            {routeGuides.map((guide, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl p-4 border border-slate-200 shadow-2xs"
              >
                <div className="flex items-center justify-between gap-2 mb-1">
                  <h4 className="text-xs sm:text-sm font-bold text-slate-900">
                    {guide.from}
                  </h4>
                  <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-slate-100 text-slate-700">
                    {guide.distance}
                  </span>
                </div>
                <p className="text-xs text-slate-600 font-normal leading-relaxed">
                  {guide.instructions}
                </p>
              </div>
            ))}

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600">
              <strong className="text-slate-900 block mb-1">Parking & Mobility Notice:</strong>
              Two-wheeler parking designated along authorized perimeter alleys. Public transport or carpooling is strongly advised to keep main roadways clear for municipal operation.
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
