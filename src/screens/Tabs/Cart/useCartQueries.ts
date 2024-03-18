import { gql } from '@/__generated__';
import { useQuery } from '@apollo/client';

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

const useGetCartById = (id: number) => {
  return useQuery(GET_CART_BY_ID, { variables: { userId: id } });
};

export default useGetCartById;
