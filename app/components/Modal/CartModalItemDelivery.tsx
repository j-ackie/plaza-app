import React from 'react';
import { View, Image, Text, Pressable } from 'react-native';
import styles from './CartModal.styles';
import { FlatList } from 'react-native-gesture-handler';
import * as Progress from 'react-native-progress';

const CartModalItemDelivery = (props) => {
  let progressWidth = 160;

  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: props.selected.imageURL,
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
          progress={0.35}
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
          <View style={{ flexDirection: 'row' }}>
            <View style={styles.orderHistoryModalDot}></View>
            <Text style={styles.orderHistoryModalText}>Order confirmed</Text>
          </View>

          <View style={{ flexDirection: 'row' }}>
            <View style={styles.orderHistoryModalDot}></View>
            <Text style={styles.orderHistoryModalText}>Seller shipped out</Text>
          </View>

          <View style={{ flexDirection: 'row' }}>
            <View style={styles.orderHistoryModalDotUnselected}></View>
            <Text style={styles.orderHistoryModalTextUnselected}>
              Out for delivery
            </Text>
          </View>

          <View style={{ flexDirection: 'row' }}>
            <View style={styles.orderHistoryModalDotUnselected}></View>
            <Text style={styles.orderHistoryModalTextUnselected}>
              Order delivered
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default CartModalItemDelivery;
