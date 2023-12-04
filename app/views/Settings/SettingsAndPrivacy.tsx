import { useNavigation } from 'expo-router';
import { View } from 'react-native';
import SettingItem from './SettingItem';

const SettingsAndPrivacy = () => {
  const navigation = useNavigation();

  return (
    <View>
      <View>
        <SettingItem
          onPress={() => navigation.navigate('account')}
          text="Account"
        />
      </View>
    </View>
  );
};

export default SettingsAndPrivacy;
