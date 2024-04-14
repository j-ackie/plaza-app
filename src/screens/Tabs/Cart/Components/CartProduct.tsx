import {
  Pressable,
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';
import CheckBox from 'expo-checkbox';
import React from 'react';

const CartProduct = ({
  item,
  setSelected,
  setVisible,
  checked,
  toggleCheckbox,
}) => {
  return (
    <Pressable
      style={styles.cartButton}
      onPress={() => {
        setSelected(item.index);
        setVisible(true);
      }}
    >
      <View style={styles.shoppingCartItemContainer}>
        <Image
          source={{
            uri: item.item.imageURI,
          }}
          style={styles.shoppingCartItemImage}
          resizeMode="cover"
        />
        <View style={styles.shoppingCartItemTextContainer}>
          <Text style={{ fontWeight: 'bold' }}>{item.item.name}</Text>
          <Text>${item.item.price}</Text>
        </View>

        <View
          style={{
            height: '100%',
            flexDirection: 'column',
            justifyContent: 'center',
            marginRight: 20,
          }}
        >
          <CheckBox
            disabled={false}
            value={checked[item.index]}
            onValueChange={() => {
              toggleCheckbox(item.index);
            }}
            style={{ width: 30, height: 30 }}
          />
        </View>
      </View>
    </Pressable>
  );
};

export default CartProduct;

const styles = StyleSheet.create({
  cartButton: {},
  shoppingCartItemContainer: {
    flex: 1,
    flexDirection: 'row',
    marginLeft: 20,
    marginRight: 20,
    marginTop: 10,
    borderWidth: 2,
    borderRadius: 75 / 3,
  },
  shoppingCartItemImage: {
    width: 75,
    height: 75,
    borderRadius: 75 / 3,
    borderRightWidth: 2,
  },
  shoppingCartModalImage: {
    width: 250,
    height: 250,
    marginBottom: 10,
  },
  shoppingCartItemTextContainer: {
    flexDirection: 'column',
    flex: 1,
    marginLeft: 20,
    marginTop: 10,
  },
});
