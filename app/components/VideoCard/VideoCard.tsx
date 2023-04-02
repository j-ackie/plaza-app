import { useRef, useState } from "react";
import { StyleSheet, Text, View, Pressable } from "react-native";
import VideoPlayer from "expo-video-player";
import { Video } from "expo-av";




const VideoCard = ({videoIndex, currViewableIndex}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(undefined);

  const shouldPlay = () => {
    if (videoRef === undefined) {
      setIsPlaying(false);
    }
  
    if (isPlaying && videoIndex === currViewableIndex) {
      setIsPlaying(true);
    }
  
    if (isPlaying && videoIndex !== currViewableIndex) {
      video.replayAsync()
      console.log("RESTARTED");
    }
    
    return false;
  }

  return (
    <Pressable style={{flex: 1}} onPress={() => setIsPlaying(!isPlaying)} onLongPress={() => console.log("LONG")}>
      <Video
        ref={videoRef}
        style={{flex : 1}}
        source={{
          uri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
        }}
        isLooping={true}
        isMuted={false}
        shouldPlay={isPlaying}
      />
    </Pressable>
  );
};

export default VideoCard;