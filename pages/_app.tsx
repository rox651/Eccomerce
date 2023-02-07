import "../styles/globals.css";
import "react-toastify/dist/ReactToastify.css";
import type { AppProps } from "next/app";
import { useState } from "react";
import { QueryClient, QueryClientProvider, Hydrate } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import Layout from "@/components/layout/Layout";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/lib";

function MyApp({ Component, pageProps }: AppProps) {

   const [queryClient] = useState(
      new QueryClient({
         defaultOptions: {
            queries: {
               refetchOnWindowFocus: false,
               staleTime: 20 * 1000,
               retry: 3,
            },
         },
      })
   );

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
