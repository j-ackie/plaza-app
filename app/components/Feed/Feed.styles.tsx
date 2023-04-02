import { StyleSheet, Dimensions } from "react-native";

const styles = StyleSheet.create({
  feedItemContainer: {
    flex: 1,
    height: Dimensions.get("window").height - 127,
  }
});

export default styles;