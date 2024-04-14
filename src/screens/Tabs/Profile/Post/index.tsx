import useGetProfileVideoById from './useGetVideoById';
import { StackScreenProps } from '@react-navigation/stack';
import { ProfileStackParamList } from '..';
import Loading from '@/components/Loading';
import Error from '@/components/Error';
import VideoCard from '@/components/VideoCard';

const Post = ({ route }: StackScreenProps<ProfileStackParamList, 'Post'>) => {
  const { data, loading, error } = useGetProfileVideoById(route.params.videoId);

  if (loading) return <Loading />;

  if (error) return <Error error={error} />;

  return <VideoCard video={data.video} />;
};

export default Post;
