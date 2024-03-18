import { StyleSheet, View } from 'react-native';
import VideoPlayer from '../VideoPlayer';
import { FC } from 'react';
import { Video } from '@/__generated__/graphql';
import Color from '@/constants/color';
import VideoInfo from './VideoInfo';
import VideoButtons from './VideoButtons';

interface VideoCardProps {
  video: Video;
  shouldPlay?: boolean;
}

const VideoCard: FC<VideoCardProps> = ({ video, shouldPlay = true }) => {
  return (
    <View style={styles.container}>
      <VideoPlayer videoUrl={video.videoURL} shouldPlay={shouldPlay} />
      <View style={styles.bottomContainer}>
        <VideoInfo video={video} />
        <VideoButtons />
      </View>
    </View>
  );
};

export default VideoCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.BLACK,
  },
  bottomContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
});
