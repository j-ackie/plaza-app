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
    flexDirection: 'row',
    alignItems: 'flex-end',
    width: '100%',
    paddingHorizontal: 10,
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
  itemTouchable: {
    borderRadius: 10,
    borderWidth: 1,
    overflow: 'hidden',
  },
  optionTouchable: {
    padding: 10,
    borderRadius: '50%',
    backgroundColor: '#00000080',
  },
});

export default styles;
