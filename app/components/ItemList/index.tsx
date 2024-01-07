import { FC } from 'react';
import { FlatList, View } from 'react-native';
import ItemListItem from '../ItemListItem';

type ItemListProps = {
  items: [];
  showDescription: boolean;
  selected?: Set<number>;
  setSelected?: (selected: Set<number>) => void;
};

const ItemList: FC<ItemListProps> = ({
  items,
  showDescription,
  selected,
  setSelected,
}) => {
  const handlePress = (index) => {
    const newSelected = new Set(selected);
    if (selected.has(index)) {
      newSelected.delete(index);
    } else {
      newSelected.add(index);
    }
    setSelected(newSelected);
  };

  return (
    <FlatList
      data={items}
      renderItem={({ item, index }) =>
        selected ? (
          <ItemListItem
            item={item}
            showDescription={showDescription}
            selected={selected.has(index)}
            showSelected
            onPress={() => handlePress(index)}
          />
        ) : (
          <ItemListItem item={item} showDescription={showDescription} />
        )
      }
      ItemSeparatorComponent={() => <View style={{ height: 20 }} />}
      alwaysBounceVertical={false}
      showsVerticalScrollIndicator={false}
    />
  );
};

export default ItemList;
