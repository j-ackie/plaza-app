import { FC, useMemo, useRef } from 'react';
import { StyleSheet, TouchableOpacity, View, Text } from 'react-native';
import Video from '../Video1';
import ItemImage, { ItemImageSize } from '../Item/ItemImage';
import Modal from '../Modal';

interface VideoCardProps {
  videoInfo: object;
  shouldPlay?: boolean;
}

const VideoCard: FC<VideoCardProps> = ({ videoInfo, shouldPlay = true }) => {
  const bottomSheetModalRef = useRef(null);
  const snapPoints = useMemo(() => ['75%', '93%'], []);

  const handleExpand = () => bottomSheetModalRef.current.snapToIndex(0);

  return (
    <>
      <View style={styles.container}>
        <Video shouldPlay={shouldPlay} videoURI={videoInfo.videoURL} />
        <View style={styles.videoInfoContainer}>
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
  },
  videoInfoContainer: {
    position: 'absolute',
    bottom: 0,
    padding: 10,
    gap: 10,
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
});
