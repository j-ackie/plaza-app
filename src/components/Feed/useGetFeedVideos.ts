import { gql } from '@/__generated__';
import { useQuery } from '@apollo/client';

const GET_FEED_VIDEOS = gql(`
  query feedVideos {
    feedVideos {
      id
      userID
      videoURL
      description
      products {
        id
      }
    }
  }
`);

const useGetFeedVideos = () => useQuery(GET_FEED_VIDEOS);

export default useGetFeedVideos;
