import { useState, useEffect } from "react";
import { FlatList, View, Button, Pressable, Text, Touchable, Modal, Image } from "react-native";
import { CartItem } from "../../interfaces/queries.interfaces";
import { Item } from "../../interfaces/queries.interfaces";
import { getCartItems } from "../../api/cart-items";
import { getItems } from "../../api/items";
import ShoppingCartItem from "./ShoppingCartItem";
import styles from "./ShoppingCartOrderScreen.styles";
import { TouchableOpacity } from "react-native-gesture-handler";
import Carousel from "react-native-reanimated-carousel";
import CartModalItemInfo from "../Modal/CartModalItemInfo";
import CartModalVideo from "../Modal/CartModalVideo";

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

const ShoppingCart = () => {
  const [cartItems, setCartItems] = useState<Item[]>([]);
  const [modalVis, setModalVis] = useState(false)
  const [selected, setSelected] = useState(mockData[0])

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
              width={270}
              height={450}
              data={[...new Array(2).keys()]}
              renderItem={({index}) => {
                if(index == 0){
                  return (<CartModalItemInfo selected={selected}></CartModalItemInfo>)
                }
                else{
                  return (<CartModalVideo></CartModalVideo>)
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
            setSelected(item.item)
            setModalVis(true)
          }}>
            <ShoppingCartItem itemInfo={item.item}/>
          </Pressable>
        }
      />
      <View style={styles.shoppingCartButtonCentering}>
        <TouchableOpacity
          style={styles.shoppingCartCheckoutButton}>
          <Text style={{fontWeight: "bold", fontSize: 20}}>Confirm Items</Text>
        </TouchableOpacity>
      </View>
    </>
  )
}

export default ShoppingCart;