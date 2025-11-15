import React, { useState } from 'react';
import { Mic, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const LessonExperience = () => {
  const [isRecording, setIsRecording] = useState(false);
  const chatHistory = [
    { role: 'system', text: "Let's practice ordering coffee. You start." },
    { role: 'tutor', text: "Good morning! What can I get started for you today?" },
    { role: 'user', text: "Hi, can I get a oat milk latte?" },
    { role: 'tutor', text: "Sure thing. Would you like that hot or iced?" },
  ];

  return (
    <div className="flex flex-col h-screen max-w-3xl mx-auto">
      <header className="flex justify-between items-center py-6 border-b border-zinc-100">
        <h2 className="text-lg font-serif">Coffee Shop Orders</h2>
        <Link to="/dashboard" className="p-2 hover:bg-zinc-100 rounded-full transition-colors">
          <X className="w-6 h-6 text-zinc-400" />
        </Link>
      </header>
      <div className="flex-1 overflow-y-auto py-8 space-y-8 px-4">
        {chatHistory.map((msg, idx) => (
          <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[80%] p-6 rounded-2xl text-lg leading-relaxed ${
              msg.role === 'user' ? 'bg-black text-white rounded-br-none' : 'bg-white border border-zinc-200 rounded-bl-none shadow-sm'
            }`}>
              <p>{msg.text}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="sticky bottom-6 py-4 bg-zinc-50/80 backdrop-blur-sm flex items-center justify-center">
        <button onClick={() => setIsRecording(!isRecording)} className={`w-20 h-20 rounded-full flex items-center justify-center transition-all ${isRecording ? 'bg-red-500 text-white' : 'bg-black text-white shadow-xl'}`}>
          <Mic className="w-8 h-8" />
        </button>
      </div>
    </div>
  );
};
export default LessonExperience;
