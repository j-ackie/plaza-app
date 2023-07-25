import { useState, useEffect } from "react";
import { FlatList, View, Pressable, Text, Modal, Image, SafeAreaView } from "react-native";
import { Item } from "../interfaces/queries.interfaces";

import styles from "../components/ShoppingCartOrderScreen/ShoppingCartOrderScreen.styles";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "expo-router";

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

const Confirm = () => {
    const [cartItems, setCartItems] = useState<Item[]>([]);
  const [modalVis, setModalVis] = useState(false)
  const [selected, setSelected] = useState(0)

  useEffect(() => {
    console.log("calling api...");
    for(let i = 0; i < mockData.length; i++){
      mockData[i]["checked"] = false
    }
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

  const onButtonPress = () => {

    const selectedCheckBoxes = cartItems.find((cb) => cb["checked"] === true);
    // selectedCheckBoxes will have checboxes which are selected
  }

  const navigation = useNavigation()
  const handleCheckoutPress = () => {
    navigation.navigate("purchase", mockData[0]);
  }
  

  const toggleCheckbox = (index) => {

    const checkboxData = [...cartItems];
    checkboxData[index]["checked"] = !checkboxData[index]["checked"];
    setCartItems(checkboxData);
  }

  return (
    <>

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
                <Text>${item.item.price}</Text>
              </View>
            </SafeAreaView>
          </Pressable>
        }
      />
      <View style={styles.shoppingCartButtonCentering}>
        <TouchableOpacity
          style={styles.shoppingCartCheckoutButton}
          onPress={handleCheckoutPress}>
          <Text style={{fontWeight: "bold", fontSize: 20}}>Checkout</Text>
        </TouchableOpacity>
      </View>
    </>
  )
}

export default Confirm