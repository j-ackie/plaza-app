import { useState } from "react";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { useIsFocused } from '@react-navigation/native';
import { Video } from "expo-av";

const handleVideoRef = (component, videoIndex, currViewableIndex, isPaused, setIsPaused, isFocused) => {
  if (!component) {
    return;
  }

  if (videoIndex !== currViewableIndex || !isFocused) {
    component.stopAsync();
    setIsPaused(false);
  }
  else if (isPaused) {
    component.pauseAsync();
  }
  else {
    component.playAsync();
  }
}

const VideoCard = ({videoIndex, currViewableIndex, videoURI}) => {
  const [isPaused, setIsPaused] = useState(false);

  const isFocused = useIsFocused();

  return (
    <Pressable style={{flex: 1}} onPress={() => setIsPaused(!isPaused)} onLongPress={() => console.log("LONG")}>
      <Video
        ref={(component) => handleVideoRef(component, videoIndex, currViewableIndex, isPaused, setIsPaused, isFocused)}
        style={{flex : 1}}
        source={{
          uri: videoURI,
        }}
        isLooping={true}
        isMuted={false}
      />
    </Pressable>
  );
};

export default VideoCard;