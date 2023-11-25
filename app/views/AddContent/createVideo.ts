import { gql, useMutation } from '@apollo/client';

const CREATE_VIDEO = gql`
  mutation createVideo($video: VideoCreateInput!) {
    createVideo(video: $video) {
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

const useCreateVideo = (onCompleted) => useMutation(CREATE_VIDEO, { onCompleted });

export default useCreateVideo;
