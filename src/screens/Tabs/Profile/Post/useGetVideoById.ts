import { gql } from '@/__generated__';
import { useQuery } from '@apollo/client';

const GET_PROFILE_VIDEO_BY_ID = gql(`
  query profileVideoById($videoId: ID!) {
    video(videoID: $videoId) {
      id
      description
      userID
      videoURL
      products {
        id
        imageURIs
        price
        quantity
        description
        name
      }
      isLiked
    }
  }
`);

const useGetProfileVideoById = (videoId: number) =>
  useQuery(GET_PROFILE_VIDEO_BY_ID, { variables: { videoId } });

export default useGetProfileVideoById;
