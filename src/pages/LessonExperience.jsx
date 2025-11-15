import { Mic, Sparkles, Clock, PauseCircle } from 'lucide-react'

const conversation = [
  {
    id: 1,
    role: 'system',
    name: 'Rozmo Tutor',
    timestamp: '00:00',
    message: 'Let’s practice asking for directions to a subway station. Ready when you are!'
  },
  {
    id: 2,
    role: 'user',
    name: 'You',
    timestamp: '00:12',
    message: 'Hello! Could you tell me how to get to the Montague Street station?'
  },
  {
    id: 3,
    role: 'system',
    name: 'Rozmo Tutor',
    timestamp: '00:18',
    message: 'Great opener. Try softening the request with a phrase like “Would you mind…?”.'
  },
  {
    id: 4,
    role: 'user',
    name: 'You',
    timestamp: '00:32',
    message: 'Hi! Would you mind pointing me to the Montague Street station?'
  },
  {
    id: 5,
    role: 'system',
    name: 'Rozmo Tutor',
    timestamp: '00:40',
    message: 'Much better. Listen for this reply and echo the cadence.'
  }
]

function LessonExperience() {
  return (
    <div className="flex min-h-screen flex-col bg-zinc-50">
      <header className="border-b border-zinc-200 bg-white px-6 py-6 md:px-12">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-zinc-400">Lesson 07</p>
            <h1 className="mt-2 text-3xl font-serif text-zinc-900 md:text-4xl">Find the rhythm in asking directions</h1>
          </div>
          <div className="flex items-center gap-6 text-sm text-zinc-500">
            <span className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              08:24 remaining
            </span>
            <span className="hidden items-center gap-2 md:flex">
              <Sparkles className="h-4 w-4" />
              Shadow Mode
            </span>
            <button
              className="inline-flex items-center gap-2 rounded-sm border border-zinc-200 px-4 py-2 text-xs font-medium uppercase tracking-[0.2em] text-zinc-500 transition-colors hover:border-zinc-900 hover:text-zinc-900"
              aria-label="Pause the current lesson"
            >
              <PauseCircle className="h-4 w-4" />
              Pause
            </button>
          </div>
        </div>
      </header>

      <main className="flex-1 overflow-y-auto px-4 py-10 md:px-12">
        <div className="mx-auto flex max-w-2xl flex-col gap-6">
          {conversation.map(turn => (
            <div key={turn.id} className={`flex ${turn.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div
                className={`max-w-[80%] rounded-2xl border px-5 py-4 text-sm leading-relaxed md:text-base ${
                  turn.role === 'user'
                    ? 'rounded-br-none border-zinc-900 bg-zinc-900 text-white'
                    : 'rounded-bl-none border-zinc-200 bg-white text-zinc-900'
                }`}
              >
                <div className="mb-2 flex items-center justify-between text-xs uppercase tracking-[0.2em] text-zinc-400">
                  <span>{turn.name}</span>
                  <span>{turn.timestamp}</span>
                </div>
                <p>{turn.message}</p>
              </div>
            </div>
          ))}
        </div>
      </main>

      <footer className="sticky bottom-0 border-t border-zinc-200 bg-white px-6 py-6 md:px-12">
        <div className="mx-auto flex max-w-2xl items-center justify-between gap-4">
          <div className="flex-1 text-xs text-zinc-500">
            Hold to speak. Release to send your line.
          </div>
          <button className="inline-flex h-14 w-14 items-center justify-center rounded-full border border-zinc-900 bg-zinc-900 text-white transition-transform hover:scale-105">
            <Mic className="h-6 w-6" />
          </button>
        </div>
      </footer>
    </div>
  )
}

export default LessonExperience
