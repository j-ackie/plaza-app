import { Product } from '@/__generated__/graphql';
import { FC } from 'react';
import { Image, Pressable, StyleSheet } from 'react-native';

interface VideoProductProps {
  product: Product;
  onPress: () => void;
}

const VideoProduct: FC<VideoProductProps> = ({ product, onPress }) => {
  return (
    <Pressable onPress={onPress}>
      <Image source={{ uri: product.imageURIs[0] }} style={styles.image} />
    </Pressable>
  );
};

export default VideoProduct;

const styles = StyleSheet.create({
  image: {
    width: 70,
    height: 70,
    borderRadius: 5,
    borderWidth: 1,
  },
});
