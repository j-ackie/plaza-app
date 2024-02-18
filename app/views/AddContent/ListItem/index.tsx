import { createStackNavigator } from '@react-navigation/stack';
import Details from './Details';
import DeliveryRange from './DeliveryRange';
import DeliveryTimes from './DeliveryTimes';

const Stack = createStackNavigator();

const ListItem = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Details"
        component={Details}
        initialParams={{ assets: [] }}
      />
      <Stack.Screen name="Delivery Range" component={DeliveryRange} />
      <Stack.Screen name="Delivery Times" component={DeliveryTimes} />
    </Stack.Navigator>
  );
};

export default ListItem;
