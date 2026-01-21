import React from 'react';

export const ShanyrakIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none" stroke="currentColor" strokeWidth="1.5">
    {/* Outer Rim - Double Line */}
    <circle cx="50" cy="50" r="46" className="opacity-100" />
    <circle cx="50" cy="50" r="42" className="opacity-80" strokeWidth="0.5" />
    
    {/* Cross Bars (Kulgereush) with slight curvature */}
    <path d="M50 4 L50 96" strokeLinecap="round" />
    <path d="M4 50 L96 50" strokeLinecap="round" />
    
    {/* Inner Chamfer (Shanyrak inner circle) */}
    <circle cx="50" cy="50" r="12" strokeWidth="2" />
    
    {/* Radiating Poles (Uyk) - More detailed */}
    <path d="M50 16 L50 32" strokeWidth="1" />
    <path d="M50 68 L50 84" strokeWidth="1" />
    <path d="M16 50 L32 50" strokeWidth="1" />
    <path d="M68 50 L84 50" strokeWidth="1" />
    
    {/* Diagonal Poles */}
    <path d="M26 26 L36 36" strokeWidth="1" />
    <path d="M64 64 L74 74" strokeWidth="1" />
    <path d="M26 74 L36 64" strokeWidth="1" />
    <path d="M64 36 L74 26" strokeWidth="1" />
  </svg>
);

export const OyuPattern: React.FC<{ className?: string, opacity?: number }> = ({ className, opacity = 0.1 }) => (
  <svg viewBox="0 0 200 100" className={className} style={{ opacity }} fill="currentColor">
    {/* Refined "Koshkar Muiz" */}
    <path d="M40,50 C20,50 10,30 20,20 C30,10 40,30 50,40 C60,50 70,70 90,70 C110,70 120,50 110,40 C100,30 90,50 80,60 C70,70 60,90 40,90 C20,90 10,70 15,60" 
          stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" />
    <path d="M160,50 C180,50 190,70 180,80 C170,90 160,70 150,60 C140,50 130,30 110,30 C90,30 80,50 90,60 C100,70 110,50 120,40 C130,30 140,10 160,10 C180,10 190,30 185,40" 
          stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" />
    {/* Extra flourish */}
    <circle cx="100" cy="50" r="3" fill="currentColor" opacity="0.5" />
  </svg>
);

export const DecorativeDivider: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 200 20" className={className} fill="none" stroke="currentColor">
    <path d="M0 10 L80 10 M120 10 L200 10" strokeWidth="1" opacity="0.5" />
    <circle cx="100" cy="10" r="4" fill="currentColor" stroke="none" />
    <path d="M90 10 L110 10" strokeWidth="2" />
  </svg>
);

export const PlayIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor">
    <path d="M8 5v14l11-7z" />
  </svg>
);

export const PauseIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor">
    <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
  </svg>
);

export const ChevronDown: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M6 9l6 6 6-6" />
  </svg>
);
