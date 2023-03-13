import Link from "next/link";
import { useState, useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { signOut } from "firebase/auth";
import { auth } from "@/lib";
import clsx from "clsx";
import { useCartStore } from "@/store";
import { useRouter } from "next/router";

const UserDropdown = () => {
   const route = useRouter();
   const [openDropDown, setOpenDropDown] = useState<boolean>(false);
   const [user, loading] = useAuthState(auth);
   const { clearProducts } = useCartStore();

   useEffect(() => {
      const closeDropDown = () => {
         setOpenDropDown(false);
      };
      document.body.addEventListener("click", closeDropDown);
      return () => document.body.removeEventListener("click", closeDropDown);
   }, []);

   if (loading) {
      return <AiOutlineLoading3Quarters className=" animate-spin" />;
   }

   if (!user) {
      return <Link href="/login">Login</Link>;
   }

   return (
      <div className="relative inline-block text-left">
         <div>
            <button
               onClick={e => {
                  e.stopPropagation();
                  setOpenDropDown(!openDropDown);
               }}
               type="button"
               className="inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium  shadow-sm hover:bg-gray-50 "
               id="menu-button"
               aria-expanded="true"
               aria-haspopup="true"
            >
               Welcome {user.displayName?.split(" ")[0]}
            </button>
         </div>
         <div
            className={clsx(
               !openDropDown && "hidden",
               "absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
            )}
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="menu-button"
            tabIndex={-1}
         >
            <div className="py-1" role="none">
               <a
                  href="#"
                  className="block px-4 py-2 text-sm "
                  role="menuitem"
                  tabIndex={-1}
                  id="menu-item-0"
               >
                  Account settings
               </a>
               <button
                  type="submit"
                  className="block w-full px-4 py-2 text-left text-sm "
                  role="menuitem"
                  tabIndex={-1}
                  id="menu-item-3"
                  onClick={() => {
                     signOut(auth);
                     clearProducts();
                     route.push("/login");
                  }}
               >
                  Sign Out
               </button>
            </div>
         </div>
      </div>
   );
};

export default UserDropdown;
