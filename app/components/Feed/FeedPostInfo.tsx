import { View, TouchableOpacity, Text, Image, Button } from "react-native";
import ItemModal from "../Item/ItemModal";
import ItemVideoImage from "../Item/ItemVideoImage";
import styles from "./Feed.styles";

const FeedPostInfo = ({postInfo, handleExpand, handleClose}) => {
  const sellingItems = [];
  for (const item of postInfo.sellingItems) {
    sellingItems.push(
      <ItemVideoImage
        postInfo={item}
        handleExpand={handleExpand}
      />
    );
  }

  return (
    <View style={styles.feedPostInfoContainer}>
      <View style={styles.feedPostSellingItemsContainer}>
        { sellingItems }
      </View>
      <TouchableOpacity style={styles.feedPostInfoUserName}>
        <Text 
          style={{fontWeight: "bold", color: "white"}}
        >
          {postInfo.username}
        </Text>
      </TouchableOpacity>
      <Text style={{color: "white"}}>{postInfo.description}</Text>
    </View>
  )
}

export default FeedPostInfo;