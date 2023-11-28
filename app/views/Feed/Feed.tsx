import { useCallback, useState } from 'react';
import { FlatList } from 'react-native';
import FeedPost from './FeedPost';
import { Dimensions } from 'react-native';

// https://gist.github.com/jsturgis/3b19447b304616f18657
const mockData = [
  {
    username: 'username1',
    description:
      'this is description waiddfbnfgjkbn kjgfb this is description waiddfbnfgjkbn kjgfbthis is description waiddfbnfgjkbn kjgfbthis is description waiddfbnfgjkbn kjgfb this is description waiddfbnfgjkbn kjgfbthis is description waiddfbnfgjkbn kjgfb this is description waiddfbnfgjkbn kjgfb',
    videoURI:
      'https://assets.mixkit.co/videos/preview/mixkit-man-doing-tricks-with-roller-skates-in-a-parking-lot-34553-large.mp4',
    sellingItems: [
      {
        name: 'Used Roller Skates',
        description: 'Only used a couple of times! Goes great with any outfit.',
        price: 75.24,
        imageURI:
          'https://m.media-amazon.com/images/I/71k6sXMGGvL._AC_UF1000,1000_QL80_.jpg',
      },
    ],
  },
  {
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
  },
  {
    username: 'username3',
    description: 'this is description',
    videoURI:
      'https://assets.mixkit.co/videos/preview/mixkit-lgbtq-female-couple-modeling-a-clay-vase-together-40027-large.mp4',
    sellingItems: [
      {
        name: 'Handmade Clay Ceramic Vase',
        description: 'The final product!',
        price: 120.23,
        imageURI:
          'data:image/jpeg;base64,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',
      },
    ],
  },
];

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

  const renderItem = useCallback(
    ({ item, index }) => {
      console.log(currViewableIndex, index);
      return (
        <FeedPost
          videoIndex={index}
          currViewableIndex={currViewableIndex}
          postInfo={item}
        />
      );
    },
    [currViewableIndex]
  );

  return (
    <FlatList
      data={mockData}
      renderItem={renderItem}
      pagingEnabled
      decelerationRate={'fast'}
      disableIntervalMomentum
      showsVerticalScrollIndicator={false}
      onRefresh={() => {
        console.log('REFER');
      }}
      refreshing={true}
      onViewableItemsChanged={handleViewableItemsChanged}
      viewabilityConfig={{ itemVisiblePercentThreshold: 100 }}
      getItemLayout={(data, index) => ({
        length: Dimensions.get('window').height - 80,
        offset: (Dimensions.get('window').height - 80) * index,
        index,
      })}
      // removeClippedSubviews
      // experiment with refreshControl later
    />
  );
};

export default Feed;
