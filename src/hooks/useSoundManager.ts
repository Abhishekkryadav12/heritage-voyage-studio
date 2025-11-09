import { useEffect, useRef } from 'react';
import { Howl } from 'howler';

export interface SoundConfig {
  narration?: string;
  ambient?: string;
  volume?: number;
}

export const useSoundManager = (config: SoundConfig) => {
  const narrationRef = useRef<Howl | null>(null);
  const ambientRef = useRef<Howl | null>(null);

  useEffect(() => {
    // Cleanup function
    return () => {
      if (narrationRef.current) {
        narrationRef.current.unload();
      }
      if (ambientRef.current) {
        ambientRef.current.unload();
      }
    };
  }, []);

  const playNarration = (text: string) => {
    // In a real implementation, this would use text-to-speech or audio files
    console.log('Playing narration:', text);
    
    // Placeholder for actual audio implementation
    // You would load actual audio files here
    if (config.narration) {
      if (narrationRef.current) {
        narrationRef.current.stop();
      }
      narrationRef.current = new Howl({
        src: [config.narration],
        volume: config.volume || 0.7,
      });
      narrationRef.current.play();
    }
  };

  const playAmbient = () => {
    if (config.ambient && !ambientRef.current) {
      ambientRef.current = new Howl({
        src: [config.ambient],
        volume: (config.volume || 0.7) * 0.5,
        loop: true,
      });
      ambientRef.current.play();
    }
  };

  const stopAmbient = () => {
    if (ambientRef.current) {
      ambientRef.current.stop();
    }
  };

  const stopNarration = () => {
    if (narrationRef.current) {
      narrationRef.current.stop();
    }
  };

  return {
    playNarration,
    playAmbient,
    stopAmbient,
    stopNarration,
  };
};
