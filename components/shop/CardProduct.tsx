import Image from "next/image";
import Link from "next/link";
import { ShoesProducts } from "@/types";
import { motion } from "framer-motion";

const CardProduct = ({ shoeInfo }: { shoeInfo: ShoesProducts }) => {
   const { id, image, name, basePrice, size } = shoeInfo;
   return (
      <Link href={`/shop/${id}`} className="h-full w-full">
         <article className="relative grid min-h-[340px] w-full place-items-center rounded-lg  bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-red-500 via-slate-400 to-stone-100 shadow-lg">
            <motion.span className="h-full w-full " whileHover={{ rotate: 30, scale: 1.2 }}>
               <Image
                  className="h-full  w-full object-contain drop-shadow-2xl transition-transform"
                  src={image}
                  width={300}
                  height={170}
                  alt={name}
               />
            </motion.span>
            <div className="w-full  p-5 text-white">
               <small className="text-lg font-medium">${basePrice}</small>
               <h3 className=" text-xl font-bold">{name}</h3>
               <small className="text-lg font-medium">{size}</small>
            </div>
         </article>
      </Link>
   );
};

export default CardProduct;
