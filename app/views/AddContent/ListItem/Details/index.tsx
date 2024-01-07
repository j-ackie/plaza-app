import { useState } from 'react';
import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import useCreateProduct from './createProduct';
import LoadingSpinner from '~/components/LoadingSpinner';
import * as Filesystem from 'expo-file-system';
import * as MediaLibrary from 'expo-media-library';
import { Buffer } from 'buffer';
import mime from 'mime';
import Information from './Information';

const Details = ({ navigation, route }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [quantity, setQuantity] = useState(null);

  // replace initial value later with null
  const [price, setPrice] = useState(27.0);
  const [isUploading, setIsUploading] = useState(false);
  const [createProduct, { data, loading, error }] = useCreateProduct();

  const { assets } = route.params;

  console.log(assets);

  const onCompleted = async (data) => {
    const assetInfo = await MediaLibrary.getAssetInfoAsync(assets[0]);
    const localURI = assetInfo.localUri;
    const base64Payload = await Filesystem.readAsStringAsync(localURI, {
      encoding: 'base64',
    });

    const payload = Buffer.from(base64Payload, 'base64');
    const response = await fetch(data.createProduct.imageURIs[0], {
      method: 'PUT',
      body: payload,
      headers: {
        'Content-Type': mime.getType(assetInfo.filename),
      },
    });
    if (response.ok) {
      navigation.navigate('profile');
    } else {
      console.log(response);
      setIsUploading(false);
    }
  };

  const handlePublish = () => {
    setIsUploading(true);

    createProduct({
      variables: {
        product: {
          name,
          description,
          quantity,
          price,
        },
      },
      onCompleted,
    });
  };

  if (loading || isUploading) return <LoadingSpinner />;

  if (error) return <Text>{error.message}</Text>;

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
        <Text style={styles.label}>Name</Text>
        <TextInput
          style={styles.name}
          value={name}
          onChangeText={setName}
          placeholder="Enter product name here"
          autoCapitalize="none"
          autoCorrect={false}
        />
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
      <Information />
      <View style={styles.buttonsContainer}>
        <Pressable style={styles.button}>
          <Text>Preview</Text>
        </Pressable>
        <Pressable style={styles.button} onPress={handlePublish}>
          <Text>Publish</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Details;

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
  name: {
    height: 40,
    padding: 10,
    borderWidth: 1,
    borderRadius: 10,
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
    alignItems: 'center',
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
