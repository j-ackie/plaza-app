import { StyleSheet, Text, View } from "react-native";
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { StatusBar } from "expo-status-bar";
import Home from "./components/Home/Home";
import Cart from "./components/Cart/Cart";


// https://reactnavigation.org/docs/material-bottom-tab-navigator
const Tab = createMaterialBottomTabNavigator();

const createTabs = () => {
  const tabNames = ["home", "cart", "create", "inbox", "profile"];
  const tabComponents = [Home, Home, Home, Home, Home];

  const tabs = [];
  for (let i = 0; i < tabNames.length; i++) {
    tabs.push(
      <Tab.Screen
        key={tabNames[i]}
        name={tabNames[i]}
        component={tabComponents[i]}
        options={{
          tabBarIcon: () => <MaterialCommunityIcons name={tabNames[0]} size={26} /> // replace later
        }}  
      />
    );
  }

  return tabs;
};

const App = () => {
  return (
    <>
      <Tab.Navigator
        labeled={false}
        barStyle={{height: 80}}
        // https://callstack.github.io/react-native-paper/ 
        // https://stackoverflow.com/questions/75013007/how-to-remove-this-white-ovale-behind-the-focused-in-the-material-bottom-tabs-na
        // edit theme later
        
      >
        { createTabs() }
      </Tab.Navigator>
      <StatusBar style="light"/>
    </>
  );
}

export default App;