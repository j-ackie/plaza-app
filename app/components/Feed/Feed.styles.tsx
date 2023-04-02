import { StyleSheet, Dimensions } from "react-native";

const styles = StyleSheet.create({
  feedItemContainer: {
    flex: 1,
    height: Dimensions.get("window").height - 127,
    backgroundColor: "green",
    borderWidth: 1,
    borderColor: "orange",
    borderStyle: "solid"
  }
});

export default styles;