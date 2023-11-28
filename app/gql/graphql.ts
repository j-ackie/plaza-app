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
  createMessage: Message;
  /** Creates a product */
  createProduct: Product;
  /** Deletes a product */
  deleteProduct?: Maybe<Scalars['ID']['output']>;
  /** Updates a product */
  updateProduct: Product;
};


export type MutationCreateChatArgs = {
  chat?: InputMaybe<ChatCreateInput>;
};


export type MutationCreateMessageArgs = {
  message: MessageCreateInput;
};


export type MutationCreateProductArgs = {
  product: ProductCreateInput;
};


export type MutationDeleteProductArgs = {
  id: Scalars['ID']['input'];
};


export type MutationUpdateProductArgs = {
  id: Scalars['ID']['input'];
  product: ProductUpdateInput;
};

export type Product = {
  __typename?: 'Product';
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  price: Scalars['Float']['output'];
  quantity?: Maybe<Scalars['Int']['output']>;
};

export type ProductCreateInput = {
  name: Scalars['String']['input'];
};

export type ProductUpdateInput = {
  name?: InputMaybe<Scalars['String']['input']>;
};

export type Query = {
  __typename?: 'Query';
  chats: Array<Chat>;
  message: Message;
  messages: Array<Message>;
  product: Product;
  products: Array<Product>;
  user: User;
};


export type QueryMessagesArgs = {
  chatID: Scalars['ID']['input'];
};


export type QueryUserArgs = {
  id: Scalars['ID']['input'];
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

export type UserQueryVariables = Exact<{
  userID: Scalars['ID']['input'];
}>;


export type UserQuery = { __typename?: 'Query', user: { __typename?: 'User', id: string, description?: string | null, displayName: string, profilePictureURI?: string | null, username: string } };


export const UserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"user"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userID"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userID"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"displayName"}},{"kind":"Field","name":{"kind":"Name","value":"profilePictureURI"}},{"kind":"Field","name":{"kind":"Name","value":"username"}}]}}]}}]} as unknown as DocumentNode<UserQuery, UserQueryVariables>;