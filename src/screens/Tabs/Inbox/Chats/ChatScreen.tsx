import { gql, useMutation, useQuery } from '@apollo/client';
import { FC, useEffect, useRef, useState } from 'react';
import { Pressable, ScrollView, TextInput, View } from 'react-native';
import ChatBubble from './ChatBubble';
import { StyleSheet } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';

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
  const chatBubblesRef = useRef<ScrollView>(null);

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
        const newMessage = subscriptionData.data.messageAdded;

        return Object.assign({}, prev, {
          messages: [newMessage, ...prev.messages],
        });
      },
    });
  }, []);

  const messages = [
    {
      id: 1,
      chatID: 1,
      createdAt: 'now',
      sender: {
        id: '2',
        displayName: 'wow',
        username: 'wwwowo',
        description: 'WOAOWDO',
        profilePictureURI: 'awdwad',
      },
      text: 'AJAJJA',
    },
    {
      id: 1,
      chatID: 1,
      createdAt: 'now',
      sender: {
        id: '1',
        displayName: 'wow',
        username: 'wwwowo',
        description: 'WOAOWDO',
        profilePictureURI: 'awdwad',
      },
      text: 'AJAJJA',
    },
    {
      id: 1,
      chatID: 1,
      createdAt: 'now',
      sender: {
        id: '1',
        displayName: 'wow',
        username: 'wwwowo',
        description: 'WOAOWDO',
        profilePictureURI: 'awdwad',
      },
      text: 'AJAJJA',
    },
    {
      id: 1,
      chatID: 1,
      createdAt: 'now',
      sender: {
        id: '1',
        displayName: 'wow',
        username: 'wwwowo',
        description: 'WOAOWDO',
        profilePictureURI: 'awdwad',
      },
      text: 'AJAJJA',
    },
    {
      id: 1,
      chatID: 1,
      createdAt: 'now',
      sender: {
        id: '1',
        displayName: 'wow',
        username: 'wwwowo',
        description: 'WOAOWDO',
        profilePictureURI: 'awdwad',
      },
      text: 'AJAJJA',
    },
    {
      id: 1,
      chatID: 1,
      createdAt: 'now',
      sender: {
        id: '1',
        displayName: 'wow',
        username: 'wwwowo',
        description: 'WOAOWDO',
        profilePictureURI: 'awdwad',
      },
      text: 'AJAJJA',
    },
    {
      id: 1,
      chatID: 1,
      createdAt: 'now',
      sender: {
        id: '1',
        displayName: 'wow',
        username: 'wwwowo',
        description: 'WOAOWDO',
        profilePictureURI: 'awdwad',
      },
      text: 'AJAJJA',
    },
    {
      id: 1,
      chatID: 1,
      createdAt: 'now',
      sender: {
        id: '1',
        displayName: 'wow',
        username: 'wwwowo',
        description: 'WOAOWDO',
        profilePictureURI: 'awdwad',
      },
      text: 'AJAJJA',
    },
    {
      id: 1,
      chatID: 1,
      createdAt: 'now',
      sender: {
        id: '1',
        displayName: 'wow',
        username: 'wwwowo',
        description: 'WOAOWDO',
        profilePictureURI: 'awdwad',
      },
      text: 'AJAJJA',
    },
    {
      id: 1,
      chatID: 1,
      createdAt: 'now',
      sender: {
        id: '1',
        displayName: 'wow',
        username: 'wwwowo',
        description: 'WOAOWDO',
        profilePictureURI: 'awdwad',
      },
      text: 'AJAJJA',
    },
    {
      id: 1,
      chatID: 1,
      createdAt: 'now',
      sender: {
        id: '1',
        displayName: 'wow',
        username: 'wwwowo',
        description: 'WOAOWDO',
        profilePictureURI: 'awdwad',
      },
      text: 'AJAJJA',
    },
    {
      id: 1,
      chatID: 1,
      createdAt: 'now',
      sender: {
        id: '1',
        displayName: 'wow',
        username: 'wwwowo',
        description: 'WOAOWDO',
        profilePictureURI: 'awdwad',
      },
      text: 'AJAJJA',
    },
    {
      id: 1,
      chatID: 1,
      createdAt: 'now',
      sender: {
        id: '1',
        displayName: 'wow',
        username: 'wwwowo',
        description: 'WOAOWDO',
        profilePictureURI: 'awdwad',
      },
      text: 'AJAJJA',
    },
    {
      id: 1,
      chatID: 1,
      createdAt: 'now',
      sender: {
        id: '1',
        displayName: 'wow',
        username: 'wwwowo',
        description: 'WOAOWDO',
        profilePictureURI: 'awdwad',
      },
      text: 'AJAJJA',
    },
    {
      id: 1,
      chatID: 1,
      createdAt: 'now',
      sender: {
        id: '1',
        displayName: 'wow',
        username: 'wwwowo',
        description: 'WOAOWDO',
        profilePictureURI: 'awdwad',
      },
      text: 'AJAJJA',
    },
    {
      id: 1,
      chatID: 1,
      createdAt: 'now',
      sender: {
        id: '1',
        displayName: 'wow',
        username: 'wwwowo',
        description: 'WOAOWDO',
        profilePictureURI: 'awdwad',
      },
      text: 'AJAJJA',
    },
    {
      id: 1,
      chatID: 1,
      createdAt: 'now',
      sender: {
        id: '1',
        displayName: 'wow',
        username: 'wwwowo',
        description: 'WOAOWDO',
        profilePictureURI: 'awdwad',
      },
      text: 'AJAJJA',
    },
    {
      id: 1,
      chatID: 1,
      createdAt: 'now',
      sender: {
        id: '1',
        displayName: 'wow',
        username: 'wwwowo',
        description: 'WOAOWDO',
        profilePictureURI: 'awdwad',
      },
      text: 'AJAJJA',
    },
    {
      id: 1,
      chatID: 1,
      createdAt: 'now',
      sender: {
        id: '1',
        displayName: 'wow',
        username: 'wwwowo',
        description: 'WOAOWDO',
        profilePictureURI: 'awdwad',
      },
      text: 'AJAJJA',
    },
    {
      id: 1,
      chatID: 1,
      createdAt: 'now',
      sender: {
        id: '1',
        displayName: 'wow',
        username: 'wwwowo',
        description: 'WOAOWDO',
        profilePictureURI: 'awdwad',
      },
      text: 'AJAJJA',
    },
    {
      id: 1,
      chatID: 1,
      createdAt: 'now',
      sender: {
        id: '3',
        displayName: 'wow',
        username: 'wwwowo',
        description: 'WOAOWDO',
        profilePictureURI: 'awdwad',
      },
      text: 'AJAJJA',
    },
    {
      id: 1,
      chatID: 1,
      createdAt: 'now',
      sender: {
        id: '4',
        displayName: 'wow',
        username: 'wwwowo',
        description: 'WOAOWDO',
        profilePictureURI: 'awdwad',
      },
      text: 'AJAJWADJWAIDJWAUIDNUIWANDIUAWNDIUWANDIUJA',
    },
  ];

  return (
    <View style={styles.container}>
      <ScrollView
        ref={chatBubblesRef}
        style={styles.chatBubbles}
        contentContainerStyle={{ rowGap: 5 }}
        onContentSizeChange={() =>
          chatBubblesRef.current.scrollToEnd({ animated: false })
        }
      >
        {messages
          ?.slice()
          .reverse()
          .map((message) => <ChatBubble key={message.id} message={message} />)}
      </ScrollView>
      <View style={styles.input}>
        <TextInput
          style={styles.inputText}
          value={messageInput}
          onChangeText={setMessageInput}
          placeholder="Send a message..."
        />
        <Pressable
          onPress={() => {
            if (messageInput !== '') {
              createMessage({
                variables: {
                  message: {
                    chatID: 1,
                    text: messageInput,
                  },
                },
              });
            }
          }}
        >
          <Feather name="send" size={20} />
        </Pressable>
      </View>
    </View>
  );
};

export default ChatScreen;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flex: 1,
    justifyContent: 'space-between',
  },
  input: {
    borderWidth: 1,
    borderRadius: 20,
    padding: 10,
    flexDirection: 'row',
    backgroundColor: 'white',
  },
  inputText: {
    flex: 1,
  },
  chatBubbles: {
    marginBottom: 10,
  },
});
