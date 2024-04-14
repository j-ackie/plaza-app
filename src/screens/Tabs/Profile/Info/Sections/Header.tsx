import { User } from '@/__generated__/graphql';
import PlazaText from '@/components/PlazaText';
import ProfilePicture from '@/components/ProfilePicture';
import Stars from '@/components/Stars';
import { FC } from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';

interface HeaderProps {
  user: User;
}

const Header: FC<HeaderProps> = ({ user }) => {
  return (
    <SafeAreaView>
      <View style={styles.usernameContainer}>
        <ProfilePicture profilePictureUrl={user.profilePictureURI} />
        <PlazaText style={styles.displayName}>{user.displayName}</PlazaText>
        <View style={styles.metrics}>
          <View style={styles.metric}>
            <Stars rating={4} />
            <PlazaText>42 sales</PlazaText>
          </View>
          <View style={styles.metric}>
            <PlazaText>173</PlazaText>
            <PlazaText>Following</PlazaText>
          </View>
          <View style={styles.metric}>
            <PlazaText>173</PlazaText>
            <PlazaText>Followers</PlazaText>
          </View>
        </View>
        <PlazaText>{user.description}</PlazaText>
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
  metrics: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  metric: {
    flex: 1,
    gap: 5,
    alignItems: 'center',
  },
});
