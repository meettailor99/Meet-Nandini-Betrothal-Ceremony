import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Navigation, Compass, Phone } from 'lucide-react';
import { INVITATION_CONTENT } from '../config/invitationContent';
import { PalaceArch } from './DecorativeMotifs/PalaceArch';

export const VenueLocation = () => {
  const isTokenPlaceholder = INVITATION_CONTENT.googleMapLink === '[GOOGLE MAP LINK]';

  const formatPhoneNumber = (raw) => {
    if (!raw) return '';
    if (raw.length === 10) {
      return `${raw.slice(0, 5)} ${raw.slice(5)}`;
    }
    return raw;
  };

  return (
    <section className="relative w-full py-20 px-4 bg-sand-radial text-taupe flex flex-col items-center justify-center overflow-hidden">
      {/* Top & Bottom Soft Gradient Blend Overlays */}
      <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-[#FFF2ED] via-[#F8E5DF]/50 to-transparent pointer-events-none z-10" />
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#FFF2ED] via-[#F8E5DF]/50 to-transparent pointer-events-none z-10" />

      <div className="relative z-10 max-w-4xl w-full">
        
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8 space-y-2"
        >
          <span className="text-xs uppercase tracking-[0.3em] text-rose-900 font-sans font-semibold">
            Venue &amp; Interactive Location
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-taupe tracking-wide">
            Celebration Venue
          </h2>
        </motion.div>

        <PalaceArch borderColor="#D48C95" className="glass-nude-card rounded-3xl shadow-card-nude px-1 py-2 sm:px-6 sm:py-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-center max-w-3xl mx-auto">
            
            {/* Left: Venue Info & Directions */}
            <div className="space-y-4 sm:space-y-5 text-center md:text-left flex flex-col justify-center">
              <div className="space-y-2">
                <div className="inline-flex items-center space-x-2 text-rose-900 text-[11px] sm:text-xs font-sans uppercase tracking-widest font-bold bg-rose-100/90 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full border border-rose-300/60 shadow-sm">
                  <MapPin className="w-3.5 h-3.5 text-rose-600 shrink-0" />
                  <span>{INVITATION_CONTENT.venueAddress}</span>
                </div>
                <h3 className="text-2xl sm:text-4xl font-display font-bold text-taupe tracking-wide leading-tight">
                  {INVITATION_CONTENT.venueName}
                </h3>
              </div>

              {/* Contact Phone Numbers */}
              <div className="pt-0.5 space-y-1.5">
                <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.2em] text-rose-900 font-sans font-bold block">
                  Contact Mobile Numbers:
                </span>
                <div className="flex flex-wrap gap-1.5 xs:gap-2 justify-center md:justify-start">
                  {INVITATION_CONTENT.contactNumbers.map((c, i) => (
                    <a
                      key={i}
                      href={`tel:${c.raw}`}
                      className="inline-flex items-center space-x-1 px-2.5 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-ivory/95 border border-rose-300/80 text-rose-900 font-sans text-[11px] sm:text-xs font-semibold shadow-sm hover:bg-rose-100 hover:scale-105 transition-all duration-300"
                    >
                      <Phone className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-rose-600 shrink-0" />
                      <span>Ph: {formatPhoneNumber(c.raw)}</span>
                    </a>
                  ))}
                </div>
              </div>

              {/* Get Directions Button */}
              <div className="pt-1">
                <a
                  href={isTokenPlaceholder ? "#" : INVITATION_CONTENT.googleMapLink}
                  onClick={(e) => {
                    if (isTokenPlaceholder) {
                      e.preventDefault();
                      alert("Google Map Link placeholder ([GOOGLE MAP LINK]) will be updated once final location link is provided.");
                    }
                  }}
                  target={isTokenPlaceholder ? "_self" : "_blank"}
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 px-6 py-2.5 sm:px-7 sm:py-3 rounded-full bg-gradient-to-r from-rose-400 via-rose-500 to-rose-600 text-white font-sans font-semibold text-xs sm:text-sm shadow-rose-glow hover:scale-105 active:scale-95 transition-all duration-300"
                >
                  <Navigation className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-current" />
                  <span>Get Directions</span>
                </a>
              </div>
            </div>

            {/* Right: Embedded Interactive Map Frame */}
            <div className="relative w-full h-56 sm:h-72 rounded-2xl overflow-hidden border-2 border-rose-300/80 shadow-rose-glow group bg-ivory p-1">
              <iframe
                title="Ceremony Location Map"
                src={INVITATION_CONTENT.googleMapEmbedUrl}
                className="w-full h-full border-0 rounded-xl filter contrast-105 brightness-95 hover:brightness-100 transition-all duration-500"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <div className="absolute top-2.5 right-2.5 bg-ivory/95 backdrop-blur-md border border-rose-300 text-rose-900 text-[10px] sm:text-xs px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full font-sans font-semibold pointer-events-none flex items-center gap-1 shadow-md">
                <Compass className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-rose-500 animate-spin" /> {INVITATION_CONTENT.venueName}
              </div>
            </div>

          </div>
        </PalaceArch>

      </div>
    </section>
  );
};
