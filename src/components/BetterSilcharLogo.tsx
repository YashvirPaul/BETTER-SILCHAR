import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  showSubtitle?: boolean;
}

export const BetterSilcharLogo: React.FC<LogoProps> = ({
  className = '',
  size = 'md',
  showSubtitle = true,
}) => {
  const iconDimensions = {
    sm: 'w-9 h-9',
    md: 'w-11 h-11',
    lg: 'w-14 h-14',
  }[size];

  const titleSizes = {
    sm: 'text-base',
    md: 'text-lg',
    lg: 'text-xl',
  }[size];

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Emblem Badge */}
      <div className={`relative ${iconDimensions} rounded-xl bg-linear-to-b from-emerald-700 to-emerald-900 p-0.5 shadow-xs flex items-center justify-center shrink-0 border border-emerald-600/30`}>
        <div className="w-full h-full rounded-[10px] bg-white flex items-center justify-center p-1 overflow-hidden relative">
          <svg
            viewBox="0 0 100 100"
            className="w-full h-full text-emerald-800"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Soft Sunrise */}
            <circle cx="50" cy="42" r="16" fill="#F59E0B" opacity="0.8" />
            
            {/* Hills Silhouette */}
            <path
              d="M10 58 Q 30 40, 52 50 T 95 48 L 95 80 L 5 80 Z"
              fill="#059669"
              opacity="0.25"
            />
            
            {/* Barak River Bridge */}
            <rect x="18" y="52" width="64" height="3" rx="1.5" fill="#047857" />
            <line x1="28" y1="55" x2="28" y2="64" stroke="#047857" strokeWidth="1.8" />
            <line x1="50" y1="55" x2="50" y2="64" stroke="#047857" strokeWidth="1.8" />
            <line x1="72" y1="55" x2="72" y2="64" stroke="#047857" strokeWidth="1.8" />
            
            {/* River Flow */}
            <path
              d="M6 65 Q 50 67, 94 65"
              stroke="#0284C7"
              strokeWidth="2"
              strokeDasharray="3 2"
              fill="none"
            />
            
            {/* Clock Tower / Landmark */}
            <rect x="36" y="32" width="6" height="20" fill="#065F46" rx="1" />
            <polygon points="36,32 39,24 42,32" fill="#047857" />
            
            {/* Eco Leaf Accent */}
            <path
              d="M68 65 C 78 63, 82 74, 68 78 C 65 73, 62 68, 68 65 Z"
              fill="#10B981"
            />
          </svg>
        </div>
      </div>

      {/* Brand Typography */}
      <div>
        <div className="flex items-center gap-1.5 leading-none">
          <span className={`font-black tracking-tight text-slate-900 ${titleSizes}`}>
            BETTER <span className="text-emerald-700">SILCHAR</span>
          </span>
        </div>
        {showSubtitle && (
          <p className="text-[10px] font-semibold text-slate-500 tracking-wider uppercase mt-1">
            Cleaner <span className="text-emerald-600">•</span> Greener <span className="text-emerald-600">•</span> Stronger
          </p>
        )}
      </div>
    </div>
  );
};
