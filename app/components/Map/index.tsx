import { StyleSheet, View } from 'react-native';
import MapView, { Circle, Marker } from 'react-native-maps';
import * as Location from 'expo-location';
import { useEffect, useState } from 'react';

interface MapProps {}

const Map = () => {
  const [location, setLocation] = useState(null);
  const [markerCoords, setMarkerCoords] = useState(null);

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
  console.log('HELLO?');
  return <View></View>;
};

export default Map;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
