import React from 'react';
import { View, Image, Text, Pressable } from 'react-native';
import styles from './CartModal.styles';
import { FlatList } from 'react-native-gesture-handler';
import * as Progress from 'react-native-progress';

const CartModalItemDelivery = (props) => {
  const progressWidth = 160;

  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: props.selected.imageURI,
        }}
        style={styles.shoppingCartModalImage}
        resizeMode="cover"
      />
      <Text style={styles.modalTitle}>
        {props.selected.name + ' - ' + props.selected.quantity}
      </Text>

      <View
        style={{
          width: 230,
          height: progressWidth,
          flexDirection: 'row',
          alignItems: 'center',
          marginTop: 20,
        }}
      >
        <Progress.Bar
          progress={0.35 * props.selected.status}
          width={progressWidth}
          height={4}
          color="rgba(0, 0, 0, 1)"
          unfilledColor="rgba(240, 240, 240, 1)"
          borderWidth={0}
          style={{
            transform: [{ rotate: '90deg' }, { translateY: progressWidth / 2 }],
          }}
        />
        <View
          style={{
            height: '100%',
            position: 'absolute',
            left: -8,
            top: 0,
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}
        >
          {[0, 1, 2, 3].map((element) => {
            let message = '';
            switch (element) {
              case 0:
                message = 'Order confirmed';
                break;
              case 1:
                message = 'Seller shipped out';
                break;
              case 2:
                message = 'Out for delivery';
                break;
              case 3:
                message = 'Order delivered';
                break;
            }

            if (element <= props.selected.status) {
              return (
                <View style={{ flexDirection: 'row' }}>
                  <View style={styles.orderHistoryModalDot}></View>
                  <Text style={styles.orderHistoryModalText}>{message}</Text>
                </View>
              );
            }
            return (
              <View style={{ flexDirection: 'row' }}>
                <View style={styles.orderHistoryModalDotUnselected}></View>
                <Text style={styles.orderHistoryModalTextUnselected}>
                  {message}
                </Text>
              </View>
            );
          })}
        </View>
      </View>
    </View>
  );
};

export default CartModalItemDelivery;
