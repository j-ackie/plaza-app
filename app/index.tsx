import { FC, useEffect, useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { PortalProvider } from '@gorhom/portal';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
<<<<<<< HEAD
import { StatusBar } from "expo-status-bar";
import Home from "./components/Home/Home";
import Purchase from "./screens/Purchase";
import ShoppingCartOrderScreen from "./components/ShoppingCartOrderScreen/ShoppingCartOrderScreen";
import Modal from "./components/Modal/Modal";
import { Audio } from "expo-av";
import { StripeProvider } from "@stripe/stripe-react-native";
import Confirm from "./screens/Confirm";
import Profile from "./components/Profile/Profile";

=======
import { StatusBar } from 'expo-status-bar';
import Home from './views/Home/Home';
import ShoppingCartOrderScreen from './views/ShoppingCartOrderScreen/ShoppingCartOrderScreen';
import { Audio } from 'expo-av';
import AddContent from './views/AddContent/AddContent';
>>>>>>> 4910b399e923d807c0281b1105ba1915cdabcb02

// https://reactnavigation.org/docs/material-bottom-tab-navigator
const Tab = createMaterialBottomTabNavigator();
const Stack = createStackNavigator();

<<<<<<< HEAD
const createTabs = (props) => {
  console.log(props);
  const tabNames = ["home", "cart", "create", "inbox", "profile"];
  const tabComponents = [Home, ShoppingCartOrderScreen, Home, Home, Profile];

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

=======
>>>>>>> 4910b399e923d807c0281b1105ba1915cdabcb02
const TabNavigator = () => {
  const [showTabs, setShowTabs] = useState(true);

  // const tabNames = ['home', 'cart', 'create', 'inbox', 'profile'];
  // const tabComponents = [Home, ShoppingCartOrderScreen, AddContent, Home, Home];

  return (
    <Tab.Navigator
      labeled={false}
      barStyle={{ height: 80, display: showTabs ? 'flex' : 'none' }}
      // https://callstack.github.io/react-native-paper/
      // https://stackoverflow.com/questions/75013007/how-to-remove-this-white-ovale-behind-the-focused-in-the-material-bottom-tabs-na
      // edit theme later

      screenOptions={{
        tabBarIcon: (e) => <MaterialCommunityIcons name={'home'} size={26} />, // replace later
      }}
    >
      <Tab.Screen name="home" component={Home} />
      <Tab.Screen name="cart" component={ShoppingCartOrderScreen} />
      <Tab.Screen
        name="create"
        component={AddContent}
        initialParams={{ setShowTabs }}
      />
      {/* replace ^ with useContext approach */}
      <Tab.Screen name="inbox" component={Home} />
      <Tab.Screen name="profile" component={Home} />
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
        <StatusBar style="light"/>
        <Stack.Navigator 
          screenOptions={{
            headerShown: false,
            // container
          }}
        >
          <Stack.Screen name="tabs" component={TabNavigator}/>
          <Stack.Screen name="purchase" component={Purchase} options={{headerShown: true}} />
          <Stack.Screen name="confirm" component={Confirm} options={{headerShown: true}} />
        </Stack.Navigator>
      </PortalProvider>
  );
};

export default App;
