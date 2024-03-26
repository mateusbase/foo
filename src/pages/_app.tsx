import ErrorBoundary from "@/components/ErrorBoundary";
import { useApollo } from "@/hooks/useApollo";
import "@/styles/globals.css";
import { ApolloProvider } from "@apollo/client";
import type { AppProps } from "next/app";
import { CookiesProvider } from "react-cookie";
import { NextUIProvider } from "@nextui-org/react";
import { ReactElement, ReactNode } from "react";
import { NextPage } from "next";

export type NextPageWithLayout<P = object, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function App({
  Component,
  pageProps,
}: AppPropsWithLayout): JSX.Element {
  const getLayout = Component.getLayout ?? ((page) => page);

  const apolloClient = useApollo(pageProps.initialApolloState);

  return (
    <NextUIProvider>
      <CookiesProvider>
        <ApolloProvider client={apolloClient}>
          {/* <AuthProvider> */}
          <ErrorBoundary>
            {getLayout(<Component {...pageProps} />)}
          </ErrorBoundary>
          {/* </AuthProvider> */}
        </ApolloProvider>
      </CookiesProvider>
    </NextUIProvider>
  );
}
