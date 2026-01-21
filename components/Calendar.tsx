import React from 'react';

const Calendar: React.FC = () => {
  // January 2025
  const daysInMonth = 31;
  const startOffset = 2; // Jan 1st 2025 is a Wednesday (0=Mon, 1=Tue, 2=Wed in standard ISO week, technically Wed is index 3 if Sun is 0. Let's assume standard layout Mon-Sun)
  // Actually Jan 1, 2025 is Wednesday.
  // Layout: Mon Tue Wed Thu Fri Sat Sun
  //         -   -   1   2   3   4   5
  const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);
  const weekDays = ['Дс', 'Сс', 'Ср', 'Бс', 'Жм', 'Сн', 'Жк'];

  return (
    <div className="mx-6 mt-6 p-8 bg-white/80 backdrop-blur-xl rounded-[2rem] border border-white/50 shadow-xl shadow-k-teal-900/5 relative overflow-hidden">
      {/* Decorative corner accent */}
      <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-k-gold-100/50 to-transparent rounded-bl-[4rem]"></div>

      <div className="text-center mb-6 relative z-10">
        <h3 className="text-k-teal-600 text-[10px] tracking-[0.3em] font-bold uppercase mb-2">Той Күні</h3>
        <h2 className="font-serif text-3xl text-k-teal-950 font-medium">Қаңтар 2025</h2>
      </div>

      <div className="grid grid-cols-7 gap-1 text-center text-xs font-semibold text-k-teal-400 mb-4 uppercase tracking-wider">
        {weekDays.map(d => <div key={d}>{d}</div>)}
      </div>
      
      <div className="grid grid-cols-7 gap-y-4 gap-x-1 text-center text-sm font-medium text-stone-600">
        {Array.from({ length: 2 }).map((_, i) => (
            <div key={`empty-${i}`} className="col-span-1"></div>
        ))}

        {days.map(d => {
          const isSpecial = d === 31;
          return (
            <div key={d} className="relative flex items-center justify-center h-8">
              {isSpecial && (
                <>
                  <div className="absolute inset-0 m-auto w-9 h-9 bg-k-teal-900 rounded-full shadow-lg shadow-k-teal-900/30"></div>
                  <div className="absolute inset-0 m-auto w-9 h-9 rounded-full border border-k-gold-400 animate-ping opacity-20"></div>
                </>
              )}
              <span className={`relative z-10 ${isSpecial ? 'text-k-gold-100 font-bold' : 'text-stone-600'}`}>
                {d}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Calendar;