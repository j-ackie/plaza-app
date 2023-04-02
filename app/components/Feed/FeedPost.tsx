import { View } from "react-native";
import VideoCard from "../VideoCard/VideoCard";

const FeedPost = ({ videoIndex, currViewableIndex, videoURI }) => {
  return (
    <View style={{flex: 1}}>
      <VideoCard 
        videoIndex={videoIndex}
        currViewableIndex={currViewableIndex}
        videoURI={videoURI}
      />
    </View>
  )
};

export default FeedPost;