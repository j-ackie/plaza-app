import { gql, useMutation } from '@apollo/client';

const CREATE_REVIEW = gql`
  mutation ($review: ReviewCreateInput!) {
    createReview(review: $review) {
      id
      description
      createdAt
      productID
      rating
      reviewerID
      title
      imageURI
      uploadURI
    }
  }
`;

const useCreateReview = () => useMutation(CREATE_REVIEW);

export default useCreateReview;
