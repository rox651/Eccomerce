import Image from "next/image";
import { motion } from "framer-motion";
import { AiFillDelete } from "react-icons/ai";
import { ShoesForCart } from "@/types";
import { useQuantityInCart } from "@/hooks";
import NotFoundImg from "@/public/images/not-found-image.png";

const CartProduct = ({ shoeInfo }: { shoeInfo: ShoesForCart }) => {
   const { images, title, price, priceToPay } = shoeInfo;
   const { incrementProduct, decrementProduct, removeCartProduct } = useQuantityInCart(shoeInfo);
   return (
      <div className="grid items-center rounded-lg border border-slate-700 p-2 shadow-xl">
         <div className=" grid">
            <h3>{title}</h3>
            <span>
               <strong>Base price:</strong> ${price}
            </span>
            <span>
               <strong>Sub total:</strong> ${priceToPay}
            </span>
         </div>
         <Image
            className="h-full w-full object-contain"
            src={images[0] || NotFoundImg}
            width={500}
            height={350}
            alt={`${title} - product-cart`}
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
               className=" mt-2 bg-red-500 py-1 text-white"
               onClick={removeCartProduct}
            >
               <AiFillDelete className=" mx-auto" />
            </motion.button>
         </div>
      </div>
   );
};

export default CartProduct;
