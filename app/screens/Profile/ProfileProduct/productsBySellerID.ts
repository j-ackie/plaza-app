import { gql, useQuery } from '@apollo/client';

const PRODUCTS_BY_SELLER_ID = gql`
  query ($sellerID: ID!) {
    products(sellerID: $sellerID) {
      id
      name
      price
      quantity
      description
      imageURIs
    }
  }
`;

const useProductsBySellerID = (sellerID) =>
  useQuery(PRODUCTS_BY_SELLER_ID, { variables: { sellerID } });

export default useProductsBySellerID;
