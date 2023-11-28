import { gql, useMutation } from '@apollo/client';

const CREATE_REVIEW = gql`
  mutation createReview($review: ReviewCreateInput!) {
    createReview(review: $review) {
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

const useCreateReview = () => useMutation(CREATE_REVIEW);

export default useCreateReview;
