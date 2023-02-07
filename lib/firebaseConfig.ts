// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider } from "firebase/auth";
import { FormRegisterData } from "@/types";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
   apiKey: "AIzaSyDcAuWFAnuz9-hTwiLzs7B2aBZZUFk7bJM",
   authDomain: "eccomerce-shoes-cd53c.firebaseapp.com",
   projectId: "eccomerce-shoes-cd53c",
   storageBucket: "eccomerce-shoes-cd53c.appspot.com",
   messagingSenderId: "948225380780",
   appId: "1:948225380780:web:28e10d5e8ba94759ad6a09",
   measurementId: "G-34L2FT878Z",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const googleProvider = new GoogleAuthProvider();

