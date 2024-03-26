import { ApolloLink } from "@apollo/client";
import Cookies from "js-cookie";

export const authMiddleware = (authorization?: string): ApolloLink =>
  new ApolloLink((operation, forward) => {
    const jwt = Cookies.get("jwt");
    if (jwt) {
      operation.setContext({
        headers: {
          Authorization: `Bearer ${jwt}`,
          ...window.navigator,
        },
      });
    } else if (authorization) {
      operation.setContext({
        headers: {
          Authorization: `Bearer ${authorization}`,
        },
      });
    }

    return forward(operation);
  });
