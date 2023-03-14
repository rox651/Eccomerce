import { useUserControl } from "@/hooks";
import { ReactElement } from "react";
import { ToastContainer } from "react-toastify";
import Cart from "./Cart";
import Header from "./Header";
import Loading from "./Loading";

const Layout = ({ children }: { children: ReactElement }) => {
   const { isLoadingDoc, isLoadingUser } = useUserControl();

   if (isLoadingDoc || isLoadingUser) return <Loading />;

   return (
      <>
         <Header />
         <Cart />
         {children}
         <ToastContainer
            position="bottom-left"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={true}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss={false}
            draggable
            pauseOnHover
         />
      </>
   );
};

export default Layout;
