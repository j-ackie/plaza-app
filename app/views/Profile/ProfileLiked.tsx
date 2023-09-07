import { View, Text, Pressable, Modal, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import styles from '../ShoppingCartOrderScreen/ShoppingCartOrderScreen.styles';
import { useNavigation } from '@react-navigation/native';
import * as VideoThumbnails from 'expo-video-thumbnails';

const ProfileLiked = () => {
  const mockData = [
    {
      _id: '1',
      sellerID: '3',
      name: 'Handbag',
      description: 'Barely used.',
      price: 24.67,
      quantity: 2,
      username: "username2",
      imageURL:
      'https://dks.scene7.com/is/image/GolfGalaxy/19ITXU24GLSSYPNLBSWE?qlt=70&wid=600&fmt=pjpeg',
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
      username: "username2",
      imageURL:
      'https://dks.scene7.com/is/image/GolfGalaxy/19ITXU24GLSSYPNLBSWE?qlt=70&wid=600&fmt=pjpeg',
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
      username: "username2", 
      imageURL:
      'https://dks.scene7.com/is/image/GolfGalaxy/19ITXU24GLSSYPNLBSWE?qlt=70&wid=600&fmt=pjpeg',
      videoURI:
        'https://assets.mixkit.co/videos/preview/mixkit-man-doing-tricks-with-roller-skates-in-a-parking-lot-34553-large.mp4',
      timestamp: '2023-04-07T22:24:39.000+00:00',
    },
  ];

  const navigation = useNavigation()

  return (

    <View>
      <View style={{flexDirection: "row", flexWrap: "wrap", width: "100%"}}>
        {
          mockData.map((data) => {
            return (
              <View style={{width: "33.33333%", height: 200, borderWidth: 1}}>
                <Pressable style={{width: "100%", height: "100%"}} onPress={() => {
                  navigation.navigate("ProfilePost", {data: data})
                }}>
                  <Image
                    source={{
                      uri: data.imageURL
                    }}
                    style={{width: "100%", height: "100%"}}
                    resizeMode="cover"
                  />
                </Pressable>
              </View>
            )
          })
        }
      </View>
    </View>
    
  )
}

export default ProfileLiked