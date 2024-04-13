import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import Bold from '~/components/Bold';

type SettingItemProps = {
  onPress: () => void;
  text: string;
};

const SettingItem: React.FC<SettingItemProps> = ({ onPress, text }) => {
  return (
    <Pressable style={styles.settingSection} onPress={onPress}>
      <View style={styles.settingIcon}>
        <Text>A</Text>
        <Bold size={16}>{text}</Bold>
      </View>
      <Text>{'>'}</Text>
    </Pressable>
  );
};

export default SettingItem;

const styles = StyleSheet.create({
  settingSection: {
    backgroundColor: 'white',
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  settingIcon: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
});
