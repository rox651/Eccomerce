import { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import { dehydrate, QueryClient, useQuery } from "@tanstack/react-query";
import { ShopProducts } from "@/components";
import { getShoes } from "@/lib";

const shop: NextPage = () => {
   const { data: shoes } = useQuery({ queryKey: ["shoes"], queryFn: getShoes });
   return (
      <>
         <Head>
            <title>Shop - Nike Store</title>
            <link rel="icon" href="/favicon.ico" />
         </Head>
         <ShopProducts shoes={shoes} />
      </>
   );
};

export const getStaticProps: GetStaticProps = async () => {
   const queryClient = new QueryClient();

   await queryClient.prefetchQuery(["shoes"], getShoes);
   return {
      props: {
         dehydratedState: dehydrate(queryClient),
      },
   };
};

export default shop;
