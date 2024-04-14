import { Video } from '@/__generated__/graphql';
import { useNavigation } from '@react-navigation/native';
import { FC } from 'react';
import { Image, Pressable, StyleSheet } from 'react-native';

interface VideoThumbnailProps {
  video: Video;
}

const VideoThumbnail: FC<VideoThumbnailProps> = ({ video }) => {
  const navigation = useNavigation();

  return (
    <Pressable
      key={video.id}
      style={styles.container}
      onPress={() => navigation.navigate('Post', { videoId: video.id })}
    >
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
  container: {
    width: '33.333333%',
    height: 200,
    borderWidth: 1,
  },
  thumbnail: {
    flex: 1,
  },
});
