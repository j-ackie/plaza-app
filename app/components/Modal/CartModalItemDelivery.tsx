import React from 'react'
import {View, Image, Text, Pressable} from 'react-native'
import styles from "./CartModal.styles";
import { FlatList } from 'react-native-gesture-handler';

const CartModalItemDelivery = (props) => {
  return (
    <View style={styles.container}>
        <Image source={{
            uri: props.selected.imageURL
        }}
        style={styles.shoppingCartModalImage}
        resizeMode="cover"/>
        <Text style={styles.modalTitle}>{props.selected.name + " - " + props.selected.quantity}</Text>
        <View>
            <FlatList 
                data={[
                    {key: 'Order confirmed: '},
                    {key: 'Seller shipped out: '},
                    {key: 'Out for delivery: '},
                    {key: 'Order delivered: '},
                ]}
                renderItem={({item}) => <Text>{item.key}</Text>}
            />
            <Text style={styles.testStyle}>lol what's up</Text>
        </View>
    </View>
  )
}

export default CartModalItemDelivery