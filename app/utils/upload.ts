import * as Filesystem from 'expo-file-system';
import * as MediaLibrary from 'expo-media-library';
import { Buffer } from 'buffer';
import mime from 'mime';

const uploadToUrl = async (asset: MediaLibrary.AssetRef, uploadUrl: string) => {
  const assetInfo = await MediaLibrary.getAssetInfoAsync(asset);
  const localUri = assetInfo.localUri;
  const base64Payload = await Filesystem.readAsStringAsync(localUri, {
    encoding: 'base64',
  });

  const payload = Buffer.from(base64Payload, 'base64');
  const response = await fetch(uploadUrl, {
    method: 'PUT',
    body: payload,
    headers: {
      'Content-Type': mime.getType(assetInfo.filename),
    },
  });

  return response;
};

export default uploadToUrl;
