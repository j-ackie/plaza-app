import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {
  MaterialTopTabBar,
  MaterialTopTabBarProps,
} from '@react-navigation/material-top-tabs';
import { FC } from 'react';
import Color from '@/constants/color';

const BlockTopTabBar: FC<MaterialTopTabBarProps> = (props) => {
  return (
    <SafeAreaView style={styles.container}>
      <MaterialTopTabBar {...props} />
    </SafeAreaView>
  )
}

export default BlockTopTabBar

const styles = StyleSheet.create({
  container: {
    color: Color.BLACK,
    width: '100%',
    zIndex: 99,
  },
})