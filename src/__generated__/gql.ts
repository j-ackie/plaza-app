/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n  query feedVideos {\n    feedVideos {\n      id\n      userID\n      videoURL\n      description\n      products {\n        id\n      }\n    }\n  }\n": types.FeedVideosDocument,
    "\n  query getCartById($userId: Int!) {\n    cart(userID: $userId) {\n      id\n      productID\n      userID\n      name\n      imageURI\n      price\n      videoID\n    }\n  }\n": types.GetCartByIdDocument,
    "\n    mutation deleteCartByID($productId: Int!) {\n      deleteCart(productID: $productId) {\n        id\n        imageURI\n        name\n        price\n        productID\n        userID\n        videoID\n      }\n    }\n  ": types.DeleteCartByIdDocument,
    "\n  query getProductById($productId: ID!) {\n    product(id: $productId) {\n      description\n      id\n      imageURIs\n      name\n      price\n      quantity\n      sellerID\n    }\n  }\n": types.GetProductByIdDocument,
    "\n  query getVideoById($videoId: ID!) {\n    video(videoID: $videoId) {\n      description\n      id\n      videoURL\n      isLiked\n      products {\n        description\n        id\n        imageURIs\n        name\n        price\n        quantity\n        sellerID\n      }\n      thumbnailURL\n      userID\n    }\n  }\n": types.GetVideoByIdDocument,
    "\n  query getHistoryById($userId: Int!) {\n    history(userID: $userId) {\n      id\n      imageURI\n      name\n      orderedAt\n      productID\n      status\n      userID\n      videoID\n      quantity\n    }\n  }\n": types.GetHistoryByIdDocument,
    "\n  mutation addHistory($order: HistoryInsertInput) {\n    insertHistory(order: $order) {\n      id\n      imageURI\n      name\n      orderedAt\n      quantity\n      productID\n      status\n      userID\n      videoID\n    }\n  }\n": types.AddHistoryDocument,
    "\n  query videosByUserId($filters: VideoFilters!) {\n    videos(filters: $filters) {\n      id\n      userID\n      thumbnailURL\n    }\n  }\n": types.VideosByUserIdDocument,
    "\n  query userById($filters: UserFilters!) {\n    user(filters: $filters) {\n      id\n      description\n      displayName\n      profilePictureURI\n      username\n    }\n  }\n": types.UserByIdDocument,
    "\n  query profileVideoById($videoId: ID!) {\n    video(videoID: $videoId) {\n      id\n      description\n      userID\n      videoURL\n      products {\n        id\n        imageURIs\n        price\n        quantity\n        description\n        name\n      }\n      isLiked\n    }\n  }\n": types.ProfileVideoByIdDocument,
};

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function gql(source: string): unknown;

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query feedVideos {\n    feedVideos {\n      id\n      userID\n      videoURL\n      description\n      products {\n        id\n      }\n    }\n  }\n"): (typeof documents)["\n  query feedVideos {\n    feedVideos {\n      id\n      userID\n      videoURL\n      description\n      products {\n        id\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query getCartById($userId: Int!) {\n    cart(userID: $userId) {\n      id\n      productID\n      userID\n      name\n      imageURI\n      price\n      videoID\n    }\n  }\n"): (typeof documents)["\n  query getCartById($userId: Int!) {\n    cart(userID: $userId) {\n      id\n      productID\n      userID\n      name\n      imageURI\n      price\n      videoID\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    mutation deleteCartByID($productId: Int!) {\n      deleteCart(productID: $productId) {\n        id\n        imageURI\n        name\n        price\n        productID\n        userID\n        videoID\n      }\n    }\n  "): (typeof documents)["\n    mutation deleteCartByID($productId: Int!) {\n      deleteCart(productID: $productId) {\n        id\n        imageURI\n        name\n        price\n        productID\n        userID\n        videoID\n      }\n    }\n  "];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query getProductById($productId: ID!) {\n    product(id: $productId) {\n      description\n      id\n      imageURIs\n      name\n      price\n      quantity\n      sellerID\n    }\n  }\n"): (typeof documents)["\n  query getProductById($productId: ID!) {\n    product(id: $productId) {\n      description\n      id\n      imageURIs\n      name\n      price\n      quantity\n      sellerID\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query getVideoById($videoId: ID!) {\n    video(videoID: $videoId) {\n      description\n      id\n      videoURL\n      isLiked\n      products {\n        description\n        id\n        imageURIs\n        name\n        price\n        quantity\n        sellerID\n      }\n      thumbnailURL\n      userID\n    }\n  }\n"): (typeof documents)["\n  query getVideoById($videoId: ID!) {\n    video(videoID: $videoId) {\n      description\n      id\n      videoURL\n      isLiked\n      products {\n        description\n        id\n        imageURIs\n        name\n        price\n        quantity\n        sellerID\n      }\n      thumbnailURL\n      userID\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query getHistoryById($userId: Int!) {\n    history(userID: $userId) {\n      id\n      imageURI\n      name\n      orderedAt\n      productID\n      status\n      userID\n      videoID\n      quantity\n    }\n  }\n"): (typeof documents)["\n  query getHistoryById($userId: Int!) {\n    history(userID: $userId) {\n      id\n      imageURI\n      name\n      orderedAt\n      productID\n      status\n      userID\n      videoID\n      quantity\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation addHistory($order: HistoryInsertInput) {\n    insertHistory(order: $order) {\n      id\n      imageURI\n      name\n      orderedAt\n      quantity\n      productID\n      status\n      userID\n      videoID\n    }\n  }\n"): (typeof documents)["\n  mutation addHistory($order: HistoryInsertInput) {\n    insertHistory(order: $order) {\n      id\n      imageURI\n      name\n      orderedAt\n      quantity\n      productID\n      status\n      userID\n      videoID\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query videosByUserId($filters: VideoFilters!) {\n    videos(filters: $filters) {\n      id\n      userID\n      thumbnailURL\n    }\n  }\n"): (typeof documents)["\n  query videosByUserId($filters: VideoFilters!) {\n    videos(filters: $filters) {\n      id\n      userID\n      thumbnailURL\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query userById($filters: UserFilters!) {\n    user(filters: $filters) {\n      id\n      description\n      displayName\n      profilePictureURI\n      username\n    }\n  }\n"): (typeof documents)["\n  query userById($filters: UserFilters!) {\n    user(filters: $filters) {\n      id\n      description\n      displayName\n      profilePictureURI\n      username\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query profileVideoById($videoId: ID!) {\n    video(videoID: $videoId) {\n      id\n      description\n      userID\n      videoURL\n      products {\n        id\n        imageURIs\n        price\n        quantity\n        description\n        name\n      }\n      isLiked\n    }\n  }\n"): (typeof documents)["\n  query profileVideoById($videoId: ID!) {\n    video(videoID: $videoId) {\n      id\n      description\n      userID\n      videoURL\n      products {\n        id\n        imageURIs\n        price\n        quantity\n        description\n        name\n      }\n      isLiked\n    }\n  }\n"];

export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;