import { useState, useRef } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet'
import BottomSheetModal from "@gorhom/bottom-sheet";
import { PortalProvider } from "@gorhom/portal";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { StatusBar } from "expo-status-bar";
import Home from "./components/Home/Home";
import Cart from "./components/Cart/Cart";
import Modal from "./components/Modal/Modal";


// https://reactnavigation.org/docs/material-bottom-tab-navigator
const Tab = createMaterialBottomTabNavigator();
const Stack = createStackNavigator();

const createTabs = (props) => {
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

const TabNavigator = (props) => {
  return (
    <Tab.Navigator
      labeled={false}
      barStyle={{height: 80}}
      // https://callstack.github.io/react-native-paper/ 
      // https://stackoverflow.com/questions/75013007/how-to-remove-this-white-ovale-behind-the-focused-in-the-material-bottom-tabs-na
      // edit theme later
      
    >
      { createTabs(props) }
    </Tab.Navigator>
  );
}

const App = () => {
  return (
      <PortalProvider>
        <StatusBar style="light"/>
        <Stack.Navigator 
          screenOptions={{
            headerShown: false,
            headerStyle: {
              height: 400
            }
            // container
          }}
        >
          <Stack.Screen name="tabs" component={TabNavigator}/>
        </Stack.Navigator>
        
      </PortalProvider>
  );
}

export default App;