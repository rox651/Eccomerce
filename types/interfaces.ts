import { StaticImageData } from "next/image";

export interface ShoesProducts {
   id: string;
   name: string;
   color: string;
   basePrice: number;
   size: string;
   image: StaticImageData;
}

export interface ShoesForCart extends ShoesProducts {
   quantity: number;
   price: number;
}

export interface CartState {
   products: Array<ShoesForCart>;
   totalPrice: number;
   totalQuantity: number;
   isOpen: boolean;

   addProduct: (product: ShoesForCart | any, quantity: number, isProductFromCart: boolean) => void;
   removeProduct: (id: string) => void;
   setTotal: () => void;
   updateUsersProducts: (newData: ShoesForCart[]) => void;
   setIsOpen: () => void;
   clearProducts: () => void;
}

export interface FormRegisterData {
   email: string;
   password: string;
}
