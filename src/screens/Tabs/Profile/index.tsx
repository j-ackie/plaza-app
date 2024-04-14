import Info from './Info';
import { createStackNavigator } from '@react-navigation/stack';
import Post from './Post';

export type ProfileStackParamList = {
  Info: { userId: number };
  Post: { videoId: number };
};

const ProfileStack = createStackNavigator<ProfileStackParamList>();

enum ProfileScreen {
  INFO = 'Info',
  POST = 'Post',
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
      <ProfileStack.Screen name={ProfileScreen.POST} component={Post} />
      {/* <StackScreen name={ProfileScreen.REVIEW} /> */}
      {/* <StackScreen name={ProfileScreen.ADD_REVIEW}/> */}
      {/* <StackScreen name={ProfileScreen.PRODUCT} /> */}
    </ProfileStack.Navigator>
  );
};

export default Profile;
