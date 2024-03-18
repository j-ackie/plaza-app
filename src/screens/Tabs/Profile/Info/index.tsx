import { SafeAreaView, View } from 'react-native';
import useGetUserById from './useGetUserById';
import { StackScreenProps } from '@react-navigation/stack';
import { ProfileStackParamList } from '..';
import Loading from '@/components/Loading';
import Error from '@/components/Error';

const Info = ({
  navigation,
  route,
}: StackScreenProps<ProfileStackParamList, 'Info'>) => {
  const { data, loading, error } = useGetUserById(route.params.userId);

  if (loading) return <Loading />;

  if (error) return <Error error={error} />;

  return (
    <SafeAreaView>
      <View></View>
    </SafeAreaView>
  );
};

export default Info;
