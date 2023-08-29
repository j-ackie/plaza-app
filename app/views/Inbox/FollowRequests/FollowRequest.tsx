import { FC } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import Bold from '~/components/Bold';
import ProfilePicture from '~/components/ProfilePicture';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

type FollowRequestProps = {
  request: unknown;
};

const FollowRequest: FC<FollowRequestProps> = ({ request }) => {
  return (
    <View style={styles.container}>
      <ProfilePicture size={50} uri={request.profilePictureURI} />
      <View style={styles.user}>
        <Bold>{request.username}</Bold>
        <Text>Dog</Text>
      </View>
      <View style={styles.buttons}>
        <Pressable style={styles.button}>
          <Text>Confirm</Text>
        </Pressable>
        <Pressable style={styles.button}>
          <MaterialCommunityIcons name="trash-can-outline" size={20} />
        </Pressable>
      </View>
    </View>
  );
};

export default FollowRequest;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  user: {
    flex: 1,
    gap: 5,
    marginLeft: 10,
    marginRight: 10,
  },
  buttons: {
    flexDirection: 'row',
    gap: 10,
  },
  button: {
    borderWidth: 2,
    borderRadius: 5,
    padding: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
