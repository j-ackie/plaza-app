import { gql, useQuery } from '@apollo/client';

const CREATE_VIDEO = gql`
  query {
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
`;

const useGetFeed = () => useQuery(CREATE_VIDEO);

export default useGetFeed;
