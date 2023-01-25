import { ShoesProducts } from "@/types";
import CardProduct from "./CardProduct";

const ShopProducts = ({ shoes }: { shoes: ShoesProducts[] }) => {
   return (
      <section className="min-h-screen p-5">
         <div className="mx-auto grid h-full max-w-7xl gap-5 md:grid-cols-2 lg:grid-cols-4 ">
            {shoes.map(shoe => (
               <CardProduct key={shoe.id} shoeInfo={shoe} />
            ))}
         </div>
      </section>
   );
};

export default ShopProducts;
