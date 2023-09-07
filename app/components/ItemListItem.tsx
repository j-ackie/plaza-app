import { FC } from 'react';
import { Pressable, StyleSheet, View, Text } from 'react-native';
import ItemImage, { ItemImageSize } from './Item/ItemImage';
import ItemName, { ItemNameFontSize } from './ItemName/ItemName';

type ItemListItemProps = {
  onPress: () => void;
  item: any;
  showDescription: boolean;
};

const ItemListItem: FC<ItemListItemProps> = ({
  onPress,
  item,
  showDescription,
}) => {
  return (
    <Pressable onPress={onPress} style={styles.itemListItem}>
      <View style={styles.itemImageContainer}>
        <ItemImage uri={item.imageURL} size={ItemImageSize.SMALL} />
      </View>
      {showDescription && (
        <View style={{ marginLeft: 12, marginTop: 5 }}>
          <ItemName name={item.name} fontSize={ItemNameFontSize.MEDIUM} />
          <Text>${item.price}</Text>
        </View>
      )}
    </Pressable>
  );
};

export default ItemListItem;

const styles = StyleSheet.create({
  itemListItem: {
    borderWidth: 2,
    borderRadius: 10,
    overflow: 'hidden',
    flexDirection: 'row',
    // marginLeft: 30,
    // marginRight: 30,
    // marginTop: 10,
    // marginBottom: 10,
  },
  itemImageContainer: {
    // borderWidth: 2,
    // marginBottom: -2,
    // marginTop: -2,
    // marginLeft: -2,
    // borderTopRightRadius: 10,
    // borderBottomRightRadius: 10,
    overflow: 'hidden',
  },
});
