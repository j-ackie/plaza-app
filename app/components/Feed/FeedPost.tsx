import { View, TouchableOpacity, Text } from "react-native";
import VideoCard from "../VideoCard/VideoCard";
import FeedPostInfo from "./FeedPostInfo";
import ItemModal from "../Item/ItemModal";

const FeedPost = ({videoIndex, currViewableIndex, postInfo, handleExpand, handleClose}) => {
  return (
    <View style={{flex: 1}}>
      <VideoCard 
        videoIndex={videoIndex}
        currViewableIndex={currViewableIndex}
        videoURI={postInfo.videoURI}
      />
      <FeedPostInfo
        postInfo={postInfo}
        handleExpand={handleExpand}
        handleClose={handleClose}
      />
    </View>
  )
};

export default FeedPost;