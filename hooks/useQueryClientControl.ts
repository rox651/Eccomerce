import { useState } from "react";
import { QueryClient } from "@tanstack/react-query";

const useQueryClientControl = () => {
   const [queryClient] = useState(
      new QueryClient({
         defaultOptions: {
            queries: {
               refetchOnWindowFocus: false,
               staleTime: 20 * 1000,
               retry: 3,
            },
         },
      })
   );

   return { queryClient };
};

export default useQueryClientControl;
