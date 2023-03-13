import { ShoesForCart } from "@/types";

export const setTotalData = (array: ShoesForCart[], key: keyof ShoesForCart): number => {
   return array.reduce((total, element) => {
         const value = element[key];
         return typeof value === "number" ? total + value : total;
      }, 0);
};