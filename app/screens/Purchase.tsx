import { useState } from "react";
import { View, SafeAreaView, Text, Image, TextInput } from "react-native";
import ItemName from "../shared/ItemName/ItemName";

const Purchase = ({route}) => {
  const [shippingAddress, setShippingAddress] = useState("");
  const [cardInfo, setCardInfo] = useState("");

  const itemInfo = route.params.item;

  return (
    <SafeAreaView style={{ alignItems: "center", flex: 1 }}>
      <View style={{flexDirection: "row", alignItems: "center", justifyContent: "center"}}>
        <Image
          source={{
            uri: itemInfo.imageURI
          }}
          style={{width: 100, height: 100}}
        />
        <ItemName name={itemInfo.name}/>
      </View>
      <TextInput style={{width: 250, height: 50, borderWidth: 1}} placeholder="Enter shipping address" onChange={text => setShippingAddress(text)} value={shippingAddress}/>
      <TextInput style={{width: 250, height: 50, borderWidth: 1}} value={"hey"}/>
      <TextInput style={{width: 250, height: 50, borderWidth: 1}} value={"hey"}/>
    </SafeAreaView>
  )
}

export default Purchase;