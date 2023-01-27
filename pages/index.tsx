import { HeroHome } from "@/components";
import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
   return (
      <>
         <Head>
            <title>Nike Store</title>
            <link rel="icon" href="/favicon.ico" />
         </Head>

         <HeroHome />
      </>
   );
};

export default Home;
