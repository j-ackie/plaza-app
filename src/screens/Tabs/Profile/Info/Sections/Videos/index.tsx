import Error from '@/components/Error';
import Loading from '@/components/Loading';
import { useNavigation } from '@react-navigation/native';
import {
  FlatList,
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';
import useGetVideosByUserId from './useGetVideosByUserId';
import { User } from '@/__generated__/graphql';
import { FC, useCallback } from 'react';
import VideoThumbnail from './VideoThumbnail';

interface VideosProps {
  user: User;
}

const Videos: FC<VideosProps> = ({ user }) => {
  const navigation = useNavigation();
  const { data, loading, error } = useGetVideosByUserId(parseInt(user.id));

  const renderItem = useCallback(
    ({ item }) => <VideoThumbnail video={item} />,
    []
  );
  console.log(data);

  if (loading) return <Loading />;

  if (error) return <Error error={error} />;

  return (
    <View style={{ flex: 1, backgroundColor: 'green' }}>
      <FlatList data={data.videos} numColumns={3} renderItem={renderItem} />
    </View>
  );
};

export default Videos;

const styles = StyleSheet.create({
  container: {},
});
