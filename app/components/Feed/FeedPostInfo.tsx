import { View, TouchableOpacity, Text } from "react-native";
import styles from "./Feed.styles";

const FeedPostInfo = ({postInfo}) => {
  return (
    <View style={styles.feedPostInfoContainer}>
      {/* <View style={styles.feedPostTextContainer}> */}
        <TouchableOpacity style={{alignSelf: "flex-start"}}>
          <Text 
            style={{fontWeight: "bold"}}
          >
            {postInfo.username}
          </Text>
        </TouchableOpacity>
        <Text>{postInfo.description}</Text>
      {/* </View> */}
    </View>
  )
}

export default FeedPostInfo;