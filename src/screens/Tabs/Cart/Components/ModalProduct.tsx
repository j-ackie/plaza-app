import { Modal, Pressable, Text, View } from 'react-native';
import React, { useState } from 'react';
import styles from './ModalProductStyles';
import CartCarousel from './CartCarousel';
import HistoryCarousel from './HistoryCarousel';
import PlazaText from '@/components/PlazaText';

const ModalProduct = ({ item, browsing = true, visible, setVisible }) => {
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={visible}
      onRequestClose={() => {
        setVisible(!visible);
      }}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          {browsing ? (
            <CartCarousel item={item} />
          ) : (
            <HistoryCarousel item={item} />
          )}

          <Pressable
            style={[styles.cartButton, styles.buttonClose]}
            onPress={() => setVisible(!visible)}
          >
            <PlazaText style={styles.textStyle}>Hide Modal</PlazaText>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
};

export default ModalProduct;
