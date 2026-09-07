import React from 'react';

export const GoldFilagreeBorder = ({ children, className = "", innerClassName = "" }) => {
  return (
    <div className={`relative p-5 md:p-8 rounded-2xl glass-cream-card text-taupe ${className}`}>
      {/* 4 Corner Filigree Accents */}
      <svg className="absolute top-2 left-2 w-10 h-10 text-sage pointer-events-none" viewBox="0 0 50 50" fill="currentColor">
        <path d="M0,0 L20,0 C10,0 0,10 0,20 L0,0 Z M5,5 L15,5 C10,8 8,10 5,15 L5,5 Z" />
        <circle cx="12" cy="12" r="2" />
        <path d="M0,0 M25,0 C15,0 0,15 0,25" stroke="currentColor" strokeWidth="2" fill="none" />
      </svg>
      <svg className="absolute top-2 right-2 w-10 h-10 text-sage pointer-events-none transform rotate-90" viewBox="0 0 50 50" fill="currentColor">
        <path d="M0,0 L20,0 C10,0 0,10 0,20 L0,0 Z M5,5 L15,5 C10,8 8,10 5,15 L5,5 Z" />
        <circle cx="12" cy="12" r="2" />
        <path d="M0,0 M25,0 C15,0 0,15 0,25" stroke="currentColor" strokeWidth="2" fill="none" />
      </svg>
      <svg className="absolute bottom-2 left-2 w-10 h-10 text-sage pointer-events-none transform -rotate-90" viewBox="0 0 50 50" fill="currentColor">
        <path d="M0,0 L20,0 C10,0 0,10 0,20 L0,0 Z M5,5 L15,5 C10,8 8,10 5,15 L5,5 Z" />
        <circle cx="12" cy="12" r="2" />
        <path d="M0,0 M25,0 C15,0 0,15 0,25" stroke="currentColor" strokeWidth="2" fill="none" />
      </svg>
      <svg className="absolute bottom-2 right-2 w-10 h-10 text-sage pointer-events-none transform rotate-180" viewBox="0 0 50 50" fill="currentColor">
        <path d="M0,0 L20,0 C10,0 0,10 0,20 L0,0 Z M5,5 L15,5 C10,8 8,10 5,15 L5,5 Z" />
        <circle cx="12" cy="12" r="2" />
        <path d="M0,0 M25,0 C15,0 0,15 0,25" stroke="currentColor" strokeWidth="2" fill="none" />
      </svg>

      {/* Inner Sage Border Line */}
      <div className={`border border-sage/40 p-4 md:p-6 rounded-xl ${innerClassName}`}>
        {children}
      </div>
    </div>
  );
};

