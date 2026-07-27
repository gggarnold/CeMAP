import { NavLink } from 'react-router-dom'

const items = [
  ['/', '⌂', 'Home'],
  ['/learn', '▤', 'Learn'],
  ['/flashcards', '◫', 'Cards'],
  ['/practice', '✓', 'Practice'],
  ['/more', '•••', 'More']
] as const

export default function BottomNav() {
  return (
    <nav className="bottom-nav" aria-label="Primary navigation">
      {items.map(([to, icon, label]) => (
        <NavLink key={to} to={to} end={to === '/'} className={({ isActive }) => isActive ? 'active' : ''}>
          <span>{icon}</span><small>{label}</small>
        </NavLink>
      ))}
    </nav>
  )
}
