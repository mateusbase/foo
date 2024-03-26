import { FindAllPostsFromUserQuery } from "@/infra/graphql/generated/graphql";

export type PostScreenProps = {
  posts: FindAllPostsFromUserQuery;
};
