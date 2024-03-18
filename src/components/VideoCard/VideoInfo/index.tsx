import { Video } from '@/__generated__/graphql';
import { FC, useRef } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import VideoProducts from './VideoProducts';
import PlazaText from '@/components/PlazaText';
import Color from '@/constants/color';
import Modal from '@/components/Modal';
import { BottomSheetModal } from '@gorhom/bottom-sheet';

interface VideoInfoProps {
  video: Video;
}

const VideoInfo: FC<VideoInfoProps> = ({ video }) => {
  const modalRef = useRef<BottomSheetModal>(null);

  return (
    <View style={styles.container}>
      <VideoProducts
        products={video.products}
        onPress={() => modalRef.current.present()}
      />
      <PlazaText style={[styles.text, styles.username]}>username</PlazaText>
      <PlazaText style={styles.text}>{video.description}</PlazaText>
      <Modal modalRef={modalRef} index={0} snapPoints={['50%']}>
        <Text>HELLO</Text>
      </Modal>
    </View>
  );
};

export default VideoInfo;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    gap: 5,
    flexShrink: 1,
    justifyContent: 'flex-end',
  },
  text: {
    color: Color.WHITE,
  },
  username: {
    fontWeight: '700',
  },
});
