import { CartState, ShoesForCart } from "@/types";
import { create } from "zustand";
import { toast } from "react-toastify";
import { persist } from "zustand/middleware";
import { setTotalData } from "@/lib";

export const useCartStore = create<CartState>()(
   persist(
      (set, get) => ({
         products: [],
         totalPrice: 0,
         totalQuantity: 0,
         isOpen: false,
         setIsOpen: () => set(state => ({ isOpen: !state.isOpen })),
         addProduct: (product, quantity, isProductFromCart) => {
            //search if the product already exists
            const currentProducts = get().products;
            const findProduct = currentProducts.find(
               currentProduct => product.id === currentProduct.id
            );

            if (!findProduct) {
               //add product if doesn't exist
               const newProduct: ShoesForCart = { ...product };
               newProduct.quantity = quantity;
               newProduct.price = newProduct.basePrice * quantity;

               set(state => ({ products: [...state.products, newProduct] }));
               toast.success("New product added", {
                  position: "bottom-left",
                  autoClose: 2000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  theme: "dark",
               });
               return;
            }

            //update product if exists
            const updateProducts = currentProducts.map(updateProduct => {
               if (updateProduct.id === findProduct.id) {
                  findProduct.quantity += quantity;
                  //if the product come from the cart, just redefine the quantity
                  if (isProductFromCart) {
                     findProduct.quantity = quantity;
                  }
                  findProduct.price = product.basePrice * findProduct.quantity;
                  return findProduct;
               }
               return updateProduct;
            });

            set({ products: updateProducts });
            toast.success(`Product update - ${findProduct.quantity} products now`, {
               position: "bottom-left",
               autoClose: 5000,
               hideProgressBar: false,
               closeOnClick: true,
               pauseOnHover: true,
               theme: "dark",
            });
         },
         removeProduct: id => {
            const currentProducts = get().products;
            const filterProducts = currentProducts.filter(product => product.id !== id);

            set({ products: filterProducts });
            toast.info("Product removed", {
               position: "bottom-left",
               autoClose: 2000,
               hideProgressBar: false,
               closeOnClick: true,
               pauseOnHover: true,
               theme: "dark",
            });
         },
         setTotal: () => {
            const currentProducts = get().products;

            const totalPrice = setTotalData(currentProducts, "price");
            const totalQuantity = setTotalData(currentProducts, "quantity");

            set({ totalPrice, totalQuantity });
         },
      }),
      {
         name: "cart-storage",
         partialize: state => ({
            products: state.products,
            totalPrice: state.totalPrice,
            totalQuantity: state.totalQuantity,
         }),
      }
   )
);
