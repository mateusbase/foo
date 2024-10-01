import ErrorBoundary from "@/components/ErrorBoundary";
import { useApollo } from "@/hooks/useApollo";
import VLibras from "vlibras-nextjs";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "@/styles/globals.css";
import { ApolloProvider } from "@apollo/client";
import type { AppProps } from "next/app";
import { CookiesProvider } from "react-cookie";
import { NextUIProvider } from "@nextui-org/react";
import { ReactElement, ReactNode } from "react";
import { NextPage } from "next";
import { Lato } from "next/font/google";
import { builder } from "@builder.io/react";
import { SearchProvider } from "@/contexts/search.context";

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY ?? "");

const lato = Lato({ subsets: ["latin"], weight: ["400", "700", "900"] });

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
          <SearchProvider>
            <ErrorBoundary>
              {getLayout(
                <main className={lato.className}>
                  <Component {...pageProps} />
                </main>,
              )}
            </ErrorBoundary>
            {process.env.NODE_ENV === "production" && <VLibras forceOnload />}
          </SearchProvider>{" "}
        </ApolloProvider>
      </CookiesProvider>
    </NextUIProvider>
  );
}
