import React from 'react';

export const MarigoldGarland = ({ className = "w-full h-12" }) => {
  // Multicoloured Flower colors matching seal badge
  const flowerColors = [
    { main: "#D81B60", inner: "#FF80AB", core: "#880E4F" }, // Magenta Rose
    { main: "#2196F3", inner: "#90CAF9", core: "#0D47A1" }, // Cornflower Blue
    { main: "#AB47BC", inner: "#E1BEE7", core: "#4A148C" }, // Lavender Violet
    { main: "#FFB300", inner: "#FFE082", core: "#E65100" }, // Marigold Gold
    { main: "#F48FB1", inner: "#F8BBD0", core: "#C2185B" }, // Blush Pink
  ];

  return (
    <div className={`relative overflow-hidden flex items-center justify-center ${className}`}>
      <svg viewBox="0 0 1200 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        {/* Main hanging garland line */}
        <path
          d="M0 10 Q 150 45, 300 10 Q 450 45, 600 10 Q 750 45, 900 10 Q 1050 45, 1200 10"
          stroke="#D4AF37"
          strokeWidth="2.2"
          strokeDasharray="4 4"
          opacity="0.8"
        />

        {/* Multicoloured Hanging Floral Blossoms */}
        {[75, 225, 375, 525, 675, 825, 975, 1125].map((x, i) => {
          const c = flowerColors[i % flowerColors.length];
          return (
            <g key={i} transform={`translate(${x}, 32)`}>
              <circle cx="0" cy="0" r="13" fill={c.main} />
              <circle cx="0" cy="0" r="9" fill={c.inner} />
              <circle cx="0" cy="0" r="4.5" fill={c.core} />
              <path d="M0 -15 L0 -22" stroke="#D4AF37" strokeWidth="2" />
              <circle cx="0" cy="-22" r="3" fill="#D4AF37" />
            </g>
          );
        })}

        {[150, 450, 750, 1050].map((x, i) => {
          const c = flowerColors[(i + 2) % flowerColors.length];
          return (
            <g key={i} transform={`translate(${x}, 15)`}>
              <circle cx="0" cy="0" r="8" fill={c.main} />
              <circle cx="0" cy="0" r="4.5" fill={c.inner} />
            </g>
          );
        })}
      </svg>
    </div>
  );
};
