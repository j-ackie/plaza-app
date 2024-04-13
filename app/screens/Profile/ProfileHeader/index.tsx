import { View, Text, StyleSheet, Pressable } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import useUpdateProfilePicture from '../../Settings/updateProfilePicture';
import ProfilePicture from './ProfilePicture';
import { useCreateFollowing, useDeleteFollowing, useFollowersById, useFollowingById, useGetIsFollowing } from './followingById';

type ProfileHeaderProps = {
  user: object;
};

const ProfileHeader: React.FC<ProfileHeaderProps> = ({ user }) => {
  const [updateProfilePicture, { loading, error, data }] =
    useUpdateProfilePicture();

  if (!user) return null;

  const isFollowing = useGetIsFollowing(parseInt(user.id));
  const following = useFollowingById(parseInt(user.id))
  const follower = useFollowersById(parseInt(user.id))
  const [createFollow, {}] = useCreateFollowing()
  const [deleteFollow, {}] = useDeleteFollowing()

  if (!isFollowing.data || !following.data || !follower.data) return null;

  let rating = 4;
  return (
    <View
      style={{
        width: '100%',
        flexDirection: 'column',
        backgroundColor: 'transparent',
        alignItems: 'center',
      }}
    >
      <ProfilePicture user={user} />
      <Text style={{ fontWeight: '800', fontSize: 15, marginTop: 10 }}>
        {user.displayName}
      </Text>
      <View
        style={{
          width: '100%',
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          marginTop: 10,
        }}
      >
        <View style={styles.infoContainer}>
          <Text style={styles.infoContainerHighlight}>{following.data.followers.length}</Text>
          <Text>Following</Text>
        </View>

        <View style={styles.infoContainer}>
          <Text style={styles.infoContainerHighlight}>42 sales</Text>
          <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
            {[...Array(5)].map(() => {
              for (let i = 0; i < 5; i++) {
                let element = null;
                if (rating - 1 >= 0) {
                  rating -= 1;
                  element = <MaterialCommunityIcons name={'star'} size={20} />;
                } else if (rating - 0.5 >= 0) {
                  rating -= 0.5;
                  element = (
                    <MaterialCommunityIcons name={'star-half-full'} size={20} />
                  );
                } else {
                  element = (
                    <MaterialCommunityIcons name={'star-outline'} size={20} />
                  );
                }
                return element;
              }
            })}
          </View>
        </View>

        <View style={styles.infoContainer}>
          <Text style={styles.infoContainerHighlight}>{follower.data.followers.length}</Text>
          <Text>Followers</Text>
        </View>
      </View>

      <View style={{ marginTop: 20, marginBottom: 20 }}>
        <Text style={{ textAlign: 'center', fontSize: 15, color: '#767676' }}>
          {user.description}
        </Text>
      </View>

      <Pressable style={styles.buttonStyle} onPress={() => {
        // console.log(isFollowing.data)
        if(isFollowing.data.isFollowing)[
          deleteFollow({variables : { follow: { followingID: parseInt(user.id) } }})
        ]
        else{
          createFollow({variables : { follow: { followingID: parseInt(user.id) } }})
        }
      }}>
        <Text>
          {isFollowing.data.isFollowing ? "Unfollow" : "Follow"}
        </Text>
      </Pressable>
    </View>
  );
};

export default ProfileHeader;

const styles = StyleSheet.create({
  infoContainer: {
    flexDirection: 'column',
    alignItems: 'center',
  },

  infoContainerHighlight: {
    fontWeight: '600',
  },

  buttonStyle : {
    marginBottom: 10,
    paddingVertical: 4,
    paddingHorizontal: 15,
    borderWidth: 2,
    borderRadius: 5
  }
});
