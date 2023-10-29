import { View, Pressable, Image, Text } from 'react-native';
import { useNavigation } from 'expo-router';
import { gql, useQuery } from '@apollo/client';

const query = gql`
  query ($sellerID: ID!) {
    products(sellerID: $sellerID) {
      id
      sellerID
      name
      description
      quantity
      price
      imageURI
    }
  }
`;

const ProfileProduct = () => {
  const { loading, error, data } = useQuery(query, {
    variables: {
      sellerID: 1,
    },
  });
  const navigation = useNavigation();

  console.log(loading);
  if (loading && !data)
    return (
      <View>
        <Text>{'Loading...'}</Text>
      </View>
    );
  if (error) return console.log(JSON.stringify(error, null, 2));

  return (
    <View>
      <View style={{ flexDirection: 'row', flexWrap: 'wrap', width: '100%' }}>
        {data.products.map((data) => {
          return (
            <View style={{ width: '50%', height: 200, borderWidth: 1 }}>
              <Pressable
                style={{ width: '100%', height: '100%', padding: 20 }}
                onPress={() => {
                  navigation.navigate('ProfileProductListing', { data: data });
                }}
              >
                <Image
                  source={{
                    uri: data.imageURI,
                  }}
                  style={{ width: '100%', height: '100%' }}
                  resizeMode="cover"
                />
              </Pressable>
            </View>
          );
        })}
      </View>
    </View>
  );
};

export default ProfileProduct;
