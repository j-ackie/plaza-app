import { Image, Text, View } from 'react-native';
import React from 'react';
import * as Progress from 'react-native-progress';
import styles from './ModalProductStyles';
import { ProgressBar } from 'react-native-paper';
import Color from '@/constants/color';
import PlazaText from '@/components/PlazaText';

const ProductDelivery = (props) => {
  const progressWidth = 160;
  const selected = props.selected;
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: selected.imageURI,
        }}
        style={styles.shoppingCartModalImage}
        resizeMode="cover"
      />
      <PlazaText style={styles.modalTitle}>
        {selected.name + ' - ' + selected.quantity}
      </PlazaText>

      <View
        style={{
          width: 230,
          height: progressWidth,
          flexDirection: 'row',
          alignItems: 'center',
          marginTop: 20,
        }}
      >
        <ProgressBar 
          animatedValue={0.35 * selected.status}
          color={Color.BLACK}
          style={{
            transform: [{ rotate: '90deg' }, { translateY: progressWidth / 2 }],
            width: progressWidth
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

            if (element <= selected.status) {
              return (
                <View style={{ flexDirection: 'row' }}>
                  <View style={styles.orderHistoryModalDot}></View>
                  <PlazaText style={styles.orderHistoryModalText}>{message}</PlazaText>
                </View>
              );
            }
            return (
              <View style={{ flexDirection: 'row' }}>
                <View style={styles.orderHistoryModalDotUnselected}></View>
                <PlazaText style={styles.orderHistoryModalTextUnselected}>
                  {message}
                </PlazaText>
              </View>
            );
          })}
        </View>
      </View>
    </View>
  );
};

export default ProductDelivery;
