import { FC } from 'react';
import { Pressable, Text } from 'react-native';
import { StyleSheet, View } from 'react-native';
import Bold from '@/components/Bold';
import ProfilePicture from '@/components/ProfilePicture';
import PlazaText from '@/components/PlazaText';

type ChatProps = {
  user: unknown;
};

const Chat: FC<ChatProps> = ({ navigation, user }) => {
  return (
    <Pressable onPress={() => navigation.navigate('Chat Screen')}>
      <View style={styles.container}>
        <ProfilePicture size={50} uri={user.profilePictureURI} />
        <View style={styles.message}>
          <View style={styles.messageMetadata}>
            <Bold>{user.username}</Bold>
            <PlazaText>6:36 PM</PlazaText>
          </View>
          <PlazaText>This is a message</PlazaText>
        </View>
      </View>
    </Pressable>
  );
};

export default Chat;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  message: {
    flex: 1,
    gap: 5,
    marginLeft: 10,
    marginRight: 10,
  },
  messageMetadata: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
