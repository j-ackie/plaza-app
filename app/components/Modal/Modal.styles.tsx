import { StyleSheet, Dimensions } from "react-native";

const styles = StyleSheet.create({
  modalItemContainer: {
    alignItems: "center",
    width: Dimensions.get("window").width,
    paddingLeft: 20,
    paddingRight: 20,
    // backgroundColor: "green"
  },
  modalItemLargeText: {
    fontSize: 22
  },
  modalItemText: {
    marginTop: 10
  },
  modalItemName: {
    fontWeight: "bold",
    marginTop: 5
  },
  modalItemDescription: {
    marginTop: 10
  },
  modalItemPrice: {
    marginTop: 10,
  },
  modalItemTouchable: {
    marginTop: 10,
    borderWidth: 1,
    padding: 5,
    borderRadius: 5
  }
});

export default styles;