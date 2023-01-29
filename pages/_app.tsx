import "../styles/globals.css";
import "react-toastify/dist/ReactToastify.css";
import type { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { AnimatePresence, motion } from "framer-motion";
import Layout from "@/components/layout/Layout";

const pageAnimations = {
   initial: {
      opacity: 0,
      clipPath: "circle(0% at 0 100%)",
   },
   animate: {
      opacity: 1,
      clipPath: "circle(141.5% at 0 100%)",
   },
   exit: {
      opacity: 0,
      clipPath: "circle(0% at 0 100%)",
   },
};

function MyApp({ Component, pageProps, router }: AppProps) {
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
         <AnimatePresence mode="wait">
            <motion.main
               key={router.route}
               initial="initial"
               animate="animate"
               exit="exit"
               variants={pageAnimations}
               transition={{ duration: 0.3 }}
            >
               <Layout>
                  <Component {...pageProps} />
               </Layout>
            </motion.main>
         </AnimatePresence>
         <ReactQueryDevtools />
      </QueryClientProvider>
   );
}

export default MyApp;
