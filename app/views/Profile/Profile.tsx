import { View, Text, Image, SafeAreaView, StyleSheet, Pressable, } from 'react-native'
import React from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import "react-native-safe-area-context"
import ProfileVideos from './ProfileVideos';
import ProfileProduct from './ProfileProduct';
import ProfileReview from './ProfileReview';
import ProfileLiked from './ProfileLiked';
import { ScrollView } from 'react-native-gesture-handler';
import {Tabs, MaterialTabBar, useFocusedTab} from "react-native-collapsible-tab-view"

// https://reactnavigation.org/docs/material-top-tab-navigator

// https://reactnavigation.org/docs/material-top-tab-navigator

const Profile = () => {

  const Header = () => {
    let rating = 4
    return (
        <View style={{width: "100%", flexDirection: "column", backgroundColor: "transparent"}}>
          <View style={{width: "100%", flexDirection: "row", justifyContent: "space-evenly", marginTop: 10}}>
            <View style={styles.infoContainer}>
              <Text style={styles.infoContainerHighlight}>173</Text>
              <Text>Following</Text>
            </View>
    
            <View style={styles.infoContainer}>
              <Text style={styles.infoContainerHighlight}>42 sales</Text>
              <View style={{flexDirection: "row", justifyContent: "center"}}>
                {[...Array(5)].map(() => {
                  for(let i = 0; i < 5; i++){
                    let element = null;
                    if(rating - 1 >= 0){
                      rating -= 1
                      element = (<MaterialCommunityIcons name={"star"} size={20} />)
                    }
                    else if(rating - 0.5 >= 0){
                      rating -= 0.5
                      element = (<MaterialCommunityIcons name={"star-half-full"} size={20} />)
                    }
                    else{
                      element = (<MaterialCommunityIcons name={"star-outline"} size={20} />)
                    }
                    return element;
                  }
                })}
              </View>
            </View>

            <View style={styles.infoContainer}>
              <Text style={styles.infoContainerHighlight}>265</Text>
              <Text>Followers</Text>
            </View>
          </View>
  
          
  
          <View style={{marginTop: 10}}>
            <Text style={{textAlign: "center", fontSize: 15, color: "#767676"}}>
              This is description {'\n'}
              There can only be three lines {'\n'}
              I am so alone {'\n'}
            </Text>
          </View>
        </View>
    )
  }

  const SafeAreaMaterialTopBar = ({...props}) => {
    return (
      <SafeAreaView style={{width: "100%", zIndex: 99}}>
        {/* @ts-ignore */}
        <MaterialTabBar {...props}
            indicatorStyle={{backgroundColor: "lightblue"}}
            style={{backgroundColor: "white"}}
            TabItemComponent={(props) => {
                const focusedTab = useFocusedTab()
                let iconName=""
                if (props.index == 0) {
                  iconName = focusedTab === "Videos"
                    ? 'play-box'
                    : 'play-box-outline';
                } else if (props.index == 1) {
                  iconName = focusedTab === "Products" ? 'view-list' : 'view-list-outline';
                }
                else if (props.index == 2) {
                  iconName = focusedTab === "Reviews" ? 'message-star' : 'message-star-outline';
                }
                else if (props.index == 3) {
                  iconName = focusedTab === "Liked" ? 'heart' : 'heart-outline';
                }
                return (
                  <Pressable style={{height: 50, flex: 1, justifyContent: "center", alignItems: "center"}} onPress={() => props.onPress(props.name)}>
                    <MaterialCommunityIcons name={iconName} size={25}  />
                    
                  </Pressable>
                )
              }
            }
        />
      </SafeAreaView>
    );
  };

  // TODO: Figure out a way to split a line of description into 3 lines
  return (
    <View style={{flexDirection: "column", alignItems: "center", height: "100%"}}>
      <View style={{width: "90%", padding: 10, flexDirection: "row", justifyContent: "center", borderBottomWidth: 2}}>
        <Text style={{fontWeight: "800", fontSize: 15}}>Profile</Text>
      </View>
      <Image
       source={{uri: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQnViDD6F2gonZQ26mmbjmtP0eQpoTzRdo9V8bz99_udISEKl6rvWwX_owa18wEU9Glkqd03YKervy1kqT6DWvnScw1QGSQwb_x3FQ2ppiXUtZDpOy73PPLpcDWFGU-cnFo4w&usqp=CAc"}}
       style={{width: 120, height: 120, marginTop: 15, borderRadius: 60}}
       resizeMethod='auto'/>
      <Text style={{fontWeight: "800", fontSize:15, marginTop: 10}}>@yourusername</Text>

      <View style={{flexGrow: 1, width: "100%", backgroundColor: "transparent", marginTop: 5, zIndex: -20, overflow: "hidden"}}>
          <Tabs.Container
          renderHeader={Header}
          headerContainerStyle={{backgroundColor: "transparent", elevation: 0}}
          renderTabBar={SafeAreaMaterialTopBar}
          >
            <Tabs.Tab
              name="Videos"
            >
              <Tabs.ScrollView>
                <ProfileVideos />
              </Tabs.ScrollView>
            </Tabs.Tab>
            <Tabs.Tab
              name="Products"
            >
              <Tabs.ScrollView>
                <ProfileProduct />
              </Tabs.ScrollView>
            </Tabs.Tab>
            <Tabs.Tab
              name="Reviews"
            >
              <Tabs.ScrollView>
                <ProfileReview />
              </Tabs.ScrollView>
            </Tabs.Tab>
            <Tabs.Tab
              name="Liked"
            >
              <Tabs.ScrollView>
                <ProfileLiked />
              </Tabs.ScrollView>
            </Tabs.Tab>
          </Tabs.Container>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
  infoContainer: {
    flexDirection: "column",
    alignItems: "center"
  },

  infoContainerHighlight: {
    fontWeight: "600"
  }
})

export default Profile