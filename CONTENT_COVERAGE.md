import { useEffect, useState } from 'react'
import TopBar from '../components/TopBar'
import { db, getPlannerSettings } from '../db/db'
import type { PlannerSettings, PlannerTask } from '../db/db'
import { curriculum } from '../data/curriculum'
import { getAccuracyByTopic } from '../lib/progress'

const MODULES: { key: 'cemap1' | 'cemap2' | 'cemap3'; label: string }[] = [
  { key: 'cemap1', label: 'CeMAP 1' }, { key: 'cemap2', label: 'CeMAP 2' }, { key: 'cemap3', label: 'CeMAP 3' }
]

export default function Planner() {
  const [settings, setSettings] = useState<PlannerSettings | null>(null)
  const [tasks, setTasks] = useState<PlannerTask[]>([])

  useEffect(() => {
    getPlannerSettings().then(setSettings)
    refreshTasks()
  }, [])

  async function refreshTasks() {
    const all = await db.plannerTasks.orderBy('date').toArray()
    setTasks(all.filter(t => t.status !== 'completed').slice(0, 20))
  }

  async function save() {
    if (!settings) return
    await db.plannerSettings.put(settings)
    await generatePlan(settings)
    await refreshTasks()
  }

  async function generatePlan(s: PlannerSettings) {
    await db.plannerTasks.clear()
    const pendingTopics = curriculum.flatMap(u => u.topics).filter(t => s.modules.includes(t.module) && t.status === 'complete')
    const weak = (await getAccuracyByTopic()).filter(t => t.attempts >= 3 && t.accuracy < 60)

    const today = new Date()
    const items: Omit<PlannerTask, 'id'>[] = []
    let day = 0
    for (const topic of pendingTopics) {
      const d = new Date(today); d.setDate(d.getDate() + day)
      items.push({ date: d.toISOString().slice(0, 10), title: `Study: ${topic.title}`, type: 'lesson', refId: topic.topicKey, status: 'pending' })
      day += 1
    }
    for (const w of weak) {
      const d = new Date(today); d.setDate(d.getDate() + day)
      items.push({ date: d.toISOString().slice(0, 10), title: `Weak-area quiz: ${w.topicKey}`, type: 'quiz', refId: w.topicKey, status: 'pending' })
      day += 1
    }
    items.push({ date: today.toISOString().slice(0, 10), title: 'Review flashcards due today', type: 'flashcards', status: 'pending' })

    if (s.examDate) {
      const examD = new Date(s.examDate)
      const daysToExam = Math.round((examD.getTime() - today.getTime()) / 86400000)
      if (daysToExam <= 14 && daysToExam > 0) {
        const mockDay = new Date(today); mockDay.setDate(mockDay.getDate() + Math.max(0, daysToExam - 3))
        items.push({ date: mockDay.toISOString().slice(0, 10), title: 'Sit a full mock exam', type: 'mock', status: 'pending' })
      }
    }

    await db.plannerTasks.bulkAdd(items)
  }

  async function setStatus(id: number | undefined, status: PlannerTask['status']) {
    if (!id) return
    await db.plannerTasks.update(id, { status })
    refreshTasks()
  }

  if (!settings) return <div className="page"><TopBar title="Planner" back /></div>

  return (
    <div className="page">
      <TopBar title="Revision Planner" back />

      <div className="card" style={{ marginTop: 16 }}>
        <label style={{ display: 'block', fontSize: '0.8rem', marginBottom: 8 }}>
          Target exam date
          <input type="date" value={settings.examDate ?? ''} onChange={e => setSettings({ ...settings, examDate: e.target.value })}
            style={{ display: 'block', width: '100%', marginTop: 4, padding: 10, borderRadius: 8, border: '1px solid var(--card-border)', background: 'var(--bg)' }} />
        </label>
        <label style={{ display: 'block', fontSize: '0.8rem', marginBottom: 8 }}>
          Days available per week: {settings.daysPerWeek}
          <input type="range" min={1} max={7} value={settings.daysPerWeek} onChange={e => setSettings({ ...settings, daysPerWeek: Number(e.target.value) })} style={{ width: '100%' }} />
        </label>
        <label style={{ display: 'block', fontSize: '0.8rem', marginBottom: 8 }}>
          Minutes available per day: {settings.minutesPerDay}
          <input type="range" min={10} max={180} step={10} value={settings.minutesPerDay} onChange={e => setSettings({ ...settings, minutesPerDay: Number(e.target.value) })} style={{ width: '100%' }} />
        </label>

        <div style={{ fontSize: '0.8rem', marginBottom: 6 }}>Modules being studied</div>
        <div style={{ display: 'flex', gap: 8, marginBottom: 10 }}>
          {MODULES.map(m => (
            <button key={m.key} className={`pill ${settings.modules.includes(m.key) ? 'pill-success' : ''}`}
              onClick={() => setSettings({ ...settings, modules: settings.modules.includes(m.key) ? settings.modules.filter(x => x !== m.key) : [...settings.modules, m.key] })}>
              {m.label}
            </button>
          ))}
        </div>

        {MODULES.filter(m => settings.modules.includes(m.key)).map(m => (
          <label key={m.key} style={{ display: 'block', fontSize: '0.8rem', marginBottom: 8 }}>
            Confidence in {m.label}: {settings.confidence[m.key] ?? 3}/5
            <input type="range" min={1} max={5} value={settings.confidence[m.key] ?? 3}
              onChange={e => setSettings({ ...settings, confidence: { ...settings.confidence, [m.key]: Number(e.target.value) } })}
              style={{ width: '100%' }} />
          </label>
        ))}

        <button className="btn btn-primary" onClick={save}>Generate my plan</button>
      </div>

      <div className="section-title">Upcoming tasks</div>
      {tasks.length === 0 && <div className="card empty-state">Generate a plan above to see your daily tasks here.</div>}
      {tasks.map(t => (
        <div className="card" key={t.id}>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div>
              <div style={{ fontWeight: 600, fontSize: '0.9rem' }}>{t.title}</div>
              <div style={{ fontSize: '0.72rem', color: 'var(--text-faint)' }}>{t.date}</div>
            </div>
            <span className="pill">{t.type}</span>
          </div>
          <div className="grid-2" style={{ gap: 8, marginTop: 10 }}>
            <button className="btn btn-secondary btn-sm" onClick={() => setStatus(t.id, 'skipped')}>Skip</button>
            <button className="btn btn-primary btn-sm" onClick={() => setStatus(t.id, 'completed')}>Mark done</button>
          </div>
        </div>
      ))}
    </div>
  )
}
