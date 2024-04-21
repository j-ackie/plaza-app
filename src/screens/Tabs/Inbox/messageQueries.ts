import { gql, useMutation, useQuery } from "@apollo/client";

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

const useGetMessages = (chatID: number) => {
  return useQuery(GET, {
    variables: {
      chatID,
    },
  });
};

const useSendMessage = () => {
  return useMutation(SEND);
};

export { useGetMessages, useSendMessage, MESSAGES_SUBSCRIPTION };