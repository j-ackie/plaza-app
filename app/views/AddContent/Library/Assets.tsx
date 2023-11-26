import { FC, useEffect, useState } from 'react';
import { View, Pressable, Image, Dimensions } from 'react-native';
import * as MediaLibrary from 'expo-media-library';
import { StatusBar } from 'expo-status-bar';

const Assets: FC = ({ navigation, route }) => {
  const [libraryPermissions, requestLibraryPermission] =
    MediaLibrary.usePermissions();
  const [userAssets, setUserAssets] = useState<MediaLibrary.Asset[]>(null);
  const { assetType = null, nextRoute = 'addProducts' } = route.params;

  useEffect(() => {
    if (!libraryPermissions) {
      return;
    }

    if (libraryPermissions.granted) {
      MediaLibrary.getAssetsAsync({
        mediaType: assetType ?? ['audio', 'photo', 'video', 'unknown'],
      }).then((e) => setUserAssets(e.assets));
    } else if (libraryPermissions.canAskAgain) {
      requestLibraryPermission();
    }
  }, [libraryPermissions]);

  if (!userAssets) {
    return null;
  }

  const windowWidth = Dimensions.get('window').width;

  const handlePress = (asset) => {
    if (nextRoute === 'addProducts') {
      navigation.navigate(nextRoute, { asset });
    } else {
      navigation.navigate(nextRoute, { assets: [asset] });
    }
  };

  return (
    <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
      <StatusBar style="dark" />
      {userAssets.map((asset) => (
        <Pressable key={asset.id} onPress={() => handlePress(asset)}>
          <Image
            style={{ width: windowWidth / 4, height: windowWidth / 4 }}
            source={{ uri: asset.uri }}
          />
        </Pressable>
      ))}
    </View>
  );
};

export default Assets;
