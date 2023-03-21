
export interface ShoesProducts {
   id: number;
   title: string;
   price: number;
   description: string;
   images:string[];
   creationAt: Date;
   updatedAt: Date;
   category: Category;
}

export interface ShoesForCart extends ShoesProducts {
   quantity: number;
   priceToPay: number;
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

export interface Category {
   id: number;
   name: Name;
   image: string;
   creationAt: Date;
   updatedAt: Date;
}

export enum Name {
   Shoes = "Shoes",
}
