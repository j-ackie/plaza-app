import { FC } from 'react';
import { Image, View, StyleSheet, Pressable, Text } from 'react-native';
import ItemList from '~/components/ItemList';

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

const AddProducts: FC = ({ navigation, route }) => {
  const { asset } = route.params;

  return (
    <View style={styles.addProductsContainer}>
      <Image
        source={{
          uri: asset.uri,
        }}
        style={{ width: 100, height: 300 }}
      />
      <View style={styles.itemListContainer}>
        <ItemList items={mockData} showDescription />
      </View>
      <View style={styles.buttonsContainer}>
        <Pressable style={styles.button}>
          <Text>Add to Drafts</Text>
        </Pressable>
        <Pressable
          style={styles.button}
          onPress={() => navigation.navigate('finalTouches', { asset })}
        >
          <Text>Continue</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default AddProducts;

const styles = StyleSheet.create({
  addProductsContainer: {
    flex: 1,
    alignItems: 'center',
  },
  buttonsContainer: {
    flexDirection: 'row',
    marginBottom: 30,
    gap: 10,
  },
  itemListContainer: {
    width: '100%',
    flex: 1,
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 30,
    paddingBottom: 30,
  },
  button: {
    alignItems: 'center',
    borderWidth: 2,
    borderRadius: 10,
    padding: 15,
    width: '40%',
  },
});
