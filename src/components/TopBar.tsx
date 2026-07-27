import { useNavigate } from 'react-router-dom'

export default function TopBar({ title, back = false }: { title: string; back?: boolean }) {
  const navigate = useNavigate()
  return (
    <header className="topbar">
      {back && <button className="icon-btn" aria-label="Go back" onClick={() => navigate(-1)}>‹</button>}
      <h1>{title}</h1>
    </header>
  )
}
