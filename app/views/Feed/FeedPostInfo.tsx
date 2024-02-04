import { View, TouchableOpacity, Text, Pressable } from 'react-native';
import ItemVideoImage from '~/components/Item/ItemVideoImage';
import styles from './Feed.styles';
import ItemImage, { ItemImageSize } from '~/components/Item/ItemImage';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useState } from 'react';
import useCreateLiked, { useDeleteLiked } from './FeedLiked';

const FeedPostInfo = ({ postInfo, handleExpand, handleExpandComment }) => {
  const [createLiked, { loading, error, data }] = useCreateLiked();
  const [deleteLiked] = useDeleteLiked();
  const [liked, setLiked] = useState(postInfo.isLiked);
  const sellingItems = [];

  const handleLike = () => {
    // Assuming postInfo contains video id lmao
    if (!liked) {
      createLiked({
        variables: {
          liked: {
            videoID: 65,
          },
        },
        onCompleted: async (data) => {
          console.log(data);
          setLiked(true);
        },
      });
    } else {
      // Delete liked somehow
      deleteLiked({
        variables: {
          liked: {
            videoID: 65,
          },
        },
      });
      setLiked(false);
    }
  };

  let index = 0;
  console.log(postInfo.sellingItems);
  for (const item of postInfo.sellingItems) {
    sellingItems.push(
      <TouchableOpacity onPress={handleExpand} style={styles.itemTouchable}>
        <ItemImage uri={item.imageURI} size={ItemImageSize.SMALL} />
      </TouchableOpacity>
    );
    index++;
  }

  return (
    <View style={styles.feedPostInfoContainer}>
      <View style={{ flex: 1 }}>
        <View style={styles.feedPostSellingItemsContainer}>{sellingItems}</View>
        <TouchableOpacity style={styles.feedPostInfoUserName}>
          <Text style={{ fontWeight: 'bold', color: 'white' }}>
            {postInfo.username}
          </Text>
        </TouchableOpacity>
        <Text style={{ color: 'white' }}>{postInfo.description}</Text>
      </View>
      <View
        style={{
          flexDirection: 'column',
          justifyContent: 'flex-end',
          alignItems: 'center',
        }}
      >
        <Pressable
          style={[styles.optionTouchable, { marginBottom: 10 }]}
          onPress={handleLike}
        >
          <Text>
            <MaterialCommunityIcons
              name="cards-heart"
              color={liked ? '#D0312D' : '#FFFFFF'}
              size={30}
            ></MaterialCommunityIcons>
          </Text>
        </Pressable>

        <Pressable style={[styles.optionTouchable, { marginBottom: 10 }]}
          onPress={handleExpandComment}>
          <Text>
            <MaterialCommunityIcons
              name="comment"
              color="#FFFFFF"
              size={30}
            ></MaterialCommunityIcons>
          </Text>
        </Pressable>

        <Pressable style={styles.optionTouchable}>
          <Text>
            <MaterialCommunityIcons
              name="share-circle"
              color="#FFFFFF"
              size={30}
            ></MaterialCommunityIcons>
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

export default FeedPostInfo;
