import { useMemo, useRef, useEffect, useState } from "react";
import { View, Text, Button, Image, TouchableOpacity, Dimensions } from "react-native";
import { BottomSheetView, BottomSheetFlatList, useBottomSheet } from "@gorhom/bottom-sheet";
import { FlatList } from "react-native-gesture-handler";
import InfoInput from "../InfoInput/InfoInput";
import styles from "./Modal.styles";

const renderModalConfirmed = (item, setPage, close) => {
  return (
    <BottomSheetView style={styles.modalItemContainer}>
      <View style={{flexDirection: "row", alignItems: "center", columnGap: 20, marginBottom: 20}}>
        <Image
          source={{
            uri: item.imageURI
          }}
          style={{width: 100, height: 100}}
          resizeMode="cover"
        />
        <Text style={[styles.modalItemName, styles.modalItemLargeText]}>{item.name}</Text>
      </View>
    
      <Text style={{fontWeight: "bold", ...styles.modalItemLargeText, marginBottom: 20}}>Purchase Success!</Text>

      <View style={{justifyContent: "flex-start", rowGap: 10}}>
        <Text>
          Your order confirmation can be found in the cart section.
        </Text>
        <Text>
          The seller will provide a tracking number as soon as possible.
        </Text>
      </View>
      <Button title="OK!" onPress={() => close()}/>
    </BottomSheetView>
  )
}

const renderModalPurchase = (item, setPage) => {
  
  return (
    <BottomSheetView style={styles.modalItemContainer}>
      <View style={{flexDirection: "row", alignItems: "center", columnGap: 20, marginBottom: 20}}>
        <Image
          source={{
            uri: item.imageURI
          }}
          style={{width: 100, height: 100}}
          resizeMode="cover"
        />
        <Text style={[styles.modalItemName, styles.modalItemLargeText]}>{item.name}</Text>
      </View>
      <BottomSheetView style={{width: "100%"}}>
        <InfoInput
          placeholder="Ship to"
          // value={nameValue}
          // setValue={setNameValue}
          isTop={true}
          isBottom={false}
        />
        <InfoInput
          placeholder="Pay with"
          isTop={false}
          isBottom={false}
        />
        <InfoInput
          placeholder="Total"
          isTop={false}
          isBottom={true}
        />
      </BottomSheetView>
      <Button
        title="hey"
        onPress={() => setPage(2)}
      />
    </BottomSheetView>
  )
}

const renderModalItems = (item, index, setPage, setSelectedItemIndex) => {

  const postInfo = item;

  const handlePurchasePress = () => {
    setPage(1);
    // make separate components for pages
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

const ModalItems = ({postInfo}) => {
  const [page, setPage] = useState(0);
  const [selectedItemIndex, setSelectedItemIndex] = useState(0);

  const flatListRef = useRef<FlatList>(null);
  const windowWidth = Dimensions.get("window").width;
  const { expand, close } = useBottomSheet();
  
  if (page === 0) {
    return (
      <BottomSheetView style={{flex: 1}}>
        <FlatList
          ref={flatListRef}
          data={postInfo.sellingItems}
          renderItem={({item, index}) => renderModalItems(item, index, setPage, setSelectedItemIndex)}
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
    return (
      <BottomSheetView style={{flex: 1}}>
        {postInfo && postInfo.sellingItems && renderModalPurchase(postInfo.sellingItems[selectedItemIndex], setPage)}
      </BottomSheetView>
    );
  }
  else {
    return (
      <BottomSheetView style={{flex: 1}}>
        { postInfo && postInfo.sellingItems && renderModalConfirmed(postInfo.sellingItems[selectedItemIndex], setPage, close)}
      </BottomSheetView>
    )
  }
}

export default ModalItems;