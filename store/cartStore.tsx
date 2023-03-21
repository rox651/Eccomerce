import { CartState, ShoesForCart } from "@/types";
import { create } from "zustand";
import { toast } from "react-toastify";
import { persist } from "zustand/middleware";
import { auth, db, setTotalData } from "@/lib";
import { doc, setDoc } from "firebase/firestore";

export const useCartStore = create<CartState>()(
   persist(
      (set, get) => ({
         products: [],
         totalPrice: 0,
         totalQuantity: 0,
         isOpen: false,
         addProduct: (product, quantity, isProductFromCart) => {
            //search if the product already exists
            const currentProducts = get().products;
            const findProduct = currentProducts.find(
               currentProduct => product.title === currentProduct.title
            );

            if (!findProduct) {
               //add product if doesn't exist

               const newProduct: ShoesForCart = { ...product };
               newProduct.quantity = quantity;
               newProduct.priceToPay = newProduct.price * quantity;

               set(state => ({ products: [...state.products, newProduct] }));
               toast.success("New product added", {
                  position: "bottom-left",
                  autoClose: 2000,
               });

               return;
            }

            //update product if exists
            const updateProducts = currentProducts.map(updateProduct => {
               if (updateProduct.title === findProduct.title) {
                  findProduct.quantity = isProductFromCart
                     ? quantity
                     : findProduct.quantity + quantity;
                  findProduct.priceToPay = product.price * findProduct.quantity;
                  return findProduct;
               }
               return updateProduct;
            });

            set({ products: updateProducts });

            if (!isProductFromCart)
               toast.success(`Product update - ${findProduct.quantity} products now`, {
                  position: "bottom-left",
                  autoClose: 5000,
               });
         },
         removeProduct: title => {
            const currentProducts = get().products;
            const filterProducts = currentProducts.filter(product => product.title !== title);

            set({ products: filterProducts });
            toast.info("Product removed", {
               position: "bottom-left",
               autoClose: 2000,
            });
         },
         setTotal: async () => {
            const currentProducts = get().products;
            const totalPrice = setTotalData(currentProducts, "price");
            const totalQuantity = setTotalData(currentProducts, "quantity");

            set({ totalPrice, totalQuantity });

            if (auth.currentUser)
               await setDoc(doc(db, "users-cart", auth.currentUser?.uid), {
                  products: currentProducts,
               });
         },
         setIsOpen: () => set(state => ({ isOpen: !state.isOpen })),
         updateUsersProducts: newData => set({ products: newData }),
         clearProducts: () => set({ products: [], totalQuantity: 0, totalPrice: 0 }),
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
