import { FC } from 'react';
import { Image, ImageStyle, StyleProp, StyleSheet } from 'react-native';

export enum ItemImageSize {
  SMALL,
  MEDIUM,
  LARGE,
}

type ItemImageProps = {
  uri: string;
  size: ItemImageSize;
};

const ItemImage: FC<ItemImageProps> = ({ uri, size }) => {
  let itemStyle: StyleProp<ImageStyle>;
  if (size === ItemImageSize.SMALL) {
    itemStyle = styles.smallItemImage;
  } else if (size === ItemImageSize.MEDIUM) {
    itemStyle = styles.mediumItemImage;
  } else {
    itemStyle = styles.largeItemImage;
  }

  return (
    <Image
      source={{
        uri: uri,
      }}
      style={itemStyle}
    />
  );
};

export default ItemImage;

const styles = StyleSheet.create({
  smallItemImage: {
    width: 70,
    height: 70,
  },
  mediumItemImage: {
    width: 100,
    height: 100,
  },
  largeItemImage: {
    width: 200,
    height: 200,
  },
});
