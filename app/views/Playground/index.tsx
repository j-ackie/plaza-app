import { createStackNavigator } from '@react-navigation/stack';
import Maps from './Maps';

const Stack = createStackNavigator();

const Playground = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Maps" component={Maps} />
    </Stack.Navigator>
  );
};

export default Playground;
