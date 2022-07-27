import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home } from "../Screens/Home";
import { NewGame } from "../Screens/NewGame";

const { Navigator, Screen } = createNativeStackNavigator();

export const AppRoutes = () => {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="home" component={Home} />
      <Screen name="newGame" component={NewGame} />
    </Navigator>
  )
}
