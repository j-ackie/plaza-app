import { Image, Pressable, View } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { StyleSheet } from 'react-native';
import { Text } from 'react-native';
import useUpdateProfilePicture from './updateProfilePicture';
import * as MediaLibrary from 'expo-media-library';
import * as Filesystem from 'expo-file-system';
import mime from 'mime';
import LoadingSpinner from '~/components/LoadingSpinner';
import { useState } from 'react';
import { Buffer } from 'buffer';
import { useNavigation } from 'expo-router';

const ConfirmProfilePicture = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const [updateProfilePicture, { data, loading, error }] =
    useUpdateProfilePicture();
  const [isUploading, setIsUploading] = useState(false);

  const { asset } = route.params;

  const onCompleted = async (data) => {
    const assetInfo = await MediaLibrary.getAssetInfoAsync(asset);
    const localURI = assetInfo.localUri;
    const base64Payload = await Filesystem.readAsStringAsync(localURI, {
      encoding: 'base64',
    });

    const payload = Buffer.from(base64Payload, 'base64');
    const response = await fetch(data.updateProfilePicture, {
      method: 'PUT',
      body: payload,
      headers: {
        // right now, it's only using video/mov - replace it later with other mimetypes
        'Content-Type': mime.getType(assetInfo.filename),
      },
    });
    if (response.status === 200) {
      console.log('HELLO');
      navigation.navigate('profile');
    } else {
      console.log(response);
      setIsUploading(false);
    }
  };

  const handleUpload = () => {
    setIsUploading(true);
    updateProfilePicture({ onCompleted });
  };

  if (loading || isUploading) return <LoadingSpinner />;

  return (
    <View style={styles.container}>
      <Image source={{ uri: asset.uri }} style={styles.profilePicture} />
      <Pressable onPress={handleUpload}>
        <Text>Submit</Text>
      </Pressable>
    </View>
  );
};

export default ConfirmProfilePicture;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  profilePicture: {
    width: 300,
    height: 300,
    borderRadius: 150,
  },
});
