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
  userID: Scalars['ID']['input'];
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
  userID: Scalars['ID']['input'];
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
  /** Creates a product */
  createLiked: Liked;
  createMessage: Message;
  /** Creates a product */
  createProduct: Product;
  /** Creates a product */
  createReview: Review;
  createVideo: Video;
  /** Deletes a product */
  deleteProduct?: Maybe<Scalars['ID']['output']>;
  insertCart: Cart;
  insertHistory: Cart;
  singleUpload: File;
  /** Updates a product */
  updateProduct: Product;
  updateProfilePicture: Scalars['String']['output'];
};


export type MutationCreateChatArgs = {
  chat?: InputMaybe<ChatCreateInput>;
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

export type UserByIdQueryVariables = Exact<{
  filters: UserFilters;
}>;


export type UserByIdQuery = { __typename?: 'Query', user: { __typename?: 'User', id: string, description?: string | null, displayName: string, profilePictureURI?: string | null, username: string } };


export const FeedVideosDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"feedVideos"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"feedVideos"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"userID"}},{"kind":"Field","name":{"kind":"Name","value":"videoURL"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"products"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]} as unknown as DocumentNode<FeedVideosQuery, FeedVideosQueryVariables>;
export const UserByIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"userById"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filters"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UserFilters"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filters"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filters"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"displayName"}},{"kind":"Field","name":{"kind":"Name","value":"profilePictureURI"}},{"kind":"Field","name":{"kind":"Name","value":"username"}}]}}]}}]} as unknown as DocumentNode<UserByIdQuery, UserByIdQueryVariables>;