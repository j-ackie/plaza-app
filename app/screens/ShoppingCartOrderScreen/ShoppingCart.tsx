import { useState } from 'react';
import {
  FlatList,
  View,
  Pressable,
  Text,
  Modal,
  Image,
  SafeAreaView,
} from 'react-native';
import styles from './ShoppingCartOrderScreen.styles';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Carousel from 'react-native-reanimated-carousel';
import CartModalItemInfo from '~/components/Modal/CartModalItemInfo';
import CartModalVideo from '~/components/Modal/CartModalVideo';
import CheckBox from 'expo-checkbox';
import { useNavigation } from '@react-navigation/native';
import { gql, useApolloClient, useMutation, useQuery } from '@apollo/client';
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
  const client = useApolloClient()
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

  const DELETE_CART = gql`
    mutation DeleteCart($productId: Int!) {
      deleteCart(productID: $productId) {
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

  const GET_HISTORY = gql`
    query Query($userId: Int!) {
      history(userID: $userId) {
        id
        imageURI
        name
        orderedAt
        productID
        quantity
        status
        userID
        videoID
      }
    }
  `

  const update = (cache, data) => {
    cache.writeQuery({
      query: GET_HISTORY,
      data: {
        history: {
          id: data.id,
          imageURI: data.imageURI,
          name: data.name,
          orderedAt: data.orderedAt,
          productID: data.productID,
          quantity: data.quantity,
          status: data.status,
          userID: data.userID,
          videoID: data.videoID
        }
      },
      variables: {
        "userId": 1
      }
    })
  }

  const [addHistory, {}] = useMutation(ADD_HISTORY, { onCompleted, update });
  const [deleteCart, {}] = useMutation(DELETE_CART, {  })
  

  const [checked, setChecked] = useState(Array(0));

  const { loading, error, data } = useQuery(cartQuery, {
    variables: {
      userId: 1,
    },
  });

  if (loading) return <LoadingSpinner />;

  if (error) return <Text>{error.message}</Text>;

  const handleConfirmPress = async () => {
    for(let i = 0; i < checked.length; i++){
      if(checked[i]){
        console.log("checked data:", data.cart[i])
        addHistory({
          variables: {
            "order": {
              "productID": data.cart[i].productID,
              "videoID": data.cart[i].videoID
            }
          }
        })
        deleteCart({
          variables: {
            "productId": parseInt(data.cart[i].productID)
          }
        })
      }
    }
    await client.refetchQueries({
      include: [cartQuery]
    })
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
          return (
            <Pressable
              style={styles.cartButton}
              onPress={() => {
                setSelected(item.index);
                setModalVis(true);
              }}
              key={item.index}
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
        keyExtractor={item => item.index}
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
