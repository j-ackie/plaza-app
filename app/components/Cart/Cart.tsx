import { useEffect } from "react";
import { SafeAreaView } from "react-native";
import { getCartItems } from "../../api/cart-items";

const Cart = () => {
  useEffect(() => {
    getCartItems("643096950984a6e8284f5274")
      .then(response => console.log(response));
  }, [])

  return (
    <SafeAreaView>
      {/* <Text></Text> */}
    </SafeAreaView>
  )
};

export default Cart;