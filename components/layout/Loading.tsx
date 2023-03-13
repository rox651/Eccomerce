import { AiOutlineLoading3Quarters } from "react-icons/ai";

const Loading = () => {
   return (
      <div className=" fixed left-0 right-0 grid h-full w-full place-items-center">
         <AiOutlineLoading3Quarters className=" animate-spin text-4xl" />
      </div>
   );
};

export default Loading;
