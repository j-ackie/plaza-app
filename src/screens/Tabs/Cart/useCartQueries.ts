import { gql } from '@/__generated__';
import { useMutation, useQuery } from '@apollo/client';

const GET_CART_BY_ID = gql(`
  query getCartById($userId: Int!) {
    cart(userID: $userId) {
      id
      productID
      userID
      name
      imageURI
      price
      videoID
    }
  }
`);

const DELETE_CART = gql(`
    mutation deleteCartByID($productId: Int!) {
      deleteCart(productID: $productId) {
        id
        imageURI
        name
        price
        productID
        userID
        videoID
      }
    }
  `)

const useGetCartById = (id: number) => {
  return useQuery(GET_CART_BY_ID, { variables: { userId: id } });
};

const useDeleteCartById = () => {

  const onCompleted = () => {}

  const update = (cache, data) => {
    const normalizedId = cache.identify(data);
    cache.evict({ id: normalizedId });
    cache.gc();
  }

  return useMutation(DELETE_CART, { onCompleted, update })
}

export { useGetCartById, useDeleteCartById }
