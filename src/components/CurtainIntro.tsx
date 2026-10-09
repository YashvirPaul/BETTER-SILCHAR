import React, { useState, useEffect } from 'react';
import { Sparkles, ArrowRight } from 'lucide-react';
import { BetterSilcharLogo } from './BetterSilcharLogo.tsx';

interface CurtainIntroProps {
  onComplete?: () => void;
}

export const CurtainIntro: React.FC<CurtainIntroProps> = ({ onComplete }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    // Automatically trigger curtain parting after a brief pause
    const openTimer = setTimeout(() => {
      setIsOpen(true);
    }, 600);

    // Completely remove overlay after animation completes
    const finishTimer = setTimeout(() => {
      setIsFinished(true);
      if (onComplete) onComplete();
    }, 1800);

    return () => {
      clearTimeout(openTimer);
      clearTimeout(finishTimer);
    };
  }, [onComplete]);

  const handleManualOpen = () => {
    if (!isOpen) {
      setIsOpen(true);
      setTimeout(() => {
        setIsFinished(true);
        if (onComplete) onComplete();
      }, 1200);
    }
  };

  if (isFinished) return null;

  return (
    <div
      onClick={handleManualOpen}
      className={`fixed inset-0 z-50 overflow-hidden flex transition-opacity duration-500 cursor-pointer ${
        isOpen ? 'pointer-events-none' : 'pointer-events-auto'
      }`}
      aria-label="Curtain Opening Entrance"
    >
      {/* LEFT CURTAIN PANEL */}
      <div
        className={`w-1/2 h-full bg-linear-to-r from-emerald-950 via-emerald-900 to-green-950 relative shadow-2xl transition-transform duration-1000 ease-in-out ${
          isOpen ? '-translate-x-full' : 'translate-x-0'
        }`}
      >
        {/* Vertical Fabric Folds Simulation */}
        <div className="absolute inset-0 opacity-40 bg-[repeating-linear-gradient(90deg,transparent,transparent_30px,rgba(0,0,0,0.4)_30px,rgba(0,0,0,0.4)_60px,rgba(255,255,255,0.06)_60px,rgba(255,255,255,0.06)_90px)] pointer-events-none"></div>

        {/* Golden Trim at the Right Edge of Left Curtain */}
        <div className="absolute top-0 right-0 w-2.5 h-full bg-linear-to-b from-amber-300 via-yellow-400 to-amber-500 shadow-lg"></div>
        <div className="absolute top-0 right-2 w-1 h-full bg-amber-600/60"></div>
      </div>

      {/* RIGHT CURTAIN PANEL */}
      <div
        className={`w-1/2 h-full bg-linear-to-l from-emerald-950 via-emerald-900 to-green-950 relative shadow-2xl transition-transform duration-1000 ease-in-out ${
          isOpen ? 'translate-x-full' : 'translate-x-0'
        }`}
      >
        {/* Vertical Fabric Folds Simulation */}
        <div className="absolute inset-0 opacity-40 bg-[repeating-linear-gradient(90deg,transparent,transparent_30px,rgba(0,0,0,0.4)_30px,rgba(0,0,0,0.4)_60px,rgba(255,255,255,0.06)_60px,rgba(255,255,255,0.06)_90px)] pointer-events-none"></div>

        {/* Golden Trim at the Left Edge of Right Curtain */}
        <div className="absolute top-0 left-0 w-2.5 h-full bg-linear-to-b from-amber-300 via-yellow-400 to-amber-500 shadow-lg"></div>
        <div className="absolute top-0 left-2 w-1 h-full bg-amber-600/60"></div>
      </div>

      {/* CENTER SEAL / EMBLEM */}
      <div
        className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 flex flex-col items-center text-center transition-all duration-700 ${
          isOpen ? 'scale-125 opacity-0 pointer-events-none' : 'scale-100 opacity-100'
        }`}
      >
        {/* Royal Crest Medallion */}
        <div className="p-3 rounded-full bg-linear-to-b from-amber-300 via-yellow-400 to-amber-600 shadow-2xl ring-8 ring-emerald-950/80 animate-pulse">
          <div className="w-28 h-28 sm:w-36 sm:h-36 rounded-full bg-white p-2.5 shadow-inner flex flex-col items-center justify-center border-4 border-emerald-900">
            <span className="text-[10px] font-black tracking-widest text-emerald-800 uppercase">
              BETTER SILCHAR
            </span>
            <span className="text-2xl sm:text-3xl font-black text-slate-900 leading-none my-0.5">
              PREMTALA
            </span>
            <span className="text-[9px] font-bold text-slate-600 uppercase tracking-tighter">
              CLEANLINESS DRIVE
            </span>
            <div className="mt-1 flex items-center gap-1 text-[8px] font-black text-amber-700 bg-amber-100 px-2 py-0.5 rounded-full">
              <span>SUNDAY 11/10/26</span>
            </div>
          </div>
        </div>

        {/* Tap to enter hint */}
        <div className="mt-4 px-4 py-1.5 rounded-full bg-slate-950/80 text-amber-300 border border-amber-400/50 text-xs font-bold tracking-wider uppercase backdrop-blur-md shadow-lg flex items-center gap-1.5">
          <Sparkles className="w-3.5 h-3.5 text-amber-300 animate-spin" />
          <span>Opening Curtains...</span>
        </div>
      </div>

      {/* Top Drapery Valance (Pelmet) */}
      <div
        className={`absolute top-0 left-0 right-0 h-12 bg-linear-to-b from-emerald-950 to-transparent pointer-events-none z-10 transition-opacity duration-700 ${
          isOpen ? 'opacity-0' : 'opacity-100'
        }`}
      ></div>
    </div>
  );
};
