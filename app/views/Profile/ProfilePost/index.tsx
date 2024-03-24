import { View, Text, Pressable, SafeAreaView } from 'react-native';
import { useNavigation } from 'expo-router';
import LoadingSpinner from '~/components/LoadingSpinner';
import FeedPost from '../../Feed/FeedPost';
import useVideoById from './getVideoById';
import VideoCard from '~/components/VideoCard2';

const ProfilePost = ({ route }) => {
  const navigation = useNavigation();

  const params = route.params?.data;
  const { loading, error, data } = useVideoById(params.id);

  if (loading) return <LoadingSpinner />;

  if (error) return <Text>Something went wrong</Text>;

  data.video.videoURI = data.video.videoURL;
  data.video.sellingItems = data.video.products.map((product) => ({
    imageURI: product.imageURIs[0],
    price: product.price,
    quantity: product.quantity,
    description: product.description,
    name: product.name,
  }));
  data.video.username = 'Test';

  const postInfo = {
    ...data.video,
    videoURI: data.video.videoURL,
    sellingItems: data.video.products.map((product) => ({
      imageURI: product.imageURIs[0],
      price: product.price,
      quantity: product.quantity,
      description: product.description,
      name: product.name,
    })),
    user: {
      id: 1,
      username: 'bob',
    },
  };

  const res = data.video;
  return (
    <View style={{ flexDirection: 'column', height: '100%' }}>
      <SafeAreaView style={{ backgroundColor: 'white' }}>
        <View
          style={{ flexDirection: 'row', alignItems: 'center', padding: 10 }}
        >
          <View
            style={{
              position: 'absolute',
              height: '100%',
              justifyContent: 'center',
              zIndex: 99,
            }}
          >
            <Pressable
              style={{ paddingHorizontal: 20 }}
              onPress={() => {
                navigation.goBack();
              }}
            >
              <Text style={{ color: 'blue' }}>Back</Text>
            </Pressable>
          </View>

          <View
            style={{
              width: '100%',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Text>{res.username}</Text>
          </View>
        </View>
      </SafeAreaView>
      <VideoCard videoInfo={postInfo} />
    </View>
  );
};

export default ProfilePost;
