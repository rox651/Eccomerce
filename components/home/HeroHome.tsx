import Image from "next/image";
import { motion } from "framer-motion";
import NikeShows from "@/public/images/nike-shoes-removebg-preview.png";
import Link from "next/link";

const HeroHome = () => {
   return (
      <section className="bg-home-hero lg:h-[calc(100vh-4rem)]  px-5">
         <div className="mx-auto grid h-full max-w-7xl place-items-center overflow-hidden lg:grid-cols-2">
            <article className=" space-y-3 lg:space-y-5 ">
               <h1 className="text-3xl font-bold lg:text-6xl">
                  Nike Air <br />
                  Max Preday
               </h1>
               <h3 className="w-2/3 text-sm lg:text-base">
                  Taking the classic look of heritage Nike Running into a new realm, the Nike Air
                  Max Pre-Day brings you a fast
               </h3>
               <Link
                  href="/shop"
                  className=" inline-block bg-slate-800 px-10 py-2 text-sm text-white lg:text-base "
               >
                  Discover products
               </Link>
            </article>

            <motion.span
               initial={{ y: 30 }}
               animate={{ y: -30 }}
               transition={{ repeat: Infinity, duration: 2, repeatType: "reverse" }}
            >
               <Image
                  className="  object-contain  "
                  src={NikeShows}
                  width={500}
                  priority={true}
                  height={500}
                  
                  alt="nike shoes"
               />
            </motion.span>
         </div>
      </section>
   );
};

export default HeroHome;
