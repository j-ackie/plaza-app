import { useState, useRef } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet'
import BottomSheetModal from "@gorhom/bottom-sheet";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { StatusBar } from "expo-status-bar";
import Home from "./components/Home/Home";
import Cart from "./components/Cart/Cart";
import Modal from "./components/Modal/Modal";


// https://reactnavigation.org/docs/material-bottom-tab-navigator
const Tab = createMaterialBottomTabNavigator();

const createTabs = (handleExpand, handleClose) => {
  const tabNames = ["home", "cart", "create", "inbox", "profile"];
  const tabComponents = [Home, Home, Home, Home, Home];

  const tabs = [];
  for (let i = 0; i < tabNames.length; i++) {
    tabs.push(
      <Tab.Screen
        key={tabNames[i]}
        name={tabNames[i]}
        component={tabComponents[i]}
        initialParams={{handleExpand, handleClose}}
        options={{
          tabBarIcon: () => <MaterialCommunityIcons name={tabNames[0]} size={26} /> // replace later
        }}  
      />
    );
  }

  return tabs;
};

const App = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [modalContent, setModalContent] = useState({});
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);

  const handleExpand = (content) => {
    console.log(content)
    setModalContent(content);
    bottomSheetModalRef.current.expand();
  };
  const handleClose = () => bottomSheetModalRef.current.close();

  return (
    <BottomSheetModalProvider>
      <Tab.Navigator
        labeled={false}
        barStyle={{height: 80}}
        // https://callstack.github.io/react-native-paper/ 
        // https://stackoverflow.com/questions/75013007/how-to-remove-this-white-ovale-behind-the-focused-in-the-material-bottom-tabs-na
        // edit theme later
        
      >
        { createTabs(handleExpand, handleClose) }
      </Tab.Navigator>
      <StatusBar style="light"/>
      <Modal 
        modalContent={modalContent}
        ref={bottomSheetModalRef}
      />
    </BottomSheetModalProvider>
  );
}

export default App;