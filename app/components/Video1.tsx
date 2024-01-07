import { FC, useState } from 'react';
import { Pressable } from 'react-native';
import { ResizeMode, Video as VideoPlayer } from 'expo-av';
import { useIsFocused } from '@react-navigation/native';

interface VideoProps {
  videoURI: string;
  shouldPlay: boolean;
  isLooping?: boolean;
  isMuted?: boolean;
  videoIndex?: number;
  currViewableIndex?: number;
}

const Video: FC<VideoProps> = ({
  videoURI,
  shouldPlay,
  isLooping = true,
  isMuted = true,
}) => {
  const [shouldPause, setShouldPause] = useState(false);
  const [resizeMode, setResizeMode] = useState(ResizeMode.COVER);

  const isFocused = useIsFocused();

  const handleVideoRef = (instance: VideoPlayer) => {
    if (!instance) {
      return;
    }

    if (!shouldPlay || !isFocused) {
      instance.stopAsync().catch();
      setShouldPause(false);
    } else if (shouldPause) {
      instance.pauseAsync().catch();
    } else {
      instance.playAsync().catch();
    }
  };

  return (
    <Pressable style={{ flex: 1 }} onPress={() => setShouldPause(!shouldPause)}>
      <VideoPlayer
        ref={handleVideoRef}
        style={{ flex: 1 }}
        source={{
          uri: videoURI,
        }}
        onReadyForDisplay={(e) =>
          e.naturalSize.orientation === 'landscape'
            ? setResizeMode(ResizeMode.CONTAIN)
            : setResizeMode(ResizeMode.COVER)
        }
        isLooping={isLooping}
        isMuted={isMuted}
        resizeMode={resizeMode}
      />
    </Pressable>
  );
};

export default Video;
