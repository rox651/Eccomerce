import { ShoesForCart } from "@/types";

export const setTotalData = (array: ShoesForCart[], key: string) => {
   return array
      .map(element => {
         const value = element[key as keyof ShoesForCart];
         return typeof value === "number" ? value : 0;
      })
      .reduce((total, current) => {
         return total + current;
      }, 0);
};
