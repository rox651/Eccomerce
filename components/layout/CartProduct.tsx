import Image from "next/image";
import { motion } from "framer-motion";
import { ShoesForCart } from "@/types";
import { useQuantityInCart } from "@/hooks";

const CartProduct = ({ shoeInfo }: { shoeInfo: ShoesForCart }) => {
   const { image, name, price, size } = shoeInfo;
   const { incrementProduct, decrementProduct, removeCartProduct } = useQuantityInCart(shoeInfo);

   return (
      <div className="grid grid-cols-2 items-center rounded-lg border border-slate-700 p-2 shadow-xl">
         <div className=" grid">
            <h3>{name}</h3>
            <strong>{size}</strong>
            <span>${price}</span>
         </div>
         <Image
            className="h-full w-full object-contain"
            src={`https://eccomerce-api-next.vercel.app${image.src}`}
            width={image.width}
            height={image.height}
            placeholder="blur"
            blurDataURL={image.blurDataURL}
            alt={`${name} - Cart`}
         />
         <div className="col-span-2 my-3 grid grid-cols-3 text-center">
            <motion.button
               whileTap={{ scale: 0.7, willChange: "transform" }}
               onClick={decrementProduct}
               className="bg-slate-800  px-3 text-white"
            >
               -
            </motion.button>
            <strong>{shoeInfo.quantity}</strong>
            <motion.button
               whileTap={{ scale: 0.7, willChange: "transform" }}
               onClick={incrementProduct}
               className="bg-slate-800  px-3  text-white"
            >
               +
            </motion.button>
         </div>
         <motion.button
            whileTap={{ scale: 0.7 }}
            className=" col-span-2 bg-red-500 text-white"
            onClick={removeCartProduct}
         >
            Remove item
         </motion.button>
      </div>
   );
};

export default CartProduct;
