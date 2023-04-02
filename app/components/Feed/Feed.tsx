import { useCallback, useState } from "react";
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

const renderFeedItem = (item, currViewableIndex) => {
  console.log(item)
  return (
    <View style={styles.feedItemContainer}>
      <VideoCard videoIndex={item.index} currViewableIndex={currViewableIndex}/>
    </View>
  )
}

const Feed = () => {
  const [currViewableIndex, setCurrViewableIndex] = useState(0);
  const a = useCallback(({ viewableItems }) => {
    if (viewableItems.length === 0) {
      return;
    }
    setCurrViewableIndex(viewableItems[0].index);
  }, []);

  return (
    <FlatList
      data={mockData}
      renderItem={(item) => renderFeedItem(item, currViewableIndex)}
      pagingEnabled
      decelerationRate={"fast"}
      showsVerticalScrollIndicator={false}
      onRefresh={() => {console.log("REFER")}}
      refreshing={true}
      onViewableItemsChanged={a}
      viewabilityConfig={{itemVisiblePercentThreshold: 100}}
      // experiment with refreshControl later
    />
  );
};

export default Feed;