import React, { useState, useEffect, useRef } from 'react';
import { ShanyrakIcon, OyuPattern, ChevronDown, DecorativeDivider } from './components/Icons';
import MusicPlayer from './components/MusicPlayer';
import Calendar from './components/Calendar';
import CountdownTimer from './components/CountdownTimer';
import RsvpModal from './components/RsvpModal';
import Gallery from './components/Gallery';

// Hook for scroll animations
const useScrollReveal = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      });
    }, { threshold: 0.1 });

    const elements = document.querySelectorAll('.reveal-on-scroll');
    elements.forEach(el => observer.observe(el));

    return () => elements.forEach(el => observer.unobserve(el));
  }, []);
};

function App() {
  const [isRsvpOpen, setIsRsvpOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  // Initialize scroll animations
  useScrollReveal();

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden bg-k-sand">
      
      {/* --- Dynamic Background Elements --- */}
      <div className="fixed inset-0 pointer-events-none z-0">
          {/* Main Gradient */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-k-teal-50 via-k-sand to-k-sand opacity-90"></div>
          
          {/* Animated Large Oyu Patterns */}
          <div className="absolute top-[-5%] right-[-10%] w-[90%] h-[50%] text-k-teal-100/50 animate-float">
            <OyuPattern className="w-full h-full" opacity={0.8} />
          </div>
          <div className="absolute bottom-[10%] -left-[20%] w-[80%] h-[50%] text-k-gold-200/30 animate-float-delayed" style={{ transform: 'rotate(-15deg)' }}>
            <OyuPattern className="w-full h-full" opacity={0.8} />
          </div>
          
          {/* Particles/Noise */}
          <div className="absolute inset-0 opacity-[0.04] mix-blend-multiply paper-texture"></div>
      </div>

      {/* --- Main Content --- */}
      <main className="relative z-10 flex flex-col min-h-screen pb-40 max-w-md mx-auto shadow-2xl bg-white/40 backdrop-blur-[2px] border-x border-white/40">
        
        {/* Header - Fixed but fades on scroll */}
        <header className="pt-16 pb-8 px-6 flex flex-col items-center text-center relative reveal-on-scroll is-visible" style={{ opacity: Math.max(0, 1 - scrollY / 300) }}>
          <div className="relative w-28 h-28 mb-6 group cursor-pointer transition-transform duration-700 hover:rotate-90">
             {/* Glow effect */}
             <div className="absolute inset-0 bg-k-gold-300 rounded-full blur-2xl opacity-30 group-hover:opacity-60 transition-opacity duration-700 animate-pulse-soft"></div>
             {/* Rotating Ring */}
             <div className="absolute inset-0 border-[1.5px] border-k-gold-400/40 rounded-full animate-spin-slow"></div>
             <div className="absolute inset-2 border border-k-teal-200/50 rounded-full"></div>
             <ShanyrakIcon className="relative w-full h-full text-k-teal-900 drop-shadow-sm p-1" />
          </div>
          
          <div className="space-y-2">
            <span className="block text-xs uppercase tracking-[0.4em] text-k-teal-800 font-bold opacity-0 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              Үйлену Тойы
            </span>
            <h1 className="font-serif text-5xl text-k-teal-950 leading-tight tracking-tight opacity-0 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              <span className="gold-gradient-text drop-shadow-sm block mb-1">Ерханат</span>
              <span className="text-3xl text-k-teal-800 font-light italic block my-[-5px]">&</span>
              <span className="gold-gradient-text drop-shadow-sm block">Назигүл</span>
            </h1>
          </div>
        </header>

        {/* Hero Section / Invitation Card - REDESIGNED */}
        <section className="relative px-4 mb-8 perspective-card">
          <div className="relative bg-white rounded-[2rem] shadow-xl shadow-k-teal-900/10 overflow-hidden reveal-on-scroll paper-texture border border-white/60">
            
            {/* Top Half: Image */}
            <div className="relative aspect-[4/5] overflow-hidden group">
                 <img 
                  src="https://raw.githubusercontent.com/lessthanthreee/nazwed/refs/heads/main/photo_2026-01-21_18-34-19.jpg" 
                  alt="Wedding Couple" 
                  className="w-full h-full object-cover transition-transform duration-[3s] ease-in-out group-hover:scale-105"
                  onError={(e) => {
                    // Fallback in case the raw link fails
                    (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1511285560982-1351cdeb9821?q=80&w=800&auto=format&fit=crop';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-k-teal-900/60 via-transparent to-transparent opacity-60"></div>
                
                {/* Image Border decoration */}
                <div className="absolute inset-3 border border-white/20 rounded-[1.5rem] pointer-events-none"></div>
                
                {/* Floating Badge on Image */}
                <div className="absolute bottom-4 right-4 bg-white/20 backdrop-blur-md border border-white/40 px-4 py-2 rounded-full">
                  <span className="text-[10px] uppercase tracking-widest text-white font-bold">31.01.2026</span>
                </div>
            </div>
            
            {/* Bottom Half: Invitation Text (Paper Style) */}
            <div className="relative p-8 text-center bg-white paper-texture">
              {/* Decorative top border for text section */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white rounded-full flex items-center justify-center border border-k-gold-100 shadow-sm z-10">
                <OyuPattern className="w-8 h-8 text-k-gold-500" opacity={1} />
              </div>

              <div className="mt-6 space-y-6">
                 <div>
                    <h2 className="font-serif text-4xl text-k-teal-900 mb-2 font-medium">Құрметті қонақтар!</h2>
                    <p className="font-serif text-lg text-stone-600 leading-relaxed italic">
                      Сіз(дер)ді балаларымыздың үйлену тойының қадірлі қонағы болуға шақырамыз.
                    </p>
                 </div>

                 <div className="flex justify-center opacity-60">
                   <DecorativeDivider className="w-40 text-k-gold-400" />
                 </div>

                 {/* Hosts Section */}
                 <div className="bg-k-teal-50/50 p-5 rounded-xl border border-k-teal-100/50 space-y-4">
                    <div>
                      <p className="text-[9px] uppercase tracking-widest text-k-teal-400 mb-1 font-bold">Той иелері</p>
                      <p className="font-serif text-lg text-k-teal-900 leading-tight">
                        Апасы Бодых<br/>
                        Нағашы апасы Күлік
                      </p>
                    </div>
                    <div className="w-10 h-[1px] bg-k-teal-200/50 mx-auto"></div>
                    <div>
                      <p className="text-[9px] uppercase tracking-widest text-k-teal-400 mb-1 font-bold">Ата-анасы</p>
                      <p className="font-serif text-lg text-k-teal-900 leading-tight">Құмарбек & Бақытгүл</p>
                    </div>
                 </div>
              </div>
            </div>
          </div>
        </section>

        {/* Gallery / Slideshow */}
        <div className="reveal-on-scroll">
          <Gallery />
        </div>

        {/* Countdown - Animate in */}
        <div className="reveal-on-scroll delay-100">
           <CountdownTimer />
        </div>

        {/* Music Player - Floating */}
        <div className="reveal-on-scroll delay-200">
           <MusicPlayer />
        </div>
        
        {/* Quote Section */}
        <div className="px-10 mt-16 mb-10 text-center reveal-on-scroll">
           <OyuPattern className="w-12 h-12 text-k-gold-300 mx-auto mb-4 animate-spin-slow" opacity={0.8} />
           <p className="font-serif text-2xl text-k-teal-900 italic leading-relaxed relative">
             <span className="absolute -top-4 -left-2 text-6xl text-k-gold-200 opacity-50 font-sans">"</span>
             Махаббат — екі жүректің бір әуенге тербелуі
             <span className="absolute -bottom-8 -right-2 text-6xl text-k-gold-200 opacity-50 font-sans leading-[0]">"</span>
           </p>
        </div>

        {/* Calendar */}
        <div className="reveal-on-scroll delay-100">
          <Calendar />
        </div>

        {/* Venue Info Card */}
        <div className="mx-5 mt-12 p-8 rounded-[2.5rem] bg-k-teal-900 text-white relative overflow-hidden group reveal-on-scroll shadow-2xl shadow-k-teal-900/30">
             {/* Background Pattern */}
             <div className="absolute inset-0 opacity-10">
                <OyuPattern className="absolute -right-20 -top-20 w-80 h-80 text-white" opacity={1} />
             </div>
             
             <div className="relative z-10 text-center">
                <div className="inline-block px-3 py-1 border border-k-gold-400/50 rounded-full mb-4">
                  <span className="text-[10px] font-bold text-k-gold-300 uppercase tracking-[0.2em]">Мекен-жайы</span>
                </div>
                
                <h3 className="font-serif text-3xl mb-2 text-white uppercase tracking-wider">"DAYAN RESORT-1"</h3>
                <p className="text-xl font-serif text-white/80 italic">той сарайы</p>
                
                <div className="grid grid-cols-2 gap-4 mt-8">
                   <div className="bg-white/10 backdrop-blur-md rounded-2xl p-3 border border-white/10">
                      <span className="block text-[10px] text-k-gold-300 uppercase tracking-wider mb-1">Күні</span>
                      <span className="font-serif text-lg">31 Қаңтар</span>
                   </div>
                   <div className="bg-white/10 backdrop-blur-md rounded-2xl p-3 border border-white/10">
                      <span className="block text-[10px] text-k-gold-300 uppercase tracking-wider mb-1">Уақыты</span>
                      <span className="font-serif text-lg">18:00</span>
                   </div>
                </div>
             </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-16 mb-8 opacity-40 reveal-on-scroll">
           <p className="text-[10px] uppercase tracking-widest text-k-teal-800">Бақытты болыңыздар!</p>
           <div className="w-1 h-8 bg-k-teal-200 mx-auto mt-4"></div>
        </div>
      </main>

      {/* Sticky Bottom Action - Always visible but animated entrance */}
      <div className="fixed bottom-0 left-0 right-0 p-6 pb-8 z-40 bg-gradient-to-t from-k-sand via-k-sand/95 to-transparent pointer-events-none flex justify-center max-w-md mx-auto">
        <button 
          onClick={() => setIsRsvpOpen(true)}
          className="pointer-events-auto w-full py-4 px-8 bg-k-teal-900 text-white rounded-3xl shadow-2xl shadow-k-teal-900/40 flex items-center justify-between group transition-all hover:bg-k-teal-800 hover:-translate-y-1 active:scale-95 border border-k-gold-500/20 relative overflow-hidden animate-fade-in-up"
          style={{ animationDelay: '1s' }}
        >
          {/* Shimmer effect on button */}
          <div className="absolute inset-0 -translate-x-full group-hover:animate-shimmer bg-gradient-to-r from-transparent via-white/10 to-transparent z-0"></div>
          
          <span className="flex flex-col items-start relative z-10">
             <span className="text-[10px] text-k-teal-200 uppercase tracking-widest font-bold mb-0.5">Жауап күтеміз</span>
             <span className="font-serif text-xl italic text-k-gold-100">Тойға қатысу</span>
          </span>
          <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors border border-white/10 relative z-10">
            <ChevronDown className="w-5 h-5 -rotate-90 text-k-gold-200" />
          </div>
        </button>
      </div>

      <RsvpModal isOpen={isRsvpOpen} onClose={() => setIsRsvpOpen(false)} />
    </div>
  );
}

export default App;