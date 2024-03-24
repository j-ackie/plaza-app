import { useEffect, useState } from 'react';
import {
  FlatList,
  View,
  Pressable,
  Text,
  Modal,
  Image,
  SafeAreaView,
} from 'react-native';
import { Item } from '../../interfaces/queries.interfaces';
import styles from './ShoppingCartOrderScreen.styles';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Carousel from 'react-native-reanimated-carousel';
import CartModalItemInfo from '~/components/Modal/CartModalItemInfo';
import CartModalVideo from '~/components/Modal/CartModalVideo';
import CheckBox from 'expo-checkbox';
import { useNavigation } from '@react-navigation/native';
import { gql, useMutation, useQuery } from '@apollo/client';
import LoadingSpinner from '~/components/LoadingSpinner';

const cartQuery = gql`
  query Query($userId: Int!) {
    cart(userID: $userId) {
      id
      productID
      userID
      name
      imageURI
      price
      videoID
    }
  }
`;

const ShoppingCart = () => {
  //const [cartItems, setCartItems] = useState<Item[]>([]);
  const [modalVis, setModalVis] = useState(false);
  const [selected, setSelected] = useState(-1);
  const navigation = useNavigation();

  const ADD_HISTORY = gql`
    mutation Mutation($order: HistoryInsertInput) {
      insertHistory(order: $order) {
        id
        imageURI
        name
        orderedAt
        quantity
        productID
        status
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

  const [addHistory, {}] = useMutation(ADD_HISTORY, { onCompleted, update });

  

  const [checked, setChecked] = useState(Array(0));

  const { loading, error, data } = useQuery(cartQuery, {
    variables: {
      userId: 1,
    },
  });

  if (loading) return <LoadingSpinner />;

  if (error) return <Text>{error.message}</Text>;

  const handleConfirmPress = () => {
    for(let i = 0; i < checked.length; i++){
      if(checked[i]){
        console.log("confirming index:", checked[i])
        console.log("which is item", data.cart[i])
        addHistory({
          variables: {
            "order": {
              "productID": data.cart[i].productID,
              "videoID": data.cart[i].videoID
            }
          }
        })
      }
    }
  };

  const toggleCheckbox = (index) => {
    const checkedData = [...checked];
    checkedData[index] = !checkedData[index];
    setChecked(checkedData);
  };

  const VideoModal = (props) => {
    if (loading || error) {
      return <Text></Text>;
    }

    return (
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVis}
        onRequestClose={() => {
          setModalVis(!modalVis);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Carousel
              loop={false}
              vertical={false}
              width={330}
              height={450}
              data={[...new Array(2).keys()]}
              renderItem={({ index }) => {
                if (index == 0) {
                  return (
                    <CartModalItemInfo
                      productID={data.cart[selected].productID}
                    ></CartModalItemInfo>
                  );
                } else {
                  return (
                    <CartModalVideo
                      videoIndex={selected}
                      currViewableIndex={selected}
                      postInfo={data.cart[selected].videoID}
                    />
                  );
                }
              }}
            />

            <Pressable
              style={[styles.cartButton, styles.buttonClose]}
              onPress={() => setModalVis(!modalVis)}
            >
              <Text style={styles.textStyle}>Hide Modal</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    );
  };

  return (
    <>
      <VideoModal index={selected != -1 ? selected : 0} />
      <FlatList
        data={data.cart}
        renderItem={(item) => {
          console.log(item);
          return (
            <Pressable
              style={styles.cartButton}
              onPress={() => {
                setSelected(item.index);
                setModalVis(true);
              }}
            >
              <SafeAreaView style={styles.shoppingCartItemContainer}>
                <Image
                  source={{
                    uri: item.item.imageURI,
                  }}
                  style={styles.shoppingCartItemImage}
                  resizeMode="cover"
                />
                <View style={styles.shoppingCartItemTextContainer}>
                  <Text style={{ fontWeight: 'bold' }}>{item.item.name}</Text>
                  <Text>${item.item.price}</Text>
                </View>

                <View
                  style={{
                    height: '100%',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    marginRight: 20,
                  }}
                >
                  <CheckBox
                    disabled={false}
                    value={checked[item.index]}
                    onValueChange={() => {
                      toggleCheckbox(item.index);
                    }}
                    style={{ width: 30, height: 30 }}
                  />
                </View>
              </SafeAreaView>
            </Pressable>
          );
        }}
      />
      <View style={styles.shoppingCartButtonCentering}>
        <TouchableOpacity
          style={styles.shoppingCartCheckoutButton}
          onPress={handleConfirmPress}
        >
          <Text style={{ fontWeight: 'bold', fontSize: 20 }}>
            Confirm Items
          </Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default ShoppingCart;
