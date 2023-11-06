import { gql, useLazyQuery } from '@apollo/client';

const GET_USER = gql`
  query user($filters: UserFilters!) {
    user(filters: $filters) {
      id
      description
      displayName
      profilePictureURI
      username
    }
  }
`;

const useUserByUsername = () =>
  useLazyQuery(GET_USER);

export default useUserByUsername;
