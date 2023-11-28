import { View, Pressable, Image, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { gql, useQuery } from '@apollo/client';
import { useContext } from 'react';

const ProfileVideos = () => {
  const query = gql`
    query Query($filters: VideoFilters!) {
      videos(filters: $filters) {
        id
        userID
        thumbnailURL
      }
    }
  `;

  const { loading, error, data } = useQuery(query, {
    variables: {
      filters: {
        userID: 1,
      },
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
                    uri: data.thumbnailURL,
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
