import { StyleSheet, View } from 'react-native';
import VideoButton from './VideoButton';
import AvailableIcon from '@/constants/availableIcon';

const VideoButtons = () => {
  return (
    <View style={styles.container}>
      <VideoButton
        icon={AvailableIcon.HEART}
        onPress={() => console.log('HELLO')}
      />
      <VideoButton
        icon={AvailableIcon.HEART}
        onPress={() => console.log('HELLO')}
      />
      <VideoButton
        icon={AvailableIcon.COMMENT}
        onPress={() => console.log('HELLO')}
      />
      <VideoButton
        icon={AvailableIcon.ARROW}
        onPress={() => console.log('HELLO')}
      />
    </View>
  );
};

export default VideoButtons;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'flex-end',
  },
});
