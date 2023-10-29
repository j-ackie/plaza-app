import { View, Image, Text, StyleSheet } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import useUserById from './userById';
import { useCallback } from 'react';

type ProfileHeaderProps = {
  user: object;
};

const ProfileHeader: React.FC<ProfileHeaderProps> = ({ user }) => {
  if (!user) return null;

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
      <Image
        source={{
          uri: user.profilePictureURI,
        }}
        style={{ width: 120, height: 120, marginTop: 15, borderRadius: 60 }}
        resizeMethod="auto"
      />
      <Text style={{ fontWeight: '800', fontSize: 15, marginTop: 10 }}>
        @{user.username}
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
          <Text style={styles.infoContainerHighlight}>173</Text>
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
          <Text style={styles.infoContainerHighlight}>265</Text>
          <Text>Followers</Text>
        </View>
      </View>

      <View style={{ marginTop: 20, marginBottom: 20 }}>
        <Text style={{ textAlign: 'center', fontSize: 15, color: '#767676' }}>
          {user.description}
        </Text>
      </View>
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
});
