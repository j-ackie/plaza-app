import { FC } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import UserActivity from './UserActivity';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AlertCircle from '@/components/AlertCircle';
import PlazaText from '@/components/PlazaText';

const mockUser = {
  username: 'Username',
  profilePictureURI:
    'https://hips.hearstapps.com/hmg-prod/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=0.752xw:1.00xh;0.175xw,0&resize=1200:*',
};

const mockData = [mockUser, mockUser, mockUser];

const Activity: FC = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Pressable
        style={styles.followRequests}
        onPress={() => navigation.navigate('Follow Requests')}
      >
        <PlazaText>Follow Requests</PlazaText>
        <View style={styles.followRequestsNum}>
          <AlertCircle size={10} />
          <PlazaText>2</PlazaText>
          <Ionicons name="chevron-forward" size={30} />
        </View>
      </Pressable>
      <View style={styles.activityList}>
        <PlazaText style={styles.label}>Today</PlazaText>
        {mockData.map((activity, index) => (
          <UserActivity key={index} user={mockUser} />
        ))}
      </View>
      <View style={styles.activityList}>
        <PlazaText style={styles.label}>This Week</PlazaText>
        {mockData.map((activity, index) => (
          <UserActivity key={index} user={mockUser} />
        ))}
      </View>
    </View>
  );
};

export default Activity;

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  followRequests: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 5,
    borderTopWidth: 2,
    borderBottomWidth: 2,
  },
  followRequestsNum: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  activityList: {
    gap: 10,
    paddingBottom: 10,
    borderBottomWidth: 2,
  },
  label: {
    padding: 10,
  },
});
