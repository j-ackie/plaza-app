import { View, Pressable, Image, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import LoadingSpinner from '~/components/LoadingSpinner';
import useLikedVideosById from './likedVideosById';

const ProfileLiked = () => {
  const navigation = useNavigation();
  const { loading, error, data } = useLikedVideosById(1);

  if (loading) return <LoadingSpinner />;

  if (error) return <Text>Something went wrong</Text>;

  return (
    <View>
      <View style={styles.container}>
        {data.likedVideos.map((data) => {
          return (
            <View
              key={data.id}
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

const styles = StyleSheet.create({
  container: { flexDirection: 'row', flexWrap: 'wrap', width: '100%' },
});
