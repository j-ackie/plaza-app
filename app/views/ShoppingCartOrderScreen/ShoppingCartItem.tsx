import { View, Image, SafeAreaView, Text } from 'react-native';
import styles from './ShoppingCartOrderScreen.styles';
import CheckBox from 'expo-checkbox';

const ShoppingCartItem = ({ itemInfo }) => {
  return (
    <SafeAreaView style={styles.shoppingCartItemContainer}>
      <Image
        source={{
          uri: itemInfo.imageURL,
        }}
        style={styles.shoppingCartItemImage}
        resizeMode="cover"
      />
      <View style={styles.shoppingCartItemTextContainer}>
        <Text style={{ fontWeight: 'bold' }}>{itemInfo.name}</Text>
        <Text>${itemInfo.price}</Text>
      </View>

      <CheckBox disabled={false} value={itemInfo['checked']} />
    </SafeAreaView>
  );
};

export default ShoppingCartItem;
