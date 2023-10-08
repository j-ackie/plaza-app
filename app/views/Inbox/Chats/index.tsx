import { FC } from 'react';
import { gql, useQuery } from '@apollo/client';
import { createStackNavigator } from '@react-navigation/stack';
import ChatsList from './ChatsList';
import ChatScreen from './ChatScreen';

const Stack = createStackNavigator();

const Chats: FC = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Chats List" component={ChatsList} />
      <Stack.Screen name="Chat Screen" component={ChatScreen} />
    </Stack.Navigator>
  );
};

export default Chats;
