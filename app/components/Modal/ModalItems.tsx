import { useMemo, useRef, useEffect, useState } from "react";
import { View, Text, Button, Image, TouchableOpacity, Dimensions } from "react-native";
import { BottomSheetView, BottomSheetFlatList } from "@gorhom/bottom-sheet";
import { FlatList } from "react-native-gesture-handler";
import styles from "./Modal.styles";

const renderModalItems = (item) => {
  const postInfo = item.item;

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
      <TouchableOpacity style={styles.modalItemTouchable}>
        <Text style={styles.modalItemLargeText}>Purchase</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.modalItemTouchable}>
        <Text style={styles.modalItemLargeText}>Save to Cart</Text>
      </TouchableOpacity>
    </BottomSheetView>
  )
}

const ModalItems = ({postInfo}) => {
  const flatListRef = useRef<FlatList>(null);
  const windowWidth = Dimensions.get("window").width;
  
  return (
    <BottomSheetView style={{flex: 1}}>
      <FlatList
        ref={flatListRef}
        data={postInfo.sellingItems}
        renderItem={(item) => renderModalItems(item)}
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

export default ModalItems;