import React from 'react';
import { Users, MessageSquare, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

const Community = () => {
  const topics = [
    { name: "Travel & Culture", posts: "142" },
    { name: "Business English", posts: "88" },
  ];
  return (
    <div className="max-w-4xl mx-auto p-8">
      <header className="mb-12 pb-6 border-b border-zinc-200">
        <h1 className="text-5xl font-serif italic mb-2">Community Hub</h1>
      </header>
      <div className="grid grid-cols-3 gap-6 mb-12">
        <div className="p-6 border border-zinc-200 bg-white rounded-sm">
          <Users className="w-5 h-5 mb-2 text-zinc-500" />
          <div className="text-3xl font-serif">1,204</div>
        </div>
        <div className="p-6 border border-zinc-200 bg-white rounded-sm">
          <MessageSquare className="w-5 h-5 mb-2 text-zinc-500" />
          <div className="text-3xl font-serif">438</div>
        </div>
        <div className="p-6 border border-zinc-200 bg-white rounded-sm">
          <Award className="w-5 h-5 mb-2 text-zinc-500" />
          <div className="text-3xl font-serif">Maria R.</div>
        </div>
      </div>
      <h2 className="text-2xl font-serif mb-6">Popular Topics</h2>
      <div className="space-y-4">
        {topics.map((topic) => (
          <div key={topic.name} className="bg-white border border-zinc-200 rounded-sm p-6 flex items-center justify-between">
            <h3 className="text-xl font-serif">{topic.name}</h3>
            <button className="px-6 py-3 bg-black text-white rounded-sm text-sm">Join</button>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Community;
