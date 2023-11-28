import { gql, useQuery } from '@apollo/client';

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

const useUserById = (filters) => {
  return useQuery(GET_USER, { variables: { filters } });
};

export default useUserById;
export { GET_USER };
