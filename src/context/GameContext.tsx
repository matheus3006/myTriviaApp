import  { createContext, FunctionComponent, ReactElement } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export interface IGameContext{
  question: string;
  correctAnswer: string;
  possibleAnswers: string[];
}

interface IProps {
  children: ReactElement;
}


export const GameContext = createContext<IGameContext>({} as IGameContext);

export const GameProvider: FunctionComponent<IProps> = ({ children }) => {
  const startGame = ()=>{

  }
  const getQuestions = ()=> {

  }

  const endGame = ()=> {

  }

  return (
    <GameContext.Provider
      value={{ question: "qual o nome da sua mae?", correctAnswer: "Mae", possibleAnswers:[]}}
    >
      {children}
    </GameContext.Provider>
  );
}
