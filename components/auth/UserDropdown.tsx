import Link from "next/link";
import { useState, useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";
import { auth } from "@/lib";
import clsx from "clsx";
import { useCartStore } from "@/store";
import { useRouter } from "next/router";

const UserDropdown = () => {
   const route = useRouter();
   const [user] = useAuthState(auth);
   const [openDropDown, setOpenDropDown] = useState<boolean>(false);
   const { clearProducts } = useCartStore();

   useEffect(() => {
      const closeDropDown = () => {
         setOpenDropDown(false);
      };
      document.body.addEventListener("click", closeDropDown);
      return () => document.body.removeEventListener("click", closeDropDown);
   }, []);

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
               {user.displayName?.split(" ")[0]}
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
   );
};

export default UserDropdown;
