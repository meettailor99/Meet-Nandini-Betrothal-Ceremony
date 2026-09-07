import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, ChevronDown } from 'lucide-react';
import { INVITATION_CONTENT } from '../config/invitationContent';
import { RingCeremonyMotif } from './DecorativeMotifs/RingCeremonyMotif';
import { FloralClimberVine } from './DecorativeMotifs/FloralClimberVine';

export const EnvelopeHero = ({ onOpen, isOpened }) => {
  const [isOpenState, setIsOpenState] = useState(isOpened);
  const [sealBroken, setSealBroken] = useState(false);
  const [showMagicFlash, setShowMagicFlash] = useState(false);

  const handleOpenClick = () => {
    if (isOpenState) return;
    setSealBroken(true);
    setShowMagicFlash(true);

    setTimeout(() => {
      setIsOpenState(true);
      if (onOpen) onOpen();
    }, 700);

    setTimeout(() => {
      setShowMagicFlash(false);
    }, 1400);
  };

  return (
    <section className="relative min-h-screen w-full flex flex-col items-center justify-center bg-sand-radial px-4 py-12 overflow-hidden text-center">
      {/* Bottom Soft Gradient Blend Overlay for Seamless Transition */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#FFF2ED] via-[#FFF9F6]/60 to-transparent pointer-events-none z-10" />

      {/* Background Floral Climber Vines */}
      <div className="absolute top-0 left-0 pointer-events-none opacity-45">
        <FloralClimberVine className="w-28 h-56 sm:w-36 sm:h-72" position="top-left" />
      </div>
      <div className="absolute top-0 right-0 pointer-events-none opacity-45">
        <FloralClimberVine className="w-28 h-56 sm:w-36 sm:h-72" position="top-right" />
      </div>
      <div className="absolute bottom-0 left-0 pointer-events-none opacity-30">
        <FloralClimberVine className="w-24 h-48" position="bottom-left" />
      </div>
      <div className="absolute bottom-0 right-0 pointer-events-none opacity-30">
        <FloralClimberVine className="w-24 h-48" position="bottom-right" />
      </div>

      {/* Ambient Radial Background Glow */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-rose-200/25 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-xl w-full flex flex-col items-center">
        
        {/* Sacred Phrases at Top Left & Right Corners (Side-by-Side on Mobile & Desktop) */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full flex flex-row items-center justify-between gap-1 xs:gap-2 text-rose-900 font-display font-bold uppercase tracking-wider px-1 sm:px-4 mb-4"
        >
          <span className="bg-ivory/95 px-2.5 py-1.5 xs:px-4 xs:py-2 rounded-full border border-rose-300/60 shadow-sm whitespace-nowrap text-[9px] xs:text-xs sm:text-sm">
            {INVITATION_CONTENT.sacredPhrase1}
          </span>
          <span className="bg-ivory/95 px-2.5 py-1.5 xs:px-4 xs:py-2 rounded-full border border-rose-300/60 shadow-sm whitespace-nowrap text-[9px] xs:text-xs sm:text-sm">
            {INVITATION_CONTENT.sacredPhrase2}
          </span>
        </motion.div>

        {/* Section Main Title */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-6 space-y-1"
        >
          <span className="text-xs uppercase tracking-[0.35em] text-olive font-sans font-semibold">
            {INVITATION_CONTENT.familyName}
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-display text-taupe font-bold leading-tight tracking-wide flex items-center justify-center gap-2">
            <span>The Betrothal Ceremony</span>
          </h1>
          <div className="flex justify-center py-1">
            <RingCeremonyMotif className="w-8 h-8" />
          </div>
        </motion.div>

        {/* Real Luxury Lace Envelope Container */}
        <div
          className="relative w-[min(90vw,480px)] h-72 sm:h-84 max-h-[60vh] perspective-1000 my-4 cursor-pointer group select-none"
          onClick={handleOpenClick}
        >
          {/* Magic Center Enlightening Flash & Magic Dust Particles */}
          <AnimatePresence>
            {showMagicFlash && (
              <div className="absolute inset-0 z-50 pointer-events-none flex items-center justify-center">
                {/* Central Burst Flare */}
                <motion.div
                  initial={{ scale: 0.1, opacity: 1 }}
                  animate={{ scale: 3.5, opacity: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 1, ease: 'easeOut' }}
                  className="w-48 h-48 rounded-full bg-gradient-to-r from-amber-100 via-white to-rose-200 blur-xl shadow-[0_0_80px_rgba(255,255,255,0.9)]"
                />

                {/* Ring of Floating Magic Sparkles Dust */}
                {[...Array(12)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ x: 0, y: 0, scale: 0, opacity: 1 }}
                    animate={{
                      x: Math.cos((i * 30 * Math.PI) / 180) * 140,
                      y: Math.sin((i * 30 * Math.PI) / 180) * 140,
                      scale: [0, 1.4, 0],
                      opacity: [1, 0.8, 0],
                    }}
                    transition={{ duration: 1.2, ease: 'easeOut', delay: i * 0.03 }}
                    className="absolute text-amber-300"
                  >
                    <Sparkles className="w-6 h-6 fill-amber-200 text-rose-400 drop-shadow-md" />
                  </motion.div>
                ))}
              </div>
            )}
          </AnimatePresence>

          {/* Main Envelope Body - Luxury Designer Curved Contour */}
          <motion.div
            initial={{ scale: 0.92, opacity: 0, y: 30 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full h-full bg-gradient-to-b from-cream-light via-cream to-sand rounded-[2.5rem] shadow-envelope-depth border-2 border-rose-300/80 p-6 flex flex-col justify-between overflow-hidden"
          >
            {/* Soft Paper Grain & Radial Texture */}
            <div className="absolute inset-0 bg-nude-pattern opacity-60 pointer-events-none" />

            {/* Inner Envelope Gold Embossed Scalloped Arch Line Border */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none text-rose-400/50" viewBox="0 0 100 100" preserveAspectRatio="none">
              <rect x="3" y="3" width="94" height="94" rx="8" stroke="#D4AF37" strokeWidth="0.8" fill="none" strokeDasharray="2 2" />
            </svg>

            {/* Top Royal Arch Shaped Flap (Matching the Badge Arch Silhouette) */}
            <div
              className={`absolute top-0 left-0 right-0 h-52 origin-top transition-transform duration-700 ease-in-out z-20 ${
                isOpenState ? '[transform:rotateX(180deg)]' : '[transform:rotateX(0deg)]'
              }`}
              style={{ transformStyle: 'preserve-3d' }}
            >
              {/* Flap Outer Side - Royal Arch Shape Matching Badge Silhouette */}
              <div
                className="absolute inset-0 bg-gradient-to-b from-cream-light via-cream to-sand border-t-2 border-rose-400 shadow-md flex flex-col items-center justify-start pt-4"
                style={{
                  clipPath: 'polygon(0 0, 100% 0, 100% 25%, 90% 45%, 75% 65%, 50% 90%, 25% 65%, 10% 45%, 0 25%)'
                }}
              >
                {/* Decorative Gold & Rose Arch Line Border Overlay */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none text-amber-500/60" viewBox="0 0 100 100" preserveAspectRatio="none">
                  <path d="M 0,0 L 100,0 L 100,22 C 90,42 75,62 50,86 C 25,62 10,42 0,22 Z" stroke="#D4AF37" strokeWidth="1.8" fill="none" />
                  <path d="M 0,0 L 100,0 L 100,18 C 90,38 75,58 50,82 C 25,58 10,38 0,18 Z" stroke="#D48C95" strokeWidth="1" strokeDasharray="2 2" fill="none" />
                </svg>

                {/* Calligraphy Header on Envelope Flap */}
                <span className="text-[10px] sm:text-xs uppercase tracking-[0.3em] text-rose-900 font-sans font-bold z-10">
                  PLEASE JOIN US FOR THE BETROTHAL OF
                </span>
                <h3 className="text-xl sm:text-2xl font-serif italic text-taupe font-bold mt-1 z-10">
                  {INVITATION_CONTENT.coupleTitle}
                </h3>
              </div>
            </div>

            {/* Direct Cutout Floral Monogram Lovebird Seal Badge */}
            <AnimatePresence>
              {!isOpenState && (
                <motion.div
                  initial={{ scale: 1 }}
                  exit={{ scale: 1.4, opacity: 0, rotate: 20 }}
                  transition={{ duration: 0.5 }}
                  className={`absolute top-20 left-1/2 -translate-x-1/2 z-30 w-32 h-32 sm:w-36 sm:h-36 ${
                    sealBroken ? 'animate-ping' : 'group-hover:scale-110'
                  } transition-transform cursor-pointer flex items-center justify-center`}
                >
                  <img
                    src={`${import.meta.env.BASE_URL}assets/seal_badge.png`}
                    alt="Nandini & Meet Monogram Seal Badge"
                    className="w-full h-full object-contain filter drop-shadow-[0_10px_25px_rgba(158,75,86,0.4)]"
                  />
                </motion.div>
              )}
            </AnimatePresence>

            {/* Slide-out Revealed Invitation Card inside Envelope (Hidden opacity-0 when closed!) */}
            <motion.div
              animate={{
                y: isOpenState ? -65 : 0,
                scale: isOpenState ? 1.02 : 0.95,
                opacity: isOpenState ? 1 : 0,
              }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative z-20 w-full h-full bg-ivory rounded-xl p-5 shadow-2xl border border-rose-300/60 flex flex-col items-center justify-center text-taupe  mt-5"
            >
              <div className="border border-rose-300/40 w-full h-full rounded-lg p-4 flex flex-col items-center justify-center space-y-2 bg-cream-light/80">
                {/* Sacred Phrases on Revealed Card */}
              

                <span className="text-ml uppercase tracking-widest text-rose-900 font-semibold font-sans">
                  {INVITATION_CONTENT.welcomeLine}
                </span>
                <h2 className="text-3xl sm:text-4xl font-display font-bold text-taupe flex items-center gap-2 pt-4">
                  <span>{INVITATION_CONTENT.coupleTitle}</span>
                </h2>
              </div>
            </motion.div>

            {/* Bottom Pocket Overlay of Envelope */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-sand via-cream/90 to-transparent z-10 pointer-events-none rounded-b-[2.5rem] border-t border-rose-300/30 flex items-end justify-center pb-3">
              {!isOpenState && (
                <span className="text-[10px] uppercase tracking-[0.25em] font-sans font-bold text-rose-900 animate-pulse">
                  TAP TO OPEN INVITATION
                </span>
              )}
            </div>
          </motion.div>
        </div>

        {/* CTA Tap Button */}
        {!isOpenState && (
          <motion.button
            onClick={handleOpenClick}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mt-6 inline-flex items-center space-x-2.5 px-8 py-3.5 rounded-full bg-gradient-to-r from-rose-400 via-rose-500 to-rose-600 text-white font-semibold font-sans shadow-rose-glow hover:scale-105 active:scale-95 transition-all duration-300 animate-pulse-subtle"
          >
            <Sparkles className="w-4 h-4 text-white" />
            <span>Open Our Invitation</span>
          </motion.button>
        )}

        {/* Scroll indicator if opened */}
        {isOpenState && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="mt-8 flex flex-col items-center text-olive animate-bounce"
          >
            <span className="text-xs font-sans tracking-widest uppercase mb-1">Scroll to Explore</span>
            <ChevronDown className="w-5 h-5 text-sage" />
          </motion.div>
        )}
      </div>
    </section>
  );
};


