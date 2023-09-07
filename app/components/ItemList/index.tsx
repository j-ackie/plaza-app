import { FC } from 'react';
import { FlatList, View } from 'react-native';
import ItemListItem from '../ItemListItem';

type ItemListProps = {
  items: [];
  showDescription: boolean;
};

const ItemList: FC<ItemListProps> = ({ items, showDescription }) => {
  return (
    <FlatList
      data={items}
      renderItem={(item) => (
        <ItemListItem item={item.item} showDescription={showDescription} />
      )}
      ItemSeparatorComponent={() => <View style={{ height: 20 }} />}
      alwaysBounceVertical={false}
      showsVerticalScrollIndicator={false}
    />
  );
};

export default ItemList;
