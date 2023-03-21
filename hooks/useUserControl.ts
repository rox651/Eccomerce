import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { auth, db, matchLocalAndUserProducts } from "@/lib";
import { useCartStore } from "@/store";

const useUserControl = () => {
   const [user, isLoadingUser] = useAuthState(auth);
   const [isLoadingDoc, setLoadingDoc] = useState(true);
   const { products, updateUsersProducts, setTotal } = useCartStore();

   async function updateData() {
      if (!user) {
         setLoadingDoc(false);
         return;
      }

      //verify if the products doc exist
      const cartProductsRef = doc(db, "users-cart", user.uid);
      const cartProductsSnap = await getDoc(cartProductsRef);

      //if not, create it
      if (!cartProductsSnap.exists()) {
         await setDoc(doc(db, "users-cart", user.uid), {
            products: [],
         });
         setLoadingDoc(false);
         updateUsersProducts([...products]);
         setTotal();
         return;
      }

      setLoadingDoc(false);
      updateUsersProducts(matchLocalAndUserProducts(products, cartProductsSnap.data().products));
      setTotal();
   }

   useEffect(() => {
      updateData();
   }, [user]);
   return { isLoadingDoc, isLoadingUser };
};

export default useUserControl;
