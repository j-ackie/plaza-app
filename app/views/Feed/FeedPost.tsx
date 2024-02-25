import { useCallback, useMemo, useRef, useState } from 'react';
import { View, Text, Pressable } from 'react-native';
import Video from '~/components/Video/Video';
import FeedPostInfo from './FeedPostInfo';
import styles from './Feed.styles';
import BottomSheetModal, { BottomSheetFooter, BottomSheetTextInput } from '@gorhom/bottom-sheet';
import { Portal } from '@gorhom/portal';
import ModalItems from '~/components/Modal/ModalItems';
import Backdrop from '~/components/Backdrop/Backdrop';
import ModalComments from '~/components/Comments/ModalComments';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useCreateComment, useGetComment} from '~/components/Comments/commentQueries';
import { gql } from '@apollo/client';

const FeedPost = ({ videoIndex, currViewableIndex, postInfo }) => {
  const bottomSheetModalRef = useRef(null);
  const bottomSheetModalRefComment = useRef(null);
  const bottomSheetCommentInput = useRef(null)
  const snapPoints = useMemo(() => ['75%', '93%'], []);
  const snapPointsComment = useMemo(() => ['75%', '95%'], []);

  let commentText = ""

  const handleExpand = () => bottomSheetModalRef.current.snapToIndex(0);

  const handleExpandComment = () => bottomSheetModalRefComment.current.snapToIndex(0);

  const {data} = useGetComment(66)

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
        videoId: 66
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
      profilePicture: data.data.createComment.profilePicture
    };
    cache.writeQuery({
      query: query,
      data: {
        comments: [incoming, ...cacheData.comments],
      },
      variables: {
        videoId: 66
      },
    });
  };

  const [createComment, { loading, error }] = useCreateComment(
    () => {},
    update
  );

  const onSubmitEditing = async (event) => {
    //const text = event.nativeEvent.text
    bottomSheetCommentInput.current.clear()
    createComment({
      variables: {
        comment: {
          comment: commentText,
          videoID: 66
        }
      }
    })
  }

  const renderFooter = useCallback(
    props => (
      <BottomSheetFooter {...props}>
        <View style={{height: 100, width: "100%", alignItems: "center", backgroundColor: "white"}}>
          <View style={{width: "95%", height: "100%", borderTopColor: "#DADEDF", borderTopWidth: 2, flexDirection: "row", alignItems: "center"}}>
            <BottomSheetTextInput 
              style={[styles.commentInput, styles.form]}
              ref={bottomSheetCommentInput}
              // value={commentText}
              // onChangeText={onChangeCommentText}
              placeholder='Add comment...'
              onChangeText={(text) => commentText = text}
              onSubmitEditing={onSubmitEditing}
            />
            <Pressable
            onPress={onSubmitEditing}>
              <View 
              style={{height: 50, width: 50, marginLeft: 10, borderRadius: "50%", backgroundColor: "black", justifyContent: "center", alignItems: "center"}}>
                <MaterialCommunityIcons 
                  name="send"
                  color={"#FFFFFF"}
                  size={25}/>
              </View>
            </Pressable>
          </View>
        </View>
      </BottomSheetFooter>
    ),
    []
  );

  return (
    <View style={styles.feedItemContainer}>
      <Video
        videoIndex={videoIndex}
        currViewableIndex={currViewableIndex}
        videoURI={postInfo.videoURI}
      />
      <FeedPostInfo postInfo={postInfo} handleExpand={handleExpand} handleExpandComment={handleExpandComment}/>
      <Portal>
        <BottomSheetModal
          ref={bottomSheetModalRef}
          index={-1}
          snapPoints={snapPoints}
          enablePanDownToClose={true}
          backdropComponent={Backdrop}
        >
          <ModalItems postInfo={postInfo} />
        </BottomSheetModal>

        <BottomSheetModal
          ref={bottomSheetModalRefComment}
          index={-1}
          snapPoints={snapPointsComment}
          style={{flex: 1}}
          enablePanDownToClose={true}
          backdropComponent={Backdrop}
          footerComponent={renderFooter}
        >
          <ModalComments postComments = {data}/>
        </BottomSheetModal>
      </Portal>
    </View>
  );
};

export default FeedPost;
