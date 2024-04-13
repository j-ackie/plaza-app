import { SafeAreaView, StyleSheet } from 'react-native';
import Schedule from './Schedule';

const DeliveryTimes = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Schedule />
    </SafeAreaView>
  );
};

export default DeliveryTimes;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
