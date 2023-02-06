import Link from "next/link";
import { useForm } from "react-hook-form";
import { FormRegisterData } from "@/types";
import { GithubIcon, GoogleIcon, NikeLogo } from "../icons";
import { createUser } from "@/lib";


const Register = () => {
   const {
      register,
      handleSubmit,
      formState: { errors },
   } = useForm<FormRegisterData>();

   const onSubmit = handleSubmit(data => {
      const { email, password } = data;

      createUser({email, password});
   });

   return (
      <section className="flex min-h-full flex-col justify-center py-12 sm:px-6 lg:px-8">
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

                  <div className=" text-center text-xs">
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

               <div className="mt-6">
                  <div className="relative">
                     <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-gray-300" />
                     </div>
                     <div className="relative flex justify-center text-sm">
                        <span className="bg-white px-2 text-gray-500">Or continue with</span>
                     </div>
                  </div>

                  <div className="mt-6 grid grid-cols-2 gap-3">
                     <div>
                        <a
                           href="#"
                           className="inline-flex w-full justify-center rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-red-600/70 shadow-sm hover:bg-gray-50 hover:text-red-600"
                        >
                           <span className="sr-only">Sign up with Google</span>
                           <GoogleIcon />
                        </a>
                     </div>

                     <div>
                        <a
                           href="#"
                           className="inline-flex w-full justify-center rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-red-600/70 shadow-sm hover:bg-gray-50 hover:text-red-600"
                        >
                           <span className="sr-only">Sign up with GitHub</span>
                           <GithubIcon />
                        </a>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
};

export default Register;
