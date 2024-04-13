import { gql, useQuery } from '@apollo/client';

const GET_VIDEOS_BY_USER_ID = gql`
  query ($filters: VideoFilters!) {
    videos(filters: $filters) {
      id
      userID
      thumbnailURL
    }
  }
`;

const useVideosByUserID = (userID: number) =>
  useQuery(GET_VIDEOS_BY_USER_ID, { variables: { filters: { userID } } });

export default useVideosByUserID;
