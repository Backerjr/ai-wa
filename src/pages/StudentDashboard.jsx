import { Flame, ArrowRight, PlayCircle, Clock } from 'lucide-react'

const recentLessons = [
  {
    id: 1,
    title: 'Negotiating a Lease',
    category: 'Real Life',
    duration: '12 min',
    status: 'Continue'
  },
  {
    id: 2,
    title: 'Subtle Compliments',
    category: 'Social',
    duration: '8 min',
    status: 'Review'
  },
  {
    id: 3,
    title: 'Ordering Coffee',
    category: 'Everyday',
    duration: '5 min',
    status: 'Start'
  },
  {
    id: 4,
    title: 'Colleague Check-ins',
    category: 'Workplace',
    duration: '10 min',
    status: 'Continue'
  }
]

const missions = [
  {
    title: 'Find the rhythm in pauses',
    description: 'Listen for natural breaks and mimic how locals breathe between sentences.',
    action: 'Start Mission'
  }
]

function StudentDashboard() {
  const currentMission = missions[0]

  return (
    <div className="min-h-screen bg-zinc-50 pb-24">
      <header className="px-6 pt-10 pb-12 md:px-12">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-zinc-400">Current Mission</p>
            <h1 className="mt-4 text-4xl font-serif leading-tight text-zinc-900 md:text-6xl">
              {currentMission.title}
            </h1>
            <p className="mt-4 max-w-2xl text-sm text-zinc-500 md:text-base">
              {currentMission.description}
            </p>
          </div>
          <button className="inline-flex items-center gap-3 self-start rounded-sm border border-zinc-900 px-6 py-3 text-sm font-medium uppercase tracking-[0.2em] transition-colors hover:bg-zinc-900 hover:text-white">
            {currentMission.action}
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </header>

      <section id="library" className="px-6 md:px-12">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-serif text-zinc-900 md:text-2xl">Recent Lessons</h2>
          <a
            href="#library"
            className="hidden items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-zinc-500 hover:text-zinc-900 md:inline-flex"
          >
            View Library
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
        <div className="mt-6 overflow-x-auto pb-4">
          <div className="flex gap-4 md:gap-6">
            {recentLessons.map(lesson => (
              <article
                key={lesson.id}
                className="min-w-[260px] flex-1 rounded-sm border border-zinc-200 bg-white p-6 transition-all hover:border-zinc-900"
              >
                <div className="flex items-center justify-between text-xs uppercase tracking-[0.2em] text-zinc-400">
                  <span>{lesson.category}</span>
                  <div className="flex items-center gap-2 text-zinc-500">
                    <Clock className="h-4 w-4" />
                    <span>{lesson.duration}</span>
                  </div>
                </div>
                <h3 className="mt-4 text-2xl font-serif text-zinc-900">{lesson.title}</h3>
                <button className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-zinc-900 transition-colors hover:text-zinc-600">
                  <PlayCircle className="h-5 w-5" />
                  {lesson.status}
                </button>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mt-12 px-6 md:px-12">
        <div className="rounded-sm border border-zinc-200 bg-white p-6 md:flex md:items-center md:justify-between">
          <div className="flex items-center gap-4">
            <div className="flex h-14 w-14 items-center justify-center rounded-full border border-zinc-900">
              <Flame className="h-6 w-6 text-zinc-900" />
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-zinc-400">Daily Streak</p>
              <div className="mt-1 flex items-baseline gap-2">
                <span className="text-4xl font-light text-zinc-900">14</span>
                <span className="text-sm text-zinc-500">days</span>
              </div>
            </div>
          </div>
          <button className="mt-4 inline-flex items-center gap-3 text-xs font-medium uppercase tracking-[0.2em] text-zinc-500 transition-colors hover:text-zinc-900 md:mt-0">
            Keep it alive
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </section>
    </div>
  )
}

export default StudentDashboard
