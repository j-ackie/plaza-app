import { FC } from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Assets from './Assets';
import { SafeAreaTopTabBarRelative } from '~/components/SafeAreaTopTabBar/SafeAreaTopTabBar';

const Tab = createMaterialTopTabNavigator();

const Library: FC = ({ route }) => {
  return (
    <Tab.Navigator tabBar={SafeAreaTopTabBarRelative}>
      <Tab.Screen
        name="all"
        component={Assets}
        initialParams={{ assetType: null, ...route.params }}
      />
      <Tab.Screen
        name="videos"
        component={Assets}
        initialParams={{ assetType: 'video', ...route.params }}
      />
      <Tab.Screen
        name="photos"
        component={Assets}
        initialParams={{ assetType: 'photo', ...route.params }}
      />
    </Tab.Navigator>
  );
};

export default Library;
