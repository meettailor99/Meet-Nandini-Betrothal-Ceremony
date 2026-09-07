import React from 'react';
import { Heart } from 'lucide-react';
import { INVITATION_CONTENT } from '../config/invitationContent';
import { MandalaOrnament } from './DecorativeMotifs/MandalaOrnament';

export const FooterSection = () => {
  return (
    <footer className="relative w-full py-16 px-4 bg-taupe-dark text-ivory border-t border-sage/40 flex flex-col items-center justify-center text-center overflow-hidden">
      
      {/* Background Ornament */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-15 pointer-events-none text-sage">
        <MandalaOrnament className="w-96 h-96" />
      </div>

      <div className="relative z-10 max-w-xl w-full space-y-6">
        
        {/* Family Closing Line */}
        <div className="space-y-2">
          <span className="text-xs uppercase tracking-[0.3em] text-sage-light font-sans font-medium">
            With Warm Regards
          </span>
          <h3 className="text-2xl sm:text-3xl font-display font-bold text-cream tracking-wide">
            {INVITATION_CONTENT.footerHostName}
          </h3>
        </div>

        {/* Footer Credit & Copyright Line */}
        <div className="pt-6 border-t border-sage/25 text-xs font-sans text-sand/70 space-y-1">
          <p className="flex items-center justify-center gap-1">
            Crafted with <Heart className="w-3.5 h-3.5 fill-current text-sage inline" /> for {INVITATION_CONTENT.coupleTitle}'s Betrothal Ceremony
          </p>
          <p>© 2026 {INVITATION_CONTENT.familyName}. All rights reserved.</p>
        </div>

      </div>
    </footer>
  );
};


