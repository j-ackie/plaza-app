import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  shoppingCartItemContainer: {
    flex: 1, 
    flexDirection: "row",
    marginLeft: 20,
    marginRight: 20,
    marginTop: 10,
    borderWidth: 2,
    borderRadius: 10,
  },
  shoppingCartItemImage: {
    width: 75,
    height: 75,
    borderRadius: 10,
    borderRightWidth: 2
  },
  shoppingCartItemTextContainer: {
    flexDirection: "column", 
    flex: 1,
    marginLeft: 20,
    marginTop: 10
  }
});

export default styles;