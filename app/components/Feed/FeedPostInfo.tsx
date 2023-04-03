import { View, TouchableOpacity, Text, Image } from "react-native";
import styles from "./Feed.styles";

const FeedPostInfo = ({postInfo}) => {
  const sellingItems = [];
  for (const item of postInfo.sellingItems) {
    sellingItems.push(
      <TouchableOpacity style={styles.feedPostSellingItem}>
        <Image
          resizeMode="cover"
          style={styles.feedPostSellingItemImage}
          source={{
            uri: item.imageURI
          }}
        />
      </TouchableOpacity>
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