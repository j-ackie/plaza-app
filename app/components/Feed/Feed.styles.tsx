import { StyleSheet, Dimensions } from "react-native";

const styles = StyleSheet.create({
  feedItemContainer: {
    flex: 1,
    height: Dimensions.get("window").height - 80,
    // for debugging
    // backgroundColor: "orange",
    // borderWidth: 1,
    // borderColor: "black",
    // borderStyle: "solid",
  },
  feedPostInfoContainer: {
    backgroundColor: "orange",
    position: "absolute",
    bottom: 10,
    left: 10,
    right: 10,
  },

});


export default styles;