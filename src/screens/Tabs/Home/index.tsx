import Feed from '@/components/Feed';
import SafeAreaTopTabBar from '@/components/SafeAreaTopTabBar';
import { TopTabNavigator, TopTabScreen } from '@/components/TopTab';

enum HomeTab {
  FOLLOWING = 'Following',
  EXPLORE = 'Explore',
}

const Home = () => {
  return (
    <TopTabNavigator
      tabBar={SafeAreaTopTabBar}
      screenOptions={{
        tabBarLabelStyle: { textTransform: 'none', color: 'white' },
        tabBarStyle: { backgroundColor: 'transparent' },
      }}
    >
      <TopTabScreen name={HomeTab.FOLLOWING} component={Feed} />
      <TopTabScreen name={HomeTab.EXPLORE} component={Feed} />
    </TopTabNavigator>
  );
};

export default Home;
