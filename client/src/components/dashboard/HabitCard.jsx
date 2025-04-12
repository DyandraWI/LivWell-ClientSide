import React from 'react';
import { ChevronUp, ChevronDown } from 'lucide-react';

const HabitCard = ({ habit, onIncrease, onDecrease }) => {
  const percent = habit.progress;

  return (
    <div className="bg-white rounded-xl shadow p-4 relative">
      <div className="flex justify-between items-start">
        <div className="flex items-center gap-2">
          <span className="text-xl">{habit.icon}</span>
          <h4 className="text-md font-semibold">{habit.name}</h4>
        </div>
        <span className="text-xs text-gray-500 bg-gray-100 px-2 py-0.5 rounded-full">
          {habit.streak} day streak
        </span>
      </div>
      <p className="text-sm text-gray-500 mt-1">
        Progress: {habit.current} / {habit.goal}
      </p>

      <div className="flex items-center justify-between mt-3">
        <div className="relative w-16 h-16">
          <svg className="w-full h-full transform -rotate-90">
            <circle cx="32" cy="32" r="28" stroke="#e5e7eb" strokeWidth="6" fill="none" />
            <circle
              cx="32"
              cy="32"
              r="28"
              stroke={habit.color}
              strokeWidth="6"
              strokeDasharray={176}
              strokeDashoffset={176 - (176 * percent) / 100}
              fill="none"
              strokeLinecap="round"
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center text-sm font-bold">{percent}%</div>
        </div>

        <div className="flex flex-col gap-2">
          <button onClick={onIncrease} className="w-8 h-8 rounded-full border flex items-center justify-center hover:bg-gray-100">
            <ChevronUp size={16} />
          </button>
          <button onClick={onDecrease} className="w-8 h-8 rounded-full border flex items-center justify-center hover:bg-gray-100">
            <ChevronDown size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default HabitCard;
