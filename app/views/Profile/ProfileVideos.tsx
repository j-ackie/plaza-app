import { View, Text, Pressable, Modal } from 'react-native'
import React, { useState } from 'react'
import styles from '../ShoppingCartOrderScreen/ShoppingCartOrderScreen.styles';
import Carousel from 'react-native-reanimated-carousel';
import CartModalItemInfo from '~/components/Modal/CartModalItemInfo';
import CartModalVideo from '~/components/Modal/CartModalVideo';

const ProfileVideos = () => {

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
  const [modalVis, setModalVis] = useState(false)
  const [selected, setSelected] = useState({})

  return (

    <View>
      <Modal
      animationType="fade"
      transparent={true}
      visible={modalVis}
      onRequestClose={() => {
        setModalVis(!modalVis);
      }}>

      <View style={styles.centeredView}>
        <View style={styles.modalView}>
            <Carousel 
              loop={false}
              vertical={false}
              width={330}
              height={450}
              data={[...new Array(2).keys()]}
              renderItem={({index}) => {
                if(index == 0){
                  return (<CartModalItemInfo selected={selected}></CartModalItemInfo>)
                }
                else{
                  return (<CartModalVideo 
                    videoIndex={0}
                    currViewableIndex={0}
                    postInfo={selected}
                  />)
                }
              }}
            />

            <Pressable
                style={[styles.cartButton, styles.buttonClose]}
                onPress={() => setModalVis(!modalVis)}>
                <Text style={styles.textStyle}>Hide Modal</Text>
            </Pressable>
          </View>
        </View>
        
      </Modal>
      <View style={{flexDirection: "row", flexWrap: "wrap", width: "100%"}}>
        {
          mockData.map((data) => {
            return (
              <View style={{width: "33.33333%", height: 200, borderWidth: 1}}>
                <Pressable style={{width: "100%", height: "100%"}} onPress={() => {
                  setSelected(data)
                  setModalVis(true)
                }}>
                  <Text>{data.name}</Text>
                </Pressable>
              </View>
            )
          })
        }
      </View>
    </View>
    
  )
}

export default ProfileVideos