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
`

export default GET_USER;