import { TouchableOpacity, Image, View, Text } from 'react-native';
// import styles from './Item.styles';

const ItemVideoImage = ({ index, itemInfo, postInfo, handleExpand }) => {
  return (
    <TouchableOpacity onPress={handleExpand}>
      <Image
        resizeMode="cover"
        // style={styles.itemImage}
        source={{
          uri: itemInfo.imageURI,
        }}
      />
    </TouchableOpacity>
  );
};

export default ItemVideoImage;
