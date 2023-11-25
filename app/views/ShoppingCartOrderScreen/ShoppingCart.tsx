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
import { gql, useQuery } from '@apollo/client';

const cartQuery = gql`
  query Query($userId: Int!) {
    cart(userID: $userId) {
      id
      productID
      userID
      name
      imageURI
      price
    }
  }
`;

const productQuery = gql`
  query Query($productId: ID!) {
    product(productID: $productId) {
      id
      sellerID
      name
      description
      quantity
      price
      imageURI
    }
  }
`;

const ShoppingCart = () => {
  //const [cartItems, setCartItems] = useState<Item[]>([]);
  const [modalVis, setModalVis] = useState(false);
  const [selected, setSelected] = useState(0);

  const { loading, error, data } = useQuery(cartQuery, {
    variables: {
      userId: 1,
    },
  });

  if (loading || error) {
    return <Text>Loading...</Text>;
  }

  const cartItems = data.cart;

  // useEffect(() => {
  //   console.log("calling api...");
  //   for(let i = 0; i < mockData.length; i++){
  //     mockData[i]["checked"] = false
  //   }
  //   setCartItems(mockData);
  // }, []);

  const navigation = useNavigation();
  const handleConfirmPress = () => {
    navigation.navigate('confirm');
  };

  const toggleCheckbox = (index) => {
    const checkboxData = [...cartItems];
    checkboxData[index]['checked'] = !checkboxData[index]['checked'];
    setCartItems(checkboxData);
  };

  const VideoModal = (props) => {
    const { loading, error, data } = useQuery(productQuery, {
      variables: {
        productId: cartItems[props.index].product_id,
      },
    });

    if (loading || error) {
      return '';
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
                    <CartModalItemInfo selected={data}></CartModalItemInfo>
                  );
                } else {
                  return (
                    <CartModalVideo
                      videoIndex={selected}
                      currViewableIndex={selected}
                      postInfo={data}
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
        data={cartItems}
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
                    value={item.item['checked']}
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
