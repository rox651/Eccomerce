import { FormRegisterData } from "@/types";
import {
   createUserWithEmailAndPassword,
   signInWithEmailAndPassword,
   signInWithPopup,
} from "firebase/auth";
import { auth,  googleProvider } from "./firebaseConfig";

export const createUser = async ({ email, password }: FormRegisterData) => {
   const response = await createUserWithEmailAndPassword(auth, email, password);
   return response;
};
export const loginUser = async ({ email, password }: FormRegisterData) => {
   const response = await signInWithEmailAndPassword(auth, email, password);
   return response;
};

export const loginUserWithGoogle = async () => {
   const response = await signInWithPopup(auth, googleProvider);
   return response;
};
