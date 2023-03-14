import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { auth, db } from "@/lib";
import { useCartStore } from "@/store";

const useUserControl = () => {
   const [user, isLoadingUser] = useAuthState(auth);
   const [isLoadingDoc, setLoadingDoc] = useState(false);
   const { updateUsersProducts, setTotal } = useCartStore();

   async function updateData() {
      //if the user doesn't exist, don't do anything
      if (!user) return;

      //verify if the products doc exist
      setLoadingDoc(true);

      const cartProductsRef = doc(db, "users-cart", user.uid);
      const cartProductsSnap = await getDoc(cartProductsRef);

      //if not, create it
      if (!cartProductsSnap.exists()) {
         await setDoc(doc(db, "users-cart", user.uid), {
            products: [],
         });
         setLoadingDoc(false);
         updateUsersProducts([]);
         setTotal();
         return;
      }

      setLoadingDoc(false);

      //update it if yes
      updateUsersProducts(cartProductsSnap.data().products);
      setTotal();
   }
   useEffect(() => {
      updateData();
   }, [user]);
   return { isLoadingDoc,isLoadingUser };
};

export default useUserControl;
