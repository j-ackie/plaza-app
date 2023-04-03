import { View, TouchableOpacity, Text } from "react-native";
import VideoCard from "../VideoCard/VideoCard";
import FeedPostInfo from "./FeedPostInfo";

const FeedPost = ({videoIndex, currViewableIndex, postInfo}) => {
  return (
    <View style={{flex: 1}}>
      <VideoCard 
        videoIndex={videoIndex}
        currViewableIndex={currViewableIndex}
        videoURI={postInfo.videoURI}
      />
      <FeedPostInfo
        postInfo={postInfo}
      />
    </View>
  )
};

export default FeedPost;