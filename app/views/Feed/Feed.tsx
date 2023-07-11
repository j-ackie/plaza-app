import { useCallback, useState } from 'react';
import { FlatList } from 'react-native';
import FeedPost from './FeedPost';

// https://gist.github.com/jsturgis/3b19447b304616f18657
let mockData = [];
for (let i = 0; i < 1000; i++) {
  mockData.push({
    username: 'username2',
    description: 'this is description',
    videoURI:
      'https://assets.mixkit.co/videos/preview/mixkit-a-girl-in-a-pool-holding-an-inflatable-beach-ball-1267-large.mp4',
    sellingItems: [
      {
        name: 'Beach ball',
        description: 'A beach ball',
        price: 2.5,
        imageURI:
          'https://dks.scene7.com/is/image/GolfGalaxy/19ITXU24GLSSYPNLBSWE?qlt=70&wid=600&fmt=pjpeg',
      },
      {
        name: 'Ray Bans - Sunglasses',
        description: 'Used sunglasses, blocks out the sun',
        price: 200.0,
        imageURI:
          'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQnViDD6F2gonZQ26mmbjmtP0eQpoTzRdo9V8bz99_udISEKl6rvWwX_owa18wEU9Glkqd03YKervy1kqT6DWvnScw1QGSQwb_x3FQ2ppiXUtZDpOy73PPLpcDWFGU-cnFo4w&usqp=CAc',
      },
    ],
  });
}

const renderFeedItem = (item, currViewableIndex) => {
  return (
    <FeedPost
      videoIndex={item.index}
      currViewableIndex={currViewableIndex}
      postInfo={item.item}
    />
  );
};

// type FeedProps = {
//   items:
// }

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
      decelerationRate={'fast'}
      showsVerticalScrollIndicator={false}
      onRefresh={() => {
        console.log('REFER');
      }}
      refreshing={true}
      onViewableItemsChanged={handleViewableItemsChanged}
      viewabilityConfig={{ itemVisiblePercentThreshold: 100 }}
      // experiment with refreshControl later
    />
  );
};

export default Feed;
