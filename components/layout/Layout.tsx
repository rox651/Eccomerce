import { ReactElement } from "react";
import { ToastContainer } from "react-toastify";
import Cart from "./Cart";
import Header from "./Header";

const Layout = ({ children }: { children: ReactElement }) => {
   return (
      <>
         <Header />
         <Cart />
         {children}
         <ToastContainer
            position="bottom-left"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
         />
      </>
   );
};

export default Layout;