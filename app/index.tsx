import { useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { PortalProvider } from '@gorhom/portal';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { StatusBar } from 'expo-status-bar';
import Home from './views/Home/Home';
import ShoppingCartOrderScreen from './views/ShoppingCartOrderScreen/ShoppingCartOrderScreen';
import { Audio } from 'expo-av';

// https://reactnavigation.org/docs/material-bottom-tab-navigator
const Tab = createMaterialBottomTabNavigator();
const Stack = createStackNavigator();

const createTabs = () => {
  const tabNames = ['home', 'cart', 'create', 'inbox', 'profile'];
  const tabComponents = [Home, ShoppingCartOrderScreen, Home, Home, Home];

  const tabs = [];
  for (let i = 0; i < tabNames.length; i++) {
    tabs.push(
      <Tab.Screen
        key={tabNames[i]}
        name={tabNames[i]}
        component={tabComponents[i]}
        options={{
          tabBarIcon: () => (
            <MaterialCommunityIcons name={tabNames[0]} size={26} />
          ), // replace later
        }}
      />
    );
  }

  return tabs;
};

const TabNavigator = () => {
  return (
    <Tab.Navigator
      labeled={false}
      barStyle={{ height: 80 }}
      // https://callstack.github.io/react-native-paper/
      // https://stackoverflow.com/questions/75013007/how-to-remove-this-white-ovale-behind-the-focused-in-the-material-bottom-tabs-na
      // edit theme later
    >
      {createTabs()}
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
        {/* <Stack.Screen name="purchase" component={Purchase} options={{headerShown: true}} /> */}
      </Stack.Navigator>
    </PortalProvider>
  );
};

export default App;
