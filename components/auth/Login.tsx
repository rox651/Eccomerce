import Link from "next/link";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { useAuthState } from "react-firebase-hooks/auth";

import clsx from "clsx";

import { FormRegisterData } from "@/types";
import { GoogleIcon, NikeLogo } from "../icons";
import { useLogin } from "@/hooks";
import { auth } from "@/lib";
import { useEffect } from "react";

const Login = () => {
   const route = useRouter();
   const [user] = useAuthState(auth);
   const { mutateLogin, isLoadingLogin, mutateGoogle, isLoadingGoogle } = useLogin();

   const { register, handleSubmit } = useForm<FormRegisterData>();

   const onSubmit = handleSubmit(data => mutateLogin(data));
   const onGoogleSubmit = () => mutateGoogle();

   useEffect(() => {
      if (user) {
         route.push("/");
      }
   }, [user]);

   return (
      <section
         className={clsx(
            isLoadingLogin && "opacity-30",
            isLoadingGoogle && "opacity-30 grayscale",
            "flex min-h-full flex-col justify-center py-12 sm:px-6 lg:px-8 "
         )}
      >
         <article className="sm:mx-auto sm:w-full sm:max-w-md">
            <div className="grid place-items-center">
               <NikeLogo />
            </div>
            <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
               Sign in to your account
            </h2>
         </article>

         <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
            <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
               <form className="space-y-6" onSubmit={onSubmit}>
                  <div>
                     <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                        Email address
                     </label>
                     <div className="mt-1">
                        <input
                           {...register("email", { required: true })}
                           type="email"
                           className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                        />
                     </div>
                  </div>

                  <div>
                     <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                        Password
                     </label>
                     <div className="mt-1">
                        <input
                           {...register("password", { required: true })}
                           type="password"
                           className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                        />
                     </div>
                  </div>

                  <div className="flex items-center justify-between">
                     {/* <div className="flex items-center">
                        <input
                           type="checkbox"
                           className="h-4 w-4 rounded border-gray-300 text-red-600 accent-red-400 focus:ring-red-500"
                        />
                        <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900 ">
                           Remember me
                        </label>
                     </div> */}

                        <a href="#" className=" text-xs font-medium text-red-600 hover:text-red-500">
                           Forgot your password?
                        </a>
                  </div>

                  <button
                     type="submit"
                     disabled={isLoadingGoogle}
                     className="focus:outl ine-none flex w-full justify-center rounded-md border border-transparent bg-red-600 py-2 px-4 text-sm font-medium text-white shadow-sm  hover:bg-red-700   focus:ring-2 focus:ring-red-500 focus:ring-offset-2 "
                  >
                     Sign in
                  </button>
               </form>
               <div className=" my-5 text-center text-sm ">
                  <Link href="/register" className="font-medium  text-red-600 hover:text-red-500">
                     Sign up if you don't have an account
                  </Link>
               </div>
               <div className="mt-6">
                  <div className="relative">
                     <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-gray-300" />
                     </div>
                     <div className="relative flex justify-center text-sm">
                        <span className="bg-white px-2 text-gray-500">Or continue with</span>
                     </div>
                  </div>

                  <div className="mt-6">
                     <button
                        onClick={onGoogleSubmit}
                        className="inline-flex w-full items-center justify-center gap-2 rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-red-600/70 shadow-sm hover:bg-gray-50 hover:text-red-600 "
                     >
                        <span className="sr-only">Sign in with Google</span>
                        <GoogleIcon />
                        <span>Google</span>
                     </button>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
};

export default Login;
