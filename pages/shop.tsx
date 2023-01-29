import { GetStaticProps, NextPage, InferGetStaticPropsType } from "next";
import Head from "next/head";
import { useQuery } from "@tanstack/react-query";
import { ShopProducts } from "@/components";
import { getShoes } from "@/lib";
import { ShoesProducts } from "@/types";

type shopPage = InferGetStaticPropsType<typeof getStaticProps>;
const shop: NextPage<shopPage> = ({ shoes }) => {
   const { data } = useQuery({
      queryKey: ["shoes"],
      queryFn: getShoes,
      initialData: shoes,
   });
   return (
      <>
         <Head>
            <title>Shop - Nike Store</title>
            <link rel="icon" href="/favicon.ico" />
         </Head>
         <ShopProducts shoes={data} />
      </>
   );
};

export const getStaticProps: GetStaticProps = async () => {
   const shoes: ShoesProducts[] = await getShoes();
   return {
      props: {
         shoes,
      },
   };
};

export default shop;
