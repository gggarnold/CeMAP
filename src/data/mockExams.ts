import type { MockExamMeta } from './types'
import { specimenPaperA } from './specimenPaperA'
import { questions } from './questions'

function questionIds(module: 'cemap1'|'cemap2'|'cemap3', unitKey: string, count: number, offset = 0) {
  const pool = module === 'cemap3'
    ? questions.filter(q => q.module === 'cemap3' || q.module === 'cemap2')
    : questions.filter(q => q.module === module && q.unitKey === unitKey)
  if (pool.length === 0) return []
  return Array.from({ length: Math.min(count, pool.length) }, (_, index) => pool[(index + offset) % pool.length].id)
}

export const mockExams: MockExamMeta[] = [
  {
    id: 'c1-u1-specimen-a',
    module: 'cemap1',
    unitKey: 'unit1',
    title: 'Unit 1 — Specimen Paper A (Original)',
    origin: 'original',
    timeMinutes: 60,
    passMark: 28,
    questionIds: specimenPaperA.map(q => q.id),
    source: 'CeMAP 1, Unit 1 Specimen Paper A, p.203-216 — supplied exam paper, reproduced in full with verified answers.'
  },
  {
    id: 'c3-case-study-1',
    module: 'cemap3',
    unitKey: 'unit1',
    title: 'Case Study 1 — Luke & Jessica (Original)',
    origin: 'original',
    timeMinutes: 20,
    passMark: 7,
    questionIds: ['c3-u1-t1-q1','c3-u1-t1-q2','c3-u1-t1-q3','c3-u1-t1-q4','c3-u1-t1-q5','c3-u1-t1-q6','c3-u1-t1-q7','c3-u1-t1-q8','c3-u1-t1-q9','c3-u1-t1-q10'],
    source: 'CeMAP 2&3, CeMAP 3 Case Study 1, p.237-240 — one full 10-question case study, supplied paper, verified answers.'
  },
  {
    id: 'c1-u1-generated-b', module: 'cemap1', unitKey: 'unit1',
    title: 'Unit 1 - Additional Mock B (PDF-derived)', origin: 'generated',
    timeMinutes: 60, passMark: 28, questionIds: questionIds('cemap1','unit1',40,40),
    source: 'Generated only from CeMAP 1 Unit 1 PDF-derived topic questions.'
  },
  {
    id: 'c1-u2-generated-a', module: 'cemap1', unitKey: 'unit2',
    title: 'Unit 2 - Additional Mock A (PDF-derived)', origin: 'generated',
    timeMinutes: 60, passMark: 28, questionIds: questionIds('cemap1','unit2',40),
    source: 'Generated only from CeMAP 1 Unit 2 PDF-derived questions.'
  },
  {
    id: 'c2-u1-generated-a', module: 'cemap2', unitKey: 'unit1',
    title: 'CeMAP 2 Unit 1 Mock A (PDF-derived)', origin: 'generated',
    timeMinutes: 60, passMark: 35, questionIds: questionIds('cemap2','unit1',50),
    source: 'Generated only from CeMAP 2 Unit 1 PDF-derived questions.'
  },
  {
    id: 'c2-u2-generated-a', module: 'cemap2', unitKey: 'unit2',
    title: 'CeMAP 2 Unit 2 Mock A (PDF-derived)', origin: 'generated',
    timeMinutes: 60, passMark: 28, questionIds: questionIds('cemap2','unit2',40),
    source: 'Generated only from CeMAP 2 Unit 2 PDF-derived questions.'
  },
  {
    id: 'c3-full-generated-a', module: 'cemap3', unitKey: 'unit1',
    title: 'CeMAP 3 Full Mock A (PDF-derived)', origin: 'generated',
    timeMinutes: 120, passMark: 42, questionIds: questionIds('cemap3','unit1',60),
    source: 'Generated only from CeMAP 3 protection and case-study material in the supplied PDF.'
  }
]
