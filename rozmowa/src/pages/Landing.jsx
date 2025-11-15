import React from 'react';
import { ArrowRight, Globe, Zap, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

const Landing = () => (
  <div className="flex flex-col min-h-screen bg-white">
    <header className="flex-1 flex flex-col justify-center px-8 pt-20 pb-32 max-w-7xl mx-auto w-full">
      <div className="max-w-4xl">
        <h1 className="text-7xl md:text-9xl font-serif italic tracking-tighter mb-12 leading-[0.9]">
          Speak like a local, <br/> not a textbook.
        </h1>
        <p className="text-2xl md:text-3xl text-zinc-400 font-light max-w-2xl leading-relaxed mb-16">
          RozmoWA uses high-fidelity audio and cultural context to teach you the English that isn't in the books.
        </p>
        <div className="flex flex-col sm:flex-row gap-6">
          <Link to="/dashboard" className="px-10 py-5 bg-black text-white text-lg font-medium rounded-sm hover:bg-zinc-800 transition-all flex items-center justify-center gap-3 group">
            Start Beta Access 
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </header>
  </div>
);
export default Landing;
