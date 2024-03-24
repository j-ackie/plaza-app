import { useRef, useState } from 'react';
import { View, Text, Button, TouchableOpacity, Dimensions } from 'react-native';
import { BottomSheetView, useBottomSheet } from '@gorhom/bottom-sheet';
import { FlatList } from 'react-native-gesture-handler';
import InfoInput from '../InfoInput/InfoInput';
import styles from './Modal.styles';
import ItemImage, { ItemImageSize } from '../Item/ItemImage';
import { gql, useMutation, useQuery } from '@apollo/client';

const renderModalConfirmed = (item, setPage, close) => {
  return (
    <BottomSheetView style={styles.modalItemContainer}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          columnGap: 20,
          marginBottom: 20,
        }}
      >
        <ItemImage uri={item.imageURI} size={ItemImageSize.MEDIUM} />
        <Text style={[styles.modalItemName, styles.modalItemLargeText]}>
          {item.name}
        </Text>
      </View>

      <Text
        style={{
          fontWeight: 'bold',
          ...styles.modalItemLargeText,
          marginBottom: 20,
        }}
      >
        Purchase Success!
      </Text>

      <View style={{ justifyContent: 'flex-start', rowGap: 10 }}>
        <Text>Your order confirmation can be found in the cart section.</Text>
        <Text>
          The seller will provide a tracking number as soon as possible.
        </Text>
      </View>
      <Button title="OK!" onPress={() => close()} />
    </BottomSheetView>
  );
};

const renderModalPurchase = (item, setPage) => {
  return (
    <BottomSheetView style={styles.modalItemContainer}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          columnGap: 20,
          marginBottom: 20,
        }}
      >
        <ItemImage uri={item.imageURI} size={ItemImageSize.MEDIUM} />
        <Text style={[styles.modalItemName, styles.modalItemLargeText]}>
          {item.name}
        </Text>
      </View>
      <BottomSheetView style={{ width: '100%' }}>
        <InfoInput
          placeholder="Ship to"
          // value={nameValue}
          // setValue={setNameValue}
          isTop={true}
          isBottom={false}
        />
        <InfoInput placeholder="Pay with" isTop={false} isBottom={false} />
        <InfoInput placeholder="Total" isTop={false} isBottom={true} />
      </BottomSheetView>
      <Button title="hey" onPress={() => setPage(2)} />
    </BottomSheetView>
  );
};

const renderModalItems = (item, index, setPage, setSelectedItemIndex, addCartHandler) => {

  console.log(item);
  const postInfo = item;

  const handlePurchasePress = () => {
    setPage(1);
    // make separate components for pages
  };

  const handleSaveCart = () => {
    console.log("saving", item)
    addCartHandler({
      variables: {
        "order": {
          "productID": 1,
          "videoID": 64
        }
      }
    })
  }

  return (
    <BottomSheetView style={styles.modalItemContainer}>
      <ItemImage uri={item.imageURI} size={ItemImageSize.LARGE} />
      <Text style={[styles.modalItemName, styles.modalItemLargeText]}>
        {postInfo.name}
      </Text>
      <Text style={styles.modalItemText}>{postInfo.description}</Text>
      <Text style={[styles.modalItemLargeText, styles.modalItemText]}>
        ${postInfo.price}
      </Text>
      <TouchableOpacity
        style={styles.modalItemTouchable}
        onPress={handlePurchasePress}
      >
        <Text style={styles.modalItemLargeText}>Purchase</Text>
      </TouchableOpacity>
      <TouchableOpacity 
        style={styles.modalItemTouchable}
        onPress={handleSaveCart}>
        <Text style={styles.modalItemLargeText}>Save to Cart</Text>
      </TouchableOpacity>
    </BottomSheetView>
  );
};

const ModalItems = ({ postInfo }) => {
  const [page, setPage] = useState(0);
  const [selectedItemIndex, setSelectedItemIndex] = useState(0);

  const flatListRef = useRef<FlatList>(null);
  const windowWidth = Dimensions.get('window').width;
  const { expand, close } = useBottomSheet();

  const ADD_CART = gql`
    mutation InsertCart($order: CartInsertInput) {
      insertCart(order: $order) {
        id
        imageURI
        name
        price
        productID
        userID
        videoID
      }
    }
  `

  // TODO: We should probably have a separate directory that contains all of the queries
  const onCompleted = () => {

  }

  const update = () => {

  }

  const [addCart, {}] = useMutation(ADD_CART, { onCompleted, update });

  if (page === 0) {
    return (
      <BottomSheetView style={{ flex: 1 }}>
        <FlatList
          ref={flatListRef}
          data={postInfo.sellingItems}
          renderItem={({ item, index }) =>
            renderModalItems(item, index, setPage, setSelectedItemIndex, addCart)
          }
          horizontal={true}
          pagingEnabled={true}
          decelerationRate={'fast'}
          getItemLayout={(data, index) => ({
            length: windowWidth,
            offset: windowWidth * index,
            index,
          })}
          onContentSizeChange={() => {
            if (
              flatListRef &&
              flatListRef.current &&
              flatListRef.current &&
              postInfo.index
            ) {
              flatListRef.current.scrollToIndex({
                index: postInfo.index,
                animated: false,
              });
            }
          }}
        />
      </BottomSheetView>
    );
  } else if (page === 1) {
    return (
      <BottomSheetView style={{ flex: 1 }}>
        {postInfo &&
          postInfo.sellingItems &&
          renderModalPurchase(
            postInfo.sellingItems[selectedItemIndex],
            setPage
          )}
      </BottomSheetView>
    );
  } else {
    return (
      <BottomSheetView style={{ flex: 1 }}>
        {postInfo &&
          postInfo.sellingItems &&
          renderModalConfirmed(
            postInfo.sellingItems[selectedItemIndex],
            setPage,
            close
          )}
      </BottomSheetView>
    );
  }
};

export default ModalItems;
