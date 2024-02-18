import { useEffect, useRef, useState } from 'react';
import { SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native';
import Button from '~/components/Buttons/Button';
import * as Location from 'expo-location';
import MapView, {
  Circle,
  Marker,
  MarkerDragStartEndEvent,
} from 'react-native-maps';
import Slider from '@react-native-community/slider';

const milesToMeters = (miles: number) => {
  return miles * 1609.344;
};

const DeliveryRange = () => {
  const [location, setLocation] = useState(null);
  const [mapCenterLocation, setMapCenterLocation] = useState(null);
  const [markerLocation, setMarkerLocation] = useState(null);
  const [localRadius, setLocalRadius] = useState(1);
  const [radius, setRadius] = useState(1);
  const [address, setAddress] = useState(null);
  const mapRef = useRef<MapView>(null);

  const radiusInMeters = milesToMeters(radius);

  useEffect(() => {
    (async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        // setErrorMsg('Permission to access location was denied');
        return;
      }

      const location = await Location.getCurrentPositionAsync({});

      Location.reverseGeocodeAsync(location.coords).then((r) =>
        setAddress(r[0].name)
      );

      setLocation(location.coords);

      setMarkerLocation(location.coords);

      initializeCamera(location.coords);
    })();
  }, []);

  const timeout = useRef(null);

  const initializeCamera = (location: Location.LocationObjectCoords) => {
    if (!mapRef.current || !location) return;

    mapRef.current.setCamera({
      center: location,
      altitude: radiusInMeters * 8,
      zoom: 5,
    });
  };

  const handleChangeRadius = (newRadius: number) => {
    setRadius(newRadius);
    setLocalRadius(newRadius);

    mapRef.current.setCamera({
      center: markerLocation,
      altitude: milesToMeters(newRadius) * 8,
      zoom: 5,
    });
  };

  const handleDragMarker = async (e: MarkerDragStartEndEvent) => {
    const newMarkerLocation = e.nativeEvent.coordinate;

    Location.reverseGeocodeAsync(newMarkerLocation).then((r) =>
      setAddress(r[0].name)
    );

    setMarkerLocation(newMarkerLocation);

    setTimeout(() => {
      mapRef.current.animateCamera({
        center: newMarkerLocation,
        altitude: radiusInMeters * 8,
        zoom: 5,
      });
    }, 300);
  };

  const handleChangeText = (text: string) => {
    const parsedRadius = parseFloat(text);

    if (isNaN(parsedRadius)) {
      clearTimeout(timeout.current);
      return;
    }

    const newRadius =
      parsedRadius > 50 ? 50 : parsedRadius < 0 ? 0 : parsedRadius;

    clearTimeout(timeout.current);

    timeout.current = setTimeout(() => {
      setRadius(newRadius);

      mapRef.current.animateCamera({
        center: markerLocation,
        altitude: milesToMeters(newRadius) * 8,
        zoom: 5,
      });
    }, 500);
  };

  const centerCamera = (location: Location.LocationObjectCoords) => {
    mapRef.current.animateCamera({
      center: location,
      altitude: radiusInMeters * 8,
      zoom: 5,
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.textContainer}>
        <Text>
          Select the range where you would be willing to meet and deliver the
          item
        </Text>
      </View>
      <View style={styles.mapContainer}>
        <MapView
          style={styles.map}
          showsUserLocation
          ref={mapRef}
          onMapReady={() => initializeCamera(location)}
        >
          {!!location && !!markerLocation && (
            <>
              <Marker
                draggable
                coordinate={location}
                tracksViewChanges={false}
                onDragEnd={handleDragMarker}
                onPress={() => centerCamera(markerLocation)}
              >
                {/* <Text>HELLO</Text> */}
              </Marker>
              <Circle center={markerLocation} radius={radiusInMeters} />
            </>
          )}
        </MapView>
        <View style={styles.addressContainer}>
          <Text>{address ?? '...'}</Text>
        </View>
        <View style={styles.sliderContainer}>
          <View style={styles.radiusTextContainer}>
            <TextInput keyboardType="numeric" onChangeText={handleChangeText}>
              {localRadius.toFixed(2)}
            </TextInput>
            <Text> miles</Text>
          </View>
          <View>
            <Slider
              maximumValue={50}
              value={radius}
              onValueChange={handleChangeRadius}
            />
          </View>
        </View>
      </View>
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
  mapContainer: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
  addressContainer: {
    position: 'absolute',
    alignSelf: 'center',
    backgroundColor: 'white',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    top: 10,
  },
  sliderContainer: {
    position: 'absolute',
    width: '100%',
    bottom: 0,
    padding: 20,
  },
  radiusTextContainer: {
    flexDirection: 'row',
    alignSelf: 'center',
    backgroundColor: 'white',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
  },
});
