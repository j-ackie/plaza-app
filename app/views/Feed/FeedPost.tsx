import { useMemo, useRef } from "react";
import { View } from "react-native";
import Video from "~/components/Video/Video";
import FeedPostInfo from "./FeedPostInfo";
import styles from "./Feed.styles";
import BottomSheetModal from "@gorhom/bottom-sheet";
import { Portal } from "@gorhom/portal";
import ModalItems from  "~/components/Modal/ModalItems";
import Backdrop from "~/components/Backdrop/Backdrop";

const FeedPost = ({videoIndex, currViewableIndex, postInfo}) => {
  console.log(videoIndex);
  const bottomSheetModalRef = useRef(null);
  const snapPoints = useMemo(() => ['15%', '75%', '93%'], []);

  const handleExpand = () => bottomSheetModalRef.current.snapToIndex(1);

  const handleClose = () => bottomSheetModalRef.current.close();

  return (
    <View style={styles.feedItemContainer}>
      <Video
        videoIndex={videoIndex}
        currViewableIndex={currViewableIndex}
        videoURI={postInfo.videoURI}
      />
      <FeedPostInfo
        postInfo={postInfo}
        handleExpand={handleExpand}
      />
      <Portal>
        <BottomSheetModal
          ref={bottomSheetModalRef}
          index={-1}
          snapPoints={snapPoints}
          enablePanDownToClose={true}
          backdropComponent={Backdrop}
        >
          <ModalItems
            postInfo={postInfo}
          />
        </BottomSheetModal>
      </Portal>
    </View>
  )
};

export default FeedPost;