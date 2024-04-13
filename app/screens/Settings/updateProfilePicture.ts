import { gql, useMutation } from '@apollo/client';

const UPDATE_PROFILE_PICTURE = gql`
  mutation {
    updateProfilePicture
  }
`;

const useUpdateProfilePicture = () => useMutation(UPDATE_PROFILE_PICTURE);

export default useUpdateProfilePicture;
