import { View, Image, Text, StyleSheet } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const ProfileHeader = () => {
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
          uri: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQnViDD6F2gonZQ26mmbjmtP0eQpoTzRdo9V8bz99_udISEKl6rvWwX_owa18wEU9Glkqd03YKervy1kqT6DWvnScw1QGSQwb_x3FQ2ppiXUtZDpOy73PPLpcDWFGU-cnFo4w&usqp=CAc',
        }}
        style={{ width: 120, height: 120, marginTop: 15, borderRadius: 60 }}
        resizeMethod="auto"
      />
      <Text style={{ fontWeight: '800', fontSize: 15, marginTop: 10 }}>
        @yourusername
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

      <View style={{ marginTop: 10 }}>
        <Text style={{ textAlign: 'center', fontSize: 15, color: '#767676' }}>
          This is description {'\n'}
          There can only be three lines {'\n'}I am so alone {'\n'}
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
