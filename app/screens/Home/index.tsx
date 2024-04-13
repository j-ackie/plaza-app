import Feed from '../Feed';
import SafeAreaTopTabBar from '~/components/SafeAreaTopTabBar/SafeAreaTopTabBar';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Search from '../Search';

// https://reactnavigation.org/docs/material-top-tab-navigator
const Tab = createMaterialTopTabNavigator();

const Home = () => {
  return (
    <Tab.Navigator
      tabBar={(props) => <SafeAreaTopTabBar {...props} />}
      screenOptions={{
        tabBarLabelStyle: { textTransform: 'none', color: 'white' },
        tabBarStyle: { backgroundColor: 'transparent' },
      }}
    >
      <Tab.Screen name="Following" component={Feed} />
      <Tab.Screen name="Explore" component={Feed} />
    </Tab.Navigator>
  );
};

export default Home;
