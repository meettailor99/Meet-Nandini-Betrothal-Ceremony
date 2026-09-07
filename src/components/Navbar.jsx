import React from 'react';
import { motion } from 'framer-motion';

export const Navbar = ({ isEnvelopeOpened }) => {
  return (
    <motion.header
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="fixed top-0 left-0 right-0 z-40 bg-ivory/90 backdrop-blur-md border-b border-rose-300/50 shadow-sm px-4 py-2 flex items-center justify-between transition-all duration-300"
    >
      {/* Left: Custom Floral Monogram Logo Icon */}
      <div className="flex items-center space-x-2.5">
        <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-cream-light border-2 border-amber-300/90 p-0.5 shadow-sm overflow-hidden flex items-center justify-center shrink-0">
          <img
            src={`${import.meta.env.BASE_URL}assets/logo.png`}
            alt="Nandini & Meet Monogram Emblem"
            className="w-full h-full object-contain"
          />
        </div>
        <div className="flex flex-col">
          <span className="text-base sm:text-lg font-serif font-bold text-taupe tracking-wide leading-none">
            Meet &amp; Nandini
          </span>
          <span className="text-[9px] uppercase tracking-[0.2em] text-rose-800 font-sans font-bold mt-0.5">
            Betrothal Ceremony
          </span>
        </div>
      </div>

      {/* Right: Quick Navigation Badges */}
      <div className="flex items-center space-x-2">
        <a
          href="#venue"
          onClick={(e) => {
            e.preventDefault();
            const el = document.querySelector('section:nth-of-type(6)') || document.querySelector('iframe');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
          className="px-3 py-1 rounded-full bg-rose-100/90 border border-rose-300/60 text-rose-900 text-[11px] font-sans font-semibold hover:bg-rose-200 transition-colors shadow-sm"
        >
          Venue
        </a>
      </div>
    </motion.header>
  );
};
