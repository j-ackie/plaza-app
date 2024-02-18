import { gql, useMutation, useQuery } from '@apollo/client';

const CREATE_COMMENT = gql`
  mutation Mutation($comment: CommentCreateInput) {
    createComment(comment: $comment) {
      comment
      createdAt
      id
      profilePicture
      userID
      username
      videoID
    }
  }
`;

const GET_COMMENT = gql`
  query Query($videoId: ID!) {
    comments(videoID: $videoId) {
      comment
      createdAt
      id
      profilePicture
      userID
      username
      videoID
    }
  }
`

const useCreateComment = (onCompleted, update) => useMutation(CREATE_COMMENT, { onCompleted, update });
const useGetComment = (videoID) => useQuery(GET_COMMENT, {
  variables:{
    videoId: videoID
  }
})

export {useGetComment, useCreateComment}
