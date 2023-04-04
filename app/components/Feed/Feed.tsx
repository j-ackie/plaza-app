import { useCallback, useState } from "react";
import { FlatList, View, Text, Dimensions } from "react-native";
import FeedPost from "./FeedPost";
import styles from "./Feed.styles";

// https://gist.github.com/jsturgis/3b19447b304616f18657
const mockData = [
  {
    username: "username1",
    description: "this is description waiddfbnfgjkbn kjgfb this is description waiddfbnfgjkbn kjgfbthis is description waiddfbnfgjkbn kjgfbthis is description waiddfbnfgjkbn kjgfb this is description waiddfbnfgjkbn kjgfbthis is description waiddfbnfgjkbn kjgfb this is description waiddfbnfgjkbn kjgfb",
    videoURI: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WeAreGoingOnBullrun.mp4",
    sellingItems: [
      {
        name: "Hrmes Birkin - Used",
        description: "Only used a couple of times! Goes great with any outfit.",
        price: 75.24,
        imageURI: "https://www.charleskeith.com/dw/image/v2/BCWJ_PRD/on/demandware.static/-/Sites-ck-products/default/dwe0a12cbc/images/hi-res/2022-L2-CK2-50160095-2-44-1.jpg?sw=1152&sh=1536",
      }
    ]
  },
  {
    username: "username2",
    description: "this is description",
    videoURI: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
    sellingItems: [
      // {
      //   name: "Hermes Birkin - Used",
      //   description: "Only used a couple of times! Goes great with any outfit.",
      //   price: 7500.24,
      //   imageURI: "https://images-na.ssl-images-amazon.com/images/I/41l6VFfhYAL.jpg",
      // }
    ]
  },
  {
    username: "username3",
    description: "this is description",
    videoURI: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    sellingItems: [
      {
        name: "Hermes Birkin - Used",
        description: "Only used a couple of times! Goes great with any outfit.",
        price: 7500.24,
        imageURI: "https://images-na.ssl-images-amazon.com/images/I/41l6VFfhYAL.jpg",
      },
      {
        name: "Hermes Birkin - Used",
        description: "Only used a couple of times! Goes great with any outfit.",
        price: 7500.24,
        imageURI: "https://images-na.ssl-images-amazon.com/images/I/41l6VFfhYAL.jpg",
      },
      {
        name: "Hermes Birkin - Used",
        description: "Only used a couple of times! Goes great with any outfit.",
        price: 7500.24,
        imageURI: "https://images-na.ssl-images-amazon.com/images/I/41l6VFfhYAL.jpg",
      }
    ]
  }
]

const renderFeedItem = (item, currViewableIndex, handleExpand, handleClose) => {
  return (
    <View style={styles.feedItemContainer}>
      <FeedPost 
        videoIndex={item.index}
        currViewableIndex={currViewableIndex}
        postInfo={item.item}
        handleExpand={handleExpand}
        handleClose={handleClose}
      />
    </View>
  )
}

const Feed = ({route}) => {
  const {handleExpand, handleClose} = route.params;

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
      renderItem={(item) => renderFeedItem(item, currViewableIndex, handleExpand, handleClose)}
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