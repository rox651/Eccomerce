import { NextPage } from "next";
import Head from "next/head";
import { Login } from "@/components";


const login: NextPage = () => {
   return (
      <>
         <Head>
            <title>Sign in</title>
            <link rel="icon" href="/favicon.ico" />
         </Head>
         <Login />
      </>
   );
};

export default login;
