import React, { useState } from 'react';
import { OyuPattern } from './Icons';

interface RsvpModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const RsvpModal: React.FC<RsvpModalProps> = ({ isOpen, onClose }) => {
  const [wish, setWish] = useState('');

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-k-teal-950/60 backdrop-blur-md transition-opacity duration-500" onClick={onClose}></div>
      <div className="relative bg-stone-50 w-full max-w-md rounded-[2.5rem] p-0 shadow-2xl border border-white/20 animate-fade-up overflow-hidden">
        
        {/* Decorative Header Background */}
        <div className="absolute top-0 left-0 w-full h-32 bg-k-teal-900 overflow-hidden">
             <OyuPattern className="absolute -right-10 -top-10 text-k-teal-800 w-64 h-64 opacity-30" />
             <OyuPattern className="absolute -left-10 -bottom-10 text-k-teal-800 w-48 h-48 opacity-30" />
        </div>

        <div className="relative p-8 pt-10">
            <h2 className="font-serif text-3xl text-center mb-1 text-k-gold-100 font-medium">Тойға Қатысу</h2>
            <p className="text-center text-k-teal-200/80 text-xs uppercase tracking-widest mb-8">RSVP</p>
            
            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
            <div>
                <label className="block text-[10px] uppercase tracking-wider text-k-teal-800 font-bold mb-2 ml-1">Аты-жөніңіз</label>
                <input type="text" className="w-full bg-white border border-stone-200 rounded-2xl p-4 focus:outline-none focus:border-k-teal-500 focus:ring-1 focus:ring-k-teal-500/20 transition-all text-stone-800 placeholder-stone-400" placeholder="Есіміңізді жазыңыз" />
            </div>

            <div>
                <label className="block text-[10px] uppercase tracking-wider text-k-teal-800 font-bold mb-2 ml-1">Қатысуыңыз</label>
                <div className="flex gap-3">
                <button className="flex-1 py-3 rounded-2xl bg-k-teal-50 text-k-teal-900 border border-k-teal-100 font-medium hover:bg-k-teal-100 transition-colors shadow-sm">Келемін</button>
                <button className="flex-1 py-3 rounded-2xl bg-white text-stone-500 border border-stone-200 hover:bg-stone-50 transition-colors shadow-sm">Өкінішке орай</button>
                </div>
            </div>

            <div className="pt-2">
                <label className="block text-[10px] uppercase tracking-wider text-k-teal-800 font-bold mb-2 ml-1">Тілегіңіз</label>
                <textarea 
                value={wish}
                onChange={(e) => setWish(e.target.value)}
                className="w-full bg-white border border-stone-200 rounded-2xl p-4 h-28 resize-none focus:outline-none focus:border-k-teal-500 focus:ring-1 focus:ring-k-teal-500/20 transition-all text-sm font-serif italic text-stone-600 leading-relaxed"
                placeholder="Жас жұбайларға тілек жазыңыз..." 
                />
            </div>

            <button className="w-full py-4 mt-2 bg-gradient-to-r from-k-teal-800 to-k-teal-900 text-white font-medium rounded-2xl shadow-xl shadow-k-teal-900/20 transform transition-transform active:scale-[0.98] flex items-center justify-center gap-2">
                <span>Жіберу</span>
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
            </button>
            </form>

            <button onClick={onClose} className="absolute top-4 right-4 text-white/50 hover:text-white transition-colors bg-white/10 rounded-full p-1">
             <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
        </div>
      </div>
    </div>
  );
};

export default RsvpModal;