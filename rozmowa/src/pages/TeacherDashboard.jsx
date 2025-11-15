import React from 'react';
import { Users, Clock, TrendingUp } from 'lucide-react';

const TeacherDashboard = () => {
  const students = [
    { name: "Alex M.", active: "2m ago", progress: 85, status: "On Track" },
    { name: "Sarah K.", active: "1h ago", progress: 92, status: "Ahead" },
  ];

  return (
    <div className="max-w-6xl mx-auto p-8">
      <header className="mb-12">
        <h1 className="text-4xl font-serif italic mb-2">Class Overview</h1>
      </header>
      <div className="grid grid-cols-3 gap-6 mb-12">
        <div className="p-6 border border-zinc-200 bg-white rounded-sm">
          <Users className="w-5 h-5 mb-2 text-zinc-500" />
          <div className="text-3xl font-serif">24</div>
          <div className="text-sm text-zinc-500">Total Students</div>
        </div>
        <div className="p-6 border border-zinc-200 bg-white rounded-sm">
          <Clock className="w-5 h-5 mb-2 text-zinc-500" />
          <div className="text-3xl font-serif">45m</div>
          <div className="text-sm text-zinc-500">Avg. Practice</div>
        </div>
        <div className="p-6 border border-zinc-200 bg-white rounded-sm">
          <TrendingUp className="w-5 h-5 mb-2 text-zinc-500" />
          <div className="text-3xl font-serif">B2+</div>
          <div className="text-sm text-zinc-500">Class Fluency</div>
        </div>
      </div>
      <div className="border border-zinc-200 rounded-sm bg-white">
        <div className="grid grid-cols-4 p-4 border-b border-zinc-200 bg-zinc-50 font-medium text-sm">
          <div>Student</div>
          <div>Last Active</div>
          <div>Progress</div>
          <div>Status</div>
        </div>
        {students.map((s, i) => (
          <div key={i} className="grid grid-cols-4 p-4 border-b border-zinc-100 items-center">
            <div className="font-medium font-serif">{s.name}</div>
            <div className="text-zinc-500 text-sm">{s.active}</div>
            <div className="text-xs">{s.progress}%</div>
            <div><span className="text-xs px-2 py-1 rounded-full bg-green-50 text-green-600 border border-green-200">{s.status}</span></div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default TeacherDashboard;
