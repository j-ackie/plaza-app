import { TouchableOpacity, Image, View, Text } from "react-native";
import styles from "./Item.styles";

const ItemVideoImage = ({postInfo, handleExpand}) => {
  return (
    <TouchableOpacity 
      onPress={() => handleExpand(postInfo)}
      style={styles.itemTouchable}
    >
      <Image
        resizeMode="cover"
        style={styles.itemImage}
        source={{
          uri: postInfo.imageURI
        }}
      />
    </TouchableOpacity>
  );
};

export default ItemVideoImage;