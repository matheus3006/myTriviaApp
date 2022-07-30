import { VStack } from 'native-base';
import { useContext } from 'react';
import { GameContext } from '../context/GameContext';

export const NewGame = ()=> {

  const gameQuestions = useContext(GameContext)
  console.log(gameQuestions)

  return (
    <VStack>

    </VStack>
  );
}
