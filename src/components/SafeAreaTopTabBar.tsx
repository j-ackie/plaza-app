import {
  MaterialTopTabBar,
  MaterialTopTabBarProps,
} from '@react-navigation/material-top-tabs';
import { FC } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';

const SafeAreaTopTabBar: FC<MaterialTopTabBarProps> = (props) => {
  return (
    <SafeAreaView style={styles.container}>
      <MaterialTopTabBar {...props} />
    </SafeAreaView>
  );
};

export default SafeAreaTopTabBar;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    width: '100%',
    zIndex: 99,
  },
});
