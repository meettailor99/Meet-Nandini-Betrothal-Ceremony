import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import { Sparkles, Heart } from 'lucide-react';

export const CelebrationOverlay = ({ trigger, onClose }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!trigger) return;
    setVisible(true);

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (!prefersReducedMotion) {
      const screenWidth = window.innerWidth;
      const count = screenWidth < 480 ? 80 : 130;

      // Multicoloured floral confetti colors matching the badge
      const defaults = {
        origin: { y: 0.5 },
        colors: ['#D81B60', '#FF80AB', '#2196F3', '#AB47BC', '#FFB300', '#FFF9F6'],
        zIndex: 9999,
      };

      function fire(particleRatio, opts) {
        confetti({
          ...defaults,
          ...opts,
          particleCount: Math.floor(count * particleRatio)
        });
      }

      fire(0.3, { spread: 40, startVelocity: 50 });
      fire(0.25, { spread: 80, decay: 0.92 });
      fire(0.2, { spread: 110, startVelocity: 35 });
      fire(0.25, { spread: 130, startVelocity: 60, scalar: 1.2 });
    }

    // Auto cleanup after 3.5s
    const timer = setTimeout(() => {
      setVisible(false);
      if (onClose) onClose();
    }, 3500);

    return () => clearTimeout(timer);
  }, [trigger, onClose]);

  if (!visible) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 pointer-events-none flex flex-col items-center justify-start pt-6 overflow-hidden">
        
        {/* Sleek Top Floating Ribbon Pill Banner (Non-blocking at top of screen) */}
        <motion.div
          initial={{ y: -80, opacity: 0, scale: 0.8 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          exit={{ y: -60, opacity: 0, scale: 0.9 }}
          transition={{ type: 'spring', stiffness: 220, damping: 22 }}
          className="relative px-6 py-3 rounded-full bg-gradient-to-r from-rose-500 via-purple-600 to-rose-500 text-white font-sans font-bold shadow-[0_10px_30px_rgba(216,27,96,0.4)] border-2 border-amber-300 flex items-center gap-3 max-w-sm sm:max-w-md mx-4 pointer-events-auto"
        >
          <Sparkles className="w-5 h-5 text-amber-300 animate-spin shrink-0" />
          <div className="flex flex-col text-center">
            <span className="text-[10px] uppercase tracking-[0.25em] text-amber-200 font-sans font-bold">
              ✨ DATE REVEALED ✨
            </span>
            <span className="text-xs sm:text-sm font-display font-bold tracking-wide">
              Meet &amp; Nandini's Betrothal Ceremony
            </span>
          </div>
          <Heart className="w-4 h-4 fill-current text-pink-200 animate-pulse shrink-0" />
        </motion.div>

        {/* Floating Side Petal Animations (Does NOT block center content) */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            initial={{
              x: i % 2 === 0 ? -100 : window.innerWidth + 100,
              y: 100 + i * 80,
              opacity: 0,
              scale: 0.5
            }}
            animate={{
              x: i % 2 === 0 ? 30 + i * 15 : window.innerWidth - (60 + i * 15),
              y: [100 + i * 80, 200 + i * 90],
              opacity: [0, 1, 0],
              scale: [0.5, 1.2, 0.8]
            }}
            transition={{ duration: 3, ease: 'easeOut', delay: i * 0.2 }}
            className="absolute text-2xl pointer-events-none"
          >
            {i % 3 === 0 ? '🌸' : i % 3 === 1 ? '🌺' : '🪷'}
          </motion.div>
        ))}

      </div>
    </AnimatePresence>
  );
};
