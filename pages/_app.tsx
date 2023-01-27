import "../styles/globals.css";
import "react-toastify/dist/ReactToastify.css";
import type { AppProps } from "next/app";
import { useState } from "react";
import { Hydrate, QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import Layout from "@/components/layout/Layout";

function MyApp({ Component, pageProps }: AppProps) {
   const [queryClient] = useState(() => new QueryClient());

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
