import { useNavigation } from 'expo-router';
import { Image, Pressable, View } from 'react-native';

type ProfilePictureProps = {
  user: object;
};

const ProfilePicture: React.FC<ProfilePictureProps> = ({ user }) => {
  const navigation = useNavigation();

  return parseInt(user.id) === 1 ? (
    <Pressable
      onPress={() =>
        navigation.navigate('settings', { screen: 'profilePictureGallery' })
      }
    >
      <Image
        source={{
          uri: user.profilePictureURI,
        }}
        style={{ width: 120, height: 120, marginTop: 15, borderRadius: 60 }}
        resizeMethod="auto"
      />
    </Pressable>
  ) : (
    <Image
      source={{
        uri: user.profilePictureURI,
      }}
      style={{ width: 120, height: 120, marginTop: 15, borderRadius: 60 }}
      resizeMethod="auto"
    />
  );
};

export default ProfilePicture;
