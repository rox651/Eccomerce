import { ShoesProducts } from "@/types";
import CardProduct from "./CardProduct";

const ShopProducts = ({ shoes }: { shoes: ShoesProducts[] }) => {
   return (
      <section className="min-h-screen p-5">
         <h2 className="my-5 text-center text-xl">Shop</h2>
         <div className="mx-auto grid h-full max-w-7xl grid-cols-2 gap-5 lg:grid-cols-4 ">
            {shoes.map(shoe => (
               <CardProduct key={`shoe-${shoe.id}-${shoe.title}`} shoeInfo={shoe} />
            ))}
         </div>
      </section>
   );
};

export default ShopProducts;
