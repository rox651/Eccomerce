import { useState } from "react";

const useQuantity = (value: number = 1) => {
   const [quantity, setQuantity] = useState<number>(value);

   const decrementQuantity = () => {
      if (quantity > 1) {
         setQuantity(prevState => prevState - 1);
      }
   };
   const incrementQuantity = () => {
      setQuantity(prevState => prevState + 1);
   };

   return {
      quantity,
      incrementQuantity,
      decrementQuantity,
   };
};

export default useQuantity;
