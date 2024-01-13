import { useEffect, useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Button from '~/components/Buttons/Button';
import * as Location from 'expo-location';
import MapView, { Circle, Marker } from 'react-native-maps';

const geojson = {
  // type: 'FeatureCollection',
  features: [
    {
      // type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [-70, 40],
        properties: null,
      },
    },
  ],
};

const DeliveryRange = () => {
  const [location, setLocation] = useState(null);
  const [markerLocation, setMarkerLocation] = useState({
    latitude: 2,
    longitude: 2,
  });
  const [showRadius, setShowRadius] = useState(false);

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
        // attributionEnabled={false}
        // logoEnabled={false}
        showsUserLocation
      >
        {!!location && (
          <>
            <Marker
              draggable
              coordinate={location.coords}
              tracksViewChanges={false}
              onDragStart={() => setShowRadius(false)}
              onDragEnd={(e) => {
                setShowRadius(true);
                setMarkerLocation(e.nativeEvent.coordinate);
              }}
              // onPointerMove={() => console.log('HELLO')}
            >
              {/* <Text>HELLO</Text> */}
            </Marker>
            {showRadius && <Circle center={markerLocation} radius={500} />}
          </>
        )}

        {/* <UserLocation /> */}
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
