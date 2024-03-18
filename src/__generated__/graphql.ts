/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** Date custom scalar type */
  Date: { input: any; output: any; }
  Upload: { input: any; output: any; }
};

export type Cart = {
  __typename?: 'Cart';
  id: Scalars['ID']['output'];
  imageURI: Scalars['String']['output'];
  name: Scalars['String']['output'];
  price: Scalars['Float']['output'];
  productID: Scalars['ID']['output'];
  userID: Scalars['ID']['output'];
  videoID: Scalars['ID']['output'];
};

export type CartInsertInput = {
  productID: Scalars['ID']['input'];
  videoID?: InputMaybe<Scalars['ID']['input']>;
};

export type Chat = {
  __typename?: 'Chat';
  id: Scalars['ID']['output'];
  lastActivityAt: Scalars['Date']['output'];
  members: Array<User>;
  name?: Maybe<Scalars['String']['output']>;
};

export type ChatCreateInput = {
  memberIDs: Array<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type Comment = {
  __typename?: 'Comment';
  comment: Scalars['String']['output'];
  createdAt: Scalars['Date']['output'];
  id: Scalars['ID']['output'];
  profilePicture: Scalars['String']['output'];
  userID: Scalars['ID']['output'];
  username: Scalars['String']['output'];
  videoID: Scalars['ID']['output'];
};

export type CommentCreateInput = {
  comment: Scalars['String']['input'];
  videoID: Scalars['ID']['input'];
};

export type File = {
  __typename?: 'File';
  encoding: Scalars['String']['output'];
  filename: Scalars['String']['output'];
  mimetype: Scalars['String']['output'];
};

export type History = {
  __typename?: 'History';
  id: Scalars['ID']['output'];
  imageURI: Scalars['String']['output'];
  name: Scalars['String']['output'];
  orderedAt: Scalars['Date']['output'];
  productID: Scalars['ID']['output'];
  quantity: Scalars['Int']['output'];
  status: Scalars['ID']['output'];
  userID: Scalars['ID']['output'];
  videoID: Scalars['ID']['output'];
};

export type HistoryInsertInput = {
  productID: Scalars['ID']['input'];
  videoID?: InputMaybe<Scalars['ID']['input']>;
};

export type Liked = {
  __typename?: 'Liked';
  id: Scalars['ID']['output'];
  userID: Scalars['Int']['output'];
  videoID: Scalars['Int']['output'];
};

export type LikedCreateInput = {
  videoID: Scalars['Int']['input'];
};

export type Message = {
  __typename?: 'Message';
  chatID: Scalars['ID']['output'];
  createdAt: Scalars['Date']['output'];
  id: Scalars['ID']['output'];
  sender: User;
  text: Scalars['String']['output'];
};

export type MessageCreateInput = {
  chatID: Scalars['ID']['input'];
  text: Scalars['String']['input'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createChat: Chat;
  createComment: Comment;
  /** Creates a like */
  createLiked: Liked;
  createMessage: Message;
  /** Creates a product */
  createProduct: Product;
  /** Creates a product */
  createReview: Review;
  createVideo: Video;
  /** Deletes a like */
  deleteLiked: Liked;
  /** Deletes a product */
  deleteProduct?: Maybe<Scalars['ID']['output']>;
  insertCart: Cart;
  insertHistory: History;
  singleUpload: File;
  /** Updates a product */
  updateProduct: Product;
  updateProfilePicture: Scalars['String']['output'];
};


export type MutationCreateChatArgs = {
  chat?: InputMaybe<ChatCreateInput>;
};


export type MutationCreateCommentArgs = {
  comment?: InputMaybe<CommentCreateInput>;
};


export type MutationCreateLikedArgs = {
  liked: LikedCreateInput;
};


export type MutationCreateMessageArgs = {
  message: MessageCreateInput;
};


export type MutationCreateProductArgs = {
  product: ProductCreateInput;
};


export type MutationCreateReviewArgs = {
  review: ReviewCreateInput;
};


export type MutationCreateVideoArgs = {
  video: VideoCreateInput;
};


export type MutationDeleteLikedArgs = {
  liked: LikedCreateInput;
};


export type MutationDeleteProductArgs = {
  id: Scalars['ID']['input'];
};


export type MutationInsertCartArgs = {
  order?: InputMaybe<CartInsertInput>;
};


export type MutationInsertHistoryArgs = {
  order?: InputMaybe<HistoryInsertInput>;
};


export type MutationSingleUploadArgs = {
  file: Scalars['Upload']['input'];
};


export type MutationUpdateProductArgs = {
  id: Scalars['ID']['input'];
  product: ProductUpdateInput;
};

export type Product = {
  __typename?: 'Product';
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  imageURIs: Array<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  price: Scalars['Float']['output'];
  quantity?: Maybe<Scalars['Int']['output']>;
  sellerID?: Maybe<Scalars['Int']['output']>;
};

export type ProductCreateInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  price: Scalars['Float']['input'];
  quantity?: InputMaybe<Scalars['Int']['input']>;
};

export type ProductUpdateInput = {
  name?: InputMaybe<Scalars['String']['input']>;
};

export type Query = {
  __typename?: 'Query';
  cart: Array<Cart>;
  chats: Array<Chat>;
  comments: Array<Comment>;
  feedVideos: Array<Video>;
  history: Array<History>;
  likedVideos: Array<Liked>;
  message: Message;
  messages: Array<Message>;
  product: Product;
  products: Array<Product>;
  reviews: Array<Review>;
  user: User;
  video: Video;
  videos: Array<Video>;
};


export type QueryCartArgs = {
  userID: Scalars['Int']['input'];
};


export type QueryCommentsArgs = {
  videoID: Scalars['ID']['input'];
};


export type QueryHistoryArgs = {
  userID: Scalars['Int']['input'];
};


export type QueryLikedVideosArgs = {
  userID: Scalars['Int']['input'];
};


export type QueryMessagesArgs = {
  chatID: Scalars['ID']['input'];
};


export type QueryProductArgs = {
  id: Scalars['ID']['input'];
};


export type QueryProductsArgs = {
  sellerID: Scalars['ID']['input'];
};


export type QueryReviewsArgs = {
  filters: ReviewFilters;
};


export type QueryUserArgs = {
  filters: UserFilters;
};


export type QueryVideoArgs = {
  videoID: Scalars['ID']['input'];
};


export type QueryVideosArgs = {
  filters: VideoFilters;
};

export type Radius = {
  __typename?: 'Radius';
  latitude: Scalars['Float']['output'];
  longitude: Scalars['Float']['output'];
  radius: Scalars['Float']['output'];
};

export type RadiusInput = {
  latitude: Scalars['Float']['input'];
  longitude: Scalars['Float']['input'];
  radius: Scalars['Float']['input'];
};

export type Review = {
  __typename?: 'Review';
  createdAt: Scalars['Date']['output'];
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  imageURI?: Maybe<Scalars['String']['output']>;
  productID: Scalars['Int']['output'];
  rating: Scalars['Int']['output'];
  reviewerID: Scalars['Int']['output'];
  title?: Maybe<Scalars['String']['output']>;
  uploadURI?: Maybe<Scalars['String']['output']>;
};

export type ReviewCreateInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  productID: Scalars['Int']['input'];
  rating: Scalars['Int']['input'];
  title?: InputMaybe<Scalars['String']['input']>;
};

export type ReviewFilters = {
  productID?: InputMaybe<Scalars['Int']['input']>;
  sellerID?: InputMaybe<Scalars['Int']['input']>;
};

export type Subscription = {
  __typename?: 'Subscription';
  messageAdded?: Maybe<Message>;
};


export type SubscriptionMessageAddedArgs = {
  chatID: Scalars['ID']['input'];
};

export type User = {
  __typename?: 'User';
  description?: Maybe<Scalars['String']['output']>;
  displayName: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  profilePictureURI?: Maybe<Scalars['String']['output']>;
  username: Scalars['String']['output'];
};

export type UserFilters = {
  id?: InputMaybe<Scalars['ID']['input']>;
  username?: InputMaybe<Scalars['String']['input']>;
};

export type Video = {
  __typename?: 'Video';
  description: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  isLiked: Scalars['Boolean']['output'];
  products: Array<Product>;
  thumbnailURL?: Maybe<Scalars['String']['output']>;
  userID: Scalars['ID']['output'];
  videoURL: Scalars['String']['output'];
};

export type VideoCreateInput = {
  description: Scalars['String']['input'];
  productIDs: Array<Scalars['ID']['input']>;
};

export type VideoFilters = {
  productID?: InputMaybe<Scalars['Int']['input']>;
  userID?: InputMaybe<Scalars['Int']['input']>;
};

export type VideoInfo = {
  __typename?: 'VideoInfo';
  id: Scalars['ID']['output'];
  userID: Scalars['ID']['output'];
};

export type FeedVideosQueryVariables = Exact<{ [key: string]: never; }>;


export type FeedVideosQuery = { __typename?: 'Query', feedVideos: Array<{ __typename?: 'Video', id: string, userID: string, videoURL: string, description: string, products: Array<{ __typename?: 'Product', id: string }> }> };

export type GetCartByIdQueryVariables = Exact<{
  userId: Scalars['Int']['input'];
}>;


export type GetCartByIdQuery = { __typename?: 'Query', cart: Array<{ __typename?: 'Cart', id: string, productID: string, userID: string, name: string, imageURI: string, price: number, videoID: string }> };

export type GetProductByIdQueryVariables = Exact<{
  productId: Scalars['ID']['input'];
}>;


export type GetProductByIdQuery = { __typename?: 'Query', product: { __typename?: 'Product', description?: string | null, id: string, imageURIs: Array<string>, name: string, price: number, quantity?: number | null, sellerID?: number | null } };

export type GetVideoByIdQueryVariables = Exact<{
  videoId: Scalars['ID']['input'];
}>;


export type GetVideoByIdQuery = { __typename?: 'Query', video: { __typename?: 'Video', description: string, id: string, videoURL: string, isLiked: boolean, thumbnailURL?: string | null, userID: string, products: Array<{ __typename?: 'Product', description?: string | null, id: string, imageURIs: Array<string>, name: string, price: number, quantity?: number | null, sellerID?: number | null }> } };

export type GetHistoryByIdQueryVariables = Exact<{
  userId: Scalars['Int']['input'];
}>;


export type GetHistoryByIdQuery = { __typename?: 'Query', history: Array<{ __typename?: 'History', id: string, imageURI: string, name: string, orderedAt: any, productID: string, status: string, userID: string, videoID: string, quantity: number }> };

export type AddHistoryMutationVariables = Exact<{
  order?: InputMaybe<HistoryInsertInput>;
}>;


export type AddHistoryMutation = { __typename?: 'Mutation', insertHistory: { __typename?: 'History', id: string, imageURI: string, name: string, orderedAt: any, quantity: number, productID: string, status: string, userID: string, videoID: string } };

export type VideosByUserIdQueryVariables = Exact<{
  filters: VideoFilters;
}>;


export type VideosByUserIdQuery = { __typename?: 'Query', videos: Array<{ __typename?: 'Video', id: string, userID: string, thumbnailURL?: string | null }> };

export type UserByIdQueryVariables = Exact<{
  filters: UserFilters;
}>;


export type UserByIdQuery = { __typename?: 'Query', user: { __typename?: 'User', id: string, description?: string | null, displayName: string, profilePictureURI?: string | null, username: string } };


export const FeedVideosDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"feedVideos"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"feedVideos"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"userID"}},{"kind":"Field","name":{"kind":"Name","value":"videoURL"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"products"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]} as unknown as DocumentNode<FeedVideosQuery, FeedVideosQueryVariables>;
export const GetCartByIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getCartById"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cart"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"userID"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"productID"}},{"kind":"Field","name":{"kind":"Name","value":"userID"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"imageURI"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"videoID"}}]}}]}}]} as unknown as DocumentNode<GetCartByIdQuery, GetCartByIdQueryVariables>;
export const GetProductByIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getProductById"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"productId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"product"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"productId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"imageURIs"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"quantity"}},{"kind":"Field","name":{"kind":"Name","value":"sellerID"}}]}}]}}]} as unknown as DocumentNode<GetProductByIdQuery, GetProductByIdQueryVariables>;
export const GetVideoByIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getVideoById"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"videoId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"video"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"videoID"},"value":{"kind":"Variable","name":{"kind":"Name","value":"videoId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"videoURL"}},{"kind":"Field","name":{"kind":"Name","value":"isLiked"}},{"kind":"Field","name":{"kind":"Name","value":"products"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"imageURIs"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"quantity"}},{"kind":"Field","name":{"kind":"Name","value":"sellerID"}}]}},{"kind":"Field","name":{"kind":"Name","value":"thumbnailURL"}},{"kind":"Field","name":{"kind":"Name","value":"userID"}}]}}]}}]} as unknown as DocumentNode<GetVideoByIdQuery, GetVideoByIdQueryVariables>;
export const GetHistoryByIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getHistoryById"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"history"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"userID"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"imageURI"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"orderedAt"}},{"kind":"Field","name":{"kind":"Name","value":"productID"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"userID"}},{"kind":"Field","name":{"kind":"Name","value":"videoID"}},{"kind":"Field","name":{"kind":"Name","value":"quantity"}}]}}]}}]} as unknown as DocumentNode<GetHistoryByIdQuery, GetHistoryByIdQueryVariables>;
export const AddHistoryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"addHistory"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"order"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"HistoryInsertInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"insertHistory"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"order"},"value":{"kind":"Variable","name":{"kind":"Name","value":"order"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"imageURI"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"orderedAt"}},{"kind":"Field","name":{"kind":"Name","value":"quantity"}},{"kind":"Field","name":{"kind":"Name","value":"productID"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"userID"}},{"kind":"Field","name":{"kind":"Name","value":"videoID"}}]}}]}}]} as unknown as DocumentNode<AddHistoryMutation, AddHistoryMutationVariables>;
export const VideosByUserIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"videosByUserId"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filters"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"VideoFilters"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"videos"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filters"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filters"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"userID"}},{"kind":"Field","name":{"kind":"Name","value":"thumbnailURL"}}]}}]}}]} as unknown as DocumentNode<VideosByUserIdQuery, VideosByUserIdQueryVariables>;
export const UserByIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"userById"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filters"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UserFilters"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filters"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filters"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"displayName"}},{"kind":"Field","name":{"kind":"Name","value":"profilePictureURI"}},{"kind":"Field","name":{"kind":"Name","value":"username"}}]}}]}}]} as unknown as DocumentNode<UserByIdQuery, UserByIdQueryVariables>;