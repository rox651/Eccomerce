import { ShoesForCart } from "@/types";

export const setTotalData = (array: ShoesForCart[], key: keyof ShoesForCart): number => {
   return array.reduce((total, element) => {
      const value = element[key];
      return typeof value === "number" ? total + value : total;
   }, 0);
};

export const matchLocalAndUserProducts = (
   localProducts: ShoesForCart[],
   currentUserProducts: ShoesForCart[]
) => {
   return [...localProducts, ...currentUserProducts]
      .filter((product, index, self) => index === self.findIndex(p => p.id === product.id))
      .flat();
};
