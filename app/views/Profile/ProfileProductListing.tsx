import { View, Text, SafeAreaView, Pressable, Image } from 'react-native';

const ProfileProductListing = ({ route, navigation }) => {
  const data = route.params?.product;
  return (
    <View style={{ flexDirection: 'column', height: '100%' }}>
      <SafeAreaView style={{ backgroundColor: 'white' }}>
        <View
          style={{ flexDirection: 'row', alignItems: 'center', padding: 10 }}
        >
          <View
            style={{
              position: 'absolute',
              height: '100%',
              justifyContent: 'center',
              zIndex: 99,
            }}
          >
            <Pressable
              style={{ paddingHorizontal: 20 }}
              onPress={() => {
                navigation.goBack();
              }}
            >
              <Text style={{ color: 'blue' }}>Back</Text>
            </Pressable>
          </View>

          <View
            style={{
              width: '100%',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Text style={{ fontSize: 18 }}>{data.name}</Text>
          </View>
        </View>
      </SafeAreaView>

      <View style={{ flexDirection: 'column', alignItems: 'center' }}>
        <Image
          source={{
            uri: data.imageURIs[0],
          }}
          style={{ width: 200, height: 200, marginTop: 20 }}
          resizeMode="cover"
        />

        <Text style={{ fontSize: 24, fontWeight: 700, marginTop: 20 }}>
          {data.name + ' - ' + data.quantity}
        </Text>

        <Text style={{ fontSize: 24, fontWeight: 500, marginTop: 10 }}>
          {data.price}
        </Text>

        <Text style={{ fontSize: 18, marginTop: 10 }}>{data.description}</Text>
      </View>
    </View>
  );
};

export default ProfileProductListing;
