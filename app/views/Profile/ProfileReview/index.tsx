import { Image } from 'react-native';
import { Text, View, SafeAreaView } from 'react-native';

const ProfileReview = ({ route }) => {
  const { review } = route.params;
  console.log(review);
  return (
    <SafeAreaView>
      <Text>{'⭐'.repeat(review.rating)}</Text>
      {review.imageURI && (
        <Image
          source={{ uri: review.imageURI }}
          style={{ width: 200, height: 200 }}
        />
      )}

      <Text>{review.title}</Text>
      <Text>{review.description}</Text>
    </SafeAreaView>
  );
};

export default ProfileReview;
