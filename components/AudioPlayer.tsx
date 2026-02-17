import React, { useEffect, useRef, useState } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

interface AudioPlayerProps {
  isPlaying: boolean;
  togglePlay: () => void;
}

const AudioPlayer: React.FC<AudioPlayerProps> = ({ isPlaying, togglePlay }) => {
  const audioRef = useRef<HTMLAudioElement>(null);
  
  // Using a royalty-free piano track URL as placeholder
  const AUDIO_URL = "https://cdn.pixabay.com/audio/2022/02/07/audio_18dc7e7816.mp3"; 

  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.play().catch(e => console.log("Autoplay prevented:", e));
      } else {
        audioRef.current.pause();
      }
    }
  }, [isPlaying]);

  return (
    <div className="fixed top-6 right-6 z-50 mix-blend-difference text-white/80 hover:text-white transition-colors cursor-pointer">
      <audio ref={audioRef} loop src={AUDIO_URL} />
      <button onClick={togglePlay} className="p-2 rounded-full border border-white/20 backdrop-blur-sm">
        {isPlaying ? <Volume2 size={20} /> : <VolumeX size={20} />}
      </button>
    </div>
  );
};

export default AudioPlayer;