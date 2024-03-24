import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { SafeAreaTopTabBarRelative } from '../SafeAreaTopTabBar/SafeAreaTopTabBar';
import Assets from './Assets';

const Tab = createMaterialTopTabNavigator();

const Library = ({ route }) => {
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
