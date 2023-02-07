import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import clsx from "clsx";

import { auth, createUser } from "@/lib";
import { FormRegisterData } from "@/types";

import { NikeLogo } from "../icons";

const Register = () => {
   const route = useRouter();
   const [user] = useAuthState(auth);

   const { mutate, isLoading } = useMutation({
      mutationFn: createUser,
      onSuccess: () =>
         toast.success(`User created`, {
            position: "bottom-center",
         }),
      onError: () =>
         toast.error("System error, try again", {
            position: "bottom-center",
         }),
   });
   const { register, handleSubmit } = useForm<FormRegisterData>();
   const onSubmit = handleSubmit(data => mutate(data));

   useEffect(() => {
      if (user) {
         route.push("/");
      }
   }, [user]);

   return (
      <section
         className={clsx(
            isLoading && "opacity-30",
            "flex min-h-full flex-col justify-center py-12 sm:px-6 lg:px-8"
         )}
      >
         <article className="sm:mx-auto sm:w-full sm:max-w-md">
            <div className="grid place-items-center">
               <NikeLogo />
            </div>
            <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
               Create an account
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

                  <div className=" text-center text-sm">
                     <Link href="/login" className="font-medium  text-red-600 hover:text-red-500">
                        Sign in if you already have an account
                     </Link>
                  </div>

                  <button
                     type="submit"
                     className="focus:outl ine-none flex w-full justify-center rounded-md border border-transparent bg-red-600 py-2 px-4 text-sm font-medium text-white shadow-sm    hover:bg-red-700 focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                  >
                     Sign up
                  </button>
               </form>
            </div>
         </div>
      </section>
   );
};

export default Register;
