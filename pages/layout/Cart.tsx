import dynamic from "next/dynamic";
import { useMemo } from "react";
import clsx from "clsx";
import { useCartStore } from "@/store";
import CartProduct from "./CartProduct";
import MessageCart from "./MessageCart";

const Cart = () => {
   const { products, totalPrice, totalQuantity, isOpen, setIsOpen } = useCartStore();
   const classConditional = useMemo(() => !isOpen && "hidden", [isOpen]);
   const isThereProducts = useMemo(() => products.length > 0, [products]);

   return (
      <section
         className={clsx(
            classConditional,
            "fixed left-0 top-0 z-50 grid h-full w-full grid-cols-3 bg-black/50 sm:grid-cols-4"
         )}
         onClick={setIsOpen}
      >
         <article
            className="relative col-start-2 col-end-4 h-full w-full space-y-3 overflow-y-auto bg-white p-5 sm:col-start-4"
            onClick={e => e.stopPropagation()}
         >
            <h2>Cart Products</h2>
            <div className="flex w-full justify-between bg-white">
               <div>
                  <h3>Total Price</h3>
                  <span>${totalPrice}</span>
               </div>
               <div>
                  <h3>Quantity</h3>
                  <span>{totalQuantity}</span>
               </div>
            </div>
            {isThereProducts ? (
               products.map(product => (
                  <CartProduct key={`${product.id}-cart`} shoeInfo={product} />
               ))
            ) : (
               <MessageCart />
            )}
         </article>
      </section>
   );
};

export default dynamic(() => Promise.resolve(Cart), { ssr: false });
