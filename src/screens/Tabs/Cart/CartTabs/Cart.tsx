import {
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
  FlatList,
  StyleSheet,
} from 'react-native';
import React, { useState } from 'react';
import { useAddHistory } from '../useHistoryQueries';
import {useGetCartById, useDeleteCartById} from '../useCartQueries';
import Loading from '@/components/Loading';
import ModalProduct from '../Components/ModalProduct';
import CartProduct from '../Components/CartProduct';

const Cart = () => {
  const [selected, setSelected] = useState(-1);
  const [addHistory, {}] = useAddHistory();
  const [checked, setChecked] = useState(Array(0));
  const { loading, error, data } = useGetCartById(1);
  const [visible, setVisible] = useState(false);
  const [deleteCart, {}] = useDeleteCartById()

  if (loading) return <Loading />;

  if (error) return <Text>{error.message}</Text>;

  const handleConfirmPress = () => {
    for (let i = 0; i < checked.length; i++) {
      if (checked[i]) {
        addHistory({
          variables: {
            order: {
              productID: data.cart[i].productID,
              videoID: data.cart[i].videoID,
            },
          },
        });

        deleteCart({
          variables: {
            "productId": parseInt(data.cart[i].productID)
          }
        });
      }
    }
  };

  const toggleCheckbox = (index) => {
    const checkedData = [...checked];
    checkedData[index] = !checkedData[index];
    setChecked(checkedData);
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <ModalProduct
        item={data.cart[selected]}
        browsing={true}
        visible={visible}
        setVisible={setVisible}
      />

      <FlatList
        data={data.cart}
        renderItem={(item) => {
          return (
            <CartProduct
              item={item}
              setSelected={setSelected}
              setVisible={setVisible}
              checked={checked}
              toggleCheckbox={toggleCheckbox}
            />
          );
        }}
      />

      <View style={styles.shoppingCartButtonCentering}>
        <TouchableOpacity
          style={styles.shoppingCartCheckoutButton}
          onPress={handleConfirmPress}
        >
          <Text style={{ fontWeight: 'bold', fontSize: 20 }}>
            Confirm Items
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Cart;

const styles = StyleSheet.create({
  shoppingCartButtonCentering: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
    padding: 20
  },
  shoppingCartCheckoutButton: {
    padding: 20,
    borderWidth: 2,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
  },
});
