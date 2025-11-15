import React, { useState } from 'react';
import { Sparkles, Plus, Trash2, Check, Edit2 } from 'lucide-react';

const AIQuizCreator = () => {
  const [step, setStep] = useState('input');
  const [generating, setGenerating] = useState(false);
  const [quizInput, setQuizInput] = useState({ topic: '', level: 'intermediate', questionCount: 5 });
  const [generatedQuiz, setGeneratedQuiz] = useState(null);

  const generateQuiz = () => {
    setGenerating(true);
    setTimeout(() => {
      setGeneratedQuiz({
        title: `${quizInput.topic} Assessment`,
        questions: [
          { id: 1, type: 'multiple-choice', question: 'Generated Question 1...?' },
          { id: 2, type: 'fill-blank', question: 'Generated Question 2...?' },
        ]
      });
      setGenerating(false);
      setStep('review');
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-zinc-50 py-16 px-8">
      {step === 'input' && (
        <div className="max-w-4xl mx-auto">
          <h1 className="text-6xl font-serif mb-4">Create a Quiz</h1>
          <p className="text-xl text-zinc-500 font-light mb-8">Describe what you want to assess.</p>
          <div className="bg-white border border-zinc-200 rounded-sm p-8 mb-8">
            <label className="block text-sm font-medium mb-3">Topic</label>
            <input
              type="text"
              value={quizInput.topic}
              onChange={(e) => setQuizInput({...quizInput, topic: e.target.value})}
              placeholder="e.g., Present Perfect Tense"
              className="w-full px-6 py-4 text-xl font-light border-2 border-zinc-200 rounded-sm"
            />
          </div>
          <button onClick={generateQuiz} disabled={!quizInput.topic} className="w-full px-8 py-6 bg-black text-white text-lg font-medium rounded-sm">
            Generate Quiz with AI
          </button>
        </div>
      )}
      {generating && (
        <div className="max-w-4xl mx-auto text-center py-32">
          <Sparkles size={64} className="mx-auto text-purple-500 animate-pulse" />
          <h2 className="text-5xl font-serif mb-6">Creating your quiz...</h2>
        </div>
      )}
      {step === 'review' && !generating && (
        <div className="max-w-5xl mx-auto">
          <h1 className="text-5xl font-serif mb-2">{generatedQuiz.title}</h1>
          <div className="space-y-6 mt-8">
            {generatedQuiz.questions.map((q, idx) => (
              <div key={q.id} className="bg-white border border-zinc-200 rounded-sm p-8">
                <h3 className="text-2xl font-light">{idx + 1}. {q.question}</h3>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
export default AIQuizCreator;
