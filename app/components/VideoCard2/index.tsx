import { FC, useMemo, useRef, useState } from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  Pressable,
} from 'react-native';
import Video from '../Video1';
import ItemImage, { ItemImageSize } from '../Item/ItemImage';
import Modal from '../Modal';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import useCreateLiked, { useDeleteLiked } from '~/views/Feed/FeedLiked';

interface VideoCardProps {
  videoInfo: object;
  shouldPlay?: boolean;
}

const VideoCard: FC<VideoCardProps> = ({ videoInfo, shouldPlay = true }) => {
  const bottomSheetModalRef = useRef(null);
  const snapPoints = useMemo(() => ['75%', '93%'], []);

  const handleExpand = () => bottomSheetModalRef.current.snapToIndex(0);
  console.log(videoInfo);
  const [createLiked, { loading, error, data }] = useCreateLiked();
  const [deleteLiked] = useDeleteLiked();
  const [liked, setLiked] = useState(videoInfo.isLiked);

  const handleLike = () => {
    // Assuming postInfo contains video id lmao
    if (!liked) {
      createLiked({
        variables: {
          liked: {
            videoID: parseInt(videoInfo.id),
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
            videoID: parseInt(videoInfo.id),
          },
        },
        onCompleted: async (data) => {
          console.log(data);
          setLiked(false);
        },
      });
    }
  };

  return (
    <>
      <View style={styles.container}>
        <Video shouldPlay={shouldPlay} videoURI={videoInfo.videoURL} />
        <View style={styles.videoInfoContainer}>
          <View style={{ flex: 1 }}>
            <View style={styles.productsContainer}>
              {videoInfo.products.map((product) => (
                <TouchableOpacity
                  style={styles.product}
                  key={product.id}
                  onPress={handleExpand}
                >
                  <ItemImage
                    uri={product.imageURIs[0]}
                    size={ItemImageSize.SMALL}
                  />
                </TouchableOpacity>
              ))}
            </View>
            <View>
              <TouchableOpacity>
                <Text style={{ fontWeight: 'bold', color: 'white' }}>
                  {videoInfo.user.username}
                </Text>
              </TouchableOpacity>
              <Text style={{ color: 'white' }}>{videoInfo.description}</Text>
            </View>
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

            <Pressable style={[styles.optionTouchable, { marginBottom: 10 }]}>
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
      </View>
      <Modal modalRef={bottomSheetModalRef} snapPoints={snapPoints}>
        {}
      </Modal>
    </>
  );
};

export default VideoCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
  },
  videoInfoContainer: {
    position: 'absolute',
    bottom: 0,
    padding: 10,
    gap: 10,
    flexDirection: 'row',
    alignItems: 'flex-end',
    width: '100%',
  },
  productsContainer: {
    flexDirection: 'row',
    gap: 5,
  },
  product: {
    borderRadius: 10,
    borderWidth: 1,
    overflow: 'hidden',
  },
  optionTouchable: {
    padding: 10,
    borderRadius: '50%',
    backgroundColor: '#00000080',
  },
});
