import { gql, useMutation, useQuery } from '@apollo/client';

const GET_FOLLOWING = gql`
  query Following($userId: Int!) {
    followers(userID: $userId) {
      followerID
      followingID
      id
    }
  }
`;

const GET_FOLLOWERS = gql`
  query Followers($userId: Int!) {
    followers(userID: $userId) {
      followerID
      followingID
      id
    }
  }
`

const CREATE_FOLLOWING = gql `
  mutation CreateFollowing($follow: FollowInput!) {
    createFollow(follow: $follow) {
      followerID
      followingID
      id
    }
  }
`

const DELETE_FOLLOWING = gql`
  mutation DeleteFollowing($follow: FollowInput!) {
    deleteFollow(follow: $follow) {
      followerID
      followingID
      id
    }
  }
`

const CHECK_FOLLOWING = gql`
  query IsFollowing($followId: Int!) {
    isFollowing(followID: $followId)
  }
`

const useFollowingById = (id: number) => {
  return useQuery(GET_FOLLOWING, { variables: { userId: 1 } });
};

const useFollowersById = (id: number) => {
  return useQuery(GET_FOLLOWERS, { variables: {userId: 1} } )
}

const useGetIsFollowing = (followID: number) => {
  return useQuery(CHECK_FOLLOWING, { variables: { followId: followID } })
}

const useCreateFollowing = () => {
  return useMutation(CREATE_FOLLOWING, {update: (cache, data) => {
    console.log("creating ", data)
    cache.writeQuery({
      query: CHECK_FOLLOWING,
      data: {
        isFollowing: true
      },
      variables: {
        followId: data.data.createFollow.followingID
      }
    })
  }})
}

const useDeleteFollowing = () => {
  return useMutation(DELETE_FOLLOWING,  {update: (cache, data) => {
    console.log("deleting ", data)
    cache.writeQuery({
      query: CHECK_FOLLOWING,
      data: {
        isFollowing: false
      },
      variables: {
        followId: data.data.deleteFollow.followingID
      }
    })
  }})
}

export { useFollowingById, useFollowersById, useGetIsFollowing, useCreateFollowing, useDeleteFollowing };
