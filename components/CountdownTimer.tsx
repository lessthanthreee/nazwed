import React, { useState, useEffect } from 'react';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const CountdownTimer: React.FC = () => {
  // Target: Jan 31, 2026 at 18:00
  // Note: Month is 0-indexed (0 = January)
  const targetDate = new Date(2026, 0, 31, 18, 0, 0).getTime();

  const calculateTimeLeft = (): TimeLeft => {
    const now = new Date().getTime();
    const difference = targetDate - now;

    if (difference > 0) {
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    // Return 0 if passed
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const TimeUnit: React.FC<{ value: number; label: string }> = ({ value, label }) => (
    <div className="flex flex-col items-center group">
      <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-white to-k-teal-50 rounded-2xl border border-k-gold-200 shadow-xl shadow-k-teal-900/5 flex items-center justify-center mb-3 relative overflow-hidden transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-k-gold-500/10 group-hover:border-k-gold-300">
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white to-transparent opacity-50"></div>
        <span className="text-3xl sm:text-4xl font-serif text-k-teal-900 font-medium tabular-nums drop-shadow-sm">
          {value < 10 ? `0${value}` : value}
        </span>
      </div>
      <span className="text-[10px] uppercase tracking-[0.25em] text-k-teal-600 font-semibold">{label}</span>
    </div>
  );

  return (
    <div className="mx-6 mt-10 mb-6">
      <h3 className="text-center text-[10px] font-bold text-k-gold-600 uppercase tracking-[0.3em] mb-8 flex items-center justify-center gap-4 opacity-80">
        <span className="h-[1px] w-12 bg-gradient-to-r from-transparent to-k-gold-400"></span>
        Тойдың басталуына
        <span className="h-[1px] w-12 bg-gradient-to-l from-transparent to-k-gold-400"></span>
      </h3>
      <div className="flex justify-between items-start gap-3">
        <TimeUnit value={timeLeft.days} label="Күн" />
        <TimeUnit value={timeLeft.hours} label="Сағ" />
        <TimeUnit value={timeLeft.minutes} label="Мин" />
        <TimeUnit value={timeLeft.seconds} label="Сек" />
      </div>
    </div>
  );
};

export default CountdownTimer;