import { Image, Pressable, SafeAreaView, Text, View } from 'react-native';
import { MaterialTopTabBar } from '@react-navigation/material-top-tabs';

const SafeAreaTopTabBar = ({ ...props }) => {
  return (
    <SafeAreaView
      style={{
        width: '100%',
        zIndex: 99,
        position: 'absolute',
        flexDirection: 'row',
        alignItems: 'center',
      }}
    >
      <View style={{ flex: 1 }}></View>
      <View style={{ width: '70%', alignSelf: 'center' }}>
        {/* @ts-ignore */}
        <MaterialTopTabBar {...props} />
      </View>
      <View style={{ flex: 1 }}>
        <Pressable onPress={() => props.navigation.navigate('search')}>
          <Image
            source={require('./search2whitefilled.png')}
            style={{ width: 40, height: 40 }}
          />
        </Pressable>
        {/* <Text onPress={() => props.navigation.navigate('search')}>S</Text> */}
      </View>
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
