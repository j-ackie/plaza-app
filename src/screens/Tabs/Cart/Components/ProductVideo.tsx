import { View, Text } from 'react-native';
import React from 'react';
import styles from './ModalProductStyles';
import useGetVideoById from '../useGetVideoById';
import VideoCard from '@/components/VideoCard';
import PlazaText from '@/components/PlazaText';

const ProductVideo = ({ videoIndex, currViewableIndex, postInfo }) => {
  const { data, loading, error } = useGetVideoById(postInfo);

  if (loading || error) {
    console.log('loading...');
    return <PlazaText></PlazaText>;
  }
  
  console.log(data)
  const video = data.video;

  return (
    <View style={styles.shoppingCartModalVideo}>
      <VideoCard video={video} />
    </View>
  );
};

export default ProductVideo;
