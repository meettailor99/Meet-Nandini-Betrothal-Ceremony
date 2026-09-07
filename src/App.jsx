import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';

import { LoadingScreen } from './components/LoadingScreen';
import { Navbar } from './components/Navbar';
import { AudioPlayer } from './components/AudioPlayer';
import { EnvelopeHero } from './components/EnvelopeHero';
import { CoupleIntro } from './components/CoupleIntro';
import { FamilyIntro } from './components/FamilyIntro';
import { ScratchDateCard } from './components/ScratchDateCard';
import { CelebrationOverlay } from './components/CelebrationOverlay';
import { CeremonyDetails } from './components/CeremonyDetails';
import { EventTimeline } from './components/EventTimeline';
import { VenueLocation } from './components/VenueLocation';
import { FooterSection } from './components/FooterSection';
import { MarigoldGarland } from './components/DecorativeMotifs/MarigoldGarland';

export function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const [isEnvelopeOpened, setIsEnvelopeOpened] = useState(false);
  const [triggerCelebration, setTriggerCelebration] = useState(false);

  useEffect(() => {
    // Artificial minimum load time for loading screen animation (~1.2s)
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  const handleEnvelopeOpen = () => {
    setIsEnvelopeOpened(true);
    setIsAudioPlaying(true);
  };

  const handleDateRevealed = () => {
    setTriggerCelebration(true);
  };

  return (
    <div className="min-h-screen bg-ivory text-taupe flex flex-col font-sans selection:bg-sage selection:text-taupe-dark relative">
      
      {/* Loading Screen Overlay */}
      <AnimatePresence>
        {isLoading && <LoadingScreen key="loader" />}
      </AnimatePresence>

      {/* Floating Audio Player Toggle */}
      <AudioPlayer
        isAudioPlaying={isAudioPlaying}
        setIsAudioPlaying={setIsAudioPlaying}
      />

      {/* Celebration Confetti & Petals Burst Overlay */}
      <CelebrationOverlay
        trigger={triggerCelebration}
        onClose={() => setTriggerCelebration(false)}
      />

      {/* Top Floating Glassmorphic Navbar with Custom Floral Monogram Logo */}
      <Navbar isEnvelopeOpened={isEnvelopeOpened} />

      {/* Main Single Continuous Scroll Journey */}
      <main className="w-full flex flex-col flex-1">
        
        {/* 1. Envelope Hero Entry */}
        <EnvelopeHero
          isOpened={isEnvelopeOpened}
          onOpen={handleEnvelopeOpen}
        />

        {/* Decorative Marigold Garland Divider */}
        <MarigoldGarland className="w-full h-10 text-sage my-2" />

        {/* 2. Couple Introduction (First Names Only) */}
        <CoupleIntro />

        {/* 3. Family Introduction Block */}
        <FamilyIntro />

        {/* Decorative Garland Divider */}
        <MarigoldGarland className="w-full h-10 text-sage my-2" />

        {/* 4. Interactive Scratch-to-Reveal Date Card */}
        <ScratchDateCard
          onRevealComplete={handleDateRevealed}
        />

        {/* Decorative Garland Divider */}
        <MarigoldGarland className="w-full h-10 text-sage my-2" />

        {/* 5. Betrothal Ceremony Details */}
        <CeremonyDetails />

        {/* 6. Event Timeline & Program */}
        <EventTimeline />

        {/* 7. Royal Venue & Interactive Location */}
        <VenueLocation />

        {/* 8. Final Footer */}
        <FooterSection />

      </main>

    </div>
  );
}

export default App;


