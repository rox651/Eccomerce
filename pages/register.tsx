import { Register } from "@/components";
import { NextPage } from "next";
import Head from "next/head";

const register: NextPage = () => {
   return (
      <>
         <Head>
            <title>Sign up</title>
            <link rel="icon" href="/favicon.ico" />
         </Head>
         <Register />
      </>
   );
};

export default register;
