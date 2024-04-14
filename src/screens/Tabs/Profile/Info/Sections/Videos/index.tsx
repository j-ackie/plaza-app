import Error from '@/components/Error';
import Loading from '@/components/Loading';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, View } from 'react-native';
import useGetVideosByUserId from './useGetVideosByUserId';
import { User } from '@/__generated__/graphql';
import { FC } from 'react';
import VideoThumbnail from './VideoThumbnail';

interface VideosProps {
  user: User;
}

const Videos: FC<VideosProps> = ({ user }) => {
  const navigation = useNavigation();
  const { data, loading, error } = useGetVideosByUserId(parseInt(user.id));

  if (loading) return <Loading />;

  if (error) return <Error error={error} />;

  return (
    <View style={styles.container}>
      {data.videos.map((video) => (
        <VideoThumbnail video={video} />
      ))}
    </View>
  );
};

export default Videos;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});
