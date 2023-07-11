import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
  feedItemContainer: {
    flex: 1,
    height: Dimensions.get('window').height - 80,
    backgroundColor: 'black',
    // for debugging
    // backgroundColor: "orange",
    // borderWidth: 1,
    // borderColor: "black",
    // borderStyle: "solid",
  },
  feedPostInfoContainer: {
    position: 'absolute',
    bottom: 20,
    left: 10,
    right: 10,
    // backgroundColor: "green"
  },
  feedPostInfoUserName: {
    alignSelf: 'flex-start',
    marginBottom: 5,
    // backgroundColor: "orange"
  },
  feedPostSellingItemsContainer: {
    flexDirection: 'row',
    gap: 5,
  },
  feedPostSellingItem: {
    width: 70,
    height: 70,
    marginBottom: 5,
  },
  feedPostSellingItemImage: {
    width: '100%',
    aspectRatio: 1,
    borderRadius: 10,
    borderWidth: 2,
  },
});

export default styles;
