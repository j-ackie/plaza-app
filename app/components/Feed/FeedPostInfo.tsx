import { View, TouchableOpacity, Text, Image, Button } from "react-native";
import ItemModal from "../Modal/ModalItems";
import ItemVideoImage from "../Item/ItemVideoImage";
import styles from "./Feed.styles";

const FeedPostInfo = ({postInfo, handleExpand, handleClose, navigation}) => {
  const sellingItems = [];
  let index = 0;
  for (const item of postInfo.sellingItems) {
    sellingItems.push(
      <ItemVideoImage
        index={index}
        itemInfo={item}
        postInfo={postInfo}
        handleExpand={handleExpand}
        navigation={navigation}
      />
    );
    index++;
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