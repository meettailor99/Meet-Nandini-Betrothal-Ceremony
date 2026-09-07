import React, { useRef, useEffect, useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Calendar, Eye, Heart } from 'lucide-react';
import { INVITATION_CONTENT } from '../config/invitationContent';
import { RingCeremonyMotif } from './DecorativeMotifs/RingCeremonyMotif';
import { FloralClimberVine } from './DecorativeMotifs/FloralClimberVine';
import { AddToCalendarButton } from './AddToCalendarButton';

export const ScratchDateCard = ({ onRevealComplete }) => {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const [isRevealed, setIsRevealed] = useState(false);
  const [isScratching, setIsScratching] = useState(false);
  const [scratchPercent, setScratchPercent] = useState(0);

  // Live Countdown Timer State (Target: 16th September 2026, 10:30 AM)
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const targetDate = new Date('2026-09-16T10:30:00');

    const updateCountdown = () => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / 1000 / 60) % 60);
        const seconds = Math.floor((difference / 1000) % 60);
        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    updateCountdown();
    const timerInterval = setInterval(updateCountdown, 1000);
    return () => clearInterval(timerInterval);
  }, []);
  const initCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { willReadFrequently: true });
    const rect = canvas.getBoundingClientRect();
    const dpr = window.devicePixelRatio || 1;

    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    ctx.scale(dpr, dpr);

    // Draw Soft Blush Rose Gold Metallic Background Pattern
    const grad = ctx.createLinearGradient(0, 0, rect.width, rect.height);
    grad.addColorStop(0, '#F8D7DA');
    grad.addColorStop(0.3, '#FFF2ED');
    grad.addColorStop(0.7, '#D48C95');
    grad.addColorStop(1, '#E8B4B8');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, rect.width, rect.height);

    // Draw Ornamental Overlay Text on Scratch Layer
    ctx.fillStyle = '#4A2E35';
    const titleFontSize = Math.min(Math.max(rect.width * 0.038, 13), 17);
    ctx.font = `bold ${titleFontSize}px "Cormorant Garamond", Georgia, serif`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('✨ SCRATCH WITH FINGER OR MOUSE TO REVEAL DATE ✨', rect.width / 2, rect.height / 2 - 14);
    ctx.font = `italic ${Math.max(titleFontSize - 3, 11)}px "Outfit", sans-serif`;
    ctx.fillText('A Sacred Secret Awaits Below...', rect.width / 2, rect.height / 2 + 14);

    // Subtle border on canvas
    ctx.strokeStyle = '#9E4B56';
    ctx.lineWidth = 4;
    ctx.strokeRect(0, 0, rect.width, rect.height);
  }, []);

  useEffect(() => {
    initCanvas();
    window.addEventListener('resize', initCanvas);
    return () => window.removeEventListener('resize', initCanvas);
  }, [initCanvas]);

  // Calculate erased alpha pixel percentage relative to total canvas pixels
  const checkScratchPercentage = useCallback(() => {
    if (isRevealed) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { willReadFrequently: true });
    
    const w = canvas.width;
    const h = canvas.height;
    const imageData = ctx.getImageData(0, 0, w, h);
    const pixels = imageData.data;
    let transparentCount = 0;
    const totalPixels = pixels.length / 4;

    for (let i = 3; i < pixels.length; i += 16) {
      if (pixels[i] === 0) {
        transparentCount++;
      }
    }

    const percent = Math.round((transparentCount / (totalPixels / 4)) * 100);
    setScratchPercent(percent);

    if (percent >= 55) {
      triggerFullReveal();
    }
  }, [isRevealed]);

  const triggerFullReveal = useCallback(() => {
    if (isRevealed) return;
    setIsRevealed(true);
    const canvas = canvasRef.current;
    if (canvas) {
      canvas.style.transition = 'opacity 0.6s ease-out';
      canvas.style.opacity = '0';
      setTimeout(() => {
        canvas.style.display = 'none';
      }, 600);
    }
    if (onRevealComplete) onRevealComplete();
  }, [isRevealed, onRevealComplete]);

  // Handle Scratching Pointer Motion
  const scratch = (e) => {
    if (isRevealed) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const rect = canvas.getBoundingClientRect();

    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const clientY = e.touches ? e.touches[0].clientY : e.clientY;

    const x = clientX - rect.left;
    const y = clientY - rect.top;

    const brushRadius = Math.min(Math.max(rect.width * 0.045, 22), 40);

    ctx.globalCompositeOperation = 'destination-out';
    ctx.beginPath();
    ctx.arc(x, y, brushRadius, 0, Math.PI * 2, false);
    ctx.fill();

    checkScratchPercentage();
  };

  const handlePointerDown = (e) => {
    setIsScratching(true);
    scratch(e);
  };

  const handlePointerMove = (e) => {
    if (!isScratching) return;
    scratch(e);
  };

  const handlePointerUp = () => {
    setIsScratching(false);
  };

  return (
    <section className="relative w-full py-20 px-4 bg-nude-pattern text-taupe flex flex-col items-center justify-center overflow-hidden">
      {/* Background Climber Plant Vines */}
      <div className="absolute top-0 right-0 pointer-events-none opacity-30">
        <FloralClimberVine className="w-28 h-56" position="top-right" />
      </div>
      <div className="absolute bottom-0 left-0 pointer-events-none opacity-30">
        <FloralClimberVine className="w-28 h-56" position="bottom-left" />
      </div>

      <div className="relative z-10 max-w-xl w-full text-center">
        
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-8 space-y-2"
        >
          <span className="text-xs uppercase tracking-[0.3em] text-olive font-sans font-semibold">
            An Unforgettable Moment
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-taupe tracking-wide flex items-center justify-center gap-2">
            <span>Scratch to Reveal the Date</span>
            <RingCeremonyMotif className="w-7 h-7 text-rose-400" />
          </h2>
          <p className="text-xs sm:text-sm font-sans text-taupe/80 max-w-md mx-auto">
            Swipe across the card below to unveil when our sacred journey begins.
          </p>
        </motion.div>

        {/* Scratch Card Container with Multiple Hearts & Circles Design */}
        <div ref={containerRef} className="relative w-full max-w-lg mx-auto min-h-[270px] sm:min-h-[300px] rounded-3xl shadow-card-nude overflow-hidden border-2 border-sage/40">
          
          {/* Underneath Layer (The Revealed Date Content - Multi Circles & Hearts) */}
          <div className="absolute inset-0 bg-ivory text-taupe flex flex-col items-center justify-center p-4 sm:p-6 rounded-3xl select-none">
            
            {/* Background Ambient Radial Glow */}
            <div className="absolute w-72 h-72 bg-rose-200/35 rounded-full blur-2xl pointer-events-none" />

            <div className="relative z-10 w-full h-full border border-sage/40 rounded-2xl p-4 sm:p-6 flex flex-col items-center justify-between bg-cream-light/85 backdrop-blur-sm space-y-3">
              
              {/* 1. Header Save The Date Capsule */}
              <div className="inline-flex items-center space-x-1.5 px-4 py-1 rounded-full bg-rose-100/90 border border-sage/40 text-olive text-[11px] font-bold font-sans tracking-[0.25em] uppercase shadow-sm">
                <Calendar className="w-3.5 h-3.5 text-sage-dark" />
                <span>SAVE THE DATE</span>
              </div>

              {/* 2. Multi Circles & Hearts Cluster (Day • Month • Year) */}
              <div className="w-full flex items-center justify-center gap-1.5 sm:gap-3 py-1">
                
                {/* Circle Pod 1: Day */}
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-br from-ivory via-rose-50 to-rose-100 border-2 border-sage/60 shadow-rose-glow flex flex-col items-center justify-center transition-transform hover:scale-105">
                    <span className="text-xl sm:text-2xl font-display font-bold text-taupe leading-none">
                      {INVITATION_CONTENT.ceremonyDate.split(' ')[0] || '16th'}
                    </span>
                    <span className="text-[9px] uppercase tracking-widest text-olive font-sans font-bold mt-0.5">
                      Day
                    </span>
                  </div>
                </div>

                {/* Heart Separator 1 */}
                <div className="text-rose-400 animate-pulse px-0.5">
                  <Heart className="w-4 h-4 fill-current text-rose-400/80" />
                </div>

                {/* Pill Pod 2: Month */}
                <div className="flex flex-col items-center">
                  <div className="px-4 py-3 sm:px-6 sm:py-4 rounded-3xl bg-gradient-to-br from-ivory via-rose-50 to-rose-100 border-2 border-sage/60 shadow-rose-glow flex flex-col items-center justify-center transition-transform hover:scale-105">
                    <span className="text-lg sm:text-2xl font-display font-bold text-taupe leading-none">
                      {INVITATION_CONTENT.ceremonyDate.split(' ')[1] || 'September'}
                    </span>
                    <span className="text-[9px] uppercase tracking-widest text-olive font-sans font-bold mt-0.5">
                      Month
                    </span>
                  </div>
                </div>

                {/* Heart Separator 2 */}
                <div className="text-rose-400 animate-pulse px-0.5">
                  <Heart className="w-4 h-4 fill-current text-rose-400/80" />
                </div>

                {/* Circle Pod 3: Year */}
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-br from-ivory via-rose-50 to-rose-100 border-2 border-sage/60 shadow-rose-glow flex flex-col items-center justify-center transition-transform hover:scale-105">
                    <span className="text-xl sm:text-2xl font-display font-bold text-taupe leading-none">
                      {INVITATION_CONTENT.ceremonyDate.split(' ')[2] || '2026'}
                    </span>
                    <span className="text-[9px] uppercase tracking-widest text-olive font-sans font-bold mt-0.5">
                      Year
                    </span>
                  </div>
                </div>

              </div>

              {/* 3. Day & Time Capsule Badge */}
              <div className="px-5 py-2 rounded-full bg-ivory/90 border border-sage/50 shadow-sm text-xs font-sans font-semibold text-olive tracking-wider flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-rose-400 animate-ping shrink-0" />
                <span>{INVITATION_CONTENT.ceremonyDay} • {INVITATION_CONTENT.ceremonyTime}</span>
              </div>

            </div>
          </div>

          {/* Top Layer Canvas Scratch Surface */}
          <canvas
            ref={canvasRef}
            onMouseDown={handlePointerDown}
            onMouseMove={handlePointerMove}
            onMouseUp={handlePointerUp}
            onMouseLeave={handlePointerUp}
            onTouchStart={handlePointerDown}
            onTouchMove={handlePointerMove}
            onTouchEnd={handlePointerUp}
            className="absolute inset-0 w-full h-full cursor-pointer z-20 touch-none rounded-3xl"
          />

        </div>

        {/* Accessible Fallback Button & Percentage indicator */}
        <div className="mt-6 flex flex-col items-center space-y-3">
          {!isRevealed && (
            <button
              onClick={triggerFullReveal}
              className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-full bg-cream border border-sage/60 text-taupe text-xs font-sans font-semibold tracking-wider hover:bg-sage hover:text-ivory transition-all duration-300 shadow-md focus:outline-none focus:ring-2 focus:ring-sage"
            >
              <Eye className="w-4 h-4" />
              <span>Can't Scratch? Reveal Date Instantly</span>
            </button>
          )}

          {isRevealed && (
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 15 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="w-full flex flex-col items-center space-y-4 pt-2"
            >
              <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-rose-100/90 border border-rose-300 text-rose-900 text-xs font-sans font-bold tracking-wider shadow-sm">
                <Sparkles className="w-4 h-4 text-rose-500 animate-spin" />
                <span>Date Revealed! We Can't Wait To Celebrate With You</span>
              </div>

              {/* Live Countdown Timer Component */}
              <div className="w-full max-w-md mx-auto p-5 sm:p-6 rounded-3xl glass-nude-card border-2 border-rose-300/80 shadow-card-nude flex flex-col items-center justify-center text-center space-y-3">
                <span className="text-[11px] uppercase tracking-[0.25em] text-rose-900 font-sans font-bold">
                  COUNTDOWN TO THE BETROTHAL CEREMONY
                </span>

                <div className="flex items-center justify-center gap-2 sm:gap-4 py-1">
                  {/* Days */}
                  <div className="flex flex-col items-center">
                    <div className="w-14 h-14 sm:w-18 sm:h-18 rounded-2xl bg-gradient-to-br from-ivory via-rose-50 to-rose-100 border-2 border-rose-300 shadow-rose-glow flex flex-col items-center justify-center">
                      <span className="text-xl sm:text-3xl font-display font-bold text-taupe leading-none">
                        {timeLeft.days.toString().padStart(2, '0')}
                      </span>
                      <span className="text-[9px] uppercase tracking-widest text-rose-800 font-sans font-bold mt-1">
                        Days
                      </span>
                    </div>
                  </div>

                  <span className="text-rose-400 font-bold text-lg sm:text-2xl sm:mb-2">:</span>

                  {/* Hours */}
                  <div className="flex flex-col items-center">
                    <div className="w-14 h-14 sm:w-18 sm:h-18 rounded-2xl bg-gradient-to-br from-ivory via-rose-50 to-rose-100 border-2 border-rose-300 shadow-rose-glow flex flex-col items-center justify-center">
                      <span className="text-xl sm:text-3xl font-display font-bold text-taupe leading-none">
                        {timeLeft.hours.toString().padStart(2, '0')}
                      </span>
                      <span className="text-[9px] uppercase tracking-widest text-rose-800 font-sans font-bold mt-1">
                        Hours
                      </span>
                    </div>
                  </div>

                  <span className="text-rose-400 font-bold text-lg sm:text-2xl sm:mb-2">:</span>

                  {/* Minutes */}
                  <div className="flex flex-col items-center">
                    <div className="w-14 h-14 sm:w-18 sm:h-18 rounded-2xl bg-gradient-to-br from-ivory via-rose-50 to-rose-100 border-2 border-rose-300 shadow-rose-glow flex flex-col items-center justify-center">
                      <span className="text-xl sm:text-3xl font-display font-bold text-taupe leading-none">
                        {timeLeft.minutes.toString().padStart(2, '0')}
                      </span>
                      <span className="text-[9px] uppercase tracking-widest text-rose-800 font-sans font-bold mt-1">
                        Mins
                      </span>
                    </div>
                  </div>

                  <span className="text-rose-400 font-bold text-lg sm:text-2xl sm:mb-2">:</span>

                  {/* Seconds */}
                  <div className="flex flex-col items-center">
                    <div className="w-14 h-14 sm:w-18 sm:h-18 rounded-2xl bg-gradient-to-br from-ivory via-rose-50 to-rose-100 border-2 border-rose-300 shadow-rose-glow flex flex-col items-center justify-center">
                      <span className="text-xl sm:text-3xl font-display font-bold text-rose-600 leading-none">
                        {timeLeft.seconds.toString().padStart(2, '0')}
                      </span>
                      <span className="text-[9px] uppercase tracking-widest text-rose-800 font-sans font-bold mt-1">
                        Secs
                      </span>
                    </div>
                  </div>
                </div>

                {/* Add to Calendar Button */}
                <div className="pt-2">
                  <AddToCalendarButton />
                </div>
              </div>
            </motion.div>
          )}
        </div>

      </div>
    </section>
  );
};

