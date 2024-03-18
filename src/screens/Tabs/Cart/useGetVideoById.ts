import { gql } from '@/__generated__';
import { useQuery } from '@apollo/client';

const GET_VIDEO_BY_ID = gql(`
  query getVideoById($videoId: ID!) {
    video(videoID: $videoId) {
      description
      id
      videoURL
      isLiked
      products {
        description
        id
        imageURIs
        name
        price
        quantity
        sellerID
      }
      thumbnailURL
      userID
    }
  }
`);

const useGetVideoById = (id: number) => {
  return useQuery(GET_VIDEO_BY_ID, { variables: { videoId: id } });
};

export default useGetVideoById;
