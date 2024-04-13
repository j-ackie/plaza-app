import Assets from '~/components/Assets';
import { createStackNavigator } from '@react-navigation/stack';
import ConfirmProfilePicture from './ConfirmProfilePicture';

const Stack = createStackNavigator();

const ProfilePictureGallery = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="a"
        component={Assets}
        initialParams={{
          assetType: 'photo',
          nextRoute: 'confirmProfilePicture',
        }}
      />
      <Stack.Screen
        name="confirmProfilePicture"
        component={ConfirmProfilePicture}
      />
    </Stack.Navigator>
  );
};

export default ProfilePictureGallery;
