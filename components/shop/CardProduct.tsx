import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ShoesProducts } from "@/types";
import clsx from "clsx";

const CardProduct = ({ shoeInfo }: { shoeInfo: ShoesProducts }) => {
   const [isLoadingImg, setisLoadingImg] = useState<boolean>(true);
   const { images, title, price } = shoeInfo;

   return (
      <Link href={`/shop/${title}`} className="h-full w-full">
         <article className="relative grid h-full w-full place-items-center overflow-hidden rounded-lg  bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-red-500 via-slate-400 to-stone-100 shadow-lg sm:min-h-[340px] ">
            <Image
               className={clsx(
                  isLoadingImg ? "scale-110 blur-2xl grayscale" : "scale-100 blur-0 grayscale-0",
                  " h-full w-full  bg-slate-200 object-cover drop-shadow-2xl transition-opacity duration-700 ease-in-out hover:opacity-80 "
               )}
               src={images[0]}
               width={500}
               height={500}
               alt={title}
               onLoadingComplete={() => setisLoadingImg(false)}
            />
            <div className="w-full  p-4 text-white sm:p-5">
               <small className="text-xs font-medium sm:text-lg">${price}</small>
               <h3 className=" text-xs font-bold sm:text-xl">{title}</h3>
            </div>
         </article>
      </Link>
   );
};

export default CardProduct;
