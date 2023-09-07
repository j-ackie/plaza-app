import { FC } from 'react';
import { Image } from 'react-native';

type ProfilePictureProps = {
  size: number;
  uri: string;
};

const ProfilePicture: FC<ProfilePictureProps> = ({ size, uri }) => {
  return (
    <Image
      source={{
        uri: uri,
      }}
      style={{
        width: size,
        height: size,
        borderRadius: size / 2,
      }}
    />
  );
};

export default ProfilePicture;
