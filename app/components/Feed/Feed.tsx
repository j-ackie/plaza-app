import { useCallback, useState } from "react";
import { FlatList, View, Text, Dimensions } from "react-native";
import FeedPost from "./FeedPost";
import styles from "./Feed.styles";

// https://gist.github.com/jsturgis/3b19447b304616f18657
const mockData = [
  {
    username: "username1",
    description: "this is description waiddfbnfgjkbn kjgfb this is description waiddfbnfgjkbn kjgfbthis is description waiddfbnfgjkbn kjgfbthis is description waiddfbnfgjkbn kjgfb this is description waiddfbnfgjkbn kjgfbthis is description waiddfbnfgjkbn kjgfb this is description waiddfbnfgjkbn kjgfb",
    videoURI: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WeAreGoingOnBullrun.mp4"
  },
  {
    username: "username2",
    description: "this is description",
    videoURI: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4"
  },
  {
    username: "username3",
    description: "this is description",
    videoURI: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4"
  }
]

const renderFeedItem = (item, currViewableIndex) => {
  return (
    <View style={styles.feedItemContainer}>
      <FeedPost 
        videoIndex={item.index}
        currViewableIndex={currViewableIndex}
        postInfo={item.item}
      />
    </View>
  )
}

const Feed = () => {
  const [currViewableIndex, setCurrViewableIndex] = useState(0);

  const handleViewableItemsChanged = useCallback(({ viewableItems }) => {
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
      onViewableItemsChanged={handleViewableItemsChanged}
      viewabilityConfig={{itemVisiblePercentThreshold: 100}}
      // experiment with refreshControl later
    />
  );
};

export default Feed;