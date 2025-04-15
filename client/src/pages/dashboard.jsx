import React, { useState, useEffect, useRef } from 'react';
import { Plus, User, LayoutGrid, BarChart3, Bell } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import AddHabitModal from '../components/dashboard/AddHabitModal';
import HabitCard from '../components/dashboard/HabitCard';
import StatsView from '../components/dashboard/StatsView';

const Dashboard = () => {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [showStats, setShowStats] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);

  const today = new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  const [habits, setHabits] = useState([
    { id: 1, name: 'Daily Water', icon: '💧', progress: 63, goal: '8', current: '5', unit: 'glasses', streak: 3, color: '#3B82F6' },
    { id: 2, name: 'Sleep', icon: '🌙', progress: 88, goal: '8', current: '7', unit: 'hours', streak: 6, color: '#8B5CF6' },
    { id: 3, name: 'Exercise', icon: '🏋‍♂', progress: 50, goal: '30', current: '15', unit: 'minutes', streak: 2, color: '#EF4444' },
    { id: 4, name: 'Meditation', icon: '🧘‍♂', progress: 50, goal: '20', current: '10', unit: 'minutes', streak: 7, color: '#22C55E' },
    { id: 5, name: 'Drink Water', icon: '💧', progress: 88, goal: '8', current: '7', unit: 'glasses', streak: 6, color: '#3B82F6' },
  ]);

  const getDefaultColorByCategory = (icon) => {
    switch (icon) {
      case '💧':
        return '#3B82F6';
      case '🌙':
        return '#8B5CF6';
      case '🏋':
      case '🏋‍♂':
        return '#EF4444';
      case '🧘‍♂':
        return '#22C55E';
      default:
        return '#10B981';
    }
  };

  const handleAddHabit = (newHabit) => {
    const defaultColor = getDefaultColorByCategory(newHabit.icon);
    const goalValue = parseFloat(newHabit.goal || '1');
    const currentValue = parseFloat(newHabit.current || '0');
    const progress = Math.round((currentValue / goalValue) * 100);

    const newId = Date.now();
    setHabits([
      ...habits,
      {
        ...newHabit,
        id: newId,
        color: defaultColor,
        progress,
        streak: 0,
        unit: newHabit.unit || 'times',
      },
    ]);
    setShowModal(false);
  };

  const handleProgressChange = (habitId, change) => {
    setHabits((prevHabits) =>
      prevHabits.map((habit) => {
        if (habit.id === habitId) {
          const goalValue = parseFloat(habit.goal);
          let newCurrent = parseFloat(habit.current) + change;
          if (newCurrent < 0) newCurrent = 0;
          if (newCurrent > goalValue) newCurrent = goalValue;

          const newProgress = Math.round((newCurrent / goalValue) * 100);
          const isCompleted = newCurrent >= goalValue;
          const newStreak = isCompleted ? habit.streak + 1 : 0;

          return {
            ...habit,
            current: newCurrent.toString(),
            progress: newProgress,
            streak: newStreak,
          };
        }
        return habit;
      })
    );
  };

  const handleDeleteHabit = (habitId) => {
    setHabits((prevHabits) => prevHabits.filter((habit) => habit.id !== habitId));
  };

  const calculateCompletionRate = () => {
    if (habits.length === 0) return 0;
    const completed = habits.filter((habit) => parseFloat(habit.current) >= parseFloat(habit.goal)).length;
    return Math.round((completed / habits.length) * 100);
  };

  const calculateTotalStreak = () => {
    return habits.reduce((total, habit) => total + habit.streak, 0);
  };

  const calculateLongestStreak = () => {
    if (habits.length === 0) return 0;
    return Math.max(...habits.map((habit) => habit.streak));
  };

  const handleLogout = () => {
    localStorage.removeItem('user_id');
    navigate('/login');
  };

  const userMenuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (userMenuRef.current && !userMenuRef.current.contains(event.target)) {
        setShowUserMenu(false);
      }
    };

    if (showUserMenu) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showUserMenu]);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 px-6 py-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-xl font-semibold text-green-500">Today</h1>
        <div className="flex items-center gap-4 relative">
          <button onClick={() => setShowModal(true)} className="flex items-center gap-2 border px-4 py-2 rounded-lg text-sm hover:bg-green-100">
            <Plus size={16} /> Add Habit
          </button>

          <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center">
            <Bell size={16} />
          </div>

          {/* User Icon with Hover + Dropdown */}
          <div className="relative" ref={userMenuRef}>
            <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center cursor-pointer hover:bg-green-100 transition duration-200" onClick={() => setShowUserMenu(!showUserMenu)} title="User">
              <User size={16} className="text-gray-800" />
            </div>
            {showUserMenu && (
              <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-200 rounded-xl shadow-lg z-20 overflow-hidden">
                <button onClick={handleLogout} className="w-full flex items-center gap-2 px-4 py-3 text-sm text-gray-700 hover:bg-red-50 hover:text-red-600 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1m0-10V5" />
                  </svg>
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      <h2 className="text-3xl font-bold mb-1">Welcome to LivWell</h2>
      <p className="text-gray-500 mb-6">{today}</p>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
        <div className="bg-white rounded-xl shadow p-4">
          <p className="text-sm text-gray-500">Completion Rate</p>
          <p className="text-2xl font-bold">{calculateCompletionRate()}%</p>
        </div>
        <div className="bg-white rounded-xl shadow p-4">
          <p className="text-sm text-gray-500">Total Streak Days</p>
          <p className="text-2xl font-bold">{calculateTotalStreak()}</p>
        </div>
        <div className="bg-white rounded-xl shadow p-4">
          <p className="text-sm text-gray-500">Longest Streak</p>
          <p className="text-2xl font-bold">{calculateLongestStreak()} days</p>
        </div>
      </div>

      {/* View Mode Switch */}
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-semibold">Your Habits</h3>
        <div className="flex items-center gap-2">
          <button onClick={() => setShowStats(false)} className={`flex items-center gap-1 px-3 py-1 text-sm rounded-md border ${!showStats ? 'bg-green-100' : 'bg-white'} hover:bg-green-100`}>
            <LayoutGrid size={16} /> Grid
          </button>
          <button onClick={() => setShowStats(true)} className={`flex items-center gap-1 px-3 py-1 text-sm rounded-md border ${showStats ? 'bg-green-100' : 'bg-white'} hover:bg-green-100`}>
            <BarChart3 size={16} /> Stats
          </button>
        </div>
      </div>

      {/* Habit Content */}
      {showStats ? (
        <StatsView habits={habits} />
      ) : (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            {habits.map((habit) => (
              <HabitCard key={habit.id} habit={habit} onIncrease={() => handleProgressChange(habit.id, 1)} onDecrease={() => handleProgressChange(habit.id, -1)} onConfirmDelete={() => handleDeleteHabit(habit.id)} />
            ))}
          </div>

          <button onClick={() => setShowModal(true)} className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 rounded-lg text-center">
            + Add New Habit
          </button>
        </>
      )}

      <AddHabitModal isOpen={showModal} onClose={() => setShowModal(false)} onSave={handleAddHabit} />
    </div>
  );
};

export default Dashboard;
