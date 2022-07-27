import  { createContext, FunctionComponent, ReactElement } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface IGameContext{

}

interface IProps {
  children: ReactElement;
}


export const GameContext = createContext<IGameContext>({} as IGameContext);

export const GameProvider: FunctionComponent<IProps> = ({ children }) => {
  return (



    <GameContext.Provider
      value={{  }}
    >
      {children}
    </GameContext.Provider>
  );
}
