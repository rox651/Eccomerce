import Link from "next/link";
import { NikeLogo } from "@/components";
import UserDropdown from "../auth/UserDropdown";
import { CartBagIcon } from "./CartBagIcon";

const Header = () => {
   return (
      <header className="sticky top-0 z-50 grid  h-[4rem] w-full grid-cols-[0.7fr_3fr_0.7fr]  items-center  bg-white/80 px-5 backdrop-blur-3xl">
         <Link href="/">
            <NikeLogo />
         </Link>
         <nav className="flex flex-1 justify-center gap-5 text-sm md:text-base font-medium">
            <Link href="/">Home</Link>
            <Link href="/shop">Shop</Link>
         </nav>
         <div className="flex items-center gap-2 justify-self-end">
            <CartBagIcon />
            <UserDropdown />
         </div>
      </header>
   );
};

export default Header;
