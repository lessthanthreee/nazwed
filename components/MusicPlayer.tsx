import React, { useState, useEffect } from 'react';
import { PlayIcon, PauseIcon } from './Icons';

const MusicPlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [bars, setBars] = useState<number[]>(new Array(16).fill(6));

  useEffect(() => {
    let interval: number;
    if (isPlaying) {
      interval = window.setInterval(() => {
        setBars(prev => prev.map(() => Math.floor(Math.random() * 18) + 4));
      }, 100);
    } else {
      setBars(new Array(16).fill(4));
    }
    return () => clearInterval(interval);
  }, [isPlaying]);

  return (
    <div className="mx-6 mt-8 p-4 rounded-full glass-panel flex items-center gap-4 transition-all duration-300 border-k-gold-200/50">
      <button 
        onClick={() => setIsPlaying(!isPlaying)}
        className="w-12 h-12 flex-shrink-0 bg-gradient-to-br from-k-teal-700 to-k-teal-900 rounded-full flex items-center justify-center text-k-gold-100 shadow-md shadow-k-teal-900/20 hover:scale-105 transition-transform active:scale-95 border border-k-gold-500/30"
      >
        {isPlaying ? <PauseIcon className="w-5 h-5" /> : <PlayIcon className="w-5 h-5 ml-1" />}
      </button>
      
      <div className="flex flex-col flex-1 overflow-hidden">
        <span className="text-[10px] text-k-teal-800/70 uppercase tracking-widest font-bold mb-0.5">
          {isPlaying ? 'Now Playing' : 'Paused'}
        </span>
        <span className="text-sm font-serif font-medium text-k-teal-950 truncate">
          Адай Күйі - Заманауи өңдеу
        </span>
      </div>

      <div className="flex items-center gap-[2px] h-8 px-2">
        {bars.map((height, i) => (
          <div 
            key={i}
            className="w-[2px] bg-gradient-to-t from-k-gold-500 to-k-gold-300 rounded-full transition-all duration-150 ease-in-out"
            style={{ height: `${height}px` }}
          />
        ))}
      </div>
    </div>
  );
};

export default MusicPlayer;