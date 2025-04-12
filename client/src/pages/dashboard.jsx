import React, { useState } from 'react';
import { Plus, User, LayoutGrid, BarChart3, Bell } from 'lucide-react';
import AddHabitModal from '../components/dashboard/AddHabitModal';
import HabitCard from '../components/dashboard/HabitCard';
import StatsView from '../components/dashboard/StatsView'; // Tambahkan komponen StatsView jika belum ada

const Dashboard = () => {
  const today = new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  const [showModal, setShowModal] = useState(false);
  const [showStats, setShowStats] = useState(false);
  const [habits, setHabits] = useState([
    { name: 'Daily Water', icon: '💧', progress: 63, goal: '8', current: '5', streak: 3, color: '#3B82F6' },
    { name: 'Sleep', icon: '🌙', progress: 88, goal: '8', current: '7', streak: 6, color: '#8B5CF6' },
    { name: 'Exercise', icon: '🏋️‍♂️', progress: 50, goal: '30', current: '15', streak: 2, color: '#EF4444' },
    { name: 'Meditation', icon: '🧘‍♂️', progress: 50, goal: '20', current: '10', streak: 7, color: '#22C55E' },
    { name: 'Drink Water', icon: '💧', progress: 88, goal: '8', current: '7', streak: 6, color: '#3B82F6' },
  ]);

  const getDefaultColorByCategory = (icon) => {
    switch (icon) {
      case '💧':
        return '#3B82F6'; // Water - Blue
      case '🌙':
        return '#8B5CF6'; // Sleep - Purple
      case '🏋️':
      case '🏋️‍♂️':
        return '#EF4444'; // Exercise - Red
      case '🧘‍♂️':
        return '#22C55E'; // Meditation - Green
      default:
        return '#10B981'; // Default - Teal
    }
  };

  const handleAddHabit = (newHabit) => {
    const defaultColor = getDefaultColorByCategory(newHabit.icon);
    const goalValue = parseFloat(newHabit.goal || '1');
    const currentValue = parseFloat(newHabit.current || '0');
    const progress = Math.round((currentValue / goalValue) * 100);

    setHabits([
      ...habits,
      {
        ...newHabit,
        color: defaultColor,
        progress,
        streak: 0,
      },
    ]);
    setShowModal(false);
  };

  const handleProgressChange = (index, change) => {
    setHabits((prevHabits) =>
      prevHabits.map((habit, idx) => {
        if (idx === index) {
          const goalValue = parseFloat(habit.goal);
          let newCurrent = parseFloat(habit.current) + change;

          if (newCurrent < 0) newCurrent = 0;
          if (newCurrent > goalValue) newCurrent = goalValue;

          const newProgress = Math.round((newCurrent / goalValue) * 100);

          return {
            ...habit,
            current: newCurrent.toString(),
            progress: newProgress,
          };
        }
        return habit;
      })
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 px-6 py-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-xl font-semibold text-green-500">Today</h1>
        <div className="flex items-center gap-4">
          <button
            onClick={() => setShowModal(true)}
            className="flex items-center gap-2 border px-4 py-2 rounded-lg text-sm hover:bg-green-100"
          >
            <Plus size={16} /> Add Habit
          </button>
          <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center">
            <Bell size={16} />
          </div>
          <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center">
            <User size={16} />
          </div>
        </div>
      </div>

      <h2 className="text-3xl font-bold mb-1">Welcome to LivWell</h2>
      <p className="text-gray-500 mb-6">{today}</p>

      {/* Stats Summary */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
        <div className="bg-white rounded-xl shadow p-4">
          <p className="text-sm text-gray-500">Completion Rate</p>
          <p className="text-2xl font-bold">0%</p>
        </div>
        <div className="bg-white rounded-xl shadow p-4">
          <p className="text-sm text-gray-500">Total Streak Days</p>
          <p className="text-2xl font-bold">24</p>
        </div>
        <div className="bg-white rounded-xl shadow p-4">
          <p className="text-sm text-gray-500">Longest Streak</p>
          <p className="text-2xl font-bold">7 days</p>
        </div>
      </div>

      {/* Habit View Controls */}
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-semibold">Your Habits</h3>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setShowStats(false)}
            className={`flex items-center gap-1 px-3 py-1 text-sm rounded-md border ${
              !showStats ? 'bg-green-100' : 'bg-white'
            } hover:bg-green-100`}
          >
            <LayoutGrid size={16} /> Grid
          </button>
          <button
            onClick={() => setShowStats(true)}
            className={`flex items-center gap-1 px-3 py-1 text-sm rounded-md border ${
              showStats ? 'bg-green-100' : 'bg-white'
            } hover:bg-green-100`}
          >
            <BarChart3 size={16} /> Stats
          </button>
        </div>
      </div>

      {/* Conditional Views */}
      {showStats ? (
        <StatsView habits={habits} />
      ) : (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            {habits.map((habit, idx) => (
              <HabitCard
                key={idx}
                habit={habit}
                onIncrease={() => handleProgressChange(idx, 1)}
                onDecrease={() => handleProgressChange(idx, -1)}
              />
            ))}
          </div>

          <button
            onClick={() => setShowModal(true)}
            className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 rounded-lg text-center"
          >
            + Add New Habit
          </button>
        </>
      )}

      <AddHabitModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        onSave={handleAddHabit}
      />
    </div>
  );
};

export default Dashboard;
