import { useRouter } from "next/router";
import { toast } from "react-toastify";
import { useMutation } from "@tanstack/react-query";
import { loginUser, loginUserWithGoogle } from "@/lib";

const useLogin = () => {
   const route = useRouter();

   const { mutate: mutateGoogle, isLoading: isLoadingGoogle } = useMutation({
      mutationFn: loginUserWithGoogle,
      onSuccess: () => route.push("/"),
      onError: () =>
         toast.error("System error, try again", {
            position: "bottom-center",
         }),
   });

   const { mutate: mutateLogin, isLoading: isLoadingLogin } = useMutation({
      mutationFn: loginUser,
      onSuccess: () => route.push("/"),
      onError: () =>
         toast.error("System error, try again", {
            position: "bottom-center",
         }),
   });
   return {
      mutateLogin,
      mutateGoogle,
      isLoadingLogin,
      isLoadingGoogle,
   };
};

export default useLogin;
