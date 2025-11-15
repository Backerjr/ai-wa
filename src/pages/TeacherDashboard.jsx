import { ClipboardList, Headphones, ArrowUpRight } from 'lucide-react'

const students = [
  { id: 1, name: 'Amelia Chen', lastActive: '2h ago', fluency: 87 },
  { id: 2, name: 'Luis Romero', lastActive: '35m ago', fluency: 74 },
  { id: 3, name: 'Hana Suzuki', lastActive: '5h ago', fluency: 92 },
  { id: 4, name: 'Jonah Patel', lastActive: 'Yesterday', fluency: 68 }
]

function TeacherDashboard() {
  return (
    <div className="min-h-screen bg-zinc-50 pb-24">
      <header className="border-b border-zinc-200 bg-white px-6 py-10 md:px-12">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-zinc-400">Teacher Overview</p>
            <h1 className="mt-3 text-4xl font-serif text-zinc-900 md:text-5xl">Guide every student’s voice</h1>
            <p className="mt-4 max-w-xl text-sm text-zinc-500 md:text-base">
              Track fluency in real time, assign missions, and surface the nuances that unlock confident speech.
            </p>
          </div>
          <div className="flex gap-3">
            <button
              className="inline-flex items-center gap-3 rounded-sm border border-zinc-900 px-5 py-3 text-xs font-medium uppercase tracking-[0.2em] text-white transition-colors hover:bg-zinc-800 bg-zinc-900"
              aria-label="Assign Homework"
            >
              <ClipboardList className="h-4 w-4" />
              Assign Homework
            </button>
            <button
              className="inline-flex items-center gap-3 rounded-sm border border-zinc-200 px-5 py-3 text-xs font-medium uppercase tracking-[0.2em] text-zinc-500 transition-colors hover:border-zinc-900 hover:text-zinc-900"
              aria-label="Review Audio"
            >
              <Headphones className="h-4 w-4" />
              Review Audio
            </button>
          </div>
        </div>
      </header>

      <main className="px-6 pt-10 md:px-12">
        <section className="rounded-sm border border-zinc-200 bg-white">
          <div className="flex items-center justify-between border-b border-zinc-200 px-6 py-4">
            <h2 className="text-lg font-serif text-zinc-900">Student Progress</h2>
            <button
              className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-zinc-500 transition-colors hover:text-zinc-900"
              aria-label="Export student progress report"
            >
              Export report
              <ArrowUpRight className="h-4 w-4" />
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-zinc-100 text-left">
              <thead>
                <tr className="text-xs uppercase tracking-[0.2em] text-zinc-400">
                  <th className="px-6 py-4 font-medium">Student</th>
                  <th className="px-6 py-4 font-medium">Last Active</th>
                  <th className="px-6 py-4 font-medium">Fluency Score</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-100 text-sm text-zinc-900">
                {students.map(student => (
                  <tr key={student.id} className="transition-colors hover:bg-zinc-50">
                    <td className="px-6 py-4 font-medium">{student.name}</td>
                    <td className="px-6 py-4 text-zinc-500">{student.lastActive}</td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="h-1 w-full max-w-[160px] overflow-hidden rounded-full bg-zinc-100">
                          <div className="h-full bg-zinc-900" style={{ width: `${student.fluency}%` }} />
                        </div>
                        <span className="font-medium">{student.fluency}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </main>
    </div>
  )
}

export default TeacherDashboard
