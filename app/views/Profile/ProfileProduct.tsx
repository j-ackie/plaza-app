import { View, Pressable, Image } from 'react-native';
import { useNavigation } from 'expo-router';

const ProfileProduct = () => {
  let mockData = {
    username: 'username2',
    description: 'this is description',
    videoURI:
      'https://assets.mixkit.co/videos/preview/mixkit-a-girl-in-a-pool-holding-an-inflatable-beach-ball-1267-large.mp4',
    sellingItems: [
      {
        name: 'Beach ball',
        description: 'A beach ball',
        price: 2.5,
        imageURI:
          'https://dks.scene7.com/is/image/GolfGalaxy/19ITXU24GLSSYPNLBSWE?qlt=70&wid=600&fmt=pjpeg',
      },
      {
        name: 'Ray Bans - Sunglasses',
        description: 'Used sunglasses, blocks out the sun',
        price: 200.0,
        imageURI:
          'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQnViDD6F2gonZQ26mmbjmtP0eQpoTzRdo9V8bz99_udISEKl6rvWwX_owa18wEU9Glkqd03YKervy1kqT6DWvnScw1QGSQwb_x3FQ2ppiXUtZDpOy73PPLpcDWFGU-cnFo4w&usqp=CAc',
      },
    ],
  };

  const navigation = useNavigation();

  return (
    <View>
      <View style={{ flexDirection: 'row', flexWrap: 'wrap', width: '100%' }}>
        {mockData.sellingItems.map((data) => {
          return (
            <View style={{ width: '50%', height: 200, borderWidth: 1 }}>
              <Pressable
                style={{ width: '100%', height: '100%', padding: 20 }}
                onPress={() => {
                  navigation.navigate('ProfileProductListing', { data: data });
                }}
              >
                <Image
                  source={{
                    uri: data.imageURI,
                  }}
                  style={{ width: '100%', height: '100%' }}
                  resizeMode="cover"
                />
              </Pressable>
            </View>
          );
        })}
      </View>
    </View>
  );
};

export default ProfileProduct;
