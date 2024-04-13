import { createStackNavigator } from '@react-navigation/stack';
import Details from './Details';
import DeliveryRange from './DeliveryRange';
import DeliveryTimes from './DeliveryTimes';
import { useState } from 'react';

const Stack = createStackNavigator();

const ListItem = () => {
  const [location, setLocation] = useState(null);

  console.log(location);
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Details"
        component={Details}
        initialParams={{ assets: [], location }}
      />
      <Stack.Screen
        name="Delivery Range"
        component={DeliveryRange}
        initialParams={{
          location,
          setLocation,
        }}
      />
      <Stack.Screen name="Delivery Times" component={DeliveryTimes} />
    </Stack.Navigator>
  );
};

export default ListItem;
