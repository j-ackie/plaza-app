import { FC } from 'react';
import { FlatList } from 'react-native';

interface ModalProductsProps {
  products: object[];
}

const ModalProducts: FC<ModalProductsProps> = ({ products }) => {
  return <FlatList data={products} renderItem={({ item, index }) => {}} />;
};

export default ModalProducts;
