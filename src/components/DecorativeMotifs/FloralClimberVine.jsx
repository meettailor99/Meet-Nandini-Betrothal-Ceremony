import React from 'react';

export const FloralClimberVine = ({ className = "w-24 h-48", position = "top-left" }) => {
  // Flip transform based on corner position
  const getTransform = () => {
    switch (position) {
      case 'top-right':
        return 'scaleX(-1)';
      case 'bottom-left':
        return 'scaleY(-1)';
      case 'bottom-right':
        return 'scale(-1, -1)';
      case 'side-left':
        return 'none';
      case 'side-right':
        return 'scaleX(-1)';
      default:
        return 'none';
    }
  };

  return (
    <svg
      viewBox="0 0 100 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{ transform: getTransform() }}
    >
      <defs>
        {/* Multicoloured Flower Gradients matching the Badge */}
        <linearGradient id="magentaRoseGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FF4081" />
          <stop offset="50%" stopColor="#D81B60" />
          <stop offset="100%" stopColor="#880E4F" />
        </linearGradient>

        <linearGradient id="blueBlossomGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#90CAF9" />
          <stop offset="50%" stopColor="#2196F3" />
          <stop offset="100%" stopColor="#1565C0" />
        </linearGradient>

        <linearGradient id="purpleBlossomGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#E1BEE7" />
          <stop offset="50%" stopColor="#AB47BC" />
          <stop offset="100%" stopColor="#6A1B9A" />
        </linearGradient>

        <linearGradient id="blushPinkGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F8BBD0" />
          <stop offset="100%" stopColor="#F48FB1" />
        </linearGradient>

        <linearGradient id="goldLeafGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFE082" />
          <stop offset="100%" stopColor="#FFB300" />
        </linearGradient>

        <linearGradient id="greenLeafGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#A5D6A7" />
          <stop offset="100%" stopColor="#388E3C" />
        </linearGradient>
      </defs>

      {/* Main S-Curve Vine Stem */}
      <path
        d="M 5 0 C 15 40, 45 60, 25 100 C 5 140, 35 170, 20 200"
        stroke="#81C784"
        strokeWidth="2.2"
        strokeLinecap="round"
        fill="none"
        opacity="0.85"
      />

      {/* Secondary Curling Tendril Branches */}
      <path d="M 25 50 Q 55 40 45 25 Q 35 10 50 5" stroke="#D4AF37" strokeWidth="1.2" fill="none" opacity="0.8" />
      <path d="M 22 105 Q 60 115 50 135 Q 40 150 60 160" stroke="#D4AF37" strokeWidth="1.2" fill="none" opacity="0.8" />

      {/* Multicoloured Leaves */}
      <path d="M 20 35 C 32 25, 42 35, 30 45 Z" fill="url(#greenLeafGrad)" opacity="0.9" />
      <path d="M 12 60 C 2 50, -5 62, 8 68 Z" fill="url(#goldLeafGrad)" opacity="0.85" />
      <path d="M 30 75 C 45 68, 52 82, 38 88 Z" fill="url(#greenLeafGrad)" opacity="0.9" />
      <path d="M 18 120 C 5 110, 0 125, 12 130 Z" fill="url(#goldLeafGrad)" opacity="0.85" />
      <path d="M 28 145 C 42 135, 50 150, 35 156 Z" fill="url(#greenLeafGrad)" opacity="0.9" />

      {/* 1. Magenta Rose Flower Blossom (Top Cluster) */}
      <g transform="translate(45, 25)">
        <circle cx="0" cy="0" r="11" fill="url(#magentaRoseGrad)" stroke="#FF80AB" strokeWidth="1" />
        <circle cx="0" cy="0" r="7" fill="url(#blushPinkGrad)" stroke="#C2185B" strokeWidth="0.8" />
        <circle cx="0" cy="0" r="3.5" fill="#880E4F" />
        {/* Outer Petals */}
        <path d="M-9,-4 C-13,-9 -4,-13 0,-9 C4,-13 13,-9 9,-4 Z" fill="#FF80AB" opacity="0.85" />
      </g>

      {/* 2. Cornflower Blue Blossom (Middle Cluster) */}
      <g transform="translate(38, 88)">
        <circle cx="0" cy="0" r="12" fill="url(#blueBlossomGrad)" stroke="#90CAF9" strokeWidth="1" />
        <circle cx="0" cy="0" r="7.5" fill="#E3F2FD" stroke="#1565C0" strokeWidth="0.8" />
        <circle cx="0" cy="0" r="3.5" fill="#0D47A1" />
        {/* Hydrangea Petal Dots */}
        {[0, 60, 120, 180, 240, 300].map((deg, i) => (
          <circle
            key={i}
            cx={8 * Math.cos((deg * Math.PI) / 180)}
            cy={8 * Math.sin((deg * Math.PI) / 180)}
            r="2.5"
            fill="#64B5F6"
          />
        ))}
      </g>

      {/* 3. Lavender Purple Blossom (Bottom Cluster) */}
      <g transform="translate(50, 135)">
        <circle cx="0" cy="0" r="10" fill="url(#purpleBlossomGrad)" stroke="#E1BEE7" strokeWidth="1" />
        <circle cx="0" cy="0" r="6" fill="#F3E5F5" stroke="#6A1B9A" strokeWidth="0.8" />
        <circle cx="0" cy="0" r="3" fill="#4A148C" />
      </g>

      {/* Floating Multicoloured Petals */}
      <circle cx="55" cy="55" r="2.5" fill="#FF4081" opacity="0.9" />
      <circle cx="15" cy="90" r="2" fill="#42A5F5" opacity="0.9" />
      <circle cx="62" cy="110" r="2.5" fill="#AB47BC" opacity="0.9" />
      <circle cx="28" cy="165" r="2" fill="#FFD54F" opacity="0.9" />
    </svg>
  );
};
