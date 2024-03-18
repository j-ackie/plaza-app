import Info from './Info';
import { createStackNavigator } from '@react-navigation/stack';

export type ProfileStackParamList = {
  Info: { userId: number };
};

const ProfileStack = createStackNavigator<ProfileStackParamList>();

enum ProfileScreen {
  INFO = 'Info',
  REVIEW = 'Review',
  ADD_REVIEW = 'Add Review',
  PRODUCT = 'Product',
}

const Profile = ({ route }) => {
  return (
    <ProfileStack.Navigator screenOptions={{ headerShown: false }}>
      <ProfileStack.Screen
        name={ProfileScreen.INFO}
        component={Info}
        initialParams={route.params}
      />
      {/* <StackScreen name={ProfileScreen.REVIEW} /> */}
      {/* <StackScreen name={ProfileScreen.ADD_REVIEW}/> */}
      {/* <StackScreen name={ProfileScreen.PRODUCT} /> */}
    </ProfileStack.Navigator>
  );
};

export default Profile;
