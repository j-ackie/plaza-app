import { useEffect, useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Button from '~/components/Buttons/Button';
import * as Location from 'expo-location';
import MapboxGL, {
  Callout,
  CircleLayer,
  MapView,
  MarkerView,
  PointAnnotation,
  ShapeSource,
  UserLocation,
} from '@rnmapbox/maps';

const DeliveryRange = () => {
  const [location, setLocation] = useState(null);

  useEffect(() => {
    (async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        // setErrorMsg('Permission to access location was denied');
        return;
      }

      const location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);

  console.log(location);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.textContainer}>
        <Text>
          Select the range where you would be willing to meet and deliver the
          item
        </Text>
      </View>
      <MapView
        style={styles.map}
        attributionEnabled={false}
        logoEnabled={false}
      >
        <ShapeSource
          shape={{
            type: 'Point',
            coordinates: [-74.004, 40.714],
          }}
        >
          <CircleLayer
            id="HJAHAHAH"
            style={{ circleRadius: 100 }}
          ></CircleLayer>
        </ShapeSource>
        <UserLocation />
      </MapView>
      <View style={styles.buttonContainer}>
        <Button title="Confirm Delivery Range" />
      </View>
    </SafeAreaView>
  );
};

export default DeliveryRange;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttonContainer: {
    paddingTop: 20,
    paddingLeft: 20,
    paddingRight: 20,
  },
  textContainer: {
    padding: 10,
  },
  map: {
    flex: 1,
  },
});
