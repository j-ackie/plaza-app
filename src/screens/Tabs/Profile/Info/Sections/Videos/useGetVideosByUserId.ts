import { gql } from '@/__generated__';
import { useQuery } from '@apollo/client';

const GET_VIDEOS_BY_USER_ID = gql(`
  query videosByUserId($filters: VideoFilters!) {
    videos(filters: $filters) {
      id
      userID
      thumbnailURL
    }
  }
`);

const useGetVideosByUserId = (userId: number) =>
  useQuery(GET_VIDEOS_BY_USER_ID, {
    variables: { filters: { userID: userId } },
  });

export default useGetVideosByUserId;
