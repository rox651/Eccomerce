import { useCartStore } from "@/store";
import Link from "next/link";

const MessageCart = () => {
   const { setIsOpen } = useCartStore();
   return (
      <div className="space-y-2 text-center">
         <h3>Keep Shopping</h3>
         <Link
            onClick={setIsOpen}
            href="/shop"
            className=" inline-block bg-slate-800 p-2 text-white"
         >
            Go to shop
         </Link>
      </div>
   );
};

export default MessageCart;
