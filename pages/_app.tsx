import "../styles/globals.css";
import "react-toastify/dist/ReactToastify.css";
import type { AppProps } from "next/app";
import { useEffect, useState } from "react";
import { QueryClient, QueryClientProvider, Hydrate } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { useAuthState } from "react-firebase-hooks/auth";

import { doc, getDoc, setDoc } from "firebase/firestore";
import Layout from "@/components/layout/Layout";
import { auth, db } from "@/lib";
import { useCartStore } from "@/store";
import { Loading } from "@/components";

function MyApp({ Component, pageProps }: AppProps) {
   const [user, isLoading] = useAuthState(auth);
   const { updateUsersProducts, setTotal } = useCartStore();
   useEffect(() => {
      async function updateData() {
         //if the user doesn't exist, don't do anything
         if (!user) return;

         //verify if the products doc exist
         const cartProductsRef = doc(db, "users-cart", user.uid);
         const cartProductsSnap = await getDoc(cartProductsRef);

         //if not, create it
         if (!cartProductsSnap.exists()) {
            await setDoc(doc(db, "users-cart", user.uid), {
               products: [],
            });
            return;
         }

         //update it if yes
         updateUsersProducts(cartProductsSnap.data().products);
         setTotal();
      }
      updateData();
   }, [user]);

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

   if (isLoading) return <Loading />;

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
