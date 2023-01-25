import { GetStaticPaths, GetStaticPropsContext, InferGetStaticPropsType, NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useMemo } from "react";
import { dehydrate, QueryClient, useQuery } from "@tanstack/react-query";
import { getShoe, getShoes } from "@/lib";
import { ShoesProducts } from "@/types";
import { useCartStore } from "@/store";
import { useQuantity } from "@/hooks";

type productProps = InferGetStaticPropsType<typeof getStaticProps>;

const product: NextPage<productProps> = ({ id }) => {
   const { data } = useQuery({
      queryKey: ["shoe", id],
      queryFn: getShoe,
      refetchOnWindowFocus: false,
      staleTime: 200000,
      retry: 3,
   });
   const title = useMemo(() => `${data?.name} - Nike Store`, [data]);

   const { addProduct, setTotal } = useCartStore();
   const { quantity, incrementQuantity, decrementQuantity } = useQuantity();

   return (
      <>
         <Head>
            <title>{title}</title>
            <link rel="icon" href="/favicon.ico" />
         </Head>
         <section className="relative grid h-[calc(100vh-4rem)] w-full grid-cols-2 place-items-center bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-red-500 via-slate-400 to-stone-100 shadow-lg">
            <Image
               className="h-auto w-full object-contain  drop-shadow-2xl"
               src={
                  data?.image ||
                  "http://localhost:3000/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FNike-Joyride-Cushioning-Black-1-removebg-preview.26486054.png&w=640&q=75"
               }
               width={550}
               height={470}
               alt={data?.name || "product undefined"}
            />
            <article>
               <div className="w-full  py-5 text-white">
                  <small className="text-xl font-medium">${data?.basePrice}</small>
                  <h3 className=" text-4xl font-bold">{data?.name}</h3>
                  <small className="text-xl font-medium">{data?.size}</small>
               </div>
               <div className="mx-auto mb-5 space-x-2 font-['Eurostile'] text-2xl text-white ">
                  <button onClick={decrementQuantity} className="bg-slate-800 px-3 ">
                     -
                  </button>
                  <strong>{quantity}</strong>
                  <button onClick={incrementQuantity} className="bg-slate-800 px-3  ">
                     +
                  </button>
               </div>
               <button
                  onClick={() => {
                     addProduct(data, quantity, false);
                     setTotal();
                  }}
               >
                  Add to the cart
               </button>
            </article>
         </section>
      </>
   );
};

export const getStaticProps = async ({ params }: GetStaticPropsContext) => {
   const queryClient = new QueryClient();

   await queryClient.prefetchQuery(["shoe", params?.id], getShoe);

   return {
      props: {
         dehydratedState: dehydrate(queryClient),
         id: params?.id,
      },
   };
};
export const getStaticPaths: GetStaticPaths = async () => {
   const shoes: ShoesProducts[] = await getShoes();
   const shoePaths = shoes.map(shoe => {
      return {
         params: {
            id: shoe.id,
         },
      };
   });
   return { paths: shoePaths, fallback: "blocking" };
};

export default product;
