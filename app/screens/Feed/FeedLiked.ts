import { gql, useMutation } from '@apollo/client';

const LIKED_MUTATION = gql`
  mutation Mutation($liked: LikedCreateInput!) {
    createLiked(liked: $liked) {
      id
      userID
      videoID
    }
  }
`;

const LIKE_DELETE_MUTATION = gql`
  mutation Mutation($liked: LikedCreateInput!) {
    deleteLiked(liked: $liked) {
      id
      userID
      videoID
    }
  }
`

const useCreateLiked = () =>
  useMutation(LIKED_MUTATION);

export const useDeleteLiked = () =>
  useMutation(LIKE_DELETE_MUTATION);

export default useCreateLiked;
