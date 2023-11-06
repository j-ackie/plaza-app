import { View, Pressable, Image, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { gql, useQuery } from '@apollo/client';

const ProfileVideos = () => {
  const query = gql`
    query GetVideos($userID: ID!) {
      videos(userID: $userID) {
        id
        userID
      }
    }
  `;

  const { loading, error, data } = useQuery(query, {
    variables: {
      userID: 1,
    },
  });

  const navigation = useNavigation();

  if (loading && !data)
    return (
      <View>
        <Text>{'Loading...'}</Text>
      </View>
    );
  if (error) return console.log(JSON.stringify(error, null, 2));

  return (
    <View>
      <View style={{ flexDirection: 'row', flexWrap: 'wrap', width: '100%' }}>
        {data.videos.map((data) => {
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

export default ProfileVideos;
