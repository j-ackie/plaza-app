import { User } from '@/__generated__/graphql';
import PlazaText from '@/components/PlazaText';
import { FC } from 'react';
import { SafeAreaView, View } from 'react-native';

interface HeaderProps {
  user: User;
}

const Header: FC<HeaderProps> = ({ user }) => {
  return (
    <SafeAreaView>
      <View>
        <PlazaText>@{user.username}</PlazaText>
      </View>
    </SafeAreaView>
  );
};

export default Header;
