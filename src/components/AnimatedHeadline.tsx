import React from 'react';

export const AnimatedHeadline: React.FC = () => {
  const line1Prefix = 'We are cleaning';
  const premtala = 'PREMTALA';
  const line2 = 'for the betterment of Silchar.';

  return (
    <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.12]">
      {/* "We are cleaning" with interactive letter wave */}
      <span className="inline-block mr-2 sm:mr-3">
        {line1Prefix.split('').map((char, idx) => (
          <span
            key={`l1-${idx}`}
            className="inline-block transition-transform duration-200 hover:-translate-y-1.5 hover:text-emerald-700 hover:scale-105 cursor-default select-none"
            style={{
              transitionDelay: `${idx * 15}ms`,
            }}
          >
            {char === ' ' ? '\u00A0' : char}
          </span>
        ))}
      </span>

      {/* "PREMTALA" with shimmering glow, animated gradient, and interactive letter bounce */}
      <span className="relative inline-block my-1 sm:my-0 group">
        <span className="relative z-10 inline-flex items-center px-2 py-0.5 rounded-xl bg-emerald-50 border-2 border-emerald-300 shadow-xs">
          {premtala.split('').map((char, idx) => (
            <span
              key={`prem-${idx}`}
              className="inline-block font-black text-transparent bg-clip-text bg-linear-to-r from-emerald-800 via-green-600 to-emerald-900 animate-text-shimmer transition-all duration-200 hover:-translate-y-2 hover:scale-125 cursor-default select-none"
              style={{
                animationDelay: `${idx * 120}ms`,
              }}
            >
              {char}
            </span>
          ))}
        </span>
        {/* Luminous soft pulse glow behind PREMTALA */}
        <span className="absolute -inset-1 bg-emerald-400/25 rounded-2xl blur-md -z-0 group-hover:bg-emerald-400/50 transition-colors pointer-events-none"></span>
      </span>

      {/* "for the betterment of Silchar." */}
      <span className="block mt-1 sm:mt-2 text-slate-800">
        {line2.split(' ').map((word, wIdx) => (
          <span key={`w-${wIdx}`} className="inline-block mr-2 sm:mr-2.5">
            {word.split('').map((char, cIdx) => {
              const isSilchar = word.toLowerCase().includes('silchar');
              return (
                <span
                  key={`c-${wIdx}-${cIdx}`}
                  className={`inline-block transition-transform duration-200 hover:-translate-y-1 hover:scale-110 cursor-default select-none ${
                    isSilchar
                      ? 'text-emerald-800 font-black underline decoration-emerald-500 decoration-3 underline-offset-4 hover:text-emerald-600'
                      : 'hover:text-emerald-700'
                  }`}
                  style={{
                    transitionDelay: `${cIdx * 15}ms`,
                  }}
                >
                  {char}
                </span>
              );
            })}
          </span>
        ))}
      </span>
    </h1>
  );
};
