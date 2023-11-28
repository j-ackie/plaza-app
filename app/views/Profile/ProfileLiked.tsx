import { View, Pressable, Image, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { gql, useQuery } from '@apollo/client';
import LoadingSpinner from '~/components/LoadingSpinner';

const ProfileLiked = () => {
  const GET_LIKED = gql`
    query Query($userId: Int!) {
      likedVideos(userID: $userId) {
        id
        userID
        videoID
      }
    }
  `;

  const navigation = useNavigation();
  const { loading, error, data } = useQuery(GET_LIKED, {
    variables: { userId: 1 },
  });

  if (loading) return <LoadingSpinner />;

  if (error) return console.log(JSON.stringify(error, null, 2));

  if (!data || !data.likedVideos) return <Text>Something went wrong...</Text>;

  return (
    <View>
      <View style={{ flexDirection: 'row', flexWrap: 'wrap', width: '100%' }}>
        {data.likedVideos.map((data) => {
          return (
            <View
              key={data._id}
              style={{ width: '33.33333%', height: 200, borderWidth: 1 }}
            >
              <Pressable
                style={{ width: '100%', height: '100%' }}
                onPress={() => {
                  navigation.navigate('ProfilePost', { data: data });
                }}
              >
                <Image
                  source={{
                    uri: data.imageURL,
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

export default ProfileLiked;
