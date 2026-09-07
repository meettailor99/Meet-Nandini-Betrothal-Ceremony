import React from 'react';

export const RingCeremonyMotif = ({ className = "w-12 h-12", color = "#D48C95" }) => {
  return (
    <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <defs>
        <linearGradient id="ringGoldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F0C2C6" />
          <stop offset="50%" stopColor="#D48C95" />
          <stop offset="100%" stopColor="#9E4B56" />
        </linearGradient>
        <linearGradient id="diamondGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="50%" stopColor="#FBE4E8" />
          <stop offset="100%" stopColor="#E6C594" />
        </linearGradient>
        <filter id="ringGlow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="2" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>

      {/* Outer Ambient Glow Ring */}
      <circle cx="50" cy="65" r="28" stroke="#FBE4E8" strokeWidth="6" opacity="0.4" />
      <circle cx="70" cy="65" r="28" stroke="#FBE4E8" strokeWidth="6" opacity="0.4" />

      {/* Ring 1 (Left Ring) */}
      <circle cx="48" cy="65" r="26" stroke="url(#ringGoldGrad)" strokeWidth="5" filter="url(#ringGlow)" />
      <circle cx="48" cy="65" r="21" stroke="#FFF9F6" strokeWidth="1.5" opacity="0.8" />

      {/* Ring 2 (Right Intertwined Ring) */}
      <circle cx="72" cy="65" r="26" stroke="url(#ringGoldGrad)" strokeWidth="5" filter="url(#ringGlow)" />
      <circle cx="72" cy="65" r="21" stroke="#FFF9F6" strokeWidth="1.5" opacity="0.8" />

      {/* Intertwined Overlap Crown Highlight */}
      <path
        d="M 60 40 C 65 48, 65 58, 60 65"
        stroke="url(#ringGoldGrad)"
        strokeWidth="5"
        strokeLinecap="round"
      />

      {/* Solitaire Diamond 1 (Top Left Ring) */}
      <g transform="translate(48, 37)">
        {/* Diamond Gem Polygon */}
        <polygon points="0,-12 8,-4 0,8 -8,-4" fill="url(#diamondGrad)" stroke="#D48C95" strokeWidth="1" />
        <polygon points="0,-12 4,-4 0,8" fill="#FFFFFF" opacity="0.7" />
        {/* Sparkle Glint Rays */}
        <path d="M0,-16 L0,-10 M-6,-12 L6,-12" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="0" cy="-12" r="1.5" fill="#FFFFFF" />
      </g>

      {/* Solitaire Diamond 2 (Top Right Ring) */}
      <g transform="translate(72, 37)">
        {/* Diamond Gem Polygon */}
        <polygon points="0,-12 8,-4 0,8 -8,-4" fill="url(#diamondGrad)" stroke="#D48C95" strokeWidth="1" />
        <polygon points="0,-12 4,-4 0,8" fill="#FFFFFF" opacity="0.7" />
        {/* Sparkle Glint Rays */}
        <path d="M0,-16 L0,-10 M-6,-12 L6,-12" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="0" cy="-12" r="1.5" fill="#FFFFFF" />
      </g>

      {/* Small Floating Rose Gold Hearts */}
      <path
        d="M 60 22 C 58 17, 52 17, 52 23 C 52 28, 60 33, 60 33 C 60 33, 68 28, 68 23 C 68 17, 62 17, 60 22 Z"
        fill="#D48C95"
        opacity="0.85"
      />
    </svg>
  );
};
