import { useState } from 'react';
import { StyleSheet, Text, View, Pressable } from 'react-native';
import { useIsFocused } from '@react-navigation/native';
import { Video, VideoReadyForDisplayEvent } from 'expo-av';

const handleVideoRef = (
  component,
  videoIndex,
  currViewableIndex,
  isPaused,
  setIsPaused,
  isFocused
) => {
  if (!component) {
    return;
  }

  if (videoIndex !== currViewableIndex || !isFocused) {
    component.stopAsync().catch(() => {
      // do nothing
    });
    setIsPaused(false);
  } else if (isPaused) {
    component.pauseAsync().catch(() => {
      // do nothing
    });
  } else {
    component.playAsync().catch(() => {
      // do nothing
    });
  }
};

const handleReadyForDisplay = (
  event: VideoReadyForDisplayEvent,
  setResizeMode
) => {
  if (event.naturalSize.orientation === 'landscape') {
    setResizeMode('contain');
  } else {
    setResizeMode('cover');
  }
};

const VideoCard = ({ videoIndex, currViewableIndex, videoURI }) => {
  const [isPaused, setIsPaused] = useState(false);
  const [resizeMode, setResizeMode] = useState('cover');

  const isFocused = useIsFocused();

  return (
    <Pressable
      style={{ flex: 1 }}
      onPress={() => setIsPaused(!isPaused)}
      onLongPress={() => console.log('LONG')}
    >
      <Video
        ref={(component) =>
          handleVideoRef(
            component,
            videoIndex,
            currViewableIndex,
            isPaused,
            setIsPaused,
            isFocused
          )
        }
        style={{ flex: 1 }}
        source={{
          uri: videoURI,
        }}
        // source={
        // require("../../mock-data/videos/sample2.mov")
        // }
        onReadyForDisplay={(e) => handleReadyForDisplay(e, setResizeMode)}
        isLooping={true}
        isMuted={false}
        // @ts-ignore
        resizeMode={resizeMode}
      />
    </Pressable>
  );
};

export default VideoCard;
