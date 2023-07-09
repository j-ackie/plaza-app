import { View, Text, Pressable, FlatList, Modal, SafeAreaView, Image } from 'react-native'
import { useState, useEffect } from "react";
import React from 'react'
import { Item } from "../../interfaces/queries.interfaces";
import styles from "./ShoppingCartOrderScreen.styles";
import Carousel from 'react-native-reanimated-carousel';
import CartModalItemInfo from '../Modal/CartModalItemInfo';
import CartModalVideo from '../Modal/CartModalVideo';
import CartModalItemDelivery from '../Modal/CartModalItemDelivery';
import * as Progress from 'react-native-progress'

const mockData = [
    {
      _id: "1",
      sellerID: "3",
      name: "Handbag",
      description: "Barely used.",
      price: 24.67,
      quantity: 2,
      imageURL: "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/51LhHqu9akL._AC_UY1000_.jpg",
      videoURI: "https://assets.mixkit.co/videos/preview/mixkit-man-doing-tricks-with-roller-skates-in-a-parking-lot-34553-large.mp4",
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
      videoURI: "https://assets.mixkit.co/videos/preview/mixkit-man-doing-tricks-with-roller-skates-in-a-parking-lot-34553-large.mp4",
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
      videoURI: "https://assets.mixkit.co/videos/preview/mixkit-man-doing-tricks-with-roller-skates-in-a-parking-lot-34553-large.mp4",
      timestamp: "2023-04-07T22:24:39.000+00:00"
    }
  ]

const OrderHistory = () => {
  const [cartItems, setCartItems] = useState<Item[]>([]);
  const [modalVis, setModalVis] = useState(false)
  const [selected, setSelected] = useState(0)
    
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
        <>
          <Modal
          animationType="fade"
          transparent={true}
          visible={modalVis}
          onRequestClose={() => {
            setModalVis(!modalVis);
          }}>

          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Carousel 
                vertical={false}
                width={330}
                height={450}
                data={[...new Array(3).keys()]}
                loop={false}
                renderItem={({index}) => {
                  if(index == 0){
                    return (<CartModalItemDelivery selected={mockData[selected]}></CartModalItemDelivery>)
                  }
                  else if(index == 1){
                    return (<CartModalItemInfo selected={mockData[selected]}></CartModalItemInfo>)
                  }
                  else{
                    return (<CartModalVideo 
                      videoIndex={selected}
                      currViewableIndex={selected}
                      postInfo={mockData[selected]}
                    />)
                  }
                }}
              />

              <Pressable
                  style={[styles.cartButton, styles.buttonClose]}
                  onPress={() => setModalVis(!modalVis)}>
                  <Text style={styles.textStyle}>Hide Modal</Text>
              </Pressable>
            </View>
          </View>
          
        </Modal>

        <FlatList
          data={cartItems}
          renderItem={(item) => 
            <Pressable
            style={styles.cartButton}
            onPress={() => {
              setSelected(item.index)
              setModalVis(true)
            }}>
              <SafeAreaView style={styles.shoppingCartItemContainer}>
                <Image
                  source={{
                    uri: item.item.imageURL
                  }}
                  style={styles.shoppingCartItemImage}
                  resizeMode="cover"
                />
                <View style={styles.shoppingCartItemTextContainer}>
                  <Text style={{fontWeight: "bold"}}>{item.item.name}</Text>
                  <View style={{position: "relative", height: 20, width: 200}}>
                    <View style={{height: "100%", justifyContent: "center"}}>
                    <Progress.Bar progress={0.35} width={200} height={4} color='rgba(0, 0, 0, 1)' unfilledColor='rgba(220, 220, 220, 1)' borderWidth={0}/>
                    </View>
                    <View style={{width: "100%", height: "100%", flexDirection: "row", justifyContent: "space-between", alignItems: "center", position: "absolute"}}>
                    <View style={styles.orderHistoryDot} />
                    <View style={styles.orderHistoryDot} />
                    <View style={styles.orderHistoryDot} />
                    <View style={styles.orderHistoryDot} />
                    </View>
                  </View>
                  <Text>Order confirmed</Text>
                </View>
              </SafeAreaView>
            </Pressable>
          }
        />
        </>
    )
}

export default OrderHistory