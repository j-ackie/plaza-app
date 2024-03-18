import { gql } from '@/__generated__';
import { useQuery } from '@apollo/client';

const GET_USER_BY_ID = gql(`
  query userById($filters: UserFilters!) {
    user(filters: $filters) {
      id
      description
      displayName
      profilePictureURI
      username
    }
  }
`);

const useGetUserById = (id: number) => {
  return useQuery(GET_USER_BY_ID, { variables: { filters: { id } } });
};

export default useGetUserById;
