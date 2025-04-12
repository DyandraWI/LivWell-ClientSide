import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';

const StatsView = ({ habits }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md">
      <h3 className="text-lg font-semibold mb-4">Habit Progress Overview</h3>
      <div className="w-full h-64">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={habits} margin={{ top: 10, right: 30, left: 0, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis unit="%" />
            <Tooltip />
            <Bar dataKey="progress" radius={[4, 4, 0, 0]}>
              {habits.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color || '#10B981'} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default StatsView;
