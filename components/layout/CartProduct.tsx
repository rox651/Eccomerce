import Image from "next/image";
import { motion } from "framer-motion";
import { AiFillDelete } from "react-icons/ai";
import { ShoesForCart } from "@/types";
import { useQuantityInCart } from "@/hooks";

const CartProduct = ({ shoeInfo }: { shoeInfo: ShoesForCart }) => {
   const { image, basePrice, name, price, size } = shoeInfo;
   const { incrementProduct, decrementProduct, removeCartProduct } = useQuantityInCart(shoeInfo);

   return (
      <div className="grid grid-cols-2 items-center rounded-lg border border-slate-700 p-2 shadow-xl">
         <div className=" grid">
            <h3>{name}</h3>
            <span>
               <strong>Base price:</strong> ${basePrice}
            </span>
            <span>
               <strong>Sub total:</strong> ${price}
            </span>
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
               whileTap={{ scale: 0.7 }}
               onClick={decrementProduct}
               className="bg-slate-800  py-1 px-3 text-white disabled:opacity-80"
               disabled={shoeInfo.quantity === 1}
            >
               -
            </motion.button>
            <strong>{shoeInfo.quantity}</strong>
            <motion.button
               whileTap={{ scale: 0.7 }}
               onClick={incrementProduct}
               className="bg-slate-800  py-1 px-3  text-white"
            >
               +
            </motion.button>
            <motion.button
               whileTap={{ scale: 0.7 }}
               className=" bg-red-500 text-white mt-2 py-1"
               onClick={removeCartProduct}
            >
               <AiFillDelete className=" mx-auto" />
            </motion.button>
         </div>
      </div>
   );
};

export default CartProduct;
