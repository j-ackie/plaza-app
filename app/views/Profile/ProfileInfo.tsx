import { View, Text, Pressable, SafeAreaView } from 'react-native';

import {
  Tabs,
  MaterialTabBar,
  useFocusedTab,
} from 'react-native-collapsible-tab-view';
import ProfileVideos from './ProfileVideos';
import ProfileProduct from './ProfileProduct';
import ProfileReview from './ProfileReview';
import ProfileLiked from './ProfileLiked';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import ProfileHeader from './ProfileHeader';

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
  // TODO: Figure out a way to split a line of description into 3 lines
  return (
    <View
      style={{ flexDirection: 'column', alignItems: 'center', height: '100%' }}
    >
      <SafeAreaView
        style={{
          width: '100%',
          zIndex: 99,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <View
          style={{
            width: '90%',
            padding: 10,
            flexDirection: 'row',
            justifyContent: 'center',
            // borderBottomWidth: 2,
          }}
        >
          <Text style={{ fontWeight: '800', fontSize: 15 }}>John Smith</Text>
        </View>
      </SafeAreaView>

      <View
        style={{
          flexGrow: 1,
          width: '100%',
          backgroundColor: 'transparent',
          marginTop: 5,
          zIndex: -20,
          overflow: 'hidden',
        }}
      >
        <Tabs.Container
          renderHeader={ProfileHeader}
          headerContainerStyle={{
            backgroundColor: 'transparent',
            elevation: 0,
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
              <ProfileReview />
            </Tabs.ScrollView>
          </Tabs.Tab>
          <Tabs.Tab name="Liked">
            <Tabs.ScrollView>
              <ProfileLiked />
            </Tabs.ScrollView>
          </Tabs.Tab>
        </Tabs.Container>
      </View>
    </View>
  );
};

export default ProfileInfo;
