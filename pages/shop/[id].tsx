import { GetStaticPaths, GetStaticPropsContext, InferGetStaticPropsType, NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useMemo } from "react";
import { dehydrate, QueryClient, useQuery } from "@tanstack/react-query";
import { motion } from "framer-motion";
import { getShoe, getShoes } from "@/lib";
import { ShoesProducts } from "@/types";
import { useCartStore } from "@/store";
import { useQuantity } from "@/hooks";

type productProps = InferGetStaticPropsType<typeof getStaticProps>;

const Product: NextPage<productProps> = ({ id }) => {
   const { data } = useQuery({
      queryKey: ["shoe", id],
      queryFn: getShoe,
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
         <section className="relative grid h-[calc(100vh-4rem)] w-full place-items-center bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-red-500 via-slate-400 to-stone-100 px-5 shadow-lg md:grid-cols-2">
            <Image
               className="h-[250px] w-full object-contain drop-shadow-2xl  md:h-full"
               src={
                  `https://eccomerce-api-next.vercel.app${data?.image.src}` ||
                  "https://eccomerce-api-next.vercel.app/_next/static/media/Nike-Joyride-Cushioning-Black-1-removebg-preview.26486054.png"
               }
               width={550}
               height={470}
               alt={data?.name || "product undefined"}
               placeholder="blur"
               blurDataURL={data?.image.blurDataURL}
            />
            <article className="flex flex-col items-start">
               <div className="w-full  py-5 text-white">
                  <small className="text-xl font-medium">${data?.basePrice}<br/></small>
                  <h3 className=" text-4xl font-bold">{data?.name}</h3>
                  <small className="text-xl font-medium">{data?.size}</small>
               </div>
               <div className=" mb-5  space-x-2 font-['Eurostile'] text-2xl text-white ">
                  <motion.button
                     initial={{ scale: 1 }}
                     whileTap={{ scale: 0.7 }}
                     onClick={decrementQuantity}
                     className="bg-slate-800 px-3 "
                  >
                     -
                  </motion.button>
                  <strong>{quantity}</strong>
                  <motion.button
                     initial={{ scale: 1 }}
                     whileTap={{ scale: 0.7 }}
                     onClick={incrementQuantity}
                     className="bg-slate-800 px-3  "
                  >
                     +
                  </motion.button>
               </div>
               <motion.button
                  initial={{ scale: 1 }}
                  whileTap={{ scale: 0.7 }}
                  className=" -order-1 inline-block  bg-slate-800 px-10 py-2 text-sm text-white md:order-1 lg:text-base"
                  onClick={() => {
                     addProduct(data, quantity, false);
                     setTotal();
                  }}
               >
                  Add to the cart
               </motion.button>
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

export default Product;
