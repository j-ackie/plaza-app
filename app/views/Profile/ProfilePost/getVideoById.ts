import { gql, useQuery } from '@apollo/client';

const GET_VIDEO = gql`
  query ($videoID: ID!) {
    video(videoID: $videoID) {
      description
      id
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
    }
  }
`;

const useVideoById = (id: number) =>
  useQuery(GET_VIDEO, { variables: { videoID: id } });

export default useVideoById;
