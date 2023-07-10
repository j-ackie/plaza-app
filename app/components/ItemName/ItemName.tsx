import { Text } from "react-native";

const ItemName = ({ name }) => {
  return (
    <Text style={{fontWeight: "bold", fontSize: 22}}>
      {name}
    </Text>
  )
}

export default ItemName;