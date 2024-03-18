import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const TopTab = createMaterialTopTabNavigator();

const TopTabNavigator = TopTab.Navigator;
const TopTabGroup = TopTab.Group;
const TopTabScreen = TopTab.Screen;

export { TopTabNavigator, TopTabGroup, TopTabScreen };
