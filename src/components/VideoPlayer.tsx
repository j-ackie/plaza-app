import { FC, useState } from 'react';
import { ResizeMode, Video } from 'expo-av';
import { useIsFocused } from '@react-navigation/native';
import { Pressable, StyleSheet } from 'react-native';

interface VideoPlayerProps {
  videoUrl: string;
  shouldLoop?: boolean;
  shouldMute?: boolean;
  shouldPlay?: boolean;
}

const VideoPlayer: FC<VideoPlayerProps> = ({
  videoUrl,
  shouldLoop = true,
  shouldMute = true,
  shouldPlay = true,
}) => {
  const [shouldPause, setShouldPause] = useState(false);
  const [resizeMode, setResizeMode] = useState(ResizeMode.COVER);

  const isFocused = useIsFocused();

  const handleVideoRef = (ref: Video) => {
    try {
      if (!shouldPlay || !isFocused) {
        ref.stopAsync();
        setShouldPause(false);
      } else if (shouldPause) {
        ref.pauseAsync();
      } else {
        ref.playAsync();
      }
    } catch {}
  };

  return (
    <Pressable
      style={styles.container}
      onPress={() => setShouldPause(!shouldPause)}
    >
      <Video
        ref={handleVideoRef}
        style={styles.video}
        source={{ uri: videoUrl }}
        onReadyForDisplay={(e) =>
          e.naturalSize.orientation === 'landscape'
            ? setResizeMode(ResizeMode.CONTAIN)
            : setResizeMode(ResizeMode.COVER)
        }
        isLooping={shouldLoop}
        isMuted={shouldMute}
        resizeMode={resizeMode}
      />
    </Pressable>
  );
};

export default VideoPlayer;

const styles = StyleSheet.create({
  container: { flex: 1 },
  video: { flex: 1 },
});
