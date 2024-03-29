import { useContext } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ProfilePost from './ProfilePost';
import ProfileProductListing from './ProfileProductListing';
import ProfileInfo from './ProfileInfo';
import { UserContext } from '~/contexts/UserContext';
import { StatusBar } from 'expo-status-bar';
import ProfileReviewInput from './ProfileReviewInput';
import ProfileReview from './ProfileReview';

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
          name="Profile Review"
          component={ProfileReview}
          options={{ headerShown: true }}
        />
        <ProfileStack.Screen
          name="ProfileProductListing"
          component={ProfileProductListing}
        />
        <ProfileStack.Screen
          name="ProfileReviewInput"
          component={ProfileReviewInput}
          options={{ headerShown: true }}
          initialParams={{ userID: 1 }}
        />
      </ProfileStack.Navigator>
    </>
  );
};

export default Profile;
