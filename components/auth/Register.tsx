import Link from "next/link";
import { useForm } from "react-hook-form";
import clsx from "clsx";
import { useAuthForms } from "@/hooks";
import { FormRegisterData } from "@/types";
import { NikeLogo } from "../icons";
import ErrorFormMessage from "./ErrorFormMessage";

const Register = () => {
   const { mutateRegister, isLoadingRegister } = useAuthForms();
   const {
      register,
      handleSubmit,
      formState: { errors },
   } = useForm<FormRegisterData>();
   const onSubmit = handleSubmit(data => mutateRegister(data));

   return (
      <section
         className={clsx(
            isLoadingRegister && "opacity-30",
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
                           {...register("email", {
                              required: true,
                              pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                           })}
                           type="email"
                           className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                        />
                        {errors.email?.type === "required" && (
                           <ErrorFormMessage>Email is required</ErrorFormMessage>
                        )}

                        {errors.email?.type === "pattern" && (
                           <ErrorFormMessage>Invalid email</ErrorFormMessage>
                        )}
                     </div>
                  </div>

                  <div>
                     <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                        Password
                     </label>
                     <div className="mt-1">
                        <input
                           {...register("password", { required: true, minLength: 6 })}
                           aria-invalid={errors.password ? "true" : "false"}
                           type="password"
                           className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                        />
                        {errors.password?.type === "required" && (
                           <ErrorFormMessage>Password is required</ErrorFormMessage>
                        )}

                        {errors.password?.type === "minLength" && (
                           <ErrorFormMessage>
                              Password must be more than 6 characters
                           </ErrorFormMessage>
                        )}
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
