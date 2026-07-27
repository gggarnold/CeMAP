import TopBar from '../components/TopBar'
import { curriculum } from '../data/curriculum'
import { mockExams } from '../data/mockExams'

const moduleLabels: Record<string, string> = { cemap1: 'CeMAP 1', cemap2: 'CeMAP 2', cemap3: 'CeMAP 3' }

export default function Coverage() {
  const allTopics = curriculum.flatMap(unit => unit.topics)
  const complete = allTopics.filter(topic => topic.status === 'complete')
  const pending = allTopics.filter(topic => topic.status === 'pending')
  return (
    <div className="page">
      <TopBar title="Content Coverage" back />
      <p style={{ color: 'var(--text-dim)', fontSize: '0.85rem' }}>
        {complete.length} of {allTopics.length} topics currently have full authored content.
      </p>
      <div className="section-title">Fully authored ({complete.length})</div>
      {complete.map(topic => (
        <div className="card" key={`${topic.module}-${topic.unitKey}-${topic.topicKey}`}>
          {moduleLabels[topic.module]} · {topic.title} <span className="pill">{topic.sourcePages}</span>
        </div>
      ))}
      <div className="section-title">Not yet authored ({pending.length})</div>
      {pending.map(topic => (
        <div className="card" key={`${topic.module}-${topic.unitKey}-${topic.topicKey}`}>
          {moduleLabels[topic.module]} · {topic.title} <span className="pill">{topic.sourcePages}</span>
        </div>
      ))}
      <div className="section-title">Mock exams</div>
      <div className="card">{mockExams.length} supplied mock exam(s) are available.</div>
    </div>
  )
}
