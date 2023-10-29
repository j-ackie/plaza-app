import { createStackNavigator } from '@react-navigation/stack';
import ProfilePost from './ProfilePost';
import ProfileProductListing from './ProfileProductListing';
import ProfileInfo from './ProfileInfo';

// https://reactnavigation.org/docs/material-top-tab-navigator

const ProfileStack = createStackNavigator();

const Profile = () => {
  return (
    <ProfileStack.Navigator screenOptions={{ headerShown: false }}>
      <ProfileStack.Screen name="ProfileInfo" component={ProfileInfo} />
      <ProfileStack.Screen name="ProfilePost" component={ProfilePost} />
      <ProfileStack.Screen
        name="ProfileProductListing"
        component={ProfileProductListing}
      />
    </ProfileStack.Navigator>
  );
};

export default Profile;
