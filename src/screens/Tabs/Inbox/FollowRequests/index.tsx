import { FC } from 'react';
import { StyleSheet, View } from 'react-native';
import FollowRequest from './FollowRequest';

const mockUser = {
  username: 'Username',
  profilePictureURI:
    'https://hips.hearstapps.com/hmg-prod/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=0.752xw:1.00xh;0.175xw,0&resize=1200:*',
};

const mockData = [mockUser, mockUser, mockUser];

const FollowRequests: FC = () => {
  return (
    <View style={styles.container}>
      {mockData.map((request, index) => (
        <FollowRequest key={index} request={request} />
      ))}
    </View>
  );
};

export default FollowRequests;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    gap: 10,
  },
});
