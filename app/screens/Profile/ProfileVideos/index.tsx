import { View, Pressable, Image, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { gql, useQuery } from '@apollo/client';
import { useContext } from 'react';
import LoadingSpinner from '~/components/LoadingSpinner';
import useVideosByUserID from './videosByUserId';
import PLAZA_BW from '../../../../assets/plaza-bw.png';
const DEFAULT_IMAGE = Image.resolveAssetSource(PLAZA_BW).uri;

const ProfileVideos = () => {
  const navigation = useNavigation();
  const { loading, error, data } = useVideosByUserID(1);

  if (loading) return <LoadingSpinner />;

  if (error) return <Text>Something went wrong</Text>;

  return (
    <View style={styles.container}>
      {data.videos.map((data) => {
        console.log(data);
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
                  uri: data.thumbnailURL ? data.thumbnailURL : DEFAULT_IMAGE,
                }}
                style={{ width: '100%', height: '100%' }}
                resizeMode="cover"
              />
            </Pressable>
          </View>
        );
      })}
    </View>
  );
};

export default ProfileVideos;

const styles = StyleSheet.create({
  container: { flexDirection: 'row', flexWrap: 'wrap' },
});
