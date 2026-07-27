import type { MockExamMeta } from './types'
import { specimenPaperA } from './specimenPaperA'

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
  }
]

// STILL TO BUILD (see CONTENT_COVERAGE.md): a full CeMAP 1 Unit 2 specimen paper,
// a CeMAP 2 Unit 1 & Unit 2 mock, and the remaining 6 CeMAP 3 case studies — all of
// which exist in your PDFs with verified answer keys and just need transcribing in
// the same pattern as the two mocks above.
