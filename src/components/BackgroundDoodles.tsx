import React from 'react';

export const BackgroundDoodles: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden opacity-[0.07] select-none no-print">
      {/* Floating Stars */}
      <div className="absolute top-[8%] left-[5%] text-amber-500 text-4xl transform -rotate-12 animate-pulse">
        ⭐
      </div>
      <div className="absolute top-[18%] right-[8%] text-amber-400 text-3xl transform rotate-45">
        ✨
      </div>
      <div className="absolute bottom-[25%] left-[3%] text-yellow-500 text-5xl transform rotate-12">
        ⭐
      </div>
      <div className="absolute bottom-[10%] right-[6%] text-amber-500 text-4xl transform -rotate-45">
        ✨
      </div>

      {/* Floating Pencils & Books */}
      <div className="absolute top-[35%] left-[2%] text-blue-500 text-4xl transform -rotate-45">
        ✏️
      </div>
      <div className="absolute top-[60%] right-[3%] text-emerald-500 text-4xl transform rotate-12">
        📚
      </div>
      <div className="absolute top-[12%] right-[28%] text-indigo-500 text-3xl transform rotate-6">
        🎒
      </div>

      {/* Floating Clouds */}
      <div className="absolute top-[4%] left-[32%] text-sky-400 text-5xl opacity-80">
        ☁️
      </div>
      <div className="absolute top-[45%] right-[20%] text-sky-300 text-6xl opacity-70">
        ☁️
      </div>
      <div className="absolute bottom-[18%] left-[22%] text-sky-400 text-5xl opacity-75">
        ☁️
      </div>

      {/* Paper Airplanes */}
      <div className="absolute top-[28%] right-[35%] text-sky-500 text-4xl transform -rotate-45">
        ✈️
      </div>
      <div className="absolute bottom-[35%] left-[40%] text-emerald-400 text-4xl transform rotate-45">
        ✈️
      </div>
    </div>
  );
};
