import { AiOutlineLoading3Quarters, AiOutlineShopping } from "react-icons/ai";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/lib";
import { useCartStore } from "@/store";
import { useEffect, useState } from "react";

export const CartBagIcon = () => {
   const [_, isUserLoading] = useAuthState(auth);
   const [totalQuantityState, setTotalQuantityState] = useState<number>(0);
   const { totalQuantity } = useCartStore();
   const { setIsOpen } = useCartStore();

   useEffect(() => {
      setTotalQuantityState(totalQuantity);
   }, [totalQuantity]);

   if(isUserLoading) return <AiOutlineLoading3Quarters className=" animate-spin text-4xl" />

   return (
      <button
         disabled={isUserLoading}
         onClick={setIsOpen}
         className="relative cursor-pointer font-mono disabled:opacity-50"
      >
         <span className="absolute right-2 grid h-7 w-7 place-items-center rounded-full bg-red-500 text-white">
            {totalQuantityState}
         </span>
         <AiOutlineShopping className="h-[40px] w-[80px] " />
      </button>
   );
};
