import { FC } from 'react';
import { StyleSheet, Text, View } from 'react-native';

type ChatBubbleProps = {
  message: unknown;
};

const ChatBubble: FC<ChatBubbleProps> = ({ message }) => {
  const isUser = message.sender.id === '1';

  return (
    <View
      key={message.id}
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
  );
};

export default ChatBubble;

const styles = StyleSheet.create({
  chatBubble: {
    borderRadius: 20,
    padding: 10,
    maxWidth: '70%',
  },
});
