import { Product } from '@/__generated__/graphql';
import { FC } from 'react';
import { StyleSheet, View } from 'react-native';
import VideoProduct from './VideoProduct';

interface VideoProductsProps {
  products: Product[];
  onPress: () => void;
}

const VideoProducts: FC<VideoProductsProps> = ({ products, onPress }) => {
  return (
    <View style={styles.container}>
      {products.map((product, i) => (
        <VideoProduct product={product} onPress={onPress} key={i}/>
      ))}
    </View>
  );
};

export default VideoProducts;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: 10,
  },
});
