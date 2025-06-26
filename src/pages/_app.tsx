import ErrorBoundary from "@/components/ErrorBoundary";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "@/styles/globals.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { CookiesProvider } from "react-cookie";

import { AppPropsWithLayout } from "@/utils/types";
import { useForm, FormProvider } from "react-hook-form";
import { LocationProvider } from "@/contexts/LocationContext";
import { AccessibilityTools } from "@/components/Accessibility";

const queryClient = new QueryClient();

export default function App({
  Component,
  pageProps,
}: AppPropsWithLayout): JSX.Element {
  const methods = useForm();

  return (
    <CookiesProvider>
      <FormProvider {...methods}>
        <LocationProvider>
          <QueryClientProvider client={queryClient}>
            <ErrorBoundary>
              <main>
                <Component {...pageProps} />
              </main>
            </ErrorBoundary>

            <AccessibilityTools />
          </QueryClientProvider>
        </LocationProvider>
      </FormProvider>
    </CookiesProvider>
  );
}
