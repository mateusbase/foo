import { gql } from "@apollo/client";
import * as Apollo from "@apollo/client";

export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
};

/** Create Post Input */
export type CreatePostInput = {
  /** Post Content */
  content?: InputMaybe<Scalars["String"]>;
  /** Is Post Published? */
  published?: InputMaybe<Scalars["Boolean"]>;
  /** Post Title */
  title: Scalars["String"];
  /** User Id */
  userId: Scalars["String"];
};

/** Create User Input */
export type CreateUserInput = {
  email: Scalars["String"];
  name: Scalars["String"];
  posts?: InputMaybe<Array<CreatePostInput>>;
};

export type Mutation = {
  __typename?: "Mutation";
  createPost: Post;
  createUser: User;
  removePost: Post;
  removeUser: User;
  updatePost: Post;
  updateUser: User;
};

export type MutationCreatePostArgs = {
  createPostInput: CreatePostInput;
};

export type MutationCreateUserArgs = {
  createUserInput: CreateUserInput;
};

export type MutationRemovePostArgs = {
  id: Scalars["String"];
};

export type MutationRemoveUserArgs = {
  id: Scalars["String"];
};

export type MutationUpdatePostArgs = {
  updatePostInput: UpdatePostInput;
};

export type MutationUpdateUserArgs = {
  updateUserInput: UpdateUserInput;
};

/** Post entity */
export type Post = {
  __typename?: "Post";
  content?: Maybe<Scalars["String"]>;
  createdAt: Scalars["DateTime"];
  deletedAt?: Maybe<Scalars["DateTime"]>;
  id: Scalars["String"];
  published?: Maybe<Scalars["Boolean"]>;
  title: Scalars["String"];
  updatedAt?: Maybe<Scalars["DateTime"]>;
  userId: Scalars["String"];
};

export type Query = {
  __typename?: "Query";
  findAllPostsFromUser: Array<Post>;
  findAllUsers: Array<User>;
  findOnePost: Post;
  findOneUser: User;
};

export type QueryFindAllPostsFromUserArgs = {
  userId: Scalars["String"];
};

export type QueryFindOnePostArgs = {
  id: Scalars["String"];
};

export type QueryFindOneUserArgs = {
  id: Scalars["String"];
};

export type UpdatePostInput = {
  /** Post Content */
  content?: InputMaybe<Scalars["String"]>;
  id: Scalars["String"];
  /** Is Post Published? */
  published?: InputMaybe<Scalars["Boolean"]>;
  /** Post Title */
  title?: InputMaybe<Scalars["String"]>;
  /** User Id */
  userId?: InputMaybe<Scalars["String"]>;
};

export type UpdateUserInput = {
  email?: InputMaybe<Scalars["String"]>;
  id: Scalars["String"];
  name?: InputMaybe<Scalars["String"]>;
  posts?: InputMaybe<Array<CreatePostInput>>;
};

/** User entity */
export type User = {
  __typename?: "User";
  createdAt: Scalars["DateTime"];
  deletedAt?: Maybe<Scalars["DateTime"]>;
  email: Scalars["String"];
  id: Scalars["String"];
  name: Scalars["String"];
  posts?: Maybe<Array<Post>>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
};

export type CreatePostMutationVariables = Exact<{
  createPostInput: CreatePostInput;
}>;

export type CreatePostMutation = {
  __typename?: "Mutation";
  createPost: {
    __typename?: "Post";
    id: string;
    title: string;
    content?: string | null;
    published?: boolean | null;
    userId: string;
    createdAt: any;
  };
};

export type RemovePostMutationVariables = Exact<{
  removePostId: Scalars["String"];
}>;

export type RemovePostMutation = {
  __typename?: "Mutation";
  removePost: {
    __typename?: "Post";
    id: string;
    title: string;
    content?: string | null;
    published?: boolean | null;
    userId: string;
    createdAt: any;
  };
};

export type UpdatePostMutationVariables = Exact<{
  updatePostInput: UpdatePostInput;
}>;

export type UpdatePostMutation = {
  __typename?: "Mutation";
  updatePost: {
    __typename?: "Post";
    id: string;
    title: string;
    content?: string | null;
    published?: boolean | null;
    userId: string;
    createdAt: any;
  };
};

export type CreateUserMutationVariables = Exact<{
  createUserInput: CreateUserInput;
}>;

export type CreateUserMutation = {
  __typename?: "Mutation";
  createUser: {
    __typename?: "User";
    id: string;
    email: string;
    name: string;
    createdAt: any;
    posts?: Array<{
      __typename?: "Post";
      id: string;
      title: string;
      content?: string | null;
      published?: boolean | null;
      userId: string;
      createdAt: any;
    }> | null;
  };
};

export type RemoveUserMutationVariables = Exact<{
  removeUserId: Scalars["String"];
}>;

export type RemoveUserMutation = {
  __typename?: "Mutation";
  removeUser: {
    __typename?: "User";
    id: string;
    email: string;
    name: string;
    createdAt: any;
    posts?: Array<{
      __typename?: "Post";
      id: string;
      title: string;
      content?: string | null;
      published?: boolean | null;
      userId: string;
      createdAt: any;
    }> | null;
  };
};

export type UpdateUserMutationVariables = Exact<{
  updateUserInput: UpdateUserInput;
}>;

export type UpdateUserMutation = {
  __typename?: "Mutation";
  updateUser: {
    __typename?: "User";
    id: string;
    email: string;
    name: string;
    createdAt: any;
    posts?: Array<{
      __typename?: "Post";
      id: string;
      title: string;
      content?: string | null;
      published?: boolean | null;
      userId: string;
      createdAt: any;
    }> | null;
  };
};

export type FindAllPostsFromUserQueryVariables = Exact<{
  userId: Scalars["String"];
}>;

export type FindAllPostsFromUserQuery = {
  __typename?: "Query";
  findAllPostsFromUser: Array<{
    __typename?: "Post";
    id: string;
    title: string;
    content?: string | null;
    published?: boolean | null;
    userId: string;
    createdAt: any;
  }>;
};

export type FindOnePostQueryVariables = Exact<{
  findOnePostId: Scalars["String"];
}>;

export type FindOnePostQuery = {
  __typename?: "Query";
  findOnePost: {
    __typename?: "Post";
    id: string;
    title: string;
    content?: string | null;
    published?: boolean | null;
    userId: string;
  };
};

export type FindAllUsersQueryVariables = Exact<{ [key: string]: never }>;

export type FindAllUsersQuery = {
  __typename?: "Query";
  findAllUsers: Array<{
    __typename?: "User";
    id: string;
    email: string;
    name: string;
    posts?: Array<{
      __typename?: "Post";
      id: string;
      title: string;
      content?: string | null;
      published?: boolean | null;
    }> | null;
  }>;
};

export type FindOneUserQueryVariables = Exact<{
  findOneUserId: Scalars["String"];
}>;

export type FindOneUserQuery = {
  __typename?: "Query";
  findOneUser: {
    __typename?: "User";
    id: string;
    email: string;
    name: string;
    posts?: Array<{
      __typename?: "Post";
      id: string;
      title: string;
      content?: string | null;
      published?: boolean | null;
      userId: string;
    }> | null;
  };
};

export const CreatePostDocument = gql`
  mutation CreatePost($createPostInput: CreatePostInput!) {
    createPost(createPostInput: $createPostInput) {
      id
      title
      content
      published
      userId
      createdAt
    }
  }
`;
export type CreatePostMutationFn = Apollo.MutationFunction<
  CreatePostMutation,
  CreatePostMutationVariables
>;

/**
 * __useCreatePostMutation__
 *
 * To run a mutation, you first call `useCreatePostMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreatePostMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createPostMutation, { data, loading, error }] = useCreatePostMutation({
 *   variables: {
 *      createPostInput: // value for 'createPostInput'
 *   },
 * });
 */
export function useCreatePostMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreatePostMutation,
    CreatePostMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<CreatePostMutation, CreatePostMutationVariables>(
    CreatePostDocument,
    options,
  );
}
export type CreatePostMutationHookResult = ReturnType<
  typeof useCreatePostMutation
>;
export type CreatePostMutationResult =
  Apollo.MutationResult<CreatePostMutation>;
export type CreatePostMutationOptions = Apollo.BaseMutationOptions<
  CreatePostMutation,
  CreatePostMutationVariables
>;
export const RemovePostDocument = gql`
  mutation RemovePost($removePostId: String!) {
    removePost(id: $removePostId) {
      id
      title
      content
      published
      userId
      createdAt
    }
  }
`;
export type RemovePostMutationFn = Apollo.MutationFunction<
  RemovePostMutation,
  RemovePostMutationVariables
>;

/**
 * __useRemovePostMutation__
 *
 * To run a mutation, you first call `useRemovePostMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRemovePostMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [removePostMutation, { data, loading, error }] = useRemovePostMutation({
 *   variables: {
 *      removePostId: // value for 'removePostId'
 *   },
 * });
 */
export function useRemovePostMutation(
  baseOptions?: Apollo.MutationHookOptions<
    RemovePostMutation,
    RemovePostMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<RemovePostMutation, RemovePostMutationVariables>(
    RemovePostDocument,
    options,
  );
}
export type RemovePostMutationHookResult = ReturnType<
  typeof useRemovePostMutation
>;
export type RemovePostMutationResult =
  Apollo.MutationResult<RemovePostMutation>;
export type RemovePostMutationOptions = Apollo.BaseMutationOptions<
  RemovePostMutation,
  RemovePostMutationVariables
>;
export const UpdatePostDocument = gql`
  mutation UpdatePost($updatePostInput: UpdatePostInput!) {
    updatePost(updatePostInput: $updatePostInput) {
      id
      title
      content
      published
      userId
      createdAt
    }
  }
`;
export type UpdatePostMutationFn = Apollo.MutationFunction<
  UpdatePostMutation,
  UpdatePostMutationVariables
>;

/**
 * __useUpdatePostMutation__
 *
 * To run a mutation, you first call `useUpdatePostMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdatePostMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updatePostMutation, { data, loading, error }] = useUpdatePostMutation({
 *   variables: {
 *      updatePostInput: // value for 'updatePostInput'
 *   },
 * });
 */
export function useUpdatePostMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UpdatePostMutation,
    UpdatePostMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<UpdatePostMutation, UpdatePostMutationVariables>(
    UpdatePostDocument,
    options,
  );
}
export type UpdatePostMutationHookResult = ReturnType<
  typeof useUpdatePostMutation
>;
export type UpdatePostMutationResult =
  Apollo.MutationResult<UpdatePostMutation>;
export type UpdatePostMutationOptions = Apollo.BaseMutationOptions<
  UpdatePostMutation,
  UpdatePostMutationVariables
>;
export const CreateUserDocument = gql`
  mutation CreateUser($createUserInput: CreateUserInput!) {
    createUser(createUserInput: $createUserInput) {
      id
      email
      name
      posts {
        id
        title
        content
        published
        userId
        createdAt
      }
      createdAt
    }
  }
`;
export type CreateUserMutationFn = Apollo.MutationFunction<
  CreateUserMutation,
  CreateUserMutationVariables
>;

/**
 * __useCreateUserMutation__
 *
 * To run a mutation, you first call `useCreateUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createUserMutation, { data, loading, error }] = useCreateUserMutation({
 *   variables: {
 *      createUserInput: // value for 'createUserInput'
 *   },
 * });
 */
export function useCreateUserMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreateUserMutation,
    CreateUserMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<CreateUserMutation, CreateUserMutationVariables>(
    CreateUserDocument,
    options,
  );
}
export type CreateUserMutationHookResult = ReturnType<
  typeof useCreateUserMutation
>;
export type CreateUserMutationResult =
  Apollo.MutationResult<CreateUserMutation>;
export type CreateUserMutationOptions = Apollo.BaseMutationOptions<
  CreateUserMutation,
  CreateUserMutationVariables
>;
export const RemoveUserDocument = gql`
  mutation RemoveUser($removeUserId: String!) {
    removeUser(id: $removeUserId) {
      id
      email
      name
      posts {
        id
        title
        content
        published
        userId
        createdAt
      }
      createdAt
    }
  }
`;
export type RemoveUserMutationFn = Apollo.MutationFunction<
  RemoveUserMutation,
  RemoveUserMutationVariables
>;

/**
 * __useRemoveUserMutation__
 *
 * To run a mutation, you first call `useRemoveUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRemoveUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [removeUserMutation, { data, loading, error }] = useRemoveUserMutation({
 *   variables: {
 *      removeUserId: // value for 'removeUserId'
 *   },
 * });
 */
export function useRemoveUserMutation(
  baseOptions?: Apollo.MutationHookOptions<
    RemoveUserMutation,
    RemoveUserMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<RemoveUserMutation, RemoveUserMutationVariables>(
    RemoveUserDocument,
    options,
  );
}
export type RemoveUserMutationHookResult = ReturnType<
  typeof useRemoveUserMutation
>;
export type RemoveUserMutationResult =
  Apollo.MutationResult<RemoveUserMutation>;
export type RemoveUserMutationOptions = Apollo.BaseMutationOptions<
  RemoveUserMutation,
  RemoveUserMutationVariables
>;
export const UpdateUserDocument = gql`
  mutation UpdateUser($updateUserInput: UpdateUserInput!) {
    updateUser(updateUserInput: $updateUserInput) {
      id
      email
      name
      posts {
        id
        title
        content
        published
        userId
        createdAt
      }
      createdAt
    }
  }
`;
export type UpdateUserMutationFn = Apollo.MutationFunction<
  UpdateUserMutation,
  UpdateUserMutationVariables
>;

/**
 * __useUpdateUserMutation__
 *
 * To run a mutation, you first call `useUpdateUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateUserMutation, { data, loading, error }] = useUpdateUserMutation({
 *   variables: {
 *      updateUserInput: // value for 'updateUserInput'
 *   },
 * });
 */
export function useUpdateUserMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UpdateUserMutation,
    UpdateUserMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<UpdateUserMutation, UpdateUserMutationVariables>(
    UpdateUserDocument,
    options,
  );
}
export type UpdateUserMutationHookResult = ReturnType<
  typeof useUpdateUserMutation
>;
export type UpdateUserMutationResult =
  Apollo.MutationResult<UpdateUserMutation>;
export type UpdateUserMutationOptions = Apollo.BaseMutationOptions<
  UpdateUserMutation,
  UpdateUserMutationVariables
>;
export const FindAllPostsFromUserDocument = gql`
  query FindAllPostsFromUser($userId: String!) {
    findAllPostsFromUser(userId: $userId) {
      id
      title
      content
      published
      userId
      createdAt
    }
  }
`;

/**
 * __useFindAllPostsFromUserQuery__
 *
 * To run a query within a React component, call `useFindAllPostsFromUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindAllPostsFromUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindAllPostsFromUserQuery({
 *   variables: {
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useFindAllPostsFromUserQuery(
  baseOptions: Apollo.QueryHookOptions<
    FindAllPostsFromUserQuery,
    FindAllPostsFromUserQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    FindAllPostsFromUserQuery,
    FindAllPostsFromUserQueryVariables
  >(FindAllPostsFromUserDocument, options);
}
export function useFindAllPostsFromUserLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    FindAllPostsFromUserQuery,
    FindAllPostsFromUserQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    FindAllPostsFromUserQuery,
    FindAllPostsFromUserQueryVariables
  >(FindAllPostsFromUserDocument, options);
}
export type FindAllPostsFromUserQueryHookResult = ReturnType<
  typeof useFindAllPostsFromUserQuery
>;
export type FindAllPostsFromUserLazyQueryHookResult = ReturnType<
  typeof useFindAllPostsFromUserLazyQuery
>;
export type FindAllPostsFromUserQueryResult = Apollo.QueryResult<
  FindAllPostsFromUserQuery,
  FindAllPostsFromUserQueryVariables
>;
export const FindOnePostDocument = gql`
  query FindOnePost($findOnePostId: String!) {
    findOnePost(id: $findOnePostId) {
      id
      title
      content
      published
      userId
    }
  }
`;

/**
 * __useFindOnePostQuery__
 *
 * To run a query within a React component, call `useFindOnePostQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindOnePostQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindOnePostQuery({
 *   variables: {
 *      findOnePostId: // value for 'findOnePostId'
 *   },
 * });
 */
export function useFindOnePostQuery(
  baseOptions: Apollo.QueryHookOptions<
    FindOnePostQuery,
    FindOnePostQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<FindOnePostQuery, FindOnePostQueryVariables>(
    FindOnePostDocument,
    options,
  );
}
export function useFindOnePostLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    FindOnePostQuery,
    FindOnePostQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<FindOnePostQuery, FindOnePostQueryVariables>(
    FindOnePostDocument,
    options,
  );
}
export type FindOnePostQueryHookResult = ReturnType<typeof useFindOnePostQuery>;
export type FindOnePostLazyQueryHookResult = ReturnType<
  typeof useFindOnePostLazyQuery
>;
export type FindOnePostQueryResult = Apollo.QueryResult<
  FindOnePostQuery,
  FindOnePostQueryVariables
>;
export const FindAllUsersDocument = gql`
  query FindAllUsers {
    findAllUsers {
      id
      email
      name
      posts {
        id
        title
        content
        published
      }
    }
  }
`;

/**
 * __useFindAllUsersQuery__
 *
 * To run a query within a React component, call `useFindAllUsersQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindAllUsersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindAllUsersQuery({
 *   variables: {
 *   },
 * });
 */
export function useFindAllUsersQuery(
  baseOptions?: Apollo.QueryHookOptions<
    FindAllUsersQuery,
    FindAllUsersQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<FindAllUsersQuery, FindAllUsersQueryVariables>(
    FindAllUsersDocument,
    options,
  );
}
export function useFindAllUsersLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    FindAllUsersQuery,
    FindAllUsersQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<FindAllUsersQuery, FindAllUsersQueryVariables>(
    FindAllUsersDocument,
    options,
  );
}
export type FindAllUsersQueryHookResult = ReturnType<
  typeof useFindAllUsersQuery
>;
export type FindAllUsersLazyQueryHookResult = ReturnType<
  typeof useFindAllUsersLazyQuery
>;
export type FindAllUsersQueryResult = Apollo.QueryResult<
  FindAllUsersQuery,
  FindAllUsersQueryVariables
>;
export const FindOneUserDocument = gql`
  query FindOneUser($findOneUserId: String!) {
    findOneUser(id: $findOneUserId) {
      id
      email
      name
      posts {
        id
        title
        content
        published
        userId
      }
    }
  }
`;

/**
 * __useFindOneUserQuery__
 *
 * To run a query within a React component, call `useFindOneUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindOneUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindOneUserQuery({
 *   variables: {
 *      findOneUserId: // value for 'findOneUserId'
 *   },
 * });
 */
export function useFindOneUserQuery(
  baseOptions: Apollo.QueryHookOptions<
    FindOneUserQuery,
    FindOneUserQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<FindOneUserQuery, FindOneUserQueryVariables>(
    FindOneUserDocument,
    options,
  );
}
export function useFindOneUserLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    FindOneUserQuery,
    FindOneUserQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<FindOneUserQuery, FindOneUserQueryVariables>(
    FindOneUserDocument,
    options,
  );
}
export type FindOneUserQueryHookResult = ReturnType<typeof useFindOneUserQuery>;
export type FindOneUserLazyQueryHookResult = ReturnType<
  typeof useFindOneUserLazyQuery
>;
export type FindOneUserQueryResult = Apollo.QueryResult<
  FindOneUserQuery,
  FindOneUserQueryVariables
>;
