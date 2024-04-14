import Icon from '@/components/Icon';
import AvailableIcon from '@/constants/availableIcon';
import { FC } from 'react';
import { Pressable, StyleSheet } from 'react-native';

interface VideoButtonProps {
  icon: AvailableIcon;
  onPress: () => void;
}

const VideoButton: FC<VideoButtonProps> = ({ icon, onPress }) => {
  return (
    <Pressable onPress={onPress} style={styles.container}>
      <Icon icon={icon} />
    </Pressable>
  );
};

export default VideoButton;

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});
