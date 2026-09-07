import React from 'react';
import { motion } from 'framer-motion';
import { MandalaOrnament } from './DecorativeMotifs/MandalaOrnament';
import { INVITATION_CONTENT } from '../config/invitationContent';

export const LoadingScreen = ({ onComplete }) => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.05, transition: { duration: 0.8, ease: "easeInOut" } }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-sand-radial text-taupe px-4 overflow-hidden"
    >
      {/* Background Subtle Radial Glow */}
      <div className="absolute w-[500px] h-[500px] bg-sage/15 rounded-full blur-3xl pointer-events-none animate-pulse-subtle" />

      {/* Animated Mandala Container */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0, rotate: -20 }}
        animate={{ scale: 1, opacity: 1, rotate: 0 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="relative mb-6 text-sage"
      >
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        >
          <MandalaOrnament className="w-28 h-28 md:w-36 md:h-36 drop-shadow-sage-glow" color="#D48C95" />
        </motion.div>
      </motion.div>

      {/* Title & Subtext */}
      <motion.h2
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        className="text-2xl md:text-3xl font-display text-taupe text-center font-bold tracking-wider mb-2"
      >
        {INVITATION_CONTENT.coupleTitle}
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: [0.4, 1, 0.4] }}
        transition={{ delay: 0.6, duration: 2, repeat: Infinity }}
        className="text-xs sm:text-sm font-sans tracking-widest uppercase text-olive font-medium text-center"
      >
        Preparing Your Invitation...
      </motion.p>
    </motion.div>
  );
};

