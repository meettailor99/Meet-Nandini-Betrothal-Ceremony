import React from 'react';

export const MandalaOrnament = ({ className = "w-16 h-16", color = "#D48C95" }) => {
  return (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <circle cx="50" cy="50" r="46" stroke={color} strokeWidth="1" strokeDasharray="3 3" opacity="0.6" />
      <circle cx="50" cy="50" r="38" stroke={color} strokeWidth="1.5" />
      <circle cx="50" cy="50" r="28" stroke={color} strokeWidth="1" opacity="0.8" />
      <circle cx="50" cy="50" r="14" stroke={color} strokeWidth="1.5" />
      <circle cx="50" cy="50" r="5" fill={color} />
      
      {/* 8 Petals */}
      {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, index) => (
        <g key={index} transform={`rotate(${angle} 50 50)`}>
          <path
            d="M50 12 C44 24, 44 36, 50 38 C56 36, 56 24, 50 12 Z"
            stroke={color}
            strokeWidth="1.2"
            fill="none"
          />
          <path
            d="M50 2 C42 20, 42 34, 50 50 C58 34, 58 20, 50 2 Z"
            stroke={color}
            strokeWidth="0.8"
            opacity="0.5"
            fill="none"
          />
          <circle cx="50" cy="8" r="1.5" fill={color} />
        </g>
      ))}
    </svg>
  );
};
