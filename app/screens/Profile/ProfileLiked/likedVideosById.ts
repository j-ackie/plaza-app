import { gql, useQuery } from '@apollo/client';

const GET_LIKED = gql`
  query ($userID: Int!) {
    likedVideos(userID: $userID) {
      id
      userID
      videoID
    }
  }
`;

const useLikedVideosById = (id: number) =>
  useQuery(GET_LIKED, { variables: { userID: id } });

export default useLikedVideosById;
