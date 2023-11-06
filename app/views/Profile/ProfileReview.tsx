import { gql, useQuery } from '@apollo/client';
import { useState } from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Modal,
} from 'react-native';
import LoadingSpinner from '~/components/LoadingSpinner';

const ProfileReview = () => {
  const GET_REVIEWS = gql`
    query reviews($filters: ReviewFilters!) {
      reviews(filters: $filters) {
        id
        description
        createdAt
        productID
        rating
        reviewerID
        title
      }
    }
  `;

  const { loading, error, data } = useQuery(GET_REVIEWS, {
    variables: { filters: { productID: 2 } },
  });

  const [isModalVisible, setModalVisible] = useState(false);
  const [selectedReview, setSelectedReview] = useState(null);

  if (loading) {
    return <LoadingSpinner />;
  }

  const reviews = Array.from({ length: 10 }, (_, index) => ({
    id: index.toString(),
    title: `Review Title ${index + 1}`,
    description: `Sample review description ${index + 1}`,
    rating: Math.floor(Math.random() * 5) + 1,
    user: `User${index + 1}`,
  }));

  const toggleModal = (review) => {
    setSelectedReview(review);
    setModalVisible(!isModalVisible);
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={data.reviews}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => toggleModal(item)}>
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

export default ProfileReview;
