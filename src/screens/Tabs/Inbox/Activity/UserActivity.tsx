import { FC } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Bold from '@/components/Bold';
import ItemImage, { ItemImageSize } from '@/components/Item/ItemImage';
import ProfilePicture from '@/components/ProfilePicture';
import PlazaText from '@/components/PlazaText';

type UserActivityProps = {
  user: unknown;
  // add prop for the type of activity
};

const UserActivity: FC<UserActivityProps> = ({ user }) => {
  return (
    <View style={styles.container}>
      <ProfilePicture size={50} uri={user.profilePictureURI} />
      <View style={styles.activity}>
        <Bold>{user.username}</Bold>
        <PlazaText>has liked your video</PlazaText>
      </View>
      <ItemImage
        uri="https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQnViDD6F2gonZQ26mmbjmtP0eQpoTzRdo9V8bz99_udISEKl6rvWwX_owa18wEU9Glkqd03YKervy1kqT6DWvnScw1QGSQwb_x3FQ2ppiXUtZDpOy73PPLpcDWFGU-cnFo4w&usqp=CAc"
        size={ItemImageSize.SMALL}
      />
    </View>
  );
};

export default UserActivity;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  activity: {
    flex: 1,
    gap: 5,
    marginLeft: 10,
    marginRight: 10,
  },
});
