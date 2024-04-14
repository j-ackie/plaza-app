import { User } from '@/__generated__/graphql';
import PlazaText from '@/components/PlazaText';
import ProfilePicture from '@/components/ProfilePicture';
import { FC } from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';

interface HeaderProps {
  user: User;
}

const Header: FC<HeaderProps> = ({ user }) => {
  return (
    <SafeAreaView>
      <View style={styles.usernameContainer}>
        <PlazaText style={styles.username}>@{user.username}</PlazaText>
      </View>
    </SafeAreaView>
  );
};

export default Header;

const styles = StyleSheet.create({
  usernameContainer: {
    alignItems: 'center',
    gap: 10,
  },
  username: {
    fontWeight: 'bold',
  },
  displayName: {
    fontWeight: 'bold',
  },
});
