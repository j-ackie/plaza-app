import { useState } from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { Camera, CameraType } from 'expo-camera';
import RecordButton from '~/components/Buttons/RecordButton';
import { StatusBar } from 'expo-status-bar';

const UploadContent = ({ navigation }) => {
  const [type, setType] = useState(CameraType.back);
  const [permission, requestPermission] = Camera.useCameraPermissions();

  if (!permission) {
    return null;
  }

  if (!permission.granted && permission.canAskAgain) {
    requestPermission();
  }

  return (
    <Camera style={styles.camera} type={type}>
      <StatusBar style="light" />
      <View style={styles.buttons}>
        <View style={styles.secondaryButtonsContainer}>
          <Pressable style={styles.secondaryButtons} />
          <Text style={styles.secondaryButtonsText}>Drafts</Text>
        </View>
        <RecordButton />
        <View style={styles.secondaryButtonsContainer}>
          <Pressable
            onPress={() => navigation.navigate('library')}
            style={styles.secondaryButtons}
          />
          <Text style={styles.secondaryButtonsText}>Upload</Text>
        </View>
      </View>
    </Camera>
  );
};

export default UploadContent;

const styles = StyleSheet.create({
  camera: {
    flex: 1,
  },
  buttons: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-around',
    marginTop: 'auto',
    marginBottom: 100,
  },
  secondaryButtonsContainer: {
    alignItems: 'center',
    color: 'white',
    gap: 5,
  },
  secondaryButtons: {
    height: 30,
    width: 30,
    borderRadius: 5,
    borderColor: 'white',
    borderWidth: 1,
  },
  secondaryButtonsText: {
    color: 'white',
  },
});
