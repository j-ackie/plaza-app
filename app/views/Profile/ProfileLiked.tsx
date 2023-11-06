import { View, Pressable, Image, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { gql, useQuery } from '@apollo/client';
const mockData = [];
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

  const { loading, error, data } = useQuery(GET_LIKED, {
    variables: { userId: 1 },
  });

  if (loading && !data)
    return (
      <View>
        <Text>{'Loading...'}</Text>
      </View>
    );
  if (error) return console.log(JSON.stringify(error, null, 2));

  const navigation = useNavigation();
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
