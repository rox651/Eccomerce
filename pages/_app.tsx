import "../styles/globals.css";
import "react-toastify/dist/ReactToastify.css";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { useState } from "react";
import { Hydrate, QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ToastContainer } from "react-toastify";
import { AnimatePresence, motion } from "framer-motion";
import { Cart, Header } from "@/components/";
import Layout from "@/components/layout/Layout";

const pagesTransitions = {
   initialState: {
      opacity: 0,
   },
   animateState: {
      opacity: 1,
      clipPath: "circle(70.7% at 50% 50%)",
   },
   exitState: {
      opacity: 0,
      clipPath: "circle(0% at 50% 50%)",
   },
};

function MyApp({ Component, pageProps }: AppProps) {
   const [queryClient] = useState(() => new QueryClient());
   const router = useRouter();
   return (
      <QueryClientProvider client={queryClient}>
         <Hydrate state={pageProps.dehydratedState}>
            <AnimatePresence mode="wait">
               <motion.main
                  key={router.pathname}
                  initial="initialState"
                  animate="animateState"
                  exit="exitState"
                  transition={{ duration: 0.75 }}
                  variants={pagesTransitions}
               >
                  <Layout>
                     <Component {...pageProps} />
                  </Layout>
               </motion.main>
               <ReactQueryDevtools />
            </AnimatePresence>
         </Hydrate>
      </QueryClientProvider>
   );
}

export default MyApp;
