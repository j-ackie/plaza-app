import { View, TouchableOpacity, Text } from "react-native";
import VideoCard from "../VideoCard/VideoCard";
import FeedPostInfo from "./FeedPostInfo";
import ItemModal from "../Modal/ModalItems";

const FeedPost = ({videoIndex, currViewableIndex, postInfo, handleExpand, handleClose, navigation}) => {
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
        navigation={navigation}
      />
    </View>
  )
};

export default FeedPost;