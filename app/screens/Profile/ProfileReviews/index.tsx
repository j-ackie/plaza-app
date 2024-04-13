import { useState } from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Modal,
  Pressable,
  Image,
} from 'react-native';
import LoadingSpinner from '~/components/LoadingSpinner';
import useReviewsBySellerID from './reviewsBySellerID';
import { useNavigation } from 'expo-router';

const ProfileReviews = () => {
  const navigation = useNavigation();
  const { loading, error, data } = useReviewsBySellerID(1);

  const [isModalVisible, setModalVisible] = useState(false);
  const [selectedReview, setSelectedReview] = useState(null);
  const [isReviewPostVisible, setIsReviewPostVisible] = useState(true);

  if (loading) return <LoadingSpinner />;

  if (error) return <Text>{error.message}</Text>;

  const toggleModal = (review) => {
    setSelectedReview(review);
    setModalVisible(!isModalVisible);
  };

  console.log(data);

  return (
    <View style={styles.container}>
      {isReviewPostVisible && (
        <View style={styles.reviewPost}>
          <Text
            onPress={() => setIsReviewPostVisible(false)}
            style={{ position: 'absolute', top: 0, right: 10 }}
          >
            X
          </Text>
          <View style={styles.reviewPostText}>
            <Text>You recently purchased a Bag</Text>
            <Image
              source={{
                uri: 'https://www.ikea.com/us/en/images/products/goersnygg-shopping-bag-large-light-beige__1013442_pe829201_s5.jpg',
              }}
              style={{
                width: 50,
                height: 50,
              }}
            />
          </View>
          <Pressable
            style={styles.reviewPostButton}
            onPress={() => navigation.navigate('ProfileReviewInput')}
          >
            <Text>Post a review</Text>
          </Pressable>
        </View>
      )}

      <FlatList
        data={data.reviews}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('Profile Review', { review: item })
            }
          >
            <View style={styles.reviewBox}>
              <View style={styles.reviewHeader}>
                <Text style={styles.reviewTitle}>{item.title}</Text>
                <Text style={styles.reviewRating}>
                  {'⭐'.repeat(item.rating)}
                </Text>
              </View>
              <Text style={styles.reviewDescription}>{item.description}</Text>
              <Text style={styles.reviewUser}>{item.user}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
      <Modal
        animationType="slide"
        transparent={true}
        visible={isModalVisible}
        onRequestClose={() => {
          setModalVisible(!isModalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.reviewTitle}>{selectedReview?.title}</Text>
            <Text style={styles.reviewRating}>
              {'⭐'.repeat(selectedReview?.rating || 0)}
            </Text>
            <Text style={styles.reviewDescription}>
              {selectedReview?.description}
            </Text>
            <Text style={styles.reviewUser}>{selectedReview?.user}</Text>
            <TouchableOpacity
              style={styles.closeButton}
              onPress={() => setModalVisible(!isModalVisible)}
            >
              <Text style={styles.closeButtonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  reviewPost: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 20,
    backgroundColor: 'white',
  },
  reviewPostText: { flexDirection: 'row', alignItems: 'center', gap: 10 },
  reviewPostButton: {
    margin: 'auto',
    backgroundColor: 'lightblue',
    alignItems: 'center',
    // justifyContent: 'center',
    width: 100,
  },
  reviewBox: {
    backgroundColor: '#f0f0f0',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
  reviewHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  reviewTitle: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  reviewRating: {
    fontSize: 16,
  },
  reviewDescription: {
    fontSize: 14,
    marginTop: 5,
    marginBottom: 5,
  },
  reviewUser: {
    fontSize: 12,
    color: '#666',
    marginTop: 5,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalView: {
    width: '80%',
    backgroundColor: '#f0f0f0',
    borderRadius: 20,
    padding: 15,
    alignItems: 'flex-start',
  },
  closeButton: {
    marginTop: 10,
    backgroundColor: '#2196F3',
    borderRadius: 5,
    padding: 10,
    alignSelf: 'flex-end',
  },
  closeButtonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default ProfileReviews;
