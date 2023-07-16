// export default CartModalVideo

import { View, Text } from 'react-native';
import React from 'react';
import VideoCard from '../VideoCard/VideoCard';
import styles from './CartModal.styles';

const CartModalVideo = ({ videoIndex, currViewableIndex, postInfo }) => {
  return (
    <View style={styles.shoppingCartModalVideo}>
      <VideoCard
        videoIndex={videoIndex}
        currViewableIndex={currViewableIndex}
        videoURI={postInfo.videoURI}
      />
    </View>
  );
};

export default CartModalVideo;
