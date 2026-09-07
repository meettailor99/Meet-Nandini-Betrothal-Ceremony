import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Sun, Clock, MapPin, Building } from 'lucide-react';
import { INVITATION_CONTENT } from '../config/invitationContent';
import { GoldFilagreeBorder } from './DecorativeMotifs/GoldFilagreeBorder';
import { PaisleyMotif } from './DecorativeMotifs/PaisleyMotif';
import { RingCeremonyMotif } from './DecorativeMotifs/RingCeremonyMotif';
import { FloralClimberVine } from './DecorativeMotifs/FloralClimberVine';

export const CeremonyDetails = () => {
  const details = [
    {
      icon: Calendar,
      label: "Date",
      value: INVITATION_CONTENT.ceremonyDate,
    },
    {
      icon: Sun,
      label: "Day",
      value: INVITATION_CONTENT.ceremonyDay,
    },
    {
      icon: Clock,
      label: "Time",
      value: INVITATION_CONTENT.ceremonyTime,
    },
    {
      icon: Building,
      label: "Venue",
      value: INVITATION_CONTENT.venueName,
    },
    {
      icon: MapPin,
      label: "Address",
      value: INVITATION_CONTENT.venueAddress,
    },
  ];

  return (
    <section className="relative w-full py-20 px-4 bg-sand-pattern text-taupe flex flex-col items-center justify-center overflow-hidden">
      {/* Background Climber Plant Vines */}
      <div className="absolute top-0 right-0 pointer-events-none opacity-30">
        <FloralClimberVine className="w-28 h-56" position="top-right" />
      </div>
      <div className="absolute bottom-0 left-0 pointer-events-none opacity-30">
        <FloralClimberVine className="w-28 h-56" position="bottom-left" />
      </div>

      <div className="relative z-10 max-w-2xl w-full">
        
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8 space-y-3"
        >
          <span className="text-xs uppercase tracking-[0.3em] text-olive font-sans font-semibold">
            Sacred Rituals &amp; Timings
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-taupe tracking-wider flex items-center justify-center gap-2">
            <span>{INVITATION_CONTENT.ceremonyTitle}</span>
          </h2>
          <div className="flex justify-center my-2 text-sage items-center gap-2">
            <PaisleyMotif className="w-6 h-6" />
            <RingCeremonyMotif className="w-8 h-8 text-rose-400" />
            <PaisleyMotif className="w-6 h-6 transform scale-x-[-1]" />
          </div>
        </motion.div>

        {/* Framed Detail Card */}
        <GoldFilagreeBorder className="shadow-card-nude bg-ivory">
          <div className="divide-y divide-sage/30">
            {details.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="py-4 first:pt-2 last:pb-2 flex items-center space-x-4 group"
                >
                  <div className="p-2.5 rounded-full bg-sage/20 text-olive border border-sage/40 group-hover:bg-sage group-hover:text-ivory transition-all duration-300 shrink-0">
                    <IconComponent className="w-5 h-5 stroke-[1.5]" />
                  </div>
                  <div className="flex-1 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                    <span className="text-xs uppercase tracking-widest text-olive font-semibold font-sans shrink-0">
                      {item.label}
                    </span>
                    <h3 className="text-base sm:text-lg font-display font-bold text-taupe sm:text-right">
                      {item.value}
                    </h3>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </GoldFilagreeBorder>

      </div>
    </section>
  );
};


