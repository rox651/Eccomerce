import Image from "next/image";
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
            src={image}
            width={300}
            height={300}
            alt={`${name} - Cart`}
         />
         <div className="col-span-2 my-3 grid grid-cols-3 text-center">
            <button onClick={decrementProduct} className="bg-slate-800  px-3 text-white">
               -
            </button>
            <strong>{shoeInfo.quantity}</strong>
            <button onClick={incrementProduct} className="bg-slate-800  px-3  text-white">
               +
            </button>
         </div>
         <button className=" col-span-2 bg-red-500 text-white" onClick={removeCartProduct}>
            Remove item
         </button>
      </div>
   );
};

export default CartProduct;
