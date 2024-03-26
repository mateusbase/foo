import { getApolloClient } from "@/infra/apollo";
import { ApolloClient, NormalizedCacheObject } from "@apollo/client";
import { useMemo } from "react";

export function useApollo(
  initialState = null,
): ApolloClient<NormalizedCacheObject> {
  const client = useMemo(
    () => getApolloClient(undefined, initialState),
    [initialState],
  );
  return client;
}
