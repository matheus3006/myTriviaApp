import { NavigationContainer } from '@react-navigation/native';
import { GameProvider } from '../context/GameContext';
import { AppRoutes } from './AppRoutes';

export const Routes = () => {
  return (
    <NavigationContainer>
      <GameProvider>
        <AppRoutes />
      </GameProvider>
    </NavigationContainer>
  );
};
