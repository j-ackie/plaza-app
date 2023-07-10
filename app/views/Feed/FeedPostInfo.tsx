import { View, TouchableOpacity, Text } from "react-native";
import styles from "./Feed.styles";
import ItemImage, { ItemImageSize } from "~/components/Item/ItemImage";

const FeedPostInfo = ({postInfo, handleExpand}) => {
  const sellingItems = [];
  let index = 0;
  for (const item of postInfo.sellingItems) {
    console.log(item)
    sellingItems.push(
      <TouchableOpacity
        onPress={handleExpand}
        style={styles.itemTouchable}
      >
        <ItemImage
          uri={item.imageURI}
          size={ItemImageSize.SMALL}
        />
      </TouchableOpacity>
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