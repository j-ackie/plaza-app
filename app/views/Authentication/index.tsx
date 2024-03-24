import { createStackNavigator } from '@react-navigation/stack';
import Login from './Login';
import Register from './Register';
import ForgotPassword from './ForgotPassword';

const Stack = createStackNavigator();

const Authentication = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="login" component={Login} />
      <Stack.Screen name="signup" component={Register} />
      <Stack.Screen name="forgotpassword" component={ForgotPassword} />
    </Stack.Navigator>
  );
};

export default Authentication;
