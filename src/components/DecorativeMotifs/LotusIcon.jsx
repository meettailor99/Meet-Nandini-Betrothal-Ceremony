import React from 'react';

export const LotusIcon = ({ className = "w-8 h-8", color = "#D48C95" }) => {
  return (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Center Petal */}
      <path
        d="M50 15 C45 35, 45 65, 50 85 C55 65, 55 35, 50 15 Z"
        fill={color}
        opacity="0.9"
      />
      {/* Inner Side Petals */}
      <path
        d="M50 35 C35 45, 20 60, 25 80 C40 80, 48 70, 50 35 Z"
        fill={color}
        opacity="0.75"
      />
      <path
        d="M50 35 C65 45, 80 60, 75 80 C60 80, 52 70, 50 35 Z"
        fill={color}
        opacity="0.75"
      />
      {/* Outer Side Petals */}
      <path
        d="M50 50 C25 55, 5 70, 12 88 C32 88, 45 78, 50 50 Z"
        fill={color}
        opacity="0.6"
      />
      <path
        d="M50 50 C75 55, 95 70, 88 88 C68 88, 55 78, 50 50 Z"
        fill={color}
        opacity="0.6"
      />
      {/* Base Stem Line */}
      <path
        d="M10 88 Q50 96 90 88"
        stroke={color}
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
};
