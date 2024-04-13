import { useState } from 'react';
import {
  Image,
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
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import * as Filesystem from 'expo-file-system';
import * as MediaLibrary from 'expo-media-library';
import { Buffer } from 'buffer';
import mime from 'mime';
import upload from '~/utils/upload';

const ProfileReviewInput = ({ route }) => {
  const navigation = useNavigation();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [rating, setRating] = useState(0);
  const [isUploading, setIsUploading] = useState(false);

  const [createReview, { loading, error, data }] = useCreateReview();

  if (loading || isUploading) return <LoadingSpinner />;

  if (error) return <Text>{error.message}</Text>;

  const { assets } = route.params;

  const handleSubmitReview = () => {
    setIsUploading(true);
    createReview({
      variables: {
        review: {
          productID: 14,
          rating,
          title,
          description,
        },
      },
      onCompleted: async (data) => {
        const response = await upload(assets[0], data.createReview.uploadURI);
        if (response.ok) {
          navigation.goBack();
        } else {
          console.log(response);
          setIsUploading(false);
        }
      },
    });
  };

  const handlePress = () => {
    navigation.navigate('Library', { nextRoute: 'ProfileReviewInput' });
  };

  console.log(assets);

  return (
    <SafeAreaView>
      <View style={{ padding: 20 }}>
        <Rating
          startingValue={rating}
          ratingCount={5}
          fractions={0}
          onFinishRating={setRating}
        />
        <View style={styles.assetsContainer}>
          {assets &&
            assets.map((asset) => (
              <Image
                key={asset.id}
                source={{
                  uri: asset.uri,
                }}
                style={styles.asset}
              />
            ))}
          <Pressable
            style={[styles.uploadImage, { width: assets ? 100 : '100%' }]}
            onPress={handlePress}
          >
            <MaterialCommunityIcons name="upload" size={40} />
          </Pressable>
        </View>
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
  uploadImage: {
    backgroundColor: 'lightgrey',
    height: 100,
    borderRadius: 5,
    borderWidth: 1,
    borderStyle: 'dashed',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textInput: {
    borderWidth: 1,
    padding: 10,
  },
  submitButton: {
    backgroundColor: 'lightblue',
  },
  assetsContainer: {
    flexDirection: 'row',
    gap: 10,
  },
  asset: {
    width: 100,
    height: 100,
    borderRadius: 5,
  },
});
