import { useNavigate } from 'react-router-dom'
import TopBar from '../components/TopBar'

const items = [
  { to: '/calculations', icon: '🧮', label: 'Calculations', desc: 'Formulas and interactive practice' },
  { to: '/glossary', icon: '📖', label: 'Glossary', desc: 'Searchable term reference' },
  { to: '/planner', icon: '🗓️', label: 'Revision Planner', desc: 'Build a daily study plan' },
  { to: '/analytics', icon: '📊', label: 'Analytics', desc: 'Accuracy, streaks and readiness' },
  { to: '/coverage', icon: '📋', label: 'Content Coverage', desc: 'What\u2019s built vs still pending' },
  { to: '/settings', icon: '⚙️', label: 'Settings', desc: 'Theme, targets, data export/import' }
]

export default function More() {
  const navigate = useNavigate()
  return (
    <div className="page">
      <TopBar title="More" />
      <div style={{ marginTop: 16 }}>
        {items.map(item => (
          <button key={item.to} className="card card-tap" style={{ display: 'flex', alignItems: 'center', gap: 12, background: 'var(--card)', border: '1px solid var(--card-border)', marginBottom: 10 }}
            onClick={() => navigate(item.to)}>
            <span style={{ fontSize: '1.4rem' }}>{item.icon}</span>
            <div>
              <div style={{ fontWeight: 600 }}>{item.label}</div>
              <div style={{ fontSize: '0.75rem', color: 'var(--text-dim)' }}>{item.desc}</div>
            </div>
          </button>
        ))}
      </div>
    </div>
  )
}
