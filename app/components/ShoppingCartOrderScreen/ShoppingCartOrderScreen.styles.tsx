import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  shoppingCartItemContainer: {
    flex: 1, 
    flexDirection: "row",
    marginLeft: 20,
    marginRight: 20,
    marginTop: 10,
    borderWidth: 2,
    borderRadius: 75/3,
  },
  shoppingCartItemImage: {
    width: 75,
    height: 75,
    borderRadius: 75/3,
    borderRightWidth: 2
  },
  shoppingCartItemTextContainer: {
    flexDirection: "column", 
    flex: 1,
    marginLeft: 20,
    marginTop: 10
  },
  shoppingCartButtonCentering:{
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 20
  },
  shoppingCartCheckoutButton:{
    padding: 20,
    borderWidth: 2,
    width: "90%",
    flexDirection: "row",
    justifyContent: "center"
  }
});

export default styles;