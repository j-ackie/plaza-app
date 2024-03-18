import { StackNavigator, StackScreen } from '@/components/Stack';
import { NavigationContainer } from '@react-navigation/native';
import Route from './route';
import { FC } from 'react';
import Tabs from '@/screens/Tabs';

const Navigation: FC = () => {
  return (
    <NavigationContainer>
      <StackNavigator screenOptions={{ headerShown: false }}>
        <StackScreen name={Route.TABS} component={Tabs} />
      </StackNavigator>
    </NavigationContainer>
  );
};

export default Navigation;
