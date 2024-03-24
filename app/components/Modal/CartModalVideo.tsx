// export default CartModalVideo

import { View, Text } from 'react-native';
import React from 'react';
import VideoCard from '../VideoCard/VideoCard';
import styles from './CartModal.styles';
import { gql, useQuery } from '@apollo/client';

const videoQuery = gql`
  query Query($videoId: ID!) {
    video(videoID: $videoId) {
      description
      id
      videoURL
    }
  }
`;

const CartModalVideo = ({ videoIndex, currViewableIndex, postInfo }) => {
  console.log(postInfo);

  const { loading, error, data } = useQuery(videoQuery, {
    variables: {
      videoId: postInfo,
    },
  });

  if (loading || error) {
    console.log('loading...');
    return <Text></Text>;
  }

  console.log(data);

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
