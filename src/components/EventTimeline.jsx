import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, HeartHandshake, Gem, Utensils } from 'lucide-react';
import { INVITATION_CONTENT } from '../config/invitationContent';
import { LotusIcon } from './DecorativeMotifs/LotusIcon';
import { RingCeremonyMotif } from './DecorativeMotifs/RingCeremonyMotif';
import { FloralClimberVine } from './DecorativeMotifs/FloralClimberVine';

export const EventTimeline = () => {
  const iconMap = {
    Sparkles,
    HeartHandshake,
    Gem,
    Utensils,
  };

  return (
    <section className="relative w-full py-20 px-4 bg-nude-pattern text-taupe flex flex-col items-center justify-center overflow-hidden">
      {/* Background Climber Plant Vines */}
      <div className="absolute top-0 left-0 pointer-events-none opacity-30">
        <FloralClimberVine className="w-28 h-56" position="top-left" />
      </div>
      <div className="absolute bottom-0 right-0 pointer-events-none opacity-30">
        <FloralClimberVine className="w-28 h-56" position="bottom-right" />
      </div>

      {/* Background Decorative Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-rose-200/20 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-3xl w-full">
        
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 space-y-2"
        >
          <span className="text-xs uppercase tracking-[0.3em] text-olive font-sans font-semibold">
            Ceremony Journey
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-taupe tracking-wide flex items-center justify-center gap-2">
            <span>Event Timeline</span>
          </h2>
          <div className="flex justify-center items-center gap-2 mt-2">
            <LotusIcon className="w-6 h-6 text-sage" />
            <RingCeremonyMotif className="w-8 h-8 text-rose-400" />
            <LotusIcon className="w-6 h-6 text-sage transform scale-x-[-1]" />
          </div>
        </motion.div>

        {/* Timeline Path Container */}
        <div className="relative border-l-2 border-rose-300 ml-4 sm:ml-40 pl-6 sm:pl-10 space-y-12">
          
          {INVITATION_CONTENT.timeline.map((item, index) => {
            const IconComponent = iconMap[item.icon] || Sparkles;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.7, delay: index * 0.15 }}
                className="relative group"
              >
                {/* Timeline Node Icon Circle */}
                <div className="absolute -left-[35px] sm:-left-[51px] top-0 w-10 h-10 rounded-full bg-ivory border-2 border-rose-400 text-rose-600 flex items-center justify-center shadow-rose-glow group-hover:scale-110 group-hover:bg-rose-500 group-hover:text-white transition-all duration-300">
                  <IconComponent className="w-5 h-5 stroke-[1.5]" />
                </div>

                {/* Time Badge (Desktop Left Offset - aligned cleanly without collision) */}
                <div className="hidden sm:flex absolute -left-48 top-1.5 w-36 items-center justify-end">
                  <span className="text-[11px] font-bold uppercase tracking-widest text-rose-800 bg-rose-100/90 px-3 py-1 rounded-full border border-rose-300/60 whitespace-nowrap shadow-sm">
                    {item.time}
                  </span>
                </div>

                {/* Mobile Time Badge */}
                <span className="sm:hidden inline-block text-[11px] font-bold uppercase tracking-widest text-rose-800 bg-rose-100/90 px-3 py-1 rounded-full border border-rose-300/60 mb-2 shadow-sm">
                  {item.time}
                </span>

                {/* Event Details Card */}
                <div className="glass-cream-card p-6 rounded-2xl border border-rose-200 shadow-card-nude group-hover:border-rose-400 transition-colors">
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <h3 className="text-xl sm:text-2xl font-display font-bold text-taupe">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm font-sans text-taupe/80 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}

        </div>

      </div>
    </section>
  );
};

