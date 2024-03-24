import { View } from 'react-native';
import SettingItem from './SettingItem';
import { useNavigation } from 'expo-router';

const Account = () => {
  const navigation = useNavigation();

  return (
    <View>
      <SettingItem
        onPress={() => navigation.navigate('profilePictureGallery')}
        text="Change profile picture"
      />
    </View>
  );
};

export default Account;
