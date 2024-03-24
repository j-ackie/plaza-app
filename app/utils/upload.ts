import * as Filesystem from 'expo-file-system';
import * as MediaLibrary from 'expo-media-library';
import { Buffer } from 'buffer';
import mime from 'mime';

const upload = async (asset, uploadURI: string) => {
  const assetInfo = await MediaLibrary.getAssetInfoAsync(asset);
  const localURI = assetInfo.localUri;
  const base64Payload = await Filesystem.readAsStringAsync(localURI, {
    encoding: 'base64',
  });

  const payload = Buffer.from(base64Payload, 'base64');
  const response = await fetch(uploadURI, {
    method: 'PUT',
    body: payload,
    headers: {
      'Content-Type': mime.getType(assetInfo.filename),
    },
  });

  return response;
};

export default upload;
