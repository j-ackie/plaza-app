import { SafeAreaView } from "react-native";
import { createMaterialTopTabNavigator, MaterialTopTabBar } from '@react-navigation/material-top-tabs';
import Feed from "../Feed/Feed";

// https://reactnavigation.org/docs/material-top-tab-navigator
const Tab = createMaterialTopTabNavigator();

const SafeAreaMaterialTopBar = ({...props}) => {
  return (
    <SafeAreaView style={{position: "absolute", width: "100%", zIndex: 99}}>
      {/* @ts-ignore */}
      <MaterialTopTabBar {...props}/>
    </SafeAreaView>
  );
};

const Home = () => {
  return (
    <Tab.Navigator
      tabBar={props => <SafeAreaMaterialTopBar {...props}/>}
      screenOptions={{
        tabBarLabelStyle: {textTransform: "none", color: "white"},
        tabBarStyle: {backgroundColor: "transparent"}
      }}
    >
      <Tab.Screen
        name="Following"
        component={Feed}
      />
      <Tab.Screen
        name="Explore"
        component={Feed}
      />
    </Tab.Navigator>
  )
};

export default Home;