import { FC } from 'react';
import { StyleSheet, View } from 'react-native';
import Chat from './Chat';

const mockUser = {
  username: 'Username',
  profilePictureURI:
    'https://hips.hearstapps.com/hmg-prod/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=0.752xw:1.00xh;0.175xw,0&resize=1200:*',
};

const mockData = [mockUser, mockUser, mockUser];

const ChatsList: FC = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {mockData.map((message, index) => (
        <Chat key={index} user={message} navigation={navigation} />
      ))}
    </View>
  );
};

export default ChatsList;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    gap: 10,
  },
});
