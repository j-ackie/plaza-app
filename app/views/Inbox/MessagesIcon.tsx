import { FC } from 'react';
import { Pressable } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

type MessagesIconProps = {
  navigation: unknown;
};

const MessagesIcon: FC<MessagesIconProps> = ({ navigation }) => {
  return (
    <Pressable
      onPress={() => navigation.navigate('Chats')}
      style={{ marginRight: 10 }}
    >
      <Ionicons name="chatbox-ellipses-outline" size={35} />
    </Pressable>
  );
};

export default MessagesIcon;
