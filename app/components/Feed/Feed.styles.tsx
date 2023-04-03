import { StyleSheet, Dimensions } from "react-native";

const styles = StyleSheet.create({
  feedItemContainer: {
    flex: 1,
    height: Dimensions.get("window").height - 80,
    backgroundColor: "black"
    // for debugging
    // backgroundColor: "orange",
    // borderWidth: 1,
    // borderColor: "black",
    // borderStyle: "solid",
  },
  feedPostInfoContainer: {
    position: "absolute",
    bottom: 20,
    left: 10,
    right: 10,
    // backgroundColor: "green"
  },
  feedPostInfoUserName: {
    alignSelf: "flex-start",
    marginBottom: 5,
    // backgroundColor: "orange"
  }

});


export default styles;