import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AIQuizCreator from './teacher/AIQuizCreator.tsx';

// Simple landing page component
function Landing() {
  return (
    <div className="min-h-screen bg-zinc-50 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-serif mb-6">AI-WA</h1>
        <p className="text-xl text-zinc-600 mb-8">AI-Powered English Learning Platform</p>
        <a 
          href="/teacher/create/quiz" 
          className="px-8 py-4 bg-black text-white rounded-sm hover:bg-zinc-800 transition-all inline-block"
        >
          Try AI Quiz Generator
        </a>
      </div>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Landing />} />
        
        {/* Teacher Routes - AI Quiz Generator */}
        <Route path="/teacher/create/quiz" element={<AIQuizCreator />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
