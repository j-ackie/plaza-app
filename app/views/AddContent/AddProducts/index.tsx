import { FC, useContext, useState } from 'react';
import { Image, View, StyleSheet, Pressable, Text } from 'react-native';
import ItemList from '~/components/ItemList';
import useProductsBySellerID from './productsBySellerId';
import { UserContext } from '~/contexts/UserContext';
import LoadingSpinner from '~/components/LoadingSpinner';

const AddProducts: FC = ({ navigation, route }) => {
  const [selected, setSelected] = useState(new Set<number>());
  const { loading, error, data } = useProductsBySellerID(1);

  const { asset } = route.params;

  if (loading) return <LoadingSpinner />;

  if (error) return <Text>{error.message}</Text>;

  const getSelectedProducts = () => {
    const products = [];

    selected.forEach((index) => {
      products.push(data.products[index]);
    });

    return products;
  };

  return (
    <View style={styles.addProductsContainer}>
      <Image
        source={{
          uri: asset.uri,
        }}
        style={{ width: 100, height: 300 }}
      />
      <View style={styles.itemListContainer}>
        <ItemList
          items={data.products}
          showDescription
          selected={selected}
          setSelected={setSelected}
        />
      </View>
      <View style={styles.buttonsContainer}>
        <Pressable style={styles.button}>
          <Text>Add to Drafts</Text>
        </Pressable>
        <Pressable
          style={styles.button}
          onPress={() =>
            navigation.navigate('finalTouches', {
              asset,
              products: getSelectedProducts(),
            })
          }
        >
          <Text>Continue</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default AddProducts;

const styles = StyleSheet.create({
  addProductsContainer: {
    flex: 1,
    alignItems: 'center',
  },
  buttonsContainer: {
    flexDirection: 'row',
    marginBottom: 30,
    gap: 10,
  },
  itemListContainer: {
    width: '100%',
    flex: 1,
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 30,
    paddingBottom: 30,
  },
  button: {
    alignItems: 'center',
    borderWidth: 2,
    borderRadius: 10,
    padding: 15,
    width: '40%',
  },
});
