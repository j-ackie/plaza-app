import { FlatList, View, Text, Dimensions } from "react-native";
import VideoCard from "../VideoCard/VideoCard";
import styles from "./Feed.styles";

const mockData = [
  {
    username: "A"
  },
  {
    username: "B"
  },
  {
    username: "C"
  }
]

const renderFeedItem = (item) => {
  console.log(item)
  return (
    <View style={styles.feedItemContainer}>
      <Text>Username: {item.username}</Text>
    </View>
  )
}

const Feed = () => {
  return (
    <FlatList
      data={mockData}
      renderItem={(item) => renderFeedItem(item.item)}
      pagingEnabled
      decelerationRate={"fast"}
      showsVerticalScrollIndicator={false}
    />
  );
};

export default Feed;