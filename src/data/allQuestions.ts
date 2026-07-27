import { questions } from './questions'
import { specimenPaperA } from './specimenPaperA'
import type { Question } from './types'

export const allQuestions: Question[] = [...questions, ...specimenPaperA].map(question => ({
  ...question,
  incorrectExplanations: question.incorrectExplanations?.length === question.options.length
    ? question.incorrectExplanations
    : question.options.map((_, index) =>
      question.correctIndex.includes(index)
        ? `Correct. ${question.explanation}`
        : `This option does not match the tested principle. ${question.explanation}`
    )
}))

export function getQuestionById(id: string): Question | undefined {
  return allQuestions.find(q => q.id === id)
}
