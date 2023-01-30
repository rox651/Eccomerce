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
         className={clsx(classConditional, "fixed left-0 top-0 z-50  h-full w-full  bg-black/50 ")}
         onClick={setIsOpen}
      >
         <article
            className="absolute right-0 top-0 h-full w-2/3 space-y-3 overflow-y-auto bg-white p-5 sm:w-1/2 lg:w-1/3 "
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
