import { FC } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Activity from './Activity';
import Messages from './Messages';
import FollowRequests from './FollowRequests';
import MessagesIcon from './MessagesIcon';

const Stack = createStackNavigator();

const Inbox: FC = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Activity"
        component={Activity}
        options={({ navigation }) => ({
          headerRight: () => <MessagesIcon navigation={navigation} />,
        })}
      />
      <Stack.Screen name="Messages" component={Messages} />
      <Stack.Screen name="Follow Requests" component={FollowRequests} />
    </Stack.Navigator>
  );
};

export default Inbox;
