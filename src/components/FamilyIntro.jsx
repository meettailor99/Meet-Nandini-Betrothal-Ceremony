import React from 'react';
import { motion } from 'framer-motion';
import { INVITATION_CONTENT } from '../config/invitationContent';
import { RingCeremonyMotif } from './DecorativeMotifs/RingCeremonyMotif';
import { FloralClimberVine } from './DecorativeMotifs/FloralClimberVine';

export const FamilyIntro = () => {
  return (
    <section className="relative w-full py-16 px-4 bg-sand-pattern text-taupe flex flex-col items-center justify-center overflow-hidden">
      {/* Top & Bottom Soft Gradient Blend Overlays for Seamless Section Transitions */}
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-[#FFF2ED] via-[#F8E5DF]/70 to-transparent pointer-events-none z-10" />
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#FFF2ED] via-[#F8E5DF]/70 to-transparent pointer-events-none z-10" />

      {/* Background Climber Plant Vines */}
      <div className="absolute top-0 left-0 pointer-events-none opacity-35">
        <FloralClimberVine className="w-28 h-56" position="top-left" />
      </div>
      <div className="absolute bottom-0 right-0 pointer-events-none opacity-35">
        <FloralClimberVine className="w-28 h-56" position="bottom-right" />
      </div>

      {/* Soft Ambient Radial Background Glow */}
      <div className="absolute w-[500px] h-[500px] bg-rose-200/20 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-2xl w-full text-center space-y-6">
        
        {/* Sacred Phrases at Top Left & Right Corners of Section 3 (Side-by-Side on Mobile & Desktop) */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="w-full flex flex-row items-center justify-between gap-1 xs:gap-2 text-rose-900 font-display font-bold uppercase tracking-wider px-1 sm:px-4 mb-2"
        >
          <span className="bg-ivory/95 px-2.5 py-1.5 xs:px-4 xs:py-2 rounded-full border border-rose-300/60 shadow-sm whitespace-nowrap text-[9px] xs:text-xs sm:text-sm">
            {INVITATION_CONTENT.sacredPhrase1}
          </span>
          <span className="bg-ivory/95 px-2.5 py-1.5 xs:px-4 xs:py-2 rounded-full border border-rose-300/60 shadow-sm whitespace-nowrap text-[9px] xs:text-xs sm:text-sm">
            {INVITATION_CONTENT.sacredPhrase2}
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="glass-nude-card p-8 sm:p-12 rounded-3xl shadow-card-nude space-y-6 border border-sage/40 relative"
        >
          {/* Top Ring Ceremony Motif */}
          <div className="flex justify-center text-sage">
            <RingCeremonyMotif className="w-10 h-10 text-rose-400" />
          </div>

          {/* Bride Line */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="space-y-1"
          >
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-taupe tracking-wide">
              {INVITATION_CONTENT.groomFirstName}
            </h3>
            <p className="text-xs sm:text-sm font-sans tracking-wider uppercase text-olive font-medium">
              Beloved Son of <span className="font-semibold text-taupe">{INVITATION_CONTENT.groomFatherName}</span> &amp; <span className="font-semibold text-taupe">{INVITATION_CONTENT.groomMotherName}</span>
            </p>
          </motion.div>

          {/* Soft Hairline Separator */}
          <div className="flex items-center justify-center gap-3 py-2">
            <div className="w-16 h-px bg-sage/50" />
            <span className="text-xs sm:text-sm font-serif italic text-sage-dark font-medium">
              together with
            </span>
            <div className="w-16 h-px bg-sage/50" />
          </div>

          {/* Groom Line */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="space-y-1"
          >
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-taupe tracking-wide">
              {INVITATION_CONTENT.brideFirstName}
            </h3>
            <p className="text-xs sm:text-sm font-sans tracking-wider uppercase text-olive font-medium">
              Beloved Daughter of <span className="font-semibold text-taupe">{INVITATION_CONTENT.brideFatherName}</span> &amp; <span className="font-semibold text-taupe">{INVITATION_CONTENT.brideMotherName}</span>
            </p>
          </motion.div>

          {/* Decorative Divider */}
          <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-sage to-transparent mx-auto opacity-70 my-4" />

          {/* Announcement & Invitation Line */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="space-y-2 max-w-md mx-auto"
          >
            <p className="text-xs sm:text-sm font-serif italic text-olive leading-relaxed">
              — with the joy and blessings of both families —
            </p>
            <p className="text-sm sm:text-base font-display font-semibold text-taupe tracking-wide uppercase">
              joyfully invite you to celebrate their Betrothal Ceremony
            </p>
          </motion.div>

        </motion.div>

      </div>
    </section>
  );
};
