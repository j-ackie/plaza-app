import { gql } from '@/__generated__';
import { useMutation, useQuery } from '@apollo/client';

const GET_HISTORY_BY_ID = gql(`
  query getHistoryById($userId: Int!) {
    history(userID: $userId) {
      id
      imageURI
      name
      orderedAt
      productID
      status
      userID
      videoID
      quantity
    }
  }
`);

const ADD_HISTORY = gql(`
  mutation addHistory($order: HistoryInsertInput) {
    insertHistory(order: $order) {
      id
      imageURI
      name
      orderedAt
      quantity
      productID
      status
      userID
      videoID
    }
  }
`);

const useGetHistoryById = (id: number) => {
  return useQuery(GET_HISTORY_BY_ID, { variables: { userId: id } });
};

const useAddHistory = () => {
  // TODO: Update cache
  const onCompleted = () => {};
  const update = (cache, data) => {
    cache.writeQuery({
      query: GET_HISTORY_BY_ID,
      data: {
        history: {
          id: data.id,
          imageURI: data.imageURI,
          name: data.name,
          orderedAt: data.orderedAt,
          productID: data.productID,
          quantity: data.quantity,
          status: data.status,
          userID: data.userID,
          videoID: data.videoID
        }
      },
      variables: {
        "userId": data.userID
      }
    })
  }


  return useMutation(ADD_HISTORY, { onCompleted, update });
};

export { useGetHistoryById, useAddHistory };
