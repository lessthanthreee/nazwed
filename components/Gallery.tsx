import React from 'react';

const photos = [
  "https://raw.githubusercontent.com/lessthanthreee/nazwed/refs/heads/main/photo_2026-01-21_18-35-11.jpg",
  "https://raw.githubusercontent.com/lessthanthreee/nazwed/refs/heads/main/photo_2026-01-21_18-35-32.jpg",
  "https://raw.githubusercontent.com/lessthanthreee/nazwed/refs/heads/main/photo_2026-01-21_18-35-57.jpg",
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
              onError={(e) => {
                (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1606800052052-a08af7148866?q=80&w=800&auto=format&fit=crop';
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-k-teal-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;