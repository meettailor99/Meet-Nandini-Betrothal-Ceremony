import React from 'react';

export const RangoliPattern = ({ className = "w-32 h-32", color = "#D48C95" }) => {
  return (
    <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <circle cx="100" cy="100" r="90" stroke={color} strokeWidth="1.5" opacity="0.4" />
      <circle cx="100" cy="100" r="75" stroke={color} strokeWidth="1" strokeDasharray="4 4" opacity="0.6" />
      <circle cx="100" cy="100" r="50" stroke={color} strokeWidth="1.5" />
      <circle cx="100" cy="100" r="25" fill={color} opacity="0.15" stroke={color} strokeWidth="1" />
      <circle cx="100" cy="100" r="8" fill={color} />

      {/* 12 Outer Petals */}
      {Array.from({ length: 12 }).map((_, i) => {
        const angle = i * 30;
        return (
          <g key={i} transform={`rotate(${angle} 100 100)`}>
            <path
              d="M100 25 C90 45, 90 65, 100 75 C110 65, 110 45, 100 25 Z"
              stroke={color}
              strokeWidth="1.2"
              fill="none"
            />
            <circle cx="100" cy="18" r="3" fill={color} />
          </g>
        );
      })}

      {/* Diagonal Stars */}
      {[0, 45, 90, 135].map((angle, i) => (
        <line
          key={i}
          x1="100"
          y1="10"
          x2="100"
          y2="190"
          stroke={color}
          strokeWidth="0.8"
          opacity="0.3"
          transform={`rotate(${angle} 100 100)`}
        />
      ))}
    </svg>
  );
};
