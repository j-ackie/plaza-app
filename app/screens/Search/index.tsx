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
import Bold from '~/components/Bold';
// import { useNavigation } from '@react-navigation/native';

const Search = ({ navigation }) => {
  const [getUser, { loading, data }] = useUserByUsername();

  const handleChange = (text: string) => {
    console.log('HELLO');
    getUser({ variables: { filters: { username: text } } });
  };

  // const navigation = useNavigation();

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
      </View>
      <View>
        {!!data &&
          (loading ? (
            <LoadingSpinner />
          ) : (
            <Pressable
              onPress={() =>
                navigation.navigate('tabs', {
                  screen: 'profile',
                  params: {
                    screen: 'ProfileInfo',
                    params: {
                      userID: data.user.id,
                    },
                  },
                })
              }
            >
              <View style={styles.searchResult}>
                <Image
                  source={{ uri: data.user.profilePictureURI }}
                  style={styles.profilePicture}
                />
                <View>
                  <Bold>{data.user.username}</Bold>
                  <Text>{data.user.displayName}</Text>
                </View>
              </View>
            </Pressable>
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
  profilePicture: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  searchResult: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
});
