// export default CartModalVideo

import { View, Text } from 'react-native';
import React from 'react';
import VideoCard from '../VideoCard/VideoCard';
import styles from './CartModal.styles';
import { gql, useQuery } from '@apollo/client';

const videoQuery = gql`
  query Query($filter: VideoFilter!) {
    video(filter: $filter) {
      description
      id
      userID
      videoURL
    }
  }
`;

const CartModalVideo = ({ videoIndex, currViewableIndex, postInfo }) => {
  console.log(postInfo);

  const { loading, error, data } = useQuery(videoQuery, {
    variables: {
      filter: {
        productID: postInfo,
        videoID: null,
      },
    },
  });

  if (loading || error) {
    return <Text></Text>;
  }

  return (
    <View style={styles.shoppingCartModalVideo}>
      <VideoCard
        videoIndex={videoIndex}
        currViewableIndex={currViewableIndex}
        videoURI={data.videoURL}
      />
    </View>
  );
};

export default CartModalVideo;
