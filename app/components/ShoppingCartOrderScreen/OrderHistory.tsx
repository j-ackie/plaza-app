import { View, Text, Pressable, FlatList } from 'react-native'
import { useState, useEffect } from "react";
import React from 'react'
import { Item } from "../../interfaces/queries.interfaces";
import ShoppingCartItem from "./ShoppingCartItem";
import styles from "./ShoppingCartOrderScreen.styles";

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
      name: "backpack",
      description: "Barely used.",
      price: 24.67,
      quantity: 2,
      imageURL: "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/51LhHqu9akL._AC_UY1000_.jpg",
      timestamp: "2023-04-07T22:24:39.000+00:00"
    }
  ]

const OrderHistory = () => {
    const [cartItems, setCartItems] = useState<Item[]>([]);
    
    useEffect(() => {
        console.log("calling api...");
        setCartItems(mockData);
        // getCartItems("643096950984a6e8284f5274")
        //   .then(response => {
        //     const itemIDs = [];
        //     for (const cartItem of response) {
        //       itemIDs.push(cartItem.itemID);
        //     }
    
            // getItems(itemIDs)
            //   .then(response => {
            //     console.log(response);
            //     // setCartItems(response);
            //     // setCartItems(mockData);
            //   });
    
            // setCartItems(itemIDs);
            // before setting cartItems, call api to retrieve item objects
            // setCartItems(response);
    
          //});
      }, []);

    return (
        <FlatList
            data={cartItems}
            renderItem={(item) => 
            <Pressable
            style={styles.cartButton}>
                <ShoppingCartItem itemInfo={item.item}/>
            </Pressable>
            }
        />
    )
}

export default OrderHistory