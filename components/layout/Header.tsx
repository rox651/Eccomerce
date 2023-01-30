import dynamic from "next/dynamic";
import Link from "next/link";
import { AiOutlineShopping } from "react-icons/ai";
import { NikeLogo } from "@/components";
import { useCartStore } from "@/store";
import { useEffect, useState } from "react";

const Header = () => {
   const [totalQuantityState, setTotalQuantityState] = useState<number>(0);
   const { totalQuantity } = useCartStore();
   const { setIsOpen } = useCartStore();

   useEffect(() => {
      setTotalQuantityState(totalQuantity);
   }, [totalQuantity]);

   return (
      <header className="sticky top-0 z-50 flex h-[4rem] w-full  items-center justify-between bg-white/80 px-5 backdrop-blur-3xl">
         <Link href="/">
            <NikeLogo />
         </Link>
         <nav className="flex flex-1 justify-center gap-5 font-medium">
            <Link href="/">Home</Link>
            <Link href="/shop">Shop</Link>
         </nav>
         <div>
            <div onClick={setIsOpen} className="relative cursor-pointer">
               <span className="absolute right-2 grid h-7 w-7 place-items-center rounded-full bg-red-500 text-white">
                  {totalQuantityState}
               </span>
               <AiOutlineShopping className="h-[40px] w-[80px] " />
            </div>
         </div>
      </header>
   );
};

export default Header;
