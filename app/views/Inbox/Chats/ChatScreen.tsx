import { gql, useMutation, useQuery, useSubscription } from '@apollo/client';
import { FC, useEffect, useState } from 'react';
import { Pressable, Text, TextInput, View } from 'react-native';
import ChatBubble from './ChatBubble';
import { StyleSheet } from 'react-native';

const GET = gql`
  query getMessages($chatID: ID!) {
    messages(chatID: $chatID) {
      id
      chatID
      createdAt
      sender {
        id
        displayName
        username
        description
        profilePictureURI
      }
      text
    }
  }
`;

const SEND = gql`
  mutation sendMessage($message: MessageCreateInput!) {
    createMessage(message: $message) {
      id
      text
    }
  }
`;

const MESSAGES_SUBSCRIPTION = gql`
  subscription OnMessageAdded($chatID: ID!) {
    messageAdded(chatID: $chatID) {
      id
      text
      sender {
        id
        displayName
        description
        username
        profilePictureURI
      }
      chatID
      createdAt
    }
  }
`;

const ChatScreen: FC = () => {
  const [messageInput, setMessageInput] = useState('');

  const { loading, data, subscribeToMore } = useQuery(GET, {
    variables: {
      chatID: 1,
    },
  });

  const [createMessage] = useMutation(SEND);

  useEffect(() => {
    subscribeToMore({
      document: MESSAGES_SUBSCRIPTION,
      variables: {
        chatID: 1,
      },
      updateQuery: (prev, { subscriptionData }) => {
        if (!subscriptionData.data) return prev;
        console.log('HELLO?');
        const newMessage = subscriptionData.data.messageAdded;

        return Object.assign({}, prev, {
          messages: [newMessage, ...prev.messages],
        });
      },
    });
  }, []);

  return (
    <View style={styles.container}>
      {data?.messages
        ?.slice()
        .reverse()
        .map((message) => <ChatBubble key={message.id} message={message} />)}
      <View style={styles.input}>
        <TextInput
          style={styles.inputText}
          value={messageInput}
          onChangeText={setMessageInput}
        />
        <Pressable
          onPress={() =>
            createMessage({
              variables: {
                message: {
                  chatID: 1,
                  text: messageInput,
                },
              },
            })
          }
        >
          <Text>Send</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default ChatScreen;

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  input: {
    borderWidth: 1,
    flexDirection: 'row',
  },
  inputText: {
    flex: 1,
  },
});
