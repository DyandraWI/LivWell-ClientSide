import React, { useState } from 'react';
import { ChevronUp, ChevronDown, Trash, CheckCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const HabitCard = ({ habit, onIncrease, onDecrease, onConfirmDelete }) => {
  const [showConfirm, setShowConfirm] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  const isGoalAchieved = parseFloat(habit.current) >= parseFloat(habit.goal);

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
          className={`bg-white rounded-2xl shadow-md p-5 hover:shadow-lg transition-shadow duration-300 ${
            isGoalAchieved ? 'border-green-400 border' : ''
          }`}
        >
          <div className="flex justify-between items-start mb-2">
            <div className="flex items-center gap-3">
              <span className="text-2xl">{habit.icon}</span>
              <h4 className="text-lg font-semibold text-gray-800">{habit.name}</h4>
            </div>
            <span className="text-[12px] text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
              {habit.streak} day streak
            </span>
          </div>

          <div className="flex justify-between items-center">
          <p className="text-sm text-gray-500">
          Progress:{' '}
          <span className={`font-medium ${parseFloat(habit.current) === 0 ? 'text-gray-400' : 'text-gray-700'}`}>
            {parseFloat(habit.current) || 0} / {parseFloat(habit.goal) || 1} {habit.unit}
          </span>
        </p>


            <div
              className={`flex items-center gap-1 text-xs font-semibold px-2 py-1 rounded-full transition-opacity duration-300 ${
                isGoalAchieved ? 'text-green-600 bg-green-100 opacity-100' : 'opacity-0'
              }`}
              style={{ height: '24px' }}
            >
              <CheckCircle size={14} className={`${isGoalAchieved ? 'inline' : 'hidden'}`} />
              Goal Achieved
            </div>

          </div>

          <div className="flex items-center justify-between mt-4">
          <div className="relative w-20 h-20">
          <svg className="w-full h-full transform -rotate-90">
            <circle cx="40" cy="40" r="34" stroke="#e5e7eb" strokeWidth="6" fill="none" />
            <circle
              cx="40"
              cy="40"
              r="34"
              stroke={habit.color}
              strokeWidth="6"
              strokeDasharray={213.6}
              strokeDashoffset={213.6 - (213.6 * habit.progress) / 100}
              fill="none"
              strokeLinecap="round"
              className="transition-all duration-500"
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center text-[14px] font-semibold text-gray-700">
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