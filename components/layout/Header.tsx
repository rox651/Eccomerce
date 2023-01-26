import Link from "next/link";
import { AiOutlineShopping } from "react-icons/ai";
import { NikeLogo } from "@/components";
import { useCartStore } from "@/store";

const Header = () => {
   const { setIsOpen } = useCartStore();
   return (
      <header className="sticky top-0 z-50 flex h-[4rem] w-full  items-center justify-between bg-white/80 px-5 backdrop-blur-3xl">
         <NikeLogo />
         <nav className="flex flex-1 justify-center gap-5 font-medium">
            <Link href="/">Home</Link>
            <Link href="/shop">Shop</Link>
            <Link href="/car">Contact</Link>
         </nav>
         <div>
            <AiOutlineShopping onClick={setIsOpen} className="h-[40px] w-[80px] cursor-pointer" />
         </div>
      </header>
   );
};

export default Header;
