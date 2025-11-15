import React from 'react';
import { BookOpen, Trophy, Flame, ArrowRight } from 'lucide-react';

const StudentDashboard = () => {
  const currentMission = { title: "The Art of Small Talk", progress: 65 };
  const recentLessons = [
    { id: 1, title: "Coffee Shop Orders", status: "Completed" },
    { id: 2, title: "Subway Navigation", status: "In Progress" },
  ];
  return (
    <div className="max-w-4xl mx-auto p-6 space-y-12">
      <header className="flex justify-between items-end border-b border-zinc-200 pb-6">
        <div>
          <h1 className="text-4xl font-serif italic mb-2">Good Morning, Alex.</h1>
        </div>
        <div className="flex gap-6 text-center">
          <div>
            <div className="flex items-center gap-2 text-xl font-medium"><Flame className="w-5 h-5" /> 12</div>
            <span className="text-xs text-zinc-400 uppercase tracking-wider">Day Streak</span>
          </div>
        </div>
      </header>
      <section className="bg-zinc-900 text-white p-8 rounded-sm cursor-pointer">
        <h2 className="text-5xl font-serif mb-4">{currentMission.title}</h2>
        <button className="bg-white text-black px-8 py-3 font-medium rounded-sm flex items-center gap-2 hover:bg-zinc-200 transition-colors">
          Continue <ArrowRight className="w-4 h-4" />
        </button>
      </section>
      <section>
        <h3 className="text-xl font-serif mb-6">Recent Activity</h3>
        <div className="flex gap-4 overflow-x-auto pb-4">
          {recentLessons.map((lesson) => (
            <div key={lesson.id} className="min-w-[280px] p-6 border border-zinc-200 bg-white">
              <h4 className="text-xl font-serif mb-2">{lesson.title}</h4>
              <p className="text-xs text-zinc-400 uppercase tracking-wider">{lesson.status}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
export default StudentDashboard;
