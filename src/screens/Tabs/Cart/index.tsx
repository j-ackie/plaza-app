import { SafeAreaView } from 'react-native';
import { TopTabNavigator, TopTabScreen } from '@/components/TopTab';
import Cart from './CartTabs/Cart';
import History from './CartTabs/History'
import BlockTopTabBar from '@/components/BlockTopTabBar';

enum HomeTab {
  CART = 'Cart',
  HISTORY = 'Order History',
}

const CartOrder = () => {
  return (
    <TopTabNavigator
      tabBar={BlockTopTabBar}
      screenOptions={{
        tabBarLabelStyle: { textTransform: 'none', color: 'black' },
        tabBarStyle: { backgroundColor: 'transparent' },
      }}
    >
      <TopTabScreen name={HomeTab.CART} component={Cart} />
      <TopTabScreen name={HomeTab.HISTORY} component={History} />
    </TopTabNavigator>
  );
};

export default CartOrder;
