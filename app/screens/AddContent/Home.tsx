import { StatusBar } from 'expo-status-bar';
import { Pressable, Text, View, SafeAreaView, StyleSheet } from 'react-native';

const Home = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="dark" />
      <View style={styles.buttonsContainer}>
        <Text style={{ fontSize: 40, fontWeight: 'bold' }}>Sell on Plaza</Text>
        <View style={styles.buttonContainer}>
          <Text>Advertise an existing product</Text>
          <Pressable
            onPress={() => navigation.navigate('uploadContent')}
            style={styles.button}
          >
            <Text style={styles.buttonText}>Upload Content</Text>
          </Pressable>
        </View>
        <View style={styles.buttonContainer}>
          <Text>Add a product to your page</Text>
          <Pressable
            onPress={() => navigation.navigate('listItem')}
            style={styles.button}
          >
            <Text style={styles.buttonText}>List an item</Text>
          </Pressable>
        </View>
      </View>
      <Pressable
        onPress={() => {
          navigation.goBack();
        }}
        style={styles.exit}
      >
        <Text style={styles.exitText}>X</Text>
      </Pressable>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  buttonsContainer: { flexDirection: 'column', alignItems: 'center', gap: 150 },
  buttonContainer: {
    alignItems: 'center',
    gap: 10,
  },
  button: {
    borderWidth: 2,
    borderRadius: 5,
    padding: 10,
    width: 200,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 20,
  },
  exit: {
    position: 'absolute',
    bottom: 25,
    borderWidth: 2,
    width: 50,
    height: 50,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
  exitText: {
    fontSize: 30,
  },
});
