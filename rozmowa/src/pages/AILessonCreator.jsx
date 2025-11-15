import React from 'react';
import { Mic, PlayCircle, Book } from 'lucide-react';

const AILessonCreator = () => {
  return (
    <div className="max-w-4xl mx-auto p-8">
      <h1 className="text-3xl font-serif italic mb-8">Lesson Studio</h1>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="p-6 border border-zinc-200 rounded-sm bg-white">
          <h3 className="font-serif text-xl mb-4 flex items-center gap-2"><Mic className="w-5 h-5" /> Scenario Setup</h3>
          <div className="space-y-4">
            <input type="text" placeholder="Scenario Name" className="w-full p-3 border border-zinc-200" />
            <textarea placeholder="Context instructions for AI..." className="w-full p-3 border border-zinc-200 h-32" />
          </div>
        </div>
        <div className="p-6 border border-dashed border-zinc-300 rounded-sm flex flex-col items-center justify-center text-zinc-400 min-h-[400px]">
          <PlayCircle className="w-12 h-12 mb-4" />
          <p>Audio preview inactive</p>
        </div>
      </div>
    </div>
  );
};
export default AILessonCreator;
