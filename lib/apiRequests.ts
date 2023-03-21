import { ShoesProducts } from "@/types";
import axios from "axios";

export const instance = axios.create({
   baseURL: "https://api.escuelajs.co/api/v1",
});

export const getShoes = async () => {
   const response = await instance.get("/products/?categoryId=4");
   return response.data;
};

export const getShoe = async ({ queryKey }: any) => {
   const titleQuery = queryKey[1];
   const { data } = await instance.get(`/products/?title=${titleQuery}&categoryId=4`);

   return data[0];
};
