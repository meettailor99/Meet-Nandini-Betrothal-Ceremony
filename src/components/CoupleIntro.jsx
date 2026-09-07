import React from 'react';
import { motion } from 'framer-motion';
import { INVITATION_CONTENT } from '../config/invitationContent';
import { PalaceArch } from './DecorativeMotifs/PalaceArch';
import { MandalaOrnament } from './DecorativeMotifs/MandalaOrnament';
import { PaisleyMotif } from './DecorativeMotifs/PaisleyMotif';
import { BrideVector, GroomVector } from './DecorativeMotifs/BrideGroomVector';
import { RingCeremonyMotif } from './DecorativeMotifs/RingCeremonyMotif';
import { FloralClimberVine } from './DecorativeMotifs/FloralClimberVine';

export const CoupleIntro = () => {
  return (
    <section className="relative w-full py-20 px-4 bg-nude-radial text-taupe overflow-hidden flex flex-col items-center justify-center">
      {/* Top & Bottom Soft Gradient Blend Overlays for Seamless Section Transitions */}
      <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-[#FFF9F6] via-[#FFF2ED]/50 to-transparent pointer-events-none z-10" />
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#F8E5DF]/70 via-[#FFF2ED]/50 to-transparent pointer-events-none z-10" />

      {/* Background Climber Plant Vines */}
      <div className="absolute top-0 left-0 pointer-events-none opacity-40">
        <FloralClimberVine className="w-32 h-64" position="top-left" />
      </div>
      <div className="absolute top-0 right-0 pointer-events-none opacity-40">
        <FloralClimberVine className="w-32 h-64" position="top-right" />
      </div>

      {/* Ambient Radial Background Glow */}
      <div className="absolute w-[600px] h-[600px] bg-rose-200/20 rounded-full blur-3xl pointer-events-none" />

      {/* Background Top Ornaments */}
      <div className="absolute top-4 left-4 opacity-25 text-sage">
        <MandalaOrnament className="w-20 h-20" />
      </div>
      <div className="absolute top-4 right-4 opacity-25 text-sage">
        <MandalaOrnament className="w-20 h-20" />
      </div>

      <div className="relative z-10 max-w-4xl w-full">
        <PalaceArch borderColor="#D48C95" className="glass-nude-card rounded-3xl shadow-card-nude">
          <div className="flex flex-col items-center text-center space-y-6">
            
            {/* Host Family Welcome Line - Positioned completely inside dome arch with generous spacing */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-1.5 pt-4 sm:pt-6 px-2"
            >
              <h3 className="text-xs sm:text-base uppercase tracking-[0.22em] text-rose-900 font-sans font-bold leading-relaxed">
                {INVITATION_CONTENT.welcomeLine}
              </h3>
              <p className="text-xs sm:text-sm font-serif italic text-taupe/80 max-w-md mx-auto">
                to celebrate the auspicious Betrothal ceremony of
              </p>
            </motion.div>

            <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-rose-300 to-transparent opacity-70 my-2" />

            {/* Side-by-Side Couple Showcase Layout (Mobile & Desktop) */}
            <div className="relative w-full max-w-2xl mx-auto py-4 px-1 flex flex-row items-center justify-between sm:justify-center gap-1 xs:gap-3 sm:gap-8">
              
              {/* Left Column: Groom (Nandini) */}
         
               <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="flex-1 flex flex-col items-center text-center space-y-1.5"
              >
                {/* Groom Photo Headshot */}
                <div className="transform hover:scale-105 transition-transform duration-300">
                  <GroomVector className="w-24 h-24 xs:w-28 xs:h-28 sm:w-36 sm:h-36 drop-shadow-rose-glow" />
                </div>
                <div className="space-y-0.5">
                  <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-display font-bold text-taupe tracking-wide leading-none">
                    {INVITATION_CONTENT.groomFirstName}
                  </h2>
                  <span className="text-[10px] xs:text-xs uppercase tracking-widest text-rose-800 font-sans font-bold block">
                    To Be Groom
                  </span>
                </div>
              </motion.div>

              {/* Center Node: Intertwined Ring Motif & Ampersand */}
              <motion.div
                initial={{ scale: 0, rotate: -45 }}
                whileInView={{ scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4, type: 'spring', stiffness: 200 }}
                className="relative shrink-0 flex flex-col items-center space-y-1"
              >
                <RingCeremonyMotif className="w-9 h-9 xs:w-11 xs:h-11 sm:w-13 sm:h-13 text-rose-400 drop-shadow-md animate-pulse-subtle" />
                <div className="w-8 h-8 xs:w-10 xs:h-10 sm:w-11 sm:h-11 rounded-full bg-sage-gradient p-0.5 shadow-rose-glow flex items-center justify-center">
                  <div className="w-full h-full rounded-full bg-ivory flex items-center justify-center">
                    <span className="text-base xs:text-lg sm:text-xl font-serif font-bold italic text-rose-800">
                      &amp;
                    </span>
                  </div>
                </div>
              </motion.div>

              {/* Right Column: Groom (Nandini) */}
             

                
              {/* Left Column: Bride (Meet) */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="flex-1 flex flex-col items-center text-center space-y-1.5"
              >
                {/* Bride Photo Headshot */}
                <div className="transform hover:scale-105 transition-transform duration-300">
                  <BrideVector className="w-24 h-24 xs:w-28 xs:h-28 sm:w-36 sm:h-36 drop-shadow-rose-glow" />
                </div>
                <div className="space-y-0.5">
                  <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-display font-bold text-taupe tracking-wide leading-none">
                    {INVITATION_CONTENT.brideFirstName}
                  </h2>
                  <span className="text-[10px] xs:text-xs uppercase tracking-widest text-rose-800 font-sans font-bold block">
                    To Be Bride
                  </span>
                </div>
              </motion.div>

            </div>

            {/* Subtle Divider Motif */}
            <div className="pt-2 text-sage">
              <PaisleyMotif className="w-8 h-8 opacity-75 mx-auto" />
            </div>

          </div>
        </PalaceArch>
      </div>
    </section>
  );
};


