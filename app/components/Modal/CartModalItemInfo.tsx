import React from 'react'
import {View, Image, Text, Pressable} from 'react-native'
import styles from "./CartModal.styles";

function CartModalItemInfo(props) {
  return (

    <View style={styles.container}>
        <Image source={{
            uri: props.selected.imageURL
        }}
        style={styles.shoppingCartModalImage}
        resizeMode="cover"/>
        <Text style={styles.modalTitle}>{props.selected.name + " - " + props.selected.quantity}</Text>
        <Text style={styles.modalSub}>{"$" + props.selected.price}</Text>
        <Text style={styles.modalText}>{props.selected.description}</Text>
    </View>
  )
}

export default CartModalItemInfo