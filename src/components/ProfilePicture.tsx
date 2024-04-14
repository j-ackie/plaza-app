import { FC } from 'react';
import { Image, StyleSheet } from 'react-native';

interface ProfilePictureProps {
  profilePictureUrl: string;
}

const ProfilePicture: FC<ProfilePictureProps> = ({ profilePictureUrl }) => {
  return <Image source={{ uri: profilePictureUrl }} style={styles.image} />;
};

export default ProfilePicture;

const styles = StyleSheet.create({
  image: {
    width: 120,
    height: 120,
    borderRadius: 60,
  },
});
