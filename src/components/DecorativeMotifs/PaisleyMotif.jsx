import React from 'react';

export const PaisleyMotif = ({ className = "w-10 h-10", color = "#D48C95" }) => {
  return (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path
        d="M50 90 C20 90, 10 65, 10 45 C10 25, 30 10, 50 10 C70 10, 85 25, 80 50 C75 75, 55 60, 45 40 C40 30, 45 15, 55 10"
        stroke={color}
        strokeWidth="3"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M48 80 C28 80, 20 62, 20 46 C20 30, 35 18, 50 18 C63 18, 73 30, 70 48"
        stroke={color}
        strokeWidth="1.5"
        strokeDasharray="2 2"
        fill="none"
        opacity="0.8"
      />
      <circle cx="45" cy="45" r="6" fill={color} opacity="0.9" />
      <circle cx="35" cy="55" r="4" fill={color} opacity="0.6" />
      <circle cx="58" cy="35" r="3" fill={color} opacity="0.7" />
    </svg>
  );
};
