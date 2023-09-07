import { useEffect, useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { PortalProvider } from '@gorhom/portal';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { StatusBar } from 'expo-status-bar';
import Home from '~/views/Home/Home';
import ShoppingCartOrderScreen from '~/views/ShoppingCartOrderScreen/ShoppingCartOrderScreen';
import { Audio } from 'expo-av';
import AddContent from './views/AddContent';
import Profile from './views/Profile/Profile';
import Inbox from './views/Inbox';

// https://reactnavigation.org/docs/material-bottom-tab-navigator
const Tab = createMaterialBottomTabNavigator();
const Stack = createStackNavigator();

const TabNavigator = ({ navigation }) => {
  // const tabNames = ['home', 'cart', 'create', 'inbox', 'profile'];
  // const tabComponents = [Home, ShoppingCartOrderScreen, AddContent, Home, Home];

  return (
    <Tab.Navigator
      labeled={false}
      barStyle={{
        height: 80,
      }}
      // https://callstack.github.io/react-native-paper/
      // https://stackoverflow.com/questions/75013007/how-to-remove-this-white-ovale-behind-the-focused-in-the-material-bottom-tabs-na
      // edit theme later

      screenOptions={
        ({route}) => ({
          tabBarIcon: (e) => {
            let name = ""
            switch(route.name){
              case 'home':{
                name = 'home'
                break;
              }
              case 'cart':{
                name = 'cart'
                break;
              }
              case 'create':{
                name = 'plus-circle-outline'
                break;
              }
              case 'inbox':{
                name = 'mailbox-open'
                break;
              }
              case 'profile':{
                name = 'account-circle'
                break;
              }
            }
            
            return(
              <MaterialCommunityIcons name={name} size={30} />
            )
          },
        })
      }
    >
      <Tab.Screen name="home" component={Home} />
      <Tab.Screen name="cart" component={ShoppingCartOrderScreen} />
      <Tab.Screen
        name="dummy-create"
        component={() => null}
        listeners={{
          tabPress: (e) => {
            e.preventDefault();
            navigation.navigate('create');
          },
        }}
      />
      <Tab.Screen name="inbox" component={Inbox} />
      <Tab.Screen name="profile" component={Profile} />
    </Tab.Navigator>
  );
};
const App = () => {
  useEffect(() => {
    Audio.setAudioModeAsync({
      playsInSilentModeIOS: true,
    });
  }, []);

  return (
    <PortalProvider>
      <StatusBar style="light" />
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          // container
        }}
      >
        <Stack.Screen name="tabs" component={TabNavigator} />
        <Stack.Screen name="create" component={AddContent} />
      </Stack.Navigator>
    </PortalProvider>
  );
};

export default App;
