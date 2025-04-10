import React from 'react';
import userPanel from './components/userPanel';

export default function DashboardPage() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">User Dashboard</h1>
      <userPanel />
    </div>
  );
}
