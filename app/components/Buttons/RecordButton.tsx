import { View, Pressable, StyleSheet } from 'react-native';

const RecordButton = () => {
  return (
    <View style={styles.recordButtonContainer}>
      <Pressable style={styles.recordButton} />
    </View>
  );
};

export default RecordButton;

const styles = StyleSheet.create({
  recordButtonContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 90,
    width: 90,
    borderWidth: 5,
    borderRadius: 45,
    borderColor: 'white',
  },
  recordButton: {
    height: 70,
    width: 70,
    backgroundColor: 'red',
    borderRadius: 35,
  },
});
