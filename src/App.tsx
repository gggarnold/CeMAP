import { Routes, Route, Navigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import BottomNav from './components/BottomNav'
import Dashboard from './pages/Dashboard'
import Learn from './pages/Learn'
import LessonView from './pages/LessonView'
import Flashcards from './pages/Flashcards'
import FlashcardStudy from './pages/FlashcardStudy'
import Practice from './pages/Practice'
import QuizRunner from './pages/QuizRunner'
import MockHub from './pages/MockHub'
import MockExamRunner from './pages/MockExamRunner'
import MockResults from './pages/MockResults'
import More from './pages/More'
import Calculations from './pages/Calculations'
import Glossary from './pages/Glossary'
import Planner from './pages/Planner'
import Analytics from './pages/Analytics'
import Settings from './pages/Settings'
import Coverage from './pages/Coverage'
import { getSettings } from './db/db'

export default function App() {
  const [ready, setReady] = useState(false)

  useEffect(() => {
    (async () => {
      const s = await getSettings()
      applyTheme(s.theme)
      document.documentElement.setAttribute('data-textsize', s.textSize)
      setReady(true)
    })()
  }, [])

  if (!ready) return null

  return (
    <div className="app-shell">
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/learn" element={<Learn />} />
        <Route path="/learn/:module/:unit/:topic" element={<LessonView />} />
        <Route path="/flashcards" element={<Flashcards />} />
        <Route path="/flashcards/study" element={<FlashcardStudy />} />
        <Route path="/practice" element={<Practice />} />
        <Route path="/practice/quiz" element={<QuizRunner />} />
        <Route path="/mock" element={<MockHub />} />
        <Route path="/mock/:examId" element={<MockExamRunner />} />
        <Route path="/mock/:examId/results/:attemptId" element={<MockResults />} />
        <Route path="/calculations" element={<Calculations />} />
        <Route path="/glossary" element={<Glossary />} />
        <Route path="/planner" element={<Planner />} />
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/settings" element={<Settings onThemeChange={applyTheme} />} />
        <Route path="/coverage" element={<Coverage />} />
        <Route path="/more" element={<More />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <BottomNav />
    </div>
  )
}

export function applyTheme(theme: 'light' | 'dark' | 'system') {
  let resolved = theme
  if (theme === 'system') {
    resolved = window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark'
  }
  document.documentElement.setAttribute('data-theme', resolved)
}
