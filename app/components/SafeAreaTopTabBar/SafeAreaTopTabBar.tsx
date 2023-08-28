import { SafeAreaView } from 'react-native';
import { MaterialTopTabBar } from '@react-navigation/material-top-tabs';

const SafeAreaTopTabBar = ({ ...props }) => {
  return (
    <SafeAreaView style={{ width: '100%', zIndex: 99, position: 'absolute' }}>
      {/* @ts-ignore */}
      <MaterialTopTabBar {...props} />
    </SafeAreaView>
  );
};

const SafeAreaTopTabBarRelative = ({ ...props }) => {
  return (
    <SafeAreaView style={{ width: '100%', zIndex: 99, position: 'relative' }}>
      {/* @ts-ignore */}
      <MaterialTopTabBar {...props} />
    </SafeAreaView>
  );
};

export default SafeAreaTopTabBar;
export { SafeAreaTopTabBarRelative };
