export interface IQuestions {
  id: string;
  category: string;
  correctAnswer: string;
  incorrectAnswers: string[];
  question: string;
  tags: string[];
  type: string;
  difficulty: string;
}

interface IAnswers {
  option: string;
  isCorrect: boolean;
}
