import "../styles/globals.css";
import "react-toastify/dist/ReactToastify.css";
import type { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import Layout from "@/components/layout/Layout";

function MyApp({ Component, pageProps }: AppProps) {
   const queryClient = new QueryClient({
      defaultOptions: {
         queries: {
            refetchOnWindowFocus: false,
            staleTime: 20 * 1000,
            retry: 3,
         },
      },
   });

   return (
      <QueryClientProvider client={queryClient}>
         <Layout>
            <Component {...pageProps} />
         </Layout>
         <ReactQueryDevtools />
      </QueryClientProvider>
   );
}

export default MyApp;
