import { gql } from '@/__generated__';
import { useQuery } from '@apollo/client';

const GET_PRODUCT_BY_ID = gql(`
  query getProductById($productId: ID!) {
    product(id: $productId) {
      description
      id
      imageURIs
      name
      price
      quantity
      sellerID
    }
  }
`);

const useGetProductById = (id: number) => {
  return useQuery(GET_PRODUCT_BY_ID, { variables: { productId: id } });
};

export default useGetProductById;
