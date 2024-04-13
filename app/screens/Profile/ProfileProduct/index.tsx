import { View, Pressable, Image, Text } from 'react-native';
import { useNavigation } from 'expo-router';
import useProductsBySellerID from './productsBySellerID';
import LoadingSpinner from '~/components/LoadingSpinner';

const ProfileProduct = () => {
  const navigation = useNavigation();
  const { loading, error, data } = useProductsBySellerID(1);

  if (loading) return <LoadingSpinner />;

  if (error) return <Text>Something went wrong</Text>;

  return (
    <View>
      <View style={{ flexDirection: 'row', flexWrap: 'wrap', width: '100%' }}>
        {data.products.map((product) => {
          return (
            <View
              key={product.id}
              style={{ width: '50%', height: 200, borderWidth: 1 }}
            >
              <Pressable
                style={{ width: '100%', height: '100%', padding: 20 }}
                onPress={() => {
                  navigation.navigate('ProfileProductListing', {
                    product,
                  });
                }}
              >
                {product.imageURIs.length > 0 && (
                  <Image
                    source={{
                      uri: product.imageURIs[0],
                    }}
                    style={{ width: '100%', height: '100%' }}
                    resizeMode="cover"
                  />
                )}
              </Pressable>
            </View>
          );
        })}
      </View>
    </View>
  );
};

export default ProfileProduct;
