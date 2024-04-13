import { FC } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

type ChatBubbleProps = {
  message: unknown;
};

const ChatBubble: FC<ChatBubbleProps> = ({ message }) => {
  const isUser = message.sender.id === '1';

  return (
    <View style={styles.chatBubbleContainer}>
      {!isUser && (
        <Image
          source={{
            uri: 'https://www.dogsforgood.org/app/uploads/2019/06/Georgie-web.jpg',
          }}
          style={styles.profilePicture}
        />
      )}
      <View
        // key={message.id}
        style={[
          {
            backgroundColor: isUser ? 'lightblue' : 'grey',
            marginLeft: isUser ? 'auto' : 0,
            marginRight: !isUser ? 'auto' : 0,
          },
          styles.chatBubble,
        ]}
      >
        <Text>{message.text}</Text>
      </View>
    </View>
  );
};

export default ChatBubble;

const styles = StyleSheet.create({
  profilePicture: {
    width: 30,
    height: 30,
    borderRadius: 15,
  },
  chatBubbleContainer: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    columnGap: 5,
  },
  chatBubble: {
    borderRadius: 20,
    padding: 7,
    maxWidth: '70%',
  },
});
