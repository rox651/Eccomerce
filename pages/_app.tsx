import "../styles/globals.css";
import "react-toastify/dist/ReactToastify.css";
import type { AppProps } from "next/app";
import { QueryClientProvider, Hydrate } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import Layout from "@/components/layout/Layout";

import { useQueryClientControl } from "@/hooks";

function MyApp({ Component, pageProps }: AppProps) {
   const { queryClient } = useQueryClientControl();

   return (
      <QueryClientProvider client={queryClient}>
         <Hydrate state={pageProps.dehydratedState}>
            <Layout>
               <Component {...pageProps} />
            </Layout>
            <ReactQueryDevtools />
         </Hydrate>
      </QueryClientProvider>
   );
}

export default MyApp;
