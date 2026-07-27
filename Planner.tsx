import { useEffect, useState, type ChangeEvent } from 'react'
import TopBar from '../components/TopBar'
import { db, getSettings } from '../db/db'
import type { AppSettings } from '../db/db'
import { exportProgressJSON, importProgressJSON, resetAllProgress, downloadTextFile, exportBookmarkedAndIncorrectAsText } from '../lib/storage'
import { getQuestionById } from '../data/allQuestions'

export default function Settings({ onThemeChange }: { onThemeChange: (t: AppSettings['theme']) => void }) {
  const [settings, setSettings] = useState<AppSettings | null>(null)
  const [message, setMessage] = useState('')
  const [confirmReset, setConfirmReset] = useState(false)

  useEffect(() => { getSettings().then(setSettings) }, [])

  async function update(patch: Partial<AppSettings>) {
    if (!settings) return
    const next = { ...settings, ...patch }
    setSettings(next)
    await db.appSettings.put(next)
    if (patch.theme) onThemeChange(patch.theme)
    if (patch.textSize) document.documentElement.setAttribute('data-textsize', patch.textSize)
  }

  async function doExport() {
    const json = await exportProgressJSON()
    downloadTextFile(`cemap-progress-${new Date().toISOString().slice(0, 10)}.json`, json)
    setMessage('Progress exported.')
  }

  async function doImport(e: ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0]
    if (!file) return
    const text = await file.text()
    await importProgressJSON(text)
    setMessage('Progress imported.')
  }

  async function doReset() {
    await resetAllProgress()
    setConfirmReset(false)
    setMessage('All progress has been reset.')
  }

  async function exportPrintable() {
    const bookmarks = await db.bookmarks.toArray()
    const attempts = await db.questionAttempts.toArray()
    const lastByQ = new Map<string, boolean>()
    for (const a of attempts.sort((x, y) => x.timestamp - y.timestamp)) lastByQ.set(a.questionId, a.correct)
    const incorrectIds = [...lastByQ.entries()].filter(([, ok]) => !ok).map(([id]) => id)

    const bq = bookmarks.map(b => getQuestionById(b.questionId)).filter((q): q is NonNullable<typeof q> => !!q)
    const iq = incorrectIds.map(id => getQuestionById(id)).filter((q): q is NonNullable<typeof q> => !!q)

    const text = await exportBookmarkedAndIncorrectAsText(bq, iq)
    downloadTextFile(`cemap-bookmarked-incorrect-${new Date().toISOString().slice(0, 10)}.txt`, text, 'text/plain')
    setMessage('Printable question list exported.')
  }

  if (!settings) return <div className="page"><TopBar title="Settings" back /></div>

  return (
    <div className="page">
      <TopBar title="Settings" back />

      {message && <div className="datesensitive-banner" style={{ color: 'var(--success)', borderColor: 'var(--success)', background: 'color-mix(in srgb, var(--success) 12%, transparent)' }}>{message}</div>}

      <div className="section-title">Appearance</div>
      <div className="card">
        <div style={{ fontSize: '0.8rem', marginBottom: 6 }}>Theme</div>
        <div style={{ display: 'flex', gap: 8, marginBottom: 14 }}>
          {(['light', 'dark', 'system'] as const).map(t => (
            <button key={t} className={`pill ${settings.theme === t ? 'pill-success' : ''}`} onClick={() => update({ theme: t })}>{t}</button>
          ))}
        </div>
        <div style={{ fontSize: '0.8rem', marginBottom: 6 }}>Text size</div>
        <div style={{ display: 'flex', gap: 8 }}>
          {(['normal', 'large', 'xlarge'] as const).map(t => (
            <button key={t} className={`pill ${settings.textSize === t ? 'pill-success' : ''}`} onClick={() => update({ textSize: t })}>{t}</button>
          ))}
        </div>
      </div>

      <div className="section-title">Feedback</div>
      <div className="card">
        <label style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 10 }}>
          Sound effects
          <input type="checkbox" checked={settings.soundEffects} onChange={e => update({ soundEffects: e.target.checked })} />
        </label>
        <label style={{ display: 'flex', justifyContent: 'space-between' }}>
          Haptic feedback (where supported)
          <input type="checkbox" checked={settings.haptics} onChange={e => update({ haptics: e.target.checked })} />
        </label>
      </div>

      <div className="section-title">Daily targets</div>
      <div className="card">
        <label style={{ display: 'block', fontSize: '0.8rem', marginBottom: 10 }}>
          Daily question target: {settings.dailyQuestionTarget}
          <input type="range" min={5} max={50} step={5} value={settings.dailyQuestionTarget} onChange={e => update({ dailyQuestionTarget: Number(e.target.value) })} style={{ width: '100%' }} />
        </label>
        <label style={{ display: 'block', fontSize: '0.8rem' }}>
          Daily study minutes target: {settings.dailyStudyMinutesTarget}
          <input type="range" min={10} max={120} step={10} value={settings.dailyStudyMinutesTarget} onChange={e => update({ dailyStudyMinutesTarget: Number(e.target.value) })} style={{ width: '100%' }} />
        </label>
      </div>

      <div className="section-title">Data</div>
      <div className="card">
        <button className="btn btn-secondary" onClick={doExport}>Export progress as JSON</button>
        <label className="btn btn-secondary" style={{ marginTop: 10, display: 'flex' }}>
          Import progress from JSON
          <input type="file" accept="application/json" onChange={doImport} style={{ display: 'none' }} />
        </label>
        <button className="btn btn-secondary" style={{ marginTop: 10 }} onClick={exportPrintable}>Export bookmarked/incorrect (printable)</button>
      </div>

      <div className="section-title">Danger zone</div>
      <div className="card">
        {!confirmReset
          ? <button className="btn btn-danger" onClick={() => setConfirmReset(true)}>Reset all progress</button>
          : (
            <div>
              <p style={{ fontSize: '0.85rem' }}>This permanently deletes all local progress. This cannot be undone. Are you sure?</p>
              <div className="grid-2" style={{ gap: 8 }}>
                <button className="btn btn-secondary" onClick={() => setConfirmReset(false)}>Cancel</button>
                <button className="btn btn-danger" onClick={doReset}>Yes, reset everything</button>
              </div>
            </div>
          )}
      </div>
    </div>
  )
}
