import { questions } from './questions'
import { specimenPaperA } from './specimenPaperA'
import type { Question } from './types'

export const allQuestions: Question[] = [...questions, ...specimenPaperA]

export function getQuestionById(id: string): Question | undefined {
  return allQuestions.find(q => q.id === id)
}
