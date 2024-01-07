import { FC, useState } from 'react';
import { Pressable } from 'react-native';
import { ResizeMode, Video as VideoPlayer } from 'expo-av';
import { useIsFocused } from '@react-navigation/native';

const handleVideoRef = (
  instance: VideoPlayer,
  isPaused: boolean,
  setIsPaused: (bool: boolean) => void,
  isFocused: boolean,
  videoIndex: number,
  currViewableIndex: number
) => {
  if (!instance) {
    return;
  }

  if (videoIndex !== currViewableIndex || !isFocused) {
    instance.stopAsync().catch();
    setIsPaused(false);
  } else if (isPaused) {
    instance.pauseAsync().catch();
  } else {
    instance.playAsync().catch();
  }
};

type VideoProps = {
  videoURI: string;
  isLooping?: boolean;
  isMuted?: boolean;
  videoIndex: number;
  currViewableIndex: number;
};

const Video: FC<VideoProps> = ({
  videoURI,
  isLooping = true,
  isMuted = true,
  videoIndex,
  currViewableIndex,
}) => {
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const [resizeMode, setResizeMode] = useState<ResizeMode>(ResizeMode.COVER);

  const isFocused = useIsFocused();

  return (
    <Pressable style={{ flex: 1 }} onPress={() => setIsPaused(!isPaused)}>
      <VideoPlayer
        ref={(instance) =>
          handleVideoRef(
            instance,
            isPaused,
            setIsPaused,
            isFocused,
            videoIndex,
            currViewableIndex
          )
        }
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
