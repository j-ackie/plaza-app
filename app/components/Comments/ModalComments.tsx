import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useCallback } from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import { BottomSheetFlatList } from '@gorhom/bottom-sheet'
import LoadingSpinner from '../LoadingSpinner'

const ModalComments = ({postComments}) => {

  const renderItem = useCallback(
    ({ item }) => (
      <View style={styles.comment}>
        <View style={styles.commentCircle}>
        </View>
        <View style={styles.commentContent}>
          <Text style={styles.commentName}>{item.username}</Text>
          <Text style={styles.commentText}>{item.comment}</Text>
        </View>
      </View>
    ),
    []
  );

  if (!postComments) return <LoadingSpinner />;

  return (
    <BottomSheetFlatList
      data={postComments.comments}
      keyExtractor={(i) => i}
      renderItem={renderItem}
      style={styles.commentModal}
      ListFooterComponent={() => (<View></View>)}
      ListFooterComponentStyle={{height: 20}}
    />
  )
}

export default ModalComments

const styles = StyleSheet.create({
  commentModal:{
    padding: 15,
    marginBottom: 100,
    flexDirection: "column"
  },
  commentCircle: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: "gray"
  },
  comment: {
    flexDirection: "row",
    flex: 1,
    minHeight: 50,
    paddingBottom: 20,
    paddingTop: 10,
  },
  commentContent:{
    flexDirection: "column",
    marginLeft: 10,
    flex: 1
  },
  commentName:{
    fontSize: 16,
    fontWeight: "bold"
  },
  commentText: {
    fontSize: 14
  }
})