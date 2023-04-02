import { useState } from "react";
import { StyleSheet, Text, View, SafeAreaView, Button } from "react-native";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Feed from "../Feed/Feed";

const Tab = createMaterialTopTabNavigator();

const Home = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <Tab.Navigator>
        <Tab.Screen
          name="Following"
          component={Feed}
        />
        <Tab.Screen
          name="Explore"
          component={Feed}
        />
      </Tab.Navigator>
    </SafeAreaView>
  )
};

export default Home;