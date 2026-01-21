import React from 'react';

const photos = [
  "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=800&auto=format&fit=crop", // Celebration
  "https://images.unsplash.com/photo-1511285560982-1351cdeb9821?q=80&w=800&auto=format&fit=crop", // Couple holding hands
  "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&w=800&auto=format&fit=crop", // Rings
  "https://images.unsplash.com/photo-1520854221256-17451cc330e7?q=80&w=800&auto=format&fit=crop", // Decor
  "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?q=80&w=800&auto=format&fit=crop", // Toast
  "https://images.unsplash.com/photo-1606800052052-a08af7148866?q=80&w=800&auto=format&fit=crop", // Happiness
];

const Gallery: React.FC = () => {
  return (
    <div className="mx-4 mt-8 mb-12">
      <h3 className="text-center text-[10px] font-bold text-k-gold-600 uppercase tracking-[0.3em] mb-6 flex items-center justify-center gap-4 opacity-80">
        <span className="h-[1px] w-8 bg-gradient-to-r from-transparent to-k-gold-400"></span>
        Естеліктер
        <span className="h-[1px] w-8 bg-gradient-to-l from-transparent to-k-gold-400"></span>
      </h3>
      
      <div className="flex overflow-x-auto gap-4 pb-6 -mx-4 px-8 no-scrollbar snap-x snap-mandatory">
        {photos.map((url, i) => (
          <div key={i} className="relative flex-shrink-0 w-64 aspect-[3/4] rounded-2xl overflow-hidden shadow-lg shadow-k-teal-900/10 snap-center group">
            <img 
              src={url} 
              alt={`Gallery ${i}`}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-k-teal-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;