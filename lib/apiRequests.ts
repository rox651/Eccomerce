import { ShoesProducts } from "@/types";
import axios from "axios";

export const instance = axios.create({
   baseURL: "https://eccomerce-api-next.vercel.app/api",
});

export const getShoes = async () => {
   const response = await instance.get("/products-api");
   return response.data;
};

export const getShoe = async ({ queryKey }: any) => {
   const id = queryKey[1];
   const shoes: ShoesProducts[] = await getShoes();
   const shoe = shoes.filter(shoe => shoe.id === id);

   return shoe[0];
};
