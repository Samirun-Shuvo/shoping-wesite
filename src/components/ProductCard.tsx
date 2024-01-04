import React from "react";
import Image from "next/image";
import { FaStar, FaRegStar } from "react-icons/fa";

interface propsType {
  img: string;
  title: string;
  desc: string;
  rating: number;
  price: number;
}

const ProductCard: React.FC<propsType> = ({
  img,
  title,
  desc,
  rating,
  price,
}) => {
  const generateRating = (rating: number) => {
    switch (rating) {
      case 1:
        return (
          <div className="flex gap-1 text-[20px] text-[#FF9529]">
            <FaStar />
            <FaRegStar />
            <FaRegStar />
            <FaRegStar />
            <FaRegStar />
          </div>
        );
      case 2:
        return (
          <div className="flex gap-1 text-[20px] text-[#FF9529]">
            <FaStar />
            <FaStar />
            <FaRegStar />
            <FaRegStar />
            <FaRegStar />
          </div>
        );
      case 3:
        return (
          <div className="flex gap-1 text-[20px] text-[#FF9529]">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaRegStar />
            <FaRegStar />
          </div>
        );
      case 4:
        return (
          <div className="flex gap-1 text-[20px] text-[#FF9529]">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaRegStar />
          </div>
        );
      case 5:
        return (
          <div className="flex gap-1 text-[20px] text-[#FF9529]">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </div>
        );

      default:
        return null;
    }
  };
  return (
    <div className="px-4 border border-gray-200 rounded-xl max-w-[400px]">
      <div>
        <Image
          className="w-full h-auto"
          src={img}
          alt={title}
          width={200}
          height={300}
        />
      </div>
      <div className="space-y-2 py-y">
        <h2 className="text-accent font-medium uppercase">{title}</h2>
        <p className="text-gray-500 ma-w-[150px]">{desc}</p>
        <div>{generateRating(rating)}</div>
        <div className="font-bold flex gap-4">
          ${price} <del className="text-gray-500 font-normal">${price + 20} .00</del>{" "}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;