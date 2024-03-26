import { ApolloLink } from "@apollo/client";
import { onError } from "@apollo/client/link/error";
import { GetServerSidePropsContext } from "next";
import { toast } from "react-toastify";

export const errorLink = (ctx?: GetServerSidePropsContext): ApolloLink =>
  onError(({ graphQLErrors }) => {
    if (graphQLErrors) {
      graphQLErrors.forEach(({ message }) => {
        if (message === "Usuário não autorizado") {
          ctx?.res.writeHead(302, { Location: "/login" });
          ctx?.res.end();
        }
        if (Array.isArray(message as unknown as string[])) {
          (message as unknown as string[]).forEach((msg) => {
            toast.error(msg);
          });
        } else {
          toast.error(message);
        }
      });
    }
  });
