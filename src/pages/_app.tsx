import ErrorBoundary from "@/components/ErrorBoundary";
import { useApollo } from "@/hooks/useApollo";
// import VLibras from "vlibras-nextjs";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "@/styles/globals.css";
import { ApolloProvider } from "@apollo/client";
import { CookiesProvider } from "react-cookie";
import { HeroUIProvider } from "@heroui/react";
import { Lato } from "next/font/google";
import { SearchProvider } from "@/contexts/search.context";
import { AppPropsWithLayout } from "@/utils/types";
import "../../i18n.js";
import { LanguageProvider } from "@/contexts/language.context";
import { useForm, FormProvider } from "react-hook-form";

const lato = Lato({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
});

export default function App({
  Component,
  pageProps,
}: AppPropsWithLayout): JSX.Element {
  const getLayout = Component.getLayout ?? ((page) => page);
  const methods = useForm();

  const apolloClient = useApollo(pageProps.initialApolloState);

  return (
    <HeroUIProvider>
      <CookiesProvider>
        <ApolloProvider client={apolloClient}>
          <LanguageProvider>
            <SearchProvider>
              <FormProvider {...methods}>
                <ErrorBoundary>
                  {getLayout(
                    <main className={lato.className}>
                      <Component {...pageProps} />
                    </main>,
                  )}
                </ErrorBoundary>
                {/* {process.env.NODE_ENV === "production" && <VLibras forceOnload />} */}
              </FormProvider>
            </SearchProvider>
          </LanguageProvider>
        </ApolloProvider>
      </CookiesProvider>
    </HeroUIProvider>
  );
}
