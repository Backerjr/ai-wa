import { ArrowRight, MessageCircle, Headphones, Sparkles } from 'lucide-react'

const features = [
  {
    icon: MessageCircle,
    title: 'Conversational AI',
    description: 'Practice real dialogues with subtle feedback tuned to local cadence and slang.'
  },
  {
    icon: Headphones,
    title: 'Shadow Sessions',
    description: 'Echo native speakers line-by-line to internalize rhythm, pauses, and tone.'
  },
  {
    icon: Sparkles,
    title: 'Editorial Curriculum',
    description: 'Weekly missions curated by linguists blending storytelling with actionable drills.'
  }
]

function Landing() {
  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900">
      <header className="relative overflow-hidden border-b border-zinc-200 bg-white">
        <div className="mx-auto flex min-h-[60vh] max-w-6xl flex-col justify-between gap-16 px-6 py-20 md:py-28">
          <div className="flex flex-col gap-10 md:max-w-3xl">
            <span className="text-xs uppercase tracking-[0.25em] text-zinc-400">RozmoWA Beta</span>
            <h1 className="text-4xl font-serif leading-tight md:text-6xl">
              Speak like a local, not a textbook.
            </h1>
            <p className="text-base text-zinc-500 md:text-lg">
              Editorial design meets AI coaching. RozmoWA guides you through immersive missions that help you
              internalize the spaces between words and the confidence beneath them.
            </p>
          </div>
          <div className="flex flex-col gap-4 text-sm md:flex-row md:items-center md:gap-6">
            <button className="inline-flex items-center justify-center gap-3 rounded-sm border border-zinc-900 bg-zinc-900 px-8 py-4 text-xs font-medium uppercase tracking-[0.2em] text-white transition-colors hover:bg-zinc-800">
              Start Beta
              <ArrowRight className="h-4 w-4" />
            </button>
            <a
              href="#curriculum"
              className="inline-flex items-center gap-3 text-xs font-medium uppercase tracking-[0.2em] text-zinc-500 transition-colors hover:text-zinc-900"
              aria-label="Scroll to the curriculum section below"
              title="Scroll to the curriculum section below"
            >
              Preview the curriculum
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-6 py-20" id="curriculum">
        <div className="grid gap-10 md:grid-cols-3 md:gap-12">
          {features.map(feature => (
            <article
              key={feature.title}
              className="flex flex-col gap-6 rounded-sm border border-zinc-200 bg-white p-8 transition-all hover:border-zinc-900"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full border border-zinc-900 bg-zinc-900 text-white">
                <feature.icon className="h-5 w-5" />
              </div>
              <h2 className="text-2xl font-serif">{feature.title}</h2>
              <p className="text-sm text-zinc-500">{feature.description}</p>
            </article>
          ))}
        </div>
      </main>
    </div>
  )
}

export default Landing
