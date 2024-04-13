import { FC, useCallback, useMemo, useRef, useState } from 'react';
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
import useCreateLiked, { useDeleteLiked } from '~/screens/Feed/FeedLiked';
import { gql } from '@apollo/client';
import {
  useCreateComment,
  useGetComment,
} from '~/components/Comments/commentQueries';
import BottomSheetModal, {
  BottomSheetFooter,
  BottomSheetTextInput,
} from '@gorhom/bottom-sheet';
import Backdrop from '../Backdrop/Backdrop';
import ModalItems from '../Modal/ModalItems';
import ModalComments from '../Comments/ModalComments';

interface VideoCardProps {
  videoInfo: object;
  shouldPlay?: boolean;
}

const VideoCard: FC<VideoCardProps> = ({ videoInfo, shouldPlay = true }) => {
  const bottomSheetModalRef = useRef(null);
  const snapPoints = useMemo(() => ['75%', '93%'], []);
  const bottomSheetModalRefComment = useRef(null);
  const bottomSheetCommentInput = useRef(null);
  const snapPointsComment = useMemo(() => ['75%', '95%'], []);
  const handleExpandComment = () =>
    bottomSheetModalRefComment.current.snapToIndex(0);

  const GET_VIDEO = gql`
    query ($videoID: ID!) {
      video(videoID: $videoID) {
        id
        isLiked
      }
    }
  `;

  const handleExpand = () => bottomSheetModalRef.current.snapToIndex(0);
  const [createLiked, {}] = useCreateLiked();
  const [deleteLiked] = useDeleteLiked();
  const [liked, setLiked] = useState(videoInfo.isLiked);
  const { data } = useGetComment(parseInt(videoInfo.id));
  let commentText = '';

  const update = (cache, data) => {
    const query = gql`
      query Query($videoId: ID!) {
        comments(videoID: $videoId) {
          comment
          createdAt
          id
          profilePicture
          userID
          username
          videoID
        }
      }
    `;
    const cacheData = cache.readQuery({
      query: query,
      variables: {
        videoId: parseInt(videoInfo.id),
      },
    });
    if (!cacheData) {
      console.log("Cache hasn't been populated yet, no need to do anything");
      return;
    }
    const incoming = {
      id: data.data.createComment.id,
      userID: data.data.createComment.userID,
      videoID: data.data.createComment.videoID,
      comment: data.data.createComment.comment,
      createdAt: data.data.createComment.createdAt,
      username: data.data.createComment.username,
      profilePicture: data.data.createComment.profilePicture,
    };
    cache.writeQuery({
      query: query,
      data: {
        comments: [incoming, ...cacheData.comments],
      },
      variables: {
        videoId: parseInt(videoInfo.id),
      },
    });
  };

  const [createComment, { loading, error }] = useCreateComment(
    () => {},
    update
  );

  const onSubmitEditing = async (event) => {
    //const text = event.nativeEvent.text
    bottomSheetCommentInput.current.clear();
    createComment({
      variables: {
        comment: {
          comment: commentText,
          videoID: parseInt(videoInfo.id),
        },
      },
    });
  };

  const renderFooter = useCallback(
    (props) => (
      <BottomSheetFooter {...props}>
        <View
          style={{
            height: 100,
            width: '100%',
            alignItems: 'center',
            backgroundColor: 'white',
          }}
        >
          <View
            style={{
              width: '95%',
              height: '100%',
              borderTopColor: '#DADEDF',
              borderTopWidth: 2,
              flexDirection: 'row',
              alignItems: 'center',
            }}
          >
            <BottomSheetTextInput
              style={[styles.commentInput, styles.form]}
              ref={bottomSheetCommentInput}
              // value={commentText}
              // onChangeText={onChangeCommentText}
              placeholder="Add comment..."
              onChangeText={(text) => (commentText = text)}
              onSubmitEditing={onSubmitEditing}
            />
            <Pressable onPress={onSubmitEditing}>
              <View
                style={{
                  height: 50,
                  width: 50,
                  marginLeft: 10,
                  borderRadius: '50%',
                  backgroundColor: 'black',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <MaterialCommunityIcons
                  name="send"
                  color={'#FFFFFF'}
                  size={25}
                />
              </View>
            </Pressable>
          </View>
        </View>
      </BottomSheetFooter>
    ),
    []
  );

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
          setLiked(true);
        },
        update: async (cache, data) => {
          console.log('data', data);
          const likedResults = data.data.createLiked;
          const queryRes = cache.readQuery({
            query: GET_VIDEO,
            // Provide any required variables in this object.
            // Variables of mismatched types will return `null`.
            variables: {
              videoID: videoInfo.id,
            },
          });
          cache.writeQuery({
            query: GET_VIDEO,
            data: {
              video: {
                id: videoInfo.id,
                isLiked: true,
              },
            },
            variables: {
              videoID: videoInfo.id,
            },
          });
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
          setLiked(false);
        },
        update: async (cache, data) => {
          console.log('data', data);
          const likedResults = data.data.createLiked;
          const queryRes = cache.readQuery({
            query: GET_VIDEO,
            // Provide any required variables in this object.
            // Variables of mismatched types will return `null`.
            variables: {
              videoID: videoInfo.id,
            },
          });
          cache.writeQuery({
            query: GET_VIDEO,
            data: {
              video: {
                id: videoInfo.id,
                isLiked: false,
              },
            },
            variables: {
              videoID: videoInfo.id,
            },
          });
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

            <Pressable
              style={[styles.optionTouchable, { marginBottom: 10 }]}
              onPress={handleExpandComment}
            >
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
      <BottomSheetModal
        ref={bottomSheetModalRef}
        index={-1}
        snapPoints={snapPoints}
        enablePanDownToClose={true}
        backdropComponent={Backdrop}
      >
        <ModalItems postInfo={videoInfo} />
      </BottomSheetModal>

      <BottomSheetModal
        ref={bottomSheetModalRefComment}
        index={-1}
        snapPoints={snapPointsComment}
        style={{ flex: 1 }}
        enablePanDownToClose={true}
        backdropComponent={Backdrop}
        footerComponent={renderFooter}
      >
        <ModalComments postComments={data} />
      </BottomSheetModal>
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
  form: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    borderWidth: 1,
    marginTop: -1,
  },
  commentInput: {
    borderRadius: 10,
    flex: 1,
  },
});
