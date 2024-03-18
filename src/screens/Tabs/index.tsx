import { BottomTabNavigator, BottomTabScreen } from '@/components/BottomTab';
import BottomTab from './BottomTab';
import Feed from '@/components/Feed';
import Home from './Home';
import Profile from './Profile';
import { useContext } from 'react';
import UserContext from '@/contexts/UserContext';

const BottomTabs = () => {
  const { user } = useContext(UserContext);

  console.log(user);

  return (
    <BottomTabNavigator labeled={false} barStyle={{ height: 80 }}>
      <BottomTabScreen name={BottomTab.HOME} component={Home} />
      <BottomTabScreen name={BottomTab.CART} component={Feed} />
      <BottomTabScreen
        name={BottomTab.INBOX}
        component={Profile}
        initialParams={{ userId: user.userId }}
      />
    </BottomTabNavigator>
  );
};

export default BottomTabs;
