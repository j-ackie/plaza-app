import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

const BottomTab = createMaterialBottomTabNavigator();

const BottomTabNavigator = BottomTab.Navigator;
const BottomTabGroup = BottomTab.Group;
const BottomTabScreen = BottomTab.Screen;

export { BottomTabNavigator, BottomTabGroup, BottomTabScreen };
