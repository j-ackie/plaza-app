import { useState, useEffect } from "react";
import { SafeAreaView } from "react-native";
import { createMaterialTopTabNavigator, MaterialTopTabBar } from '@react-navigation/material-top-tabs';
import ShoppingCart from "./ShoppingCart";

const Tab = createMaterialTopTabNavigator();

const SafeAreaMaterialTopBar = ({...props}) => {
  return (
    <SafeAreaView style={{width: "100%"}}>
      {/* @ts-ignore */}
      <MaterialTopTabBar {...props}/>
    </SafeAreaView>
  );
};

const ShoppingCartOrderScreen = () => {
  return (
    <Tab.Navigator
      tabBar={props => <SafeAreaMaterialTopBar {...props}/>}
      screenOptions={{
        tabBarLabelStyle: {textTransform: "none", color: "black"},
        tabBarStyle: {backgroundColor: "transparent"}
      }}
    >
      <Tab.Screen
        name="Shopping Cart"
        component={ShoppingCart}
      />
      <Tab.Screen
        name="Order History"
        component={ShoppingCart} // replace with OrderHistory
      />
    </Tab.Navigator>
  )
};

export default ShoppingCartOrderScreen;