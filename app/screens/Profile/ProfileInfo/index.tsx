import { View, Text, Pressable, SafeAreaView, StyleSheet } from 'react-native';
import {
  Tabs,
  MaterialTabBar,
  useFocusedTab,
} from 'react-native-collapsible-tab-view';
import ProfileVideos from '../ProfileVideos';
import ProfileProduct from '../ProfileProduct';
import ProfileReviews from '../ProfileReviews';
import ProfileLiked from '../ProfileLiked';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Octicons from 'react-native-vector-icons/Octicons';
import ProfileHeader from '../ProfileHeader';
import useUserById from './userById';
import { useMemo, useRef } from 'react';
import { useRoute } from '@react-navigation/native';
import LoadingSpinner from '~/components/LoadingSpinner';
import { Portal } from '@gorhom/portal';
import BottomSheetModal, { BottomSheetView } from '@gorhom/bottom-sheet';
import Backdrop from '~/components/Backdrop/Backdrop';
import Bold from '~/components/Bold';
import { useNavigation } from 'expo-router';
import Modal from '~/components/Modal';

const SafeAreaMaterialTopBar = ({ ...props }) => {
  return (
    <MaterialTabBar
      {...props}
      style={{ backgroundColor: 'white' }}
      TabItemComponent={(props) => {
        const focusedTab = useFocusedTab();
        let iconName = '';
        if (props.index == 0) {
          iconName = focusedTab === 'Videos' ? 'play-box' : 'play-box-outline';
        } else if (props.index == 1) {
          iconName =
            focusedTab === 'Products' ? 'view-list' : 'view-list-outline';
        } else if (props.index == 2) {
          iconName =
            focusedTab === 'Reviews' ? 'message-star' : 'message-star-outline';
        } else if (props.index == 3) {
          iconName = focusedTab === 'Liked' ? 'heart' : 'heart-outline';
        }
        return (
          <Pressable
            style={{
              height: 50,
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
            }}
            onPress={() => props.onPress(props.name)}
          >
            <MaterialCommunityIcons name={iconName} size={25} />
          </Pressable>
        );
      }}
    />
  );
};

const ProfileInfo = () => {
  const navigation = useNavigation();
  const route = useRoute();

  const bottomSheetModalRef = useRef(null);

  const handleExpand = () => bottomSheetModalRef.current.snapToIndex(0);

  const handleClose = () => bottomSheetModalRef.current.close();

  const { loading, error, data } = useUserById(route.params.userID);

  const snapPoints = useMemo(() => ['75%'], []);

  if (loading) return <LoadingSpinner />;

  if (error) return <Text>Something went wrong {error.message}</Text>;

  const renderHeader = () => (
    <ProfileHeader user={data && data.user ? data.user : null} />
  );

  // TODO: Figure out a way to split a line of description into 3 lines
  return (
    <>
      <SafeAreaView style={styles.container}>
        <View style={{ flex: 1 }} />

        <View style={styles.displayNameContainer}>
          <Bold size={16}>@{data.user.username}</Bold>
        </View>

        <View style={styles.settingsIconContainer}>
          <Ionicons name="reorder-three" size={30} onPress={handleExpand} />
        </View>
      </SafeAreaView>

      <View style={styles.tabsContainer}>
        <Tabs.Container
          renderHeader={renderHeader}
          headerContainerStyle={{
            backgroundColor: 'transparent',
          }}
          renderTabBar={SafeAreaMaterialTopBar}
        >
          <Tabs.Tab name="Videos">
            <Tabs.ScrollView>
              <ProfileVideos />
            </Tabs.ScrollView>
          </Tabs.Tab>
          <Tabs.Tab name="Products">
            <Tabs.ScrollView>
              <ProfileProduct />
            </Tabs.ScrollView>
          </Tabs.Tab>
          <Tabs.Tab name="Reviews">
            <Tabs.ScrollView>
              <ProfileReviews />
            </Tabs.ScrollView>
          </Tabs.Tab>
          <Tabs.Tab name="Liked">
            <Tabs.ScrollView>
              <ProfileLiked />
            </Tabs.ScrollView>
          </Tabs.Tab>
        </Tabs.Container>
      </View>
      <Modal modalRef={bottomSheetModalRef}>
        <BottomSheetView style={{ padding: 15 }}>
          <Pressable
            style={styles.settingsContainer}
            onPress={() => {
              navigation.navigate('settings');
              handleClose();
            }}
          >
            <Octicons name="gear" size={24} />
            <Text style={styles.settingsText}>Settings and privacy</Text>
          </Pressable>
        </BottomSheetView>
      </Modal>
    </>
  );
};

export default ProfileInfo;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    zIndex: 99,
    margin: 10,
  },
  tabsContainer: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: 'transparent',
    marginTop: 5,
    zIndex: -20,
    overflow: 'hidden',
  },
  headerItem: {
    flex: 1,
  },
  displayNameContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  settingsIconContainer: { flex: 1, alignItems: 'flex-end' },
  settingsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
  },
  settingsText: {
    fontSize: 16,
  },
});
