import { FC, useEffect, useState } from 'react';
import { View, Pressable, Image, Dimensions } from 'react-native';
import * as MediaLibrary from 'expo-media-library';

const Assets: FC = ({ route }) => {
  const { assetType } = route.params;
  const [libraryPermissions, requestLibraryPermission] =
    MediaLibrary.usePermissions();
  const [userAssets, setUserAssets] = useState<MediaLibrary.Asset[]>(null);
  // const [, setUserAssets] = useContext(UserAssetsContext);

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

  return (
    <View style={{ flexDirection: 'row', flexWrap: 'wrap', top: 100 }}>
      {userAssets.map((asset) => (
        <Pressable key={asset.id}>
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
