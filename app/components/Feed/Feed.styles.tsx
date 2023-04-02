import { StyleSheet, Dimensions } from "react-native";

const styles = StyleSheet.create({
  feedItemContainer: {
    flex: 1,
    height: Dimensions.get("window").height - 175,
    // for debugging
    // backgroundColor: "orange",
    // borderWidth: 1,
    // borderColor: "black",
    // borderStyle: "solid",
  }
});

export default styles;