import React from 'react';
import { MessageSquare, Phone, Instagram } from 'lucide-react';
import { EVENT_DATA, getWhatsAppLink } from '../data/eventData.ts';

export const FloatingActionBar: React.FC = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 p-3 pointer-events-none">
      <div className="max-w-md mx-auto bg-slate-900/95 backdrop-blur-md rounded-xl shadow-lg border border-slate-700/80 p-2 pointer-events-auto flex items-center justify-between gap-2 text-white">
        
        {/* WhatsApp Join Button */}
        <a
          href={getWhatsAppLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm py-2.5 px-3 rounded-lg flex items-center justify-center gap-2 transition-colors shadow-xs"
        >
          <MessageSquare className="w-4 h-4 fill-white" />
          <span className="truncate">Join via WhatsApp</span>
        </a>

        {/* Instagram Profile Link */}
        <a
          href={EVENT_DATA.instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Follow Silchar Youth Voice on Instagram"
          className="bg-slate-800 hover:bg-slate-700 text-slate-200 p-2.5 rounded-lg transition-colors flex items-center justify-center border border-slate-700"
          title="Follow @silchar_youthvoice on Instagram"
        >
          <Instagram className="w-4 h-4 text-pink-400" />
        </a>

        {/* Direct Call Button */}
        <a
          href={EVENT_DATA.phoneTel}
          aria-label={`Call coordinator at ${EVENT_DATA.phoneNumber}`}
          className="bg-slate-800 hover:bg-slate-700 text-slate-200 p-2.5 rounded-lg transition-colors flex items-center justify-center border border-slate-700 font-mono text-xs font-bold"
          title={`Call ${EVENT_DATA.phoneNumber}`}
        >
          <Phone className="w-4 h-4 text-emerald-400" />
        </a>

      </div>
    </div>
  );
};
