import { View, Image } from "react-native";

const Purchase = ({itemInfo}) => {
  return (
    <View>
      <Image 
        source={{
          uri: itemInfo
        }}
      />
    </View>
  )
};

export default Purchase;