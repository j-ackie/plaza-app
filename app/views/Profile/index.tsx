import { useContext } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ProfilePost from './ProfilePost';
import ProfileProductListing from './ProfileProductListing';
import { UserContext } from '~/UserContext';
import { useQuery } from '@apollo/client';
import GET_USER from './getUser';
import ProfileInfo from './ProfileInfo';

// https://reactnavigation.org/docs/material-top-tab-navigator

const ProfileStack = createStackNavigator();

const Profile = () => {
  const { loading, data } = useQuery(GET_USER, {
    variables: {
      userID: 1,
    },
  });

  const context = useContext(UserContext);
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
