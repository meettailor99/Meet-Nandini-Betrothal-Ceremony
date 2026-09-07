import React, { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX, Music } from 'lucide-react';
import { INVITATION_CONTENT } from '../config/invitationContent';

export const AudioPlayer = ({ isAudioPlaying, setIsAudioPlaying }) => {
  const audioRef = useRef(null);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    if (isAudioPlaying && audioRef.current) {
      audioRef.current.play().then(() => {
        setHasStarted(true);
      }).catch((err) => {
        console.log("Audio playback user gesture requirement:", err);
        setIsAudioPlaying(false);
      });
    } else if (!isAudioPlaying && audioRef.current) {
      audioRef.current.pause();
    }
  }, [isAudioPlaying, setIsAudioPlaying]);

  const toggleAudio = () => {
    setIsAudioPlaying(!isAudioPlaying);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <audio
        ref={audioRef}
        src={INVITATION_CONTENT.audioTrackUrl}
        loop
        preload="auto"
      />
      
      <button
        onClick={toggleAudio}
        aria-label={isAudioPlaying ? "Mute Background Music" : "Play Background Music"}
        className="group relative flex items-center justify-center w-12 h-12 rounded-full bg-ivory border-2 border-rose-400 text-rose-600 shadow-rose-glow hover:scale-110 active:scale-95 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-rose-400"
      >
        {/* Equalizer animation when playing */}
        {isAudioPlaying ? (
          <div className="flex items-center space-x-0.5">
            <span className="w-1 bg-rose-500 rounded-full animate-bounce h-4"></span>
            <span className="w-1 bg-rose-500 rounded-full animate-bounce h-6 delay-100"></span>
            <span className="w-1 bg-rose-500 rounded-full animate-bounce h-3 delay-200"></span>
          </div>
        ) : (
          <VolumeX className="w-5 h-5 text-rose-500/70 group-hover:text-rose-700 transition-colors" />
        )}

        {/* Hover Tooltip */}
        <span className="absolute right-14 whitespace-nowrap bg-taupe border border-sage/40 text-ivory text-xs px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-lg font-sans">
          {isAudioPlaying ? "Mute Music" : "Play Indian Ambient Music"}
        </span>
      </button>
    </div>
  );
};
