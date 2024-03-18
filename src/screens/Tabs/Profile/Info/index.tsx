import { SafeAreaView, View } from 'react-native';
import useGetUserById from './useGetUserById';
import { StackScreenProps } from '@react-navigation/stack';
import { ProfileStackParamList } from '..';
import Loading from '@/components/Loading';
import Error from '@/components/Error';
import PlazaText from '@/components/PlazaText';
import Header from './Header';
import Sections from './Sections';

const Info = ({
  navigation,
  route,
}: StackScreenProps<ProfileStackParamList, 'Info'>) => {
  const { data, loading, error } = useGetUserById(route.params.userId);

  if (loading) return <Loading />;

  if (error) return <Error error={error} />;

  return (
    <>
      <Header user={data.user} />
      <Sections user={data.user} />
    </>
  );
};

export default Info;
