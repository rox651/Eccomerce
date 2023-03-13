import Link from "next/link";
import { AiOutlineLoading3Quarters, AiOutlineShopping } from "react-icons/ai";
import { NikeLogo } from "@/components";
import { useCartStore } from "@/store";
import { useEffect, useState } from "react";
import UserDropdown from "../auth/UserDropdown";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/lib";

const Header = () => {
   const [_, isUserLoading] = useAuthState(auth);
   const [totalQuantityState, setTotalQuantityState] = useState<number>(0);
   const { totalQuantity } = useCartStore();
   const { setIsOpen } = useCartStore();

   useEffect(() => {
      setTotalQuantityState(totalQuantity);
   }, [totalQuantity]);

   return (
      <header className="sticky top-0 z-50 grid  h-[4rem] w-full grid-cols-[0.7fr_3fr_0.7fr]  items-center  bg-white/80 px-5 backdrop-blur-3xl">
         <Link href="/">
            <NikeLogo />
         </Link>
         <nav className="flex flex-1 justify-center gap-5 font-medium">
            <Link href="/">Home</Link>
            <Link href="/shop">Shop</Link>
         </nav>
         <div className="flex items-center gap-2 justify-self-end">
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
            <UserDropdown />
         </div>
      </header>
   );
};

export default Header;
