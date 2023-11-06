import {
  View,
  SafeAreaView,
  TextInput,
  Text,
  StyleSheet,
  Pressable,
  Image,
} from 'react-native';
import useUserByUsername from './useByUsername';
import LoadingSpinner from '~/components/LoadingSpinner';

const Search = () => {
  const [getUser, { loading, data }] = useUserByUsername();

  const handleChange = (text: string) => {
    console.log('HELLO');
    getUser({ variables: { filters: { username: text } } });
  };

  console.log(data);

  return (
    <SafeAreaView>
      <View style={styles.searchBoxContainer}>
        <TextInput
          style={styles.searchBox}
          placeholder="Search"
          onChangeText={handleChange}
          autoCapitalize="none"
          autoCorrect={false}
        />
        <Pressable>
          <Text>Search</Text>
        </Pressable>
      </View>
      <View>
        {!!data &&
          (loading ? (
            <LoadingSpinner />
          ) : (
            <View>
              <Image
                source={{ uri: data.user.profilePictureURI }}
                style={{ width: 50, height: 50 }}
              />
              <Text>{data.user.username}</Text>
              <Text>{data.user.displayName}</Text>
            </View>
          ))}
      </View>
    </SafeAreaView>
  );
};

export default Search;

const styles = StyleSheet.create({
  searchBoxContainer: {
    alignItems: 'center',
  },
  searchBox: {
    padding: 10,
  },
});
