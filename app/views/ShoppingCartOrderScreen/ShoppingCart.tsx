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
import { Item } from '../../interfaces/queries.interfaces';
import styles from './ShoppingCartOrderScreen.styles';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Carousel from 'react-native-reanimated-carousel';
import CartModalItemInfo from '~/components/Modal/CartModalItemInfo';
import CartModalVideo from '~/components/Modal/CartModalVideo';
import CheckBox from 'expo-checkbox';
import { useNavigation } from '@react-navigation/native';

const mockData = [
  {
    _id: '1',
    sellerID: '3',
    name: 'Handbag',
    description: 'Barely used.',
    price: 24.67,
    quantity: 2,
    imageURL:
      'https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/51LhHqu9akL._AC_UY1000_.jpg',
    videoURI:
      'https://assets.mixkit.co/videos/preview/mixkit-man-doing-tricks-with-roller-skates-in-a-parking-lot-34553-large.mp4',
    timestamp: '2023-04-07T22:24:39.000+00:00',
  },
  {
    _id: '1',
    sellerID: '3',
    name: 'Handbag',
    description: 'Barely used.',
    price: 24.67,
    quantity: 2,
    imageURL:
      'https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/51LhHqu9akL._AC_UY1000_.jpg',
    videoURI:
      'https://assets.mixkit.co/videos/preview/mixkit-man-doing-tricks-with-roller-skates-in-a-parking-lot-34553-large.mp4',
    timestamp: '2023-04-07T22:24:39.000+00:00',
  },
  {
    _id: '1',
    sellerID: '3',
    name: 'backpack',
    description: 'Barely used.',
    price: 24.67,
    quantity: 2,
    imageURL:
      'https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/51LhHqu9akL._AC_UY1000_.jpg',
    videoURI:
      'https://assets.mixkit.co/videos/preview/mixkit-man-doing-tricks-with-roller-skates-in-a-parking-lot-34553-large.mp4',
    timestamp: '2023-04-07T22:24:39.000+00:00',
  },
];

const ShoppingCart = () => {
  const [cartItems, setCartItems] = useState<Item[]>([]);
  const [modalVis, setModalVis] = useState(false);
  const [selected, setSelected] = useState(0);

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

  return (
    <>
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
                      selected={mockData[selected]}
                    ></CartModalItemInfo>
                  );
                } else {
                  return (
                    <CartModalVideo
                      videoIndex={selected}
                      currViewableIndex={selected}
                      postInfo={mockData[selected]}
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

      <FlatList
        data={cartItems}
        renderItem={(item) => (
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
                  uri: item.item.imageURL,
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
        )}
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
