import { View, Image, SafeAreaView, Text } from "react-native";
import styles from "./ShoppingCartOrderScreen.styles";

const ShoppingCartItem = ({itemInfo}) => {
  return (
    <SafeAreaView style={styles.shoppingCartItemContainer}>
      <Image
        source={{
          uri: itemInfo.imageURL
        }}
        style={styles.shoppingCartItemImage}
        resizeMode="cover"
      />
      <View style={styles.shoppingCartItemTextContainer}>
        <Text style={{fontWeight: "bold"}}>{itemInfo.name}</Text>
        <Text>${itemInfo.price}</Text>
      </View>
      
    </SafeAreaView>
  )
}

export default ShoppingCartItem;