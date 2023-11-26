import { useContext } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ProfilePost from './ProfilePost';
import ProfileProductListing from './ProfileProductListing';
import ProfileInfo from './ProfileInfo';
import { UserContext } from '~/contexts/UserContext';
import { StatusBar } from 'expo-status-bar';

// https://reactnavigation.org/docs/material-top-tab-navigator

const ProfileStack = createStackNavigator();

const Profile = () => {
  const context = useContext(UserContext);

  return (
    <>
      <StatusBar style="dark" />
      <ProfileStack.Navigator screenOptions={{ headerShown: false }}>
        <ProfileStack.Screen
          name="ProfileInfo"
          component={ProfileInfo}
          initialParams={{ userID: 1 }}
        />
        <ProfileStack.Screen name="ProfilePost" component={ProfilePost} />
        <ProfileStack.Screen
          name="ProfileProductListing"
          component={ProfileProductListing}
        />
      </ProfileStack.Navigator>
    </>
  );
};

export default Profile;
