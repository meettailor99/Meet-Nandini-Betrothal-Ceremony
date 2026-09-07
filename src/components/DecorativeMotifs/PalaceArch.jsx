import React from 'react';

export const PalaceArch = ({ children, className = "", borderColor = "#D48C95" }) => {
  return (
    <div className={`relative pt-20 pb-16 px-4 sm:pt-24 sm:pb-16 sm:px-10 ${className}`}>
      {/* Outer Arch SVG Border Frame */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        preserveAspectRatio="none"
        viewBox="0 0 400 500"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Top Indian Jharokha Arch Shape */}
        <path
          d="M 15 35 
             C 15 18, 75 6, 160 6 
             C 180 6, 195 2, 200 0 
             C 205 2, 220 6, 240 6 
             C 325 6, 385 18, 385 35 
             L 385 485 
             L 15 485 Z"
          stroke={borderColor}
          strokeWidth="2.5"
          fill="none"
          opacity="0.85"
        />

        <path
          d="M 28 75 
             C 28 48, 85 24, 160 24 
             C 182 24, 195 14, 200 10 
             C 205 14, 218 24, 240 24 
             C 315 24, 372 48, 372 75 
             L 372 472 
             L 28 472 Z"
          stroke={borderColor}
          strokeWidth="1"
          strokeDasharray="4 3"
          fill="none"
          opacity="0.6"
        />

        {/* 4 Corner Ornaments */}
        <circle cx="20" cy="70" r="4" fill={borderColor} />
        <circle cx="380" cy="70" r="4" fill={borderColor} />
        <circle cx="20" cy="480" r="4" fill={borderColor} />
        <circle cx="380" cy="480" r="4" fill={borderColor} />
      </svg>
      
      <div className="relative z-10">{children}</div>
    </div>
  );
};
