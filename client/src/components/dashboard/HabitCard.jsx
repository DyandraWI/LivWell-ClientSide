import React, { useState } from 'react';
import { ChevronUp, ChevronDown, Trash } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const HabitCard = ({ habit, onIncrease, onDecrease, onConfirmDelete }) => {
  const [showConfirm, setShowConfirm] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  const handleDelete = () => {
    setIsVisible(false);
    setTimeout(() => onConfirmDelete(), 300);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.3 }}
          className="bg-white rounded-2xl shadow-md p-5 hover:shadow-lg transition-shadow duration-300"
        >
          <div className="flex justify-between items-start">
            <div className="flex items-center gap-3">
              <span className="text-2xl">{habit.icon}</span>
              <h4 className="text-lg font-semibold text-gray-800">{habit.name}</h4>
            </div>
            <span className="text-[12px] text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
              {habit.streak} day streak
            </span>
          </div>

          <p className="text-sm text-gray-500 mt-2">
            Progress: <span className="text-gray-700 font-medium">{habit.current} / {habit.goal}</span>
          </p>

          <div className="flex items-center justify-between mt-4">
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
                  strokeDashoffset={176 - (176 * habit.progress) / 100}
                  fill="none"
                  strokeLinecap="round"
                  className="transition-all duration-500"
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center text-[13px] font-semibold text-gray-700">
                {habit.progress}%
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <button
                onClick={onIncrease}
                className="w-9 h-9 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition"
                aria-label="Increase"
              >
                <ChevronUp size={16} />
              </button>
              <button
                onClick={onDecrease}
                className="w-9 h-9 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition"
                aria-label="Decrease"
              >
                <ChevronDown size={16} />
              </button>
            </div>
          </div>

          <div className="mt-5 flex justify-end relative group">
            {!showConfirm ? (
              <button
                onClick={() => setShowConfirm(true)}
                className="flex items-center gap-1 text-sm text-red-500 hover:text-white hover:bg-red-400 hover:shadow-sm px-3 py-1.5 rounded-full transition-all duration-200"
              >
                <Trash size={16} />
                <span className="hidden sm:inline">Delete</span>
              </button>
            ) : (
              <div className="flex gap-2 items-center">
                <button
                  onClick={handleDelete}
                  className="text-sm bg-red-500 text-white px-3 py-1 rounded-full hover:bg-red-600 transition"
                >
                  Yes
                </button>
                <button
                  onClick={() => setShowConfirm(false)}
                  className="text-sm border border-gray-300 px-3 py-1 rounded-full hover:bg-gray-100 transition"
                >
                  No
                </button>
              </div>
            )}
            {!showConfirm && (
              <div className="absolute -top-8 right-0 bg-gray-800 text-white text-xs px-2 py-1 rounded shadow opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
                Are you sure?
              </div>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default HabitCard;
