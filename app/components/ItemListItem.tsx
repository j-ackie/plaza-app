import { FC } from 'react';
import { Pressable, StyleSheet, View, Text } from 'react-native';
import ItemImage, { ItemImageSize } from './Item/ItemImage';
import ItemName, { ItemNameFontSize } from './ItemName/ItemName';
import Checkbox from 'expo-checkbox';

type ItemListItemProps = {
  onPress: () => void;
  item: any;
  showDescription: boolean;
  showSelected?: boolean;
  selected?: boolean;
};

const ItemListItem: FC<ItemListItemProps> = ({
  onPress,
  item,
  showDescription,
  selected,
  showSelected,
}) => {
  console.log(item);
  return (
    <Pressable onPress={onPress} style={styles.itemListItem}>
      <View style={styles.itemImageContainer}>
        <ItemImage uri={item.imageURIs[0]} size={ItemImageSize.SMALL} />
      </View>
      {showDescription && (
        <View style={{ marginLeft: 12, marginTop: 5, flex: 1 }}>
          <ItemName name={item.name} fontSize={ItemNameFontSize.MEDIUM} />
          <Text>${item.price}</Text>
        </View>
      )}
      {showSelected && (
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            marginRight: 20,
          }}
        >
          <Checkbox value={selected} style={styles.checkbox} />
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
  checkbox: {
    width: 30,
    height: 30,
    alignSelf: 'flex-end',
  },
});
