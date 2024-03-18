import { Video } from '@/__generated__/graphql';
import { FC } from 'react';
import { Image, Pressable, StyleSheet } from 'react-native';

interface VideoThumbnailProps {
  video: Video;
}

const VideoThumbnail: FC<VideoThumbnailProps> = ({ video }) => {
  return (
    <Pressable key={video.id} style={{ flex: 1, backgroundColor: 'green' }}>
      <Image
        source={{
          uri:
            video.thumbnailURL ??
            'https://i.stack.imgur.com/INZM7.jpg?s=64&g=1',
        }}
        style={styles.thumbnail}
      />
    </Pressable>
  );
};

export default VideoThumbnail;

const styles = StyleSheet.create({
  thumbnail: {
    width: 40,
    height: 40,
  },
});
