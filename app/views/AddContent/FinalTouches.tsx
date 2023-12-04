import { FC, useState } from 'react';
import {
  View,
  Image,
  StyleSheet,
  TextInput,
  Text,
  Switch,
  Pressable,
} from 'react-native';
import ItemList from '~/components/ItemList';
import useCreateVideo from './createVideo';
import LoadingSpinner from '~/components/LoadingSpinner';
import * as Filesystem from 'expo-file-system';
import * as MediaLibrary from 'expo-media-library';
import { Buffer } from 'buffer';
import mime from 'mime';

const mockData = [
  {
    _id: '1',
    sellerID: '3',
    name: 'Handbag',
    description: 'Barely used.',
    price: 24.67,
    quantity: 2,
    imageURL:
      'https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/51LhHqu9akL._AC_UY1000_.jpg',
    videoURI:
      'https://assets.mixkit.co/videos/preview/mixkit-man-doing-tricks-with-roller-skates-in-a-parking-lot-34553-large.mp4',
    timestamp: '2023-04-07T22:24:39.000+00:00',
  },
  {
    _id: '1',
    sellerID: '3',
    name: 'Handbag',
    description: 'Barely used.',
    price: 24.67,
    quantity: 2,
    imageURL:
      'https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/51LhHqu9akL._AC_UY1000_.jpg',
    videoURI:
      'https://assets.mixkit.co/videos/preview/mixkit-man-doing-tricks-with-roller-skates-in-a-parking-lot-34553-large.mp4',
    timestamp: '2023-04-07T22:24:39.000+00:00',
  },
  {
    _id: '1',
    sellerID: '3',
    name: 'backpack',
    description: 'Barely used.',
    price: 24.67,
    quantity: 2,
    imageURL:
      'https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/51LhHqu9akL._AC_UY1000_.jpg',
    videoURI:
      'https://assets.mixkit.co/videos/preview/mixkit-man-doing-tricks-with-roller-skates-in-a-parking-lot-34553-large.mp4',
    timestamp: '2023-04-07T22:24:39.000+00:00',
  },
  {
    _id: '1',
    sellerID: '3',
    name: 'backpack',
    description: 'Barely used.',
    price: 24.67,
    quantity: 2,
    imageURL:
      'https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/51LhHqu9akL._AC_UY1000_.jpg',
    videoURI:
      'https://assets.mixkit.co/videos/preview/mixkit-man-doing-tricks-with-roller-skates-in-a-parking-lot-34553-large.mp4',
    timestamp: '2023-04-07T22:24:39.000+00:00',
  },
  {
    _id: '1',
    sellerID: '3',
    name: 'backpack',
    description: 'Barely used.',
    price: 24.67,
    quantity: 2,
    imageURL:
      'https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/51LhHqu9akL._AC_UY1000_.jpg',
    videoURI:
      'https://assets.mixkit.co/videos/preview/mixkit-man-doing-tricks-with-roller-skates-in-a-parking-lot-34553-large.mp4',
    timestamp: '2023-04-07T22:24:39.000+00:00',
  },
  {
    _id: '1',
    sellerID: '3',
    name: 'backpack',
    description: 'Barely used.',
    price: 24.67,
    quantity: 2,
    imageURL:
      'https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/51LhHqu9akL._AC_UY1000_.jpg',
    videoURI:
      'https://assets.mixkit.co/videos/preview/mixkit-man-doing-tricks-with-roller-skates-in-a-parking-lot-34553-large.mp4',
    timestamp: '2023-04-07T22:24:39.000+00:00',
  },
  {
    _id: '1',
    sellerID: '3',
    name: 'backpack',
    description: 'Barely used.',
    price: 24.67,
    quantity: 2,
    imageURL:
      'https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/51LhHqu9akL._AC_UY1000_.jpg',
    videoURI:
      'https://assets.mixkit.co/videos/preview/mixkit-man-doing-tricks-with-roller-skates-in-a-parking-lot-34553-large.mp4',
    timestamp: '2023-04-07T22:24:39.000+00:00',
  },
  {
    _id: '1',
    sellerID: '3',
    name: 'backpack',
    description: 'Barely used.',
    price: 24.67,
    quantity: 2,
    imageURL:
      'https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/51LhHqu9akL._AC_UY1000_.jpg',
    videoURI:
      'https://assets.mixkit.co/videos/preview/mixkit-man-doing-tricks-with-roller-skates-in-a-parking-lot-34553-large.mp4',
    timestamp: '2023-04-07T22:24:39.000+00:00',
  },
  {
    _id: '1',
    sellerID: '3',
    name: 'backpack',
    description: 'Barely used.',
    price: 24.67,
    quantity: 2,
    imageURL:
      'https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/51LhHqu9akL._AC_UY1000_.jpg',
    videoURI:
      'https://assets.mixkit.co/videos/preview/mixkit-man-doing-tricks-with-roller-skates-in-a-parking-lot-34553-large.mp4',
    timestamp: '2023-04-07T22:24:39.000+00:00',
  },
  {
    _id: '1',
    sellerID: '3',
    name: 'backpack',
    description: 'Barely used.',
    price: 24.67,
    quantity: 2,
    imageURL:
      'https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/51LhHqu9akL._AC_UY1000_.jpg',
    videoURI:
      'https://assets.mixkit.co/videos/preview/mixkit-man-doing-tricks-with-roller-skates-in-a-parking-lot-34553-large.mp4',
    timestamp: '2023-04-07T22:24:39.000+00:00',
  },
  {
    _id: '1',
    sellerID: '3',
    name: 'backpack',
    description: 'Barely used.',
    price: 24.67,
    quantity: 2,
    imageURL:
      'https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/51LhHqu9akL._AC_UY1000_.jpg',
    videoURI:
      'https://assets.mixkit.co/videos/preview/mixkit-man-doing-tricks-with-roller-skates-in-a-parking-lot-34553-large.mp4',
    timestamp: '2023-04-07T22:24:39.000+00:00',
  },
];

const FinalTouches: FC = ({ navigation, route }) => {
  const [allowComments, setAllowComments] = useState(true);
  const [showLikeCount, setShowLikeCount] = useState(true);
  const [description, setDescription] = useState('');
  const [isUploading, setIsUploading] = useState(false);
  const { asset } = route.params;
  const selectedProducts = mockData;

  const onCompleted = async (data) => {
    const assetInfo = await MediaLibrary.getAssetInfoAsync(asset);
    const localURI = assetInfo.localUri;
    const base64Payload = await Filesystem.readAsStringAsync(localURI, {
      encoding: 'base64',
    });

    const payload = Buffer.from(base64Payload, 'base64');
    const response = await fetch(data.createVideo.videoURL, {
      method: 'PUT',
      body: payload,
      headers: {
        // right now, it's only using video/mov - replace it later with other mimetypes
        'Content-Type': mime.getType(assetInfo.filename),
      },
    });
    if (response.status === 200) {
      navigation.navigate('profile');
    } else {
      setIsUploading(false);
    }
  };

  const [createVideo, { data, loading, error }] = useCreateVideo(onCompleted);

  const uploadVideo = async () => {
    setIsUploading(true);
    createVideo({
      variables: {
        video: {
          description,
          // replace with whatever product ids are selected
          productIDs: [1],
        },
      },
    });
  };

  if (loading || isUploading) return <LoadingSpinner />;

  if (error) return <Text>Something went wrong</Text>;

  return (
    <View style={{ justifyContent: 'space-between', flex: 1 }}>
      <View style={styles.assetProductsContainer}>
        <View style={styles.containers}>
          <Image
            source={{
              uri: asset.uri,
            }}
            style={{ width: 100, height: 300 }}
          />
        </View>
        <View style={styles.verticalLine} />
        <View style={styles.containers}>
          <ItemList items={selectedProducts} showDescription={false} />
        </View>
      </View>
      <View style={{ margin: 20 }}>
        <TextInput
          style={[styles.descriptionInput, styles.form]}
          placeholder="Add a description..."
          value={description}
          onChangeText={setDescription}
        />
        <View style={styles.form}>
          <Text>Allow comments</Text>
          <Switch
            value={allowComments}
            onValueChange={() => setAllowComments(!allowComments)}
          />
        </View>
        <View
          style={[
            styles.form,
            { borderBottomStartRadius: 10, borderBottomEndRadius: 10 },
          ]}
        >
          <Text>Show like count</Text>
          <Switch
            value={showLikeCount}
            onValueChange={() => setShowLikeCount(!showLikeCount)}
          />
        </View>
      </View>
      <View style={styles.buttonsContainer}>
        <Pressable style={styles.button}>
          <Text>Preview</Text>
        </Pressable>
        <Pressable style={styles.button} onPress={uploadVideo}>
          <Text>Publish</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default FinalTouches;

const styles = StyleSheet.create({
  assetProductsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    height: 300,
  },
  containers: {
    flex: 1,
    alignItems: 'center',
  },
  verticalLine: {
    width: 4,
    height: 300,
    borderRadius: 5,
    backgroundColor: 'black',
  },
  form: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    borderWidth: 1,
    marginTop: -1,
  },
  descriptionInput: {
    borderTopStartRadius: 10,
    borderTopEndRadius: 10,
  },
  buttonsContainer: {
    flexDirection: 'row',
    marginBottom: 50,
    gap: 10,
    justifyContent: 'center',
  },
  button: {
    alignItems: 'center',
    borderWidth: 2,
    borderRadius: 10,
    padding: 15,
    width: '40%',
  },
});
