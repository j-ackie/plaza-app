import AvailableIcon from '@/constants/availableIcon';
import { FC } from 'react';
import { Pressable, StyleSheet } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

interface VideoButtonProps {
  icon: AvailableIcon;
  onPress: () => void;
}

const VideoButton: FC<VideoButtonProps> = ({ icon, onPress }) => {
  return (
    <Pressable onPress={onPress} style={styles.container}>
      <MaterialCommunityIcons name="comment" color="#FFFFFF" size={30} />
    </Pressable>
  );
};

export default VideoButton;

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});
