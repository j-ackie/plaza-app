import { gql, useQuery } from '@apollo/client';

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
      imageURI
    }
  }
`;

const useReviewsBySellerID = (sellerID) =>
  useQuery(GET_REVIEWS, { variables: { filters: { sellerID } } });

export default useReviewsBySellerID;
