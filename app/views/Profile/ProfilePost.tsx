import { View, Text, Pressable } from 'react-native';
import { useNavigation } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import VideoCard from '~/components/VideoCard/VideoCard';

const ProfilePost = ({ route }) => {
  // const navigation = useNavigation();
  const data = route.params?.data;
  const navigation = useNavigation();
  return (
    <View style={{ flexDirection: 'column', height: '100%' }}>
      <SafeAreaView style={{ backgroundColor: 'white' }}>
        <View
          style={{ flexDirection: 'row', alignItems: 'center', padding: 10 }}
        >
          <View
            style={{
              position: 'absolute',
              height: '100%',
              justifyContent: 'center',
              zIndex: 99,
            }}
          >
            <Pressable
              style={{ paddingHorizontal: 20 }}
              onPress={() => {
                navigation.goBack();
              }}
            >
              <Text style={{ color: 'blue' }}>Back</Text>
            </Pressable>
          </View>

          <View
            style={{
              width: '100%',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            {/* <Text style={{ fontSize: 18 }}>{data.name}</Text> */}
            <Text>{data.username}</Text>
          </View>
        </View>
      </SafeAreaView>

      <View style={{ width: '100%', flexGrow: 1 }}>
        <VideoCard
          videoIndex={0}
          currViewableIndex={0}
          videoURI={data.videoURL}
        />
      </View>

      <View style={{ height: 100 }}>
        <Text>{data.description}</Text>
      </View>
    </View>
  );
};

export default ProfilePost;
