import { useState, useEffect } from "react";
import { FlatList, View } from "react-native";
import { CartItem } from "../../interfaces/queries.interfaces";
import { getCartItems } from "../../api/cart-items";
import ShoppingCartItem from "./ShoppingCartItem";

const mockData = [
  {
    _id: "1",
    sellerID: "3",
    name: "Handbag",
    description: "Barely used.",
    price: 24.67,
    quantity: 2,
    imageURL: "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/51LhHqu9akL._AC_UY1000_.jpg",
    timestamp: "2023-04-07T22:24:39.000+00:00"
  },
  {
    _id: "1",
    sellerID: "3",
    name: "Handbag",
    description: "Barely used.",
    price: 24.67,
    quantity: 2,
    imageURL: "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/51LhHqu9akL._AC_UY1000_.jpg",
    timestamp: "2023-04-07T22:24:39.000+00:00"
  },
  {
    _id: "1",
    sellerID: "3",
    name: "Handbag",
    description: "Barely used.",
    price: 24.67,
    quantity: 2,
    imageURL: "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/51LhHqu9akL._AC_UY1000_.jpg",
    timestamp: "2023-04-07T22:24:39.000+00:00"
  }
]

const ShoppingCart = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  useEffect(() => {
    console.log("calling api...");
    getCartItems("643096950984a6e8284f5274")
      .then(response => {
        console.log(response);
        setCartItems(mockData);
        // before setting cartItems, call api to retrieve item objects
        // setCartItems(response);

      });
  }, []);

  return (
    <FlatList
      data={cartItems}
      renderItem={(item) => <ShoppingCartItem itemInfo={item.item}/>}
    />
  )
}

export default ShoppingCart;