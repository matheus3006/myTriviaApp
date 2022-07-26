import { Button, Center, Text, VStack } from 'native-base';
import { useState } from 'react';
import { api } from '../config/Axios/globalConfig';
import { ICategory } from '../models/Category';

import { IQuestions } from '../models/Question';

export function Home() {
  const [questions, setQuestions] = useState<IQuestions[]>([
    {
      category: 'Food & Drink',
      id: '627164281ba117625baac94b',
      correctAnswer: 'Bourbon',
      incorrectAnswers: ['Waragi', 'Pastis', 'Becherovka'],
      question: 'Which of these is a popular drink in The USA?',
      tags: ['drink', 'alcohol'],
      type: 'Multiple Choice',
      difficulty: 'easy',
    },
  ]);
  const [category, setCategory] = useState<ICategory[]>([]);

  const handleGetQuestions = async () => {
    const response = await api.get(
      'questions?categories=music&limit=2&region=BR&difficulty=easy',
    );

    setQuestions(response.data);
  };

  const handleGetCategories = async () => {
    const response = await api.get('https://the-trivia-api.com/api/categories');

    setCategory(response.data);
  };

  return (
    <Center flex={1}>
      <VStack>
        <Button
          rounded="3xl"
          size="md"
          onPress={() => {
            handleGetQuestions();
            handleGetCategories();
          }}
        >
          Get started
        </Button>
        <Text paddingTop={20}>{category[0]} </Text>
        <Text paddingTop={20}>{questions[0].question}</Text>
      </VStack>
    </Center>
  );
}
