import { View, TouchableOpacity, Text } from "react-native";
import styles from "./Feed.styles";

const FeedPostInfo = ({postInfo}) => {
  return (
    <View style={styles.feedPostInfoContainer}>
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