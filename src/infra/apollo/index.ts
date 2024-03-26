import {
  ApolloClient,
  ApolloLink,
  createHttpLink,
  from,
  InMemoryCache,
  NormalizedCacheObject,
} from "@apollo/client";
import { errorLink } from "@/infra/middlewares/errorMiddleware";
import { GetServerSidePropsContext } from "next";
import { authMiddleware } from "../middlewares/authMiddlewares";

let apolloClient: ApolloClient<NormalizedCacheObject>;
const getUri: () => string = () => {
  if (process.env.NODE_ENV !== "production") {
    return typeof window === "undefined"
      ? "http://localhost:6001/graphql"
      : "http://localhost:6001/graphql";
  }
  return "http://localhost:6001/graphql";
};

export type ApolloClientContext = GetServerSidePropsContext;
export const getAuth = (ctx?: ApolloClientContext): ApolloLink => {
  if (ctx && ctx.req) {
    const { cookie } = ctx.req.headers;
    const authorization = cookie?.split("jwt=")[1]?.split(";")[0];
    return authMiddleware(authorization);
  }
  return authMiddleware();
};

const httpLink = createHttpLink({
  uri: getUri(),
  fetch,
});

function createApolloClient(
  ctx?: GetServerSidePropsContext,
): ApolloClient<NormalizedCacheObject> {
  const cache = new InMemoryCache();

  return new ApolloClient({
    ssrMode: typeof window === "undefined",
    cache,
    link: from([getAuth(ctx), errorLink(ctx), httpLink]),
  });
}

export function getApolloClient(
  ctx?: GetServerSidePropsContext,
  initialState = null,
): ApolloClient<NormalizedCacheObject> {
  const apolloClientGlobal = apolloClient ?? createApolloClient(ctx);
  if (initialState) {
    apolloClientGlobal.cache.restore(initialState);
  }
  if (typeof window === "undefined") return apolloClientGlobal;
  apolloClient = apolloClient ?? apolloClientGlobal;
  return apolloClient;
}
