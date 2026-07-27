export default function ProgressRing({ percent, label }: { percent: number; label: string }) {
  const value = Math.max(0, Math.min(100, percent))
  return (
    <div className="progress-ring" style={{ background: `conic-gradient(var(--accent) ${value * 3.6}deg, var(--card-border) 0)` }}>
      <div className="progress-ring-inner">
        <strong>{value}%</strong>
        <span>{label}</span>
      </div>
    </div>
  )
}
