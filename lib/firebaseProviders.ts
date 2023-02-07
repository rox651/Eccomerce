import { FormRegisterData } from "@/types";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { toast } from "react-toastify";
import { auth } from "./firebaseConfig";

export const createUser = async ({ email, password }: FormRegisterData) => {
   try {
      const { user } = await createUserWithEmailAndPassword(auth, email, password);

      if (user)
         toast.success(`User created`, {
            autoClose: 5000,
         });
   } catch (e: any) {
      toast.error(e.message, {
         autoClose: 5000,
      });
   }
};
