// src/utils/shuffle.js
import { shuffleArray } from './ratioMath.js';

export function generateSessionQuestions(rawQuestionBank) {
  if (!rawQuestionBank || !rawQuestionBank.length) return [];
  // Keep questions in their district groups (10 per district) with randomized option order
  return rawQuestionBank.map((q) => ({
    ...q,
    options: q.options ? shuffleArray(q.options) : [],
  }));
}
