import { View, Text, Pressable, SafeAreaView } from 'react-native';
import { useNavigation } from 'expo-router';
import VideoCard from '~/components/VideoCard/VideoCard';
import { gql, useQuery } from '@apollo/client';
import LoadingSpinner from '~/components/LoadingSpinner';

const ProfilePost = ({ route }) => {
  const navigation = useNavigation();
  const query = gql`
    query Query($videoId: ID!) {
      video(videoID: $videoId) {
        description
        id
        userID
        videoURL
      }
    }
  `;

  const params = route.params?.data;
  const { loading, error, data } = useQuery(query, {
    variables: {
      videoId: params.id,
    },
  });

  console.log(data);
  if (loading) return <LoadingSpinner />;

  if (error) return <Text>Something went wrong</Text>;

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
            {/* <Text style={{ fontSize: 18 }}>{data.name}</Text> */}
            <Text>{res.username}</Text>
          </View>
        </View>
      </SafeAreaView>

      <View style={{ width: '100%', flexGrow: 1 }}>
        <VideoCard
          videoIndex={0}
          currViewableIndex={0}
          videoURI={res.videoURL}
        />
      </View>

      <View style={{ height: 100 }}>
        <Text>{res.description}</Text>
      </View>
    </View>
  );
};

export default ProfilePost;
