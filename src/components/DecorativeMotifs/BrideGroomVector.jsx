import React from 'react';

export const BrideVector = ({ className = "w-28 h-28 sm:w-36 sm:h-36" }) => {
  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      {/* Outer Decorative Glow & Floral Wreath Frame */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-pink-200 via-rose-400 to-purple-400 p-1.5 shadow-rose-glow">
        <div className="w-full h-full rounded-full overflow-hidden border-2 border-ivory bg-cream shadow-inner">
          <img
            src={`${import.meta.env.BASE_URL}assets/bride.jpg`}
            alt="Nandini - The Bride"
            className="w-full h-full object-cover object-top transform hover:scale-110 transition-transform duration-500"
          />
        </div>
      </div>

      {/* Aesthetic Multicoloured Floral Wreath Overlay */}
      <svg className="absolute -inset-3 w-[calc(100%+24px)] h-[calc(100%+24px)] pointer-events-none" viewBox="0 0 120 120" fill="none">
        <defs>
          <linearGradient id="brideVineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFB300" />
            <stop offset="50%" stopColor="#81C784" />
            <stop offset="100%" stopColor="#D4AF37" />
          </linearGradient>
        </defs>

        {/* Circular Gold & Leaf Vine Stem */}
        <circle cx="60" cy="60" r="54" stroke="url(#brideVineGrad)" strokeWidth="1.5" strokeDasharray="6 3" opacity="0.85" />

        {/* Floral Blossom Clusters Encircling the Frame */}
        {/* Blossom 1 (Top Center: Magenta Rose) */}
        <g transform="translate(60, 6)">
          <circle cx="0" cy="0" r="5.5" fill="#D81B60" />
          <circle cx="0" cy="0" r="3.5" fill="#FF80AB" />
          <circle cx="0" cy="0" r="1.5" fill="#880E4F" />
          <path d="M-6,0 C-8,-4 -2,-6 0,-4 C2,-6 8,-4 6,0 Z" fill="#FF80AB" opacity="0.8" />
        </g>

        {/* Blossom 2 (Top Right: Cornflower Blue) */}
        <g transform="translate(98, 22)">
          <circle cx="0" cy="0" r="5" fill="#2196F3" />
          <circle cx="0" cy="0" r="3" fill="#90CAF9" />
          <circle cx="0" cy="0" r="1.2" fill="#0D47A1" />
        </g>

        {/* Blossom 3 (Right Center: Lavender Violet) */}
        <g transform="translate(114, 60)">
          <circle cx="0" cy="0" r="5.5" fill="#AB47BC" />
          <circle cx="0" cy="0" r="3.5" fill="#E1BEE7" />
          <circle cx="0" cy="0" r="1.5" fill="#4A148C" />
        </g>

        {/* Blossom 4 (Bottom Right: Gold Marigold) */}
        <g transform="translate(98, 98)">
          <circle cx="0" cy="0" r="5" fill="#FFB300" />
          <circle cx="0" cy="0" r="3" fill="#FFE082" />
          <circle cx="0" cy="0" r="1.2" fill="#E65100" />
        </g>

        {/* Blossom 5 (Bottom Center: Magenta Rose) */}
        <g transform="translate(60, 114)">
          <circle cx="0" cy="0" r="5.5" fill="#D81B60" />
          <circle cx="0" cy="0" r="3.5" fill="#FF80AB" />
          <circle cx="0" cy="0" r="1.5" fill="#880E4F" />
        </g>

        {/* Blossom 6 (Bottom Left: Cornflower Blue) */}
        <g transform="translate(22, 98)">
          <circle cx="0" cy="0" r="5" fill="#2196F3" />
          <circle cx="0" cy="0" r="3" fill="#90CAF9" />
        </g>

        {/* Blossom 7 (Left Center: Lavender Violet) */}
        <g transform="translate(6, 60)">
          <circle cx="0" cy="0" r="5.5" fill="#AB47BC" />
          <circle cx="0" cy="0" r="3.5" fill="#E1BEE7" />
        </g>

        {/* Blossom 8 (Top Left: Gold Marigold) */}
        <g transform="translate(22, 22)">
          <circle cx="0" cy="0" r="5" fill="#FFB300" />
          <circle cx="0" cy="0" r="3" fill="#FFE082" />
        </g>
      </svg>
    </div>
  );
};

export const GroomVector = ({ className = "w-28 h-28 sm:w-36 sm:h-36" }) => {
  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      {/* Outer Decorative Glow & Floral Wreath Frame */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-200 via-rose-400 to-amber-300 p-1.5 shadow-rose-glow">
        <div className="w-full h-full rounded-full overflow-hidden border-2 border-ivory bg-cream shadow-inner">
          <img
            src={`${import.meta.env.BASE_URL}assets/groom.jpg`}
            alt="Meet - The Groom"
            className="w-full h-full object-cover object-center transform hover:scale-110 transition-transform duration-500"
          />
        </div>
      </div>

      {/* Aesthetic Multicoloured Floral Wreath Overlay */}
      <svg className="absolute -inset-3 w-[calc(100%+24px)] h-[calc(100%+24px)] pointer-events-none" viewBox="0 0 120 120" fill="none">
        <defs>
          <linearGradient id="groomVineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#2196F3" />
            <stop offset="50%" stopColor="#D4AF37" />
            <stop offset="100%" stopColor="#FFB300" />
          </linearGradient>
        </defs>

        {/* Circular Gold & Leaf Vine Stem */}
        <circle cx="60" cy="60" r="54" stroke="url(#groomVineGrad)" strokeWidth="1.5" strokeDasharray="6 3" opacity="0.85" />

        {/* Floral Blossom Clusters Encircling the Frame */}
        {/* Blossom 1 (Top Center: Cornflower Blue) */}
        <g transform="translate(60, 6)">
          <circle cx="0" cy="0" r="5.5" fill="#2196F3" />
          <circle cx="0" cy="0" r="3.5" fill="#90CAF9" />
          <circle cx="0" cy="0" r="1.5" fill="#0D47A1" />
        </g>

        {/* Blossom 2 (Top Right: Magenta Rose) */}
        <g transform="translate(98, 22)">
          <circle cx="0" cy="0" r="5" fill="#D81B60" />
          <circle cx="0" cy="0" r="3" fill="#FF80AB" />
        </g>

        {/* Blossom 3 (Right Center: Gold Marigold) */}
        <g transform="translate(114, 60)">
          <circle cx="0" cy="0" r="5.5" fill="#FFB300" />
          <circle cx="0" cy="0" r="3.5" fill="#FFE082" />
        </g>

        {/* Blossom 4 (Bottom Right: Lavender Violet) */}
        <g transform="translate(98, 98)">
          <circle cx="0" cy="0" r="5" fill="#AB47BC" />
          <circle cx="0" cy="0" r="3" fill="#E1BEE7" />
        </g>

        {/* Blossom 5 (Bottom Center: Cornflower Blue) */}
        <g transform="translate(60, 114)">
          <circle cx="0" cy="0" r="5.5" fill="#2196F3" />
          <circle cx="0" cy="0" r="3.5" fill="#90CAF9" />
        </g>

        {/* Blossom 6 (Bottom Left: Magenta Rose) */}
        <g transform="translate(22, 98)">
          <circle cx="0" cy="0" r="5" fill="#D81B60" />
          <circle cx="0" cy="0" r="3" fill="#FF80AB" />
        </g>

        {/* Blossom 7 (Left Center: Gold Marigold) */}
        <g transform="translate(6, 60)">
          <circle cx="0" cy="0" r="5.5" fill="#FFB300" />
          <circle cx="0" cy="0" r="3.5" fill="#FFE082" />
        </g>

        {/* Blossom 8 (Top Left: Lavender Violet) */}
        <g transform="translate(22, 22)">
          <circle cx="0" cy="0" r="5" fill="#AB47BC" />
          <circle cx="0" cy="0" r="3" fill="#E1BEE7" />
        </g>
      </svg>
    </div>
  );
};

export const CouplePhotoCard = ({ className = "" }) => {
  return (
    <div className={`relative max-w-sm sm:max-w-md w-full mx-auto my-6 p-2 rounded-3xl bg-gradient-to-br from-pink-200 via-blue-200 to-purple-300 shadow-2xl ${className}`}>
      <div className="relative rounded-2xl overflow-hidden border-2 border-ivory bg-cream shadow-inner group">
        <img
          src={`${import.meta.env.BASE_URL}assets/couple.jpg`}
          alt="Nandini & Meet"
          className="w-full h-72 sm:h-96 object-cover object-top filter contrast-105 brightness-95 group-hover:scale-105 transition-transform duration-700"
        />
        {/* Soft Bottom Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-taupe/90 via-taupe/20 to-transparent flex flex-col justify-end p-5 text-center">
          <span className="text-[11px] uppercase tracking-[0.25em] text-rose-200 font-sans font-bold">
            BETROTHAL COUPLE
          </span>
          <h3 className="text-2xl sm:text-3xl font-display font-bold text-ivory drop-shadow-md">
            Nandini &amp; Meet
          </h3>
        </div>
      </div>
    </div>
  );
};
