// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { ShoesProducts } from "@/types";
import NikeShoe from "@/public/images/Nike-Joyride-Cushioning-Black-1-removebg-preview.png";
import NikeShoe2 from "@/public/images/image_1.png";
import NikeShoe3 from "@/public/images/image_2.png";
import NikeShoe4 from "@/public/images/image.png";

export default function handler(req: NextApiRequest, res: NextApiResponse<ShoesProducts[]>) {
   res.status(200).json([
      {
         id: "ahduasd7816726831eeeee",
         name: "Nike Joyride",
         color: "#000",
         basePrice: 20,
         size: "Medium",
         image: NikeShoe,
      },
      {
         id: "yweyryuweyr72834729100",
         name: "Nike Joyride V2",
         color: "#000",
         basePrice: 20,
         size: "Medium",
         image: NikeShoe2,
      },
      {
         id: "2347982yhdfa7w4234hi2",
         name: "Nike Joyride V3",
         color: "#000",
         basePrice: 20,
         size: "Medium",
         image: NikeShoe3,
      },
      {
         id: "27348923748sjadnikhdu",
         name: "Nike Joyride",
         color: "#000",
         basePrice: 20,
         size: "Medium",
         image: NikeShoe,
      },
      {
         id: "ddddddsd7816726831eeeee",
         name: "Nike Joyride",
         color: "#000",
         basePrice: 20,
         size: "Medium",
         image: NikeShoe4,
      },
      {
         id: "ywwrwerewreyryuweyr72834729100",
         name: "Nike Joyride",
         color: "#000",
         basePrice: 20,
         size: "Medium",
         image: NikeShoe3,
      },
      {
         id: "234733333333982yhdfa7w4234hi2",
         name: "Nike Joyride",
         color: "#000",
         basePrice: 22,
         size: "Medium",
         image: NikeShoe4,
      },
      {
         id: "27355555548923748sjadnikhdu",
         name: "Nike Joyride",
         color: "#000",
         basePrice: 20,
         size: "Medium",
         image: NikeShoe,
      },
      {
         id: "dedddddsd7816726831eeeee",
         name: "Nike Joyride",
         color: "#000",
         basePrice: 20,
         size: "Medium",
         image: NikeShoe3,
      },
      {
         id: "yzwwrwerewreyryuweyr72834729100",
         name: "Nike Joyride",
         color: "#000",
         basePrice: 20,
         size: "Medium",
         image: NikeShoe,
      },
      {
         id: "2uu3982yhdfa7w4234hi2",
         name: "Nike Joyride",
         color: "#000",
         basePrice: 20,
         size: "Medium",
         image: NikeShoe2,
      },
      {
         id: "27354548923748sjadnikhdu",
         name: "Nike Joyride",
         color: "#000",
         basePrice: 20,
         size: "Medium",
         image: NikeShoe3,
      },
   ]);
}
