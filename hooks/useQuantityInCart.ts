import { useCallback } from "react";
import { ShoesForCart } from "@/types";
import { useCartStore } from "@/store";

const useQuantityInCart = (shoeInfo: ShoesForCart) => {
   const { addProduct, removeProduct, setTotal } = useCartStore();

   const incrementProduct = useCallback(() => {
      shoeInfo.quantity += 1;
      addProduct({ ...shoeInfo }, shoeInfo.quantity, true);
      setTotal();
   }, [shoeInfo]);

   const decrementProduct = useCallback(() => {
      if (shoeInfo.quantity > 1) {
         shoeInfo.quantity -= 1;
         addProduct({ ...shoeInfo }, shoeInfo.quantity, true);
         setTotal();
      }
   }, [shoeInfo]);

   const removeCartProduct = useCallback(() => {
      removeProduct(shoeInfo.title);
      setTotal();
   }, [shoeInfo]);

   return { incrementProduct, decrementProduct, removeCartProduct };
};

export default useQuantityInCart;
