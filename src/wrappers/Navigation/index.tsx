import { StackNavigator, StackScreen } from '@/components/Stack';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import Route from './route';
import { FC } from 'react';
import Tabs from '@/screens/Tabs';
import Color from '@/constants/color';

const Theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: Color.WHITE,
  },
};

const Navigation: FC = () => {
  return (
    <NavigationContainer theme={Theme}>
      <StackNavigator screenOptions={{ headerShown: false }}>
        <StackScreen name={Route.TABS} component={Tabs} />
      </StackNavigator>
    </NavigationContainer>
  );
};

export default Navigation;
