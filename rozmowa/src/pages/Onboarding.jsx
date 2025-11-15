import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';

const Onboarding = () => {
  const [step, setStep] = useState(1);

  return (
    <div className="min-h-screen flex items-center justify-center bg-white p-6">
      <div className="max-w-lg w-full">
        <h1 className="text-4xl font-serif italic mb-4">
          {step === 1 ? "What's your name?" : "What's your goal?"}
        </h1>
        {step === 1 && (
          <input type="text" placeholder="Type your name..." className="w-full text-2xl border-b-2 border-zinc-200 py-2 focus:outline-none focus:border-black" autoFocus />
        )}
        {step === 2 && (
          <div className="space-y-3">
            {['Travel', 'Career', 'Culture'].map(opt => (
              <button key={opt} className="w-full p-4 text-left border border-zinc-200 rounded-sm hover:border-black">
                {opt}
              </button>
            ))}
          </div>
        )}
        <button onClick={() => setStep(2)} className="w-full py-4 bg-black text-white rounded-sm mt-8">
          Continue <ArrowRight className="w-4 h-4 inline" />
        </button>
      </div>
    </div>
  );
};
export default Onboarding;
