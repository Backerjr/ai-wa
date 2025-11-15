import React from 'react';

const ProgressView = () => (
  <div className="max-w-3xl mx-auto p-8">
    <h1 className="text-4xl font-serif italic mb-12">Your Growth</h1>
    <div className="space-y-8">
      {['Vocabulary', 'Grammar', 'Pronunciation'].map(skill => (
        <div key={skill}>
          <span className="font-medium text-lg">{skill}</span>
          <div className="h-3 bg-zinc-100 rounded-full overflow-hidden mt-2">
            <div className="h-full bg-black" style={{width: `${Math.random() * 80 + 20}%`}} />
          </div>
        </div>
      ))}
    </div>
  </div>
);
export default ProgressView;
