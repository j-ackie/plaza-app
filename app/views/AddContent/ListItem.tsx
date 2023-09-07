import { useState } from 'react';
import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

const ListItem = ({ navigation, route }) => {
  const [description, setDescription] = useState('');

  const { assets } = route.params;

  return (
    <View style={styles.listItemContainer}>
      <View style={{ alignItems: 'center' }}>
        <Pressable
          onPress={() =>
            navigation.navigate('library', { nextRoute: 'listItem' })
          }
          style={styles.addImage}
        >
          {assets.length === 0 ? (
            ''
          ) : (
            <Image style={{ flex: 1 }} source={{ uri: assets[0].uri }} />
          )}
        </Pressable>
      </View>
      <View>
        <Text style={styles.label}>Description</Text>
        <TextInput
          style={styles.description}
          value={description}
          onChangeText={setDescription}
          placeholder="Briefly describe your item"
          multiline
        />
      </View>
      <View>
        <Text style={styles.label}>Information</Text>
        <View style={styles.information}>
          <View style={[styles.informationTopRow, styles.informationRow]}>
            <View style={styles.informationCategory}>
              <Text>Category</Text>
            </View>
          </View>
          <View style={styles.informationRow}>
            <View style={styles.informationCategory}>
              <Text>Price</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.buttonsContainer}>
        <Pressable style={styles.button}>
          <Text>Preview</Text>
        </Pressable>
        <Pressable
          style={styles.button}
          onPress={() => navigation.navigate('finalTouches', { asset })}
        >
          <Text>Publish</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default ListItem;

const styles = StyleSheet.create({
  listItemContainer: {
    flex: 1,
    padding: 10,
    gap: 30,
  },
  addImage: {
    borderWidth: 2,
    borderRadius: 10,
    width: 100,
    height: 100,
    overflow: 'hidden',
  },
  description: {
    height: 100,
    padding: 10,
    borderWidth: 1,
    borderRadius: 10,
  },
  label: {
    fontWeight: 'bold',
    marginLeft: 10,
  },
  information: {
    borderWidth: 1,
    borderRadius: 10,
    height: 120,
  },
  informationCategory: {
    width: 100,
    height: '100%',
    padding: 20,
    borderRightWidth: 1,
    justifyContent: 'center',
  },
  informationTopRow: {
    flex: 1,
    borderBottomWidth: 1,
    alignItems: 'center',
  },
  informationRow: {
    flex: 1,
    flexDirection: 'row',
  },
  buttonsContainer: {
    flexDirection: 'row',
    marginBottom: 50,
    gap: 10,
    justifyContent: 'center',
  },
  button: {
    alignItems: 'center',
    borderWidth: 2,
    borderRadius: 10,
    padding: 15,
    width: '40%',
  },
});
