import { useEffect, useMemo, useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import TopBar from '../components/TopBar'
import { allQuestions } from '../data/allQuestions'
import { db } from '../db/db'
import { shuffleQuestion, isCorrectAnswer, type ShuffledQuestion } from '../lib/quiz'
import { getAccuracyByTopic } from '../lib/progress'
import type { Question } from '../data/types'

function shuffleArray<T>(arr: T[]): T[] {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

export default function QuizRunner() {
  const [params] = useSearchParams()
  const navigate = useNavigate()
  const mode = params.get('mode') ?? 'quick10'

  const [pool, setPool] = useState<Question[] | null>(null)
  const [questions, setQuestions] = useState<ShuffledQuestion[]>([])
  const [index, setIndex] = useState(0)
  const [selected, setSelected] = useState<number[]>([])
  const [answered, setAnswered] = useState(false)
  const [score, setScore] = useState(0)
  const [bookmarked, setBookmarked] = useState<Set<string>>(new Set())
  const [flaggedMsg, setFlaggedMsg] = useState(false)

  useEffect(() => {
    (async () => {
      let base: Question[] = []
      const moduleP = params.get('module')
      const unitP = params.get('unit')
      const topicP = params.get('topic')

      if (mode === 'quick10' || mode === 'random') {
        base = shuffleArray(allQuestions).slice(0, mode === 'quick10' ? 10 : 20)
      } else if (mode === 'topic') {
        base = allQuestions.filter(q => q.module === moduleP && q.unitKey === unitP && q.topicKey === topicP)
      } else if (mode === 'bookmarked') {
        const marks = await db.bookmarks.toArray()
        const ids = new Set(marks.map(m => m.questionId))
        base = allQuestions.filter(q => ids.has(q.id))
      } else if (mode === 'incorrect') {
        const attempts = await db.questionAttempts.toArray()
        const lastResult = new Map<string, boolean>()
        for (const a of attempts.sort((x, y) => x.timestamp - y.timestamp)) lastResult.set(a.questionId, a.correct)
        const incorrectIds = new Set([...lastResult.entries()].filter(([, ok]) => !ok).map(([id]) => id))
        base = allQuestions.filter(q => incorrectIds.has(q.id))
      } else if (mode === 'weak') {
        const weak = (await getAccuracyByTopic()).filter(t => t.attempts >= 3 && t.accuracy < 60)
        const keys = new Set(weak.map(t => `${t.module}-${t.unitKey}-${t.topicKey}`))
        base = allQuestions.filter(q => keys.has(`${q.module}-${q.unitKey}-${q.topicKey}`))
      }
      setPool(base)
      setQuestions(shuffleArray(base).map(q => shuffleQuestion(q)))
      const marks = await db.bookmarks.toArray()
      setBookmarked(new Set(marks.map(m => m.questionId)))
    })()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mode])

  const current = questions[index]
  const quizTypeForLog: 'quick10' | 'custom' | 'weak-area' | 'bookmarked' | 'incorrect' | 'topic' | 'mock' =
    mode === 'quick10' ? 'quick10' : mode === 'weak' ? 'weak-area' : mode === 'bookmarked' ? 'bookmarked' : mode === 'incorrect' ? 'incorrect' : mode === 'topic' ? 'topic' : 'custom'

  async function submitAnswer() {
    if (!current) return
    const correct = isCorrectAnswer(current, selected)
    setAnswered(true)
    if (correct) setScore(s => s + 1)
    await db.questionAttempts.add({
      questionId: current.id, correct, selectedIndices: selected, timestamp: Date.now(), quizType: quizTypeForLog
    })
  }

  async function toggleBookmark() {
    if (!current) return
    if (bookmarked.has(current.id)) {
      await db.bookmarks.delete(current.id)
      setBookmarked(s => { const n = new Set(s); n.delete(current.id); return n })
    } else {
      await db.bookmarks.add({ questionId: current.id, createdAt: Date.now() })
      setBookmarked(s => new Set(s).add(current.id))
    }
  }

  async function flagQuestion() {
    if (!current) return
    await db.flaggedQuestions.put({ questionId: current.id, reason: 'Flagged by user during practice', createdAt: Date.now() })
    setFlaggedMsg(true)
    setTimeout(() => setFlaggedMsg(false), 2000)
  }

  function next() {
    setSelected([])
    setAnswered(false)
    setIndex(i => i + 1)
  }

  function toggleOption(i: number) {
    if (answered) return
    const isMulti = current.correctIndex.length > 1
    if (isMulti) {
      setSelected(s => s.includes(i) ? s.filter(x => x !== i) : [...s, i])
    } else {
      setSelected([i])
    }
  }

  if (pool === null) return <div className="page"><TopBar title="Practice" back /><p>Loading…</p></div>

  if (!questions.length) {
    return (
      <div className="page">
        <TopBar title="Practice" back />
        <div className="card empty-state" style={{ marginTop: 16 }}>No questions match this selection yet.</div>
        <button className="btn btn-secondary" style={{ marginTop: 12 }} onClick={() => navigate('/practice')}>Back to Practice</button>
      </div>
    )
  }

  if (index >= questions.length) {
    const pct = Math.round((score / questions.length) * 100)
    return (
      <div className="page">
        <TopBar title="Quiz complete" back />
        <div className="card" style={{ marginTop: 16, textAlign: 'center' }}>
          <div style={{ fontSize: '2rem', fontWeight: 700 }}>{pct}%</div>
          <p>{score} of {questions.length} correct</p>
        </div>
        <button className="btn btn-primary" style={{ marginTop: 12 }} onClick={() => navigate('/practice')}>Back to Practice</button>
      </div>
    )
  }

  return (
    <div className="page">
      <TopBar title={`Question ${index + 1} of ${questions.length}`} back />
      <div className="progress-track" style={{ marginTop: 12 }}>
        <div className="progress-fill" style={{ width: `${(index / questions.length) * 100}%` }} />
      </div>

      {current.dateSensitive && (
        <div className="datesensitive-banner">⚠️ Involves figures that change each Budget — check current rates before your exam.</div>
      )}

      <div className="card" style={{ marginTop: 12 }}>
        <p style={{ fontWeight: 600, marginTop: 0 }}>{current.text}</p>
        {current.displayOptions.map((opt, i) => {
          const isSelected = selected.includes(i)
          const isCorrectOpt = current.displayCorrectIndex.includes(i)
          let cls = 'option-btn'
          if (answered) cls += isCorrectOpt ? ' correct' : isSelected ? ' incorrect' : ''
          else if (isSelected) cls += ' selected'
          return (
            <button key={i} className={cls} onClick={() => toggleOption(i)}>
              <span className="letter">{String.fromCharCode(65 + i)}</span>
              <span>{opt}</span>
            </button>
          )
        })}
      </div>

      {answered && (
        <div className="card">
          <strong>{isCorrectAnswer(current, selected) ? '✅ Correct' : '❌ Incorrect'}</strong>
          <p style={{ fontSize: '0.9rem' }}>{current.explanation}</p>
          {current.incorrectExplanations && (
            <div style={{ fontSize: '0.82rem', color: 'var(--text-dim)' }}>
              {current.displayOptions.map((option, index) => (
                <p key={index} style={{ margin: '6px 0' }}>
                  <strong>{String.fromCharCode(65 + index)}. {option}</strong>{' — '}
                  {current.incorrectExplanations?.[current.originalIndexOf[index]]}
                </p>
              ))}
            </div>
          )}
          <p style={{ fontSize: '0.72rem', color: 'var(--text-faint)' }}>
            Topic: {current.topicKey} · Source: {current.source} {current.origin === 'original' ? '(from a supplied paper)' : ''}
          </p>
          <div className="grid-2" style={{ gap: 8 }}>
            <button className="btn btn-secondary btn-sm" onClick={toggleBookmark}>{bookmarked.has(current.id) ? '🔖 Bookmarked' : '🔖 Bookmark'}</button>
            <button className="btn btn-secondary btn-sm" onClick={flagQuestion}>{flaggedMsg ? '✓ Flagged' : '🚩 Flag question'}</button>
          </div>
        </div>
      )}

      {!answered
        ? <button className="btn btn-primary" disabled={!selected.length} onClick={submitAnswer}>Submit answer</button>
        : <button className="btn btn-primary" onClick={next}>{index === questions.length - 1 ? 'Finish' : 'Next question'}</button>}
    </div>
  )
}
