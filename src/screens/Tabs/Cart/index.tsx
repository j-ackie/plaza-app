import { SafeAreaView } from 'react-native';
import {
  createMaterialTopTabNavigator,
  MaterialTopTabBar,
} from '@react-navigation/material-top-tabs';
import { gql } from '@apollo/client';
import Cart from './CartTabs/Cart';
import History from './CartTabs/History';

const Tab = createMaterialTopTabNavigator();

const CartOrder = ({ ...props }) => {
  return (
    <SafeAreaView style={{ width: '100%' }}>
      <MaterialTopTabBar {...props} />
    </SafeAreaView>
  );
};

const ShoppingCartOrderScreen = () => {
  return (
    <Tab.Navigator
      tabBar={(props) => <SafeAreaMaterialTopBar {...props} />}
      screenOptions={{
        tabBarLabelStyle: { textTransform: 'none', color: 'black' },
        tabBarStyle: { backgroundColor: 'transparent' },
      }}
    >
      <Tab.Screen name="Shopping Cart" component={Cart} />
      <Tab.Screen
        name="Order History"
        component={History} // replace with OrderHistory
      />
    </Tab.Navigator>
  );
};

export default CartOrder;
