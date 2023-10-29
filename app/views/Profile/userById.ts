import { gql, useQuery } from '@apollo/client';

const GET_USER = gql`
  query user($userID: ID!) {
    user(id: $userID) {
      id
      description
      displayName
      profilePictureURI
      username
    }
  }
`;

const useUserById = (userID: number) =>
  useQuery(GET_USER, { variables: { userID } });

export default useUserById;
export { GET_USER };
