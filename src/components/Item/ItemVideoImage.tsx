import { TouchableOpacity, Image } from 'react-native';
// import styles from './Item.styles';

const ItemVideoImage = ({ itemInfo, handleExpand }) => {
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
