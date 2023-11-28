import { useState } from 'react';
import {
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import { Rating } from 'react-native-ratings';
import useCreateReview from './createReview';
import LoadingSpinner from '~/components/LoadingSpinner';
import { useNavigation } from 'expo-router';

const ProfileReviewInput = () => {
  const navigation = useNavigation();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [rating, setRating] = useState(0);

  const [createReview, { loading, error, data }] = useCreateReview();

  const handleSubmitReview = () => {
    createReview({
      variables: {
        review: {
          productID: 1,
          rating,
          title,
          description,
        },
      },
      onCompleted: () => {
        navigation.goBack();
      },
    });
  };

  if (loading) return <LoadingSpinner />;

  // if (!data || !data.review) return <Text>Something went wrong</Text>;

  return (
    <SafeAreaView>
      <View style={{ padding: 20 }}>
        <Rating
          startingValue={rating}
          ratingCount={5}
          fractions={0}
          onFinishRating={setRating}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Enter title here..."
          multiline
          value={title}
          onChangeText={setTitle}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Enter review here..."
          multiline
          value={description}
          onChangeText={setDescription}
        />
        <Pressable onPress={handleSubmitReview} style={styles.submitButton}>
          <Text>Submit</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default ProfileReviewInput;

const styles = StyleSheet.create({
  textInput: {
    borderWidth: 1,
    padding: 10,
  },
  submitButton: {
    backgroundColor: 'lightblue',
  },
});
