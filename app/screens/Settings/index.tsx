import { View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import SettingsAndPrivacy from './SettingsAndPrivacy';
import Account from './Account';
import ProfilePictureGallery from './ProfilePictureGallery';

const Stack = createStackNavigator();

const Settings = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="settings and privacy"
        component={SettingsAndPrivacy}
        options={{
          headerShown: true,
          headerTitle: 'Settings and privacy',
          headerBackTitleVisible: false,
        }}
      />
      <Stack.Screen
        name="account"
        component={Account}
        options={{
          headerShown: true,
          headerTitle: 'Account',
          headerBackTitleVisible: false,
        }}
      />
      <Stack.Screen
        name="profilePictureGallery"
        component={ProfilePictureGallery}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default Settings;
