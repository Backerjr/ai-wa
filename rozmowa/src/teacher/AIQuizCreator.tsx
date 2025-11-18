import React, { useState } from 'react';
import { ArrowRight, Check, Sparkles } from 'lucide-react';
import { generateQuiz, validateQuizInput, type Quiz } from '../services/ai';

/**
 * AI Quiz Creator - The Generative Studio
 * 
 * A sophisticated, minimal interface for teachers to create quizzes.
 * Inspired by editorial design - feels like writing an article, not filling a form.
 */

type ViewState = 'input' | 'generating' | 'results';

const AIQuizCreator: React.FC = () => {
  const [viewState, setViewState] = useState<ViewState>('input');
  const [topic, setTopic] = useState('');
  const [difficulty, setDifficulty] = useState<'beginner' | 'intermediate' | 'advanced'>('intermediate');
  const [generatedQuiz, setGeneratedQuiz] = useState<Quiz | null>(null);
  const [error, setError] = useState<string>('');

  const handleGenerate = async () => {
    // Validate input
    const validation = validateQuizInput(topic);
    if (!validation.valid) {
      setError(validation.error || 'Invalid input');
      return;
    }

    setError('');
    setViewState('generating');

    try {
      const quiz = await generateQuiz(topic, difficulty);
      setGeneratedQuiz(quiz);
      setViewState('results');
    } catch (err) {
      setError('Failed to generate quiz. Please try again.');
      setViewState('input');
    }
  };

  const handleExport = () => {
    // In production, this would save to database or export as file
    console.log('Exporting quiz:', generatedQuiz);
    alert('Quiz saved to your class library! ✓');
  };

  const handleStartOver = () => {
    setViewState('input');
    setTopic('');
    setGeneratedQuiz(null);
    setError('');
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Input View */}
      {viewState === 'input' && (
        <div className="max-w-4xl mx-auto px-8 py-24">
          {/* Header */}
          <div className="mb-16">
            <h1 className="text-7xl font-serif mb-6 leading-tight">
              What should your<br />students master today?
            </h1>
            <p className="text-2xl text-zinc-500 font-light leading-relaxed">
              Describe a topic, concept, or skill. Our AI will craft a thoughtful assessment in moments.
            </p>
          </div>

          {/* Main Input - Single elegant field */}
          <div className="mb-12">
            <input
              type="text"
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleGenerate()}
              placeholder="e.g., The Present Perfect Tense, Coffee Brewing Methods, Climate Change..."
              className="w-full text-3xl font-light py-6 border-b-2 border-zinc-200 focus:border-black outline-none transition-all placeholder:text-zinc-300"
              autoFocus
            />
            {error && (
              <p className="mt-4 text-sm text-red-600">{error}</p>
            )}
          </div>

          {/* Difficulty Selection - Minimal radio buttons */}
          <div className="mb-16">
            <p className="text-sm uppercase tracking-widest text-zinc-400 mb-6">Difficulty Level</p>
            <div className="flex gap-4">
              {(['beginner', 'intermediate', 'advanced'] as const).map((level) => (
                <button
                  key={level}
                  onClick={() => setDifficulty(level)}
                  className={`
                    px-8 py-4 rounded-sm transition-all font-medium
                    ${difficulty === level 
                      ? 'bg-black text-white' 
                      : 'bg-zinc-50 text-zinc-600 hover:bg-zinc-100'
                    }
                  `}
                >
                  {level.charAt(0).toUpperCase() + level.slice(1)}
                </button>
              ))}
            </div>
          </div>

          {/* Generate Button */}
          <button
            onClick={handleGenerate}
            disabled={!topic.trim()}
            className="group w-full py-8 bg-black text-white text-xl font-medium rounded-sm hover:bg-zinc-900 transition-all disabled:bg-zinc-200 disabled:text-zinc-400 disabled:cursor-not-allowed flex items-center justify-center gap-3"
          >
            <span>Generate Quiz</span>
            <ArrowRight className="group-hover:translate-x-1 transition-transform" size={24} />
          </button>
        </div>
      )}

      {/* Generating View - Sophisticated loading state */}
      {viewState === 'generating' && (
        <div className="max-w-4xl mx-auto px-8 py-32 text-center">
          <div className="mb-12">
            <Sparkles 
              size={80} 
              className="mx-auto text-black animate-pulse" 
              strokeWidth={1.5}
            />
          </div>
          
          <h2 className="text-6xl font-serif mb-6">
            Crafting your quiz...
          </h2>
          
          <p className="text-xl text-zinc-500 font-light mb-12">
            Analyzing topic, selecting questions, calibrating difficulty
          </p>

          {/* Minimalist progress indicator */}
          <div className="max-w-md mx-auto">
            <div className="h-0.5 bg-zinc-100 rounded-full overflow-hidden">
              <div className="h-full bg-black animate-[progress_2s_ease-in-out]" 
                   style={{ 
                     animation: 'progress 2.5s ease-in-out forwards',
                   }} 
              />
            </div>
          </div>
        </div>
      )}

      {/* Results View - Masonry-style grid */}
      {viewState === 'results' && generatedQuiz && (
        <div className="max-w-6xl mx-auto px-8 py-24">
          {/* Header */}
          <div className="mb-16">
            <div className="flex items-start justify-between mb-6">
              <div>
                <h1 className="text-6xl font-serif mb-4 leading-tight">
                  {generatedQuiz.topic}
                </h1>
                <p className="text-xl text-zinc-500 font-light">
                  {generatedQuiz.difficulty.charAt(0).toUpperCase() + generatedQuiz.difficulty.slice(1)} Level · {generatedQuiz.questions.length} Questions
                </p>
              </div>
              <button
                onClick={handleStartOver}
                className="text-zinc-500 hover:text-black transition-colors font-medium"
              >
                Start Over
              </button>
            </div>
          </div>

          {/* Question Cards - Masonry-style grid */}
          <div className="grid grid-cols-1 gap-8 mb-16">
            {generatedQuiz.questions.map((question, index) => (
              <div
                key={question.id}
                className="border border-zinc-200 rounded-sm p-8 hover:border-black transition-all group"
              >
                {/* Question Number */}
                <div className="text-xs uppercase tracking-widest text-zinc-400 mb-4">
                  Question {index + 1} of {generatedQuiz.questions.length}
                </div>

                {/* Question Text */}
                <h3 className="text-2xl font-serif mb-8 leading-relaxed">
                  {question.question}
                </h3>

                {/* Options */}
                <div className="space-y-3 mb-8">
                  {question.options.map((option, optionIndex) => (
                    <div
                      key={optionIndex}
                      className={`
                        p-4 rounded-sm border-2 transition-all
                        ${optionIndex === question.correctAnswer
                          ? 'border-black bg-zinc-50'
                          : 'border-zinc-200'
                        }
                      `}
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-light">{option}</span>
                        {optionIndex === question.correctAnswer && (
                          <Check size={20} className="text-black" />
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Explanation */}
                <div className="pt-6 border-t border-zinc-100">
                  <p className="text-sm uppercase tracking-widest text-zinc-400 mb-2">
                    Explanation
                  </p>
                  <p className="text-zinc-600 leading-relaxed">
                    {question.explanation}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Export Button */}
          <div className="border-t border-zinc-200 pt-12">
            <button
              onClick={handleExport}
              className="w-full py-8 bg-black text-white text-xl font-medium rounded-sm hover:bg-zinc-900 transition-all flex items-center justify-center gap-3"
            >
              <Check size={24} />
              <span>Export to Class Library</span>
            </button>
          </div>
        </div>
      )}

      {/* Custom animation for progress bar */}
      <style>{`
        @keyframes progress {
          0% { width: 0%; }
          100% { width: 100%; }
        }
      `}</style>
    </div>
  );
};

export default AIQuizCreator;
