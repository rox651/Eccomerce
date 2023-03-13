import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
   apiKey: "AIzaSyDhpWN3ymuFzYpumkmlAxl-YoNEieJjJ3k",
   authDomain: "eccomerce-shoes-v2.firebaseapp.com",
   projectId: "eccomerce-shoes-v2",
   storageBucket: "eccomerce-shoes-v2.appspot.com",
   messagingSenderId: "48160070998",
   appId: "1:48160070998:web:a2e5a368bb502ef8284af7",
   measurementId: "G-SBRZPKEW7L"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig)
export const auth = getAuth();
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);
