import { FC } from 'react';
import { Text } from 'react-native';

export enum ItemNameFontSize {
  SMALL = 12,
  MEDIUM = 16,
  LARGE = 22,
}

type ItemNameProps = {
  name: string;
  fontSize: ItemNameFontSize;
};

const ItemName: FC<ItemNameProps> = ({ name, fontSize }) => {
  return <Text style={{ fontWeight: 'bold', fontSize: fontSize }}>{name}</Text>;
};

export default ItemName;
