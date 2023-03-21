import { useRouter } from "next/router";
import { useEffect } from "react";
import { toast } from "react-toastify";
import { useAuthState } from "react-firebase-hooks/auth";
import { useMutation } from "@tanstack/react-query";
import { FirebaseError } from "firebase/app";
import { auth, createUser, loginUser, loginUserWithGoogle } from "@/lib";

const useLogin = () => {
   const route = useRouter();
   const [user] = useAuthState(auth);

   function onError(e: any) {
      const error = new FirebaseError(e.code, e.message);
      toast.error(error.message, {
         position: "bottom-center",
      });
   }

   const { mutate: mutateGoogle, isLoading: isLoadingGoogle } = useMutation({
      mutationFn: loginUserWithGoogle,
      onSuccess: () => route.push("/"),
      onError,
   });

   const { mutate: mutateLogin, isLoading: isLoadingLogin } = useMutation({
      mutationFn: loginUser,
      onSuccess: () => route.push("/"),
      onError,
   });

   const { mutate: mutateRegister, isLoading: isLoadingRegister } = useMutation({
      mutationFn: createUser,
      onSuccess: () =>
         toast.success(`User created`, {
            position: "bottom-center",
         }),
      onError,
   });

   useEffect(() => {
      if (user) {
         route.push("/");
      }
   }, [user]);

   return {
      mutateLogin,
      mutateGoogle,
      mutateRegister,
      isLoadingRegister,
      isLoadingLogin,
      isLoadingGoogle,
   };
};

export default useLogin;
