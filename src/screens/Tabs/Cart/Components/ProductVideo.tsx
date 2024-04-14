import { View, Text } from 'react-native';
import React from 'react';
import styles from './ModalProductStyles';
import useGetVideoById from '../useGetVideoById';
import VideoCard from '@/components/VideoCard';

const ProductVideo = ({ videoIndex, currViewableIndex, postInfo }) => {
  const { data, loading, error } = useGetVideoById(postInfo);

  console.log(data)
  const video = data.video;
  if (loading || error) {
    console.log('loading...');
    return <Text></Text>;
  }

  return (
    <View style={styles.shoppingCartModalVideo}>
      <VideoCard video={video} />
    </View>
  );
};

export default ProductVideo;
