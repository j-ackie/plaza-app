import { useMemo, useRef, useEffect, useState } from "react";
import { View, Text, Button, Image, TouchableOpacity, Dimensions } from "react-native";
import { BottomSheetView, BottomSheetFlatList } from "@gorhom/bottom-sheet";
import { FlatList } from "react-native-gesture-handler";
import styles from "./Modal.styles";

const renderModalPurchase = (item) => {
  return (
    <BottomSheetView style={styles.modalItemContainer}>
      <Image
        source={{
          uri: item.imageURI
        }}
        style={{width: 100, height: 100}}
        resizeMode="cover"
      />
    </BottomSheetView>
  )
}

const renderModalItems = (item, index, setPage, setSelectedItemIndex, navigation) => {
  const postInfo = item;

  const handlePurchasePress = () => {
    navigation.navigate("purchase", {item});
  }

  return (
    <BottomSheetView style={styles.modalItemContainer}>
      <Image
        source={{
          uri: postInfo.imageURI
        }}
        style={{width: 200, height: 200}}
        resizeMode="cover"
      />
      <Text style={[styles.modalItemName, styles.modalItemLargeText]}>{postInfo.name}</Text>
      <Text style={styles.modalItemText}>{postInfo.description}</Text>
      <Text style={[styles.modalItemLargeText, styles.modalItemText]}>${postInfo.price}</Text>
      <TouchableOpacity 
        style={styles.modalItemTouchable}
        onPress={handlePurchasePress}  
      >
        <Text style={styles.modalItemLargeText}>Purchase</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.modalItemTouchable}>
        <Text style={styles.modalItemLargeText}>Save to Cart</Text>
      </TouchableOpacity>
    </BottomSheetView>
  )
}

const ModalItems = ({postInfo, page, setPage, navigation}) => {
  const [selectedItemIndex, setSelectedItemIndex] = useState(0);

  const flatListRef = useRef<FlatList>(null);
  const windowWidth = Dimensions.get("window").width;
  
  if (page === 0) {
    return (
      <BottomSheetView style={{flex: 1}}>
        <FlatList
          ref={flatListRef}
          data={postInfo.sellingItems}
          renderItem={({item, index}) => renderModalItems(item, index, setPage, setSelectedItemIndex, navigation)}
          horizontal={true}
          pagingEnabled={true}
          decelerationRate={"fast"}
          getItemLayout={(data, index) => (
            {
              length: windowWidth,
              offset: windowWidth * index,
              index
            }
          )}
          onContentSizeChange={() => {
            if (flatListRef && flatListRef.current && flatListRef.current && postInfo.index) {
              flatListRef.current.scrollToIndex({
                index: postInfo.index, 
                animated: false
              });
            }
          }}
        />
      </BottomSheetView>
    );
  }
  else if (page === 1) {
    <BottomSheetView style={{flex: 1, backgroundColor: "green"}}>
      <Text>Hey</Text>
      {postInfo && postInfo.sellingItems && renderModalPurchase(postInfo.sellingItems[selectedItemIndex])}
    </BottomSheetView>
  }
}

export default ModalItems;