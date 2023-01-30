import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { ShoesProducts } from "@/types";
import { motion } from "framer-motion";

const CardProduct = ({ shoeInfo }: { shoeInfo: ShoesProducts }) => {
   const { id, image, name, basePrice, size } = shoeInfo;

   return (
      <Link href={`/shop/${id}`} className="h-full w-full">
         <article className="relative grid h-full w-full place-items-center rounded-lg bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))]  from-red-500 via-slate-400 to-stone-100 shadow-lg sm:min-h-[340px]">
            <Image
               className=" object-contain drop-shadow-2xl transition-transform lg:hover:rotate-[30deg] lg:hover:scale-125"
               src={`https://eccomerce-api-next.vercel.app${image.src}`}
               width={image.width}
               height={image.height}
               alt={name}
               placeholder="blur"
               blurDataURL={image.blurDataURL}
            />
            <div className="w-full  p-4 text-white sm:p-5">
               <small className="text-xs font-medium sm:text-lg">${basePrice}</small>
               <h3 className=" text-xs font-bold sm:text-xl">{name}</h3>
               <small className="text-xs font-medium sm:text-lg">{size}</small>
            </div>
         </article>
      </Link>
   );
};

export default CardProduct;
