import { FC } from 'react';
import { StyleSheet, View } from 'react-native';
import Message from './Message';

const mockUser = {
  username: 'Username',
  profilePictureURI:
    'https://hips.hearstapps.com/hmg-prod/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=0.752xw:1.00xh;0.175xw,0&resize=1200:*',
};

const mockData = [mockUser, mockUser, mockUser];

const Messages: FC = () => {
  return (
    <View style={styles.container}>
      {mockData.map((message, index) => (
        <Message key={index} user={message} />
      ))}
    </View>
  );
};

export default Messages;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    gap: 10,
  },
});
