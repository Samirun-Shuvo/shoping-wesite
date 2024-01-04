"use client";
import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

const productsData = [
  {
    id: 1,
    title: "Fjallraven - Foldsack No.",
    price: 109,
    description:
      "Your perfect pack for ",
    category: "men's clothing",
    image: "/p-1.jpg",
    rating: {
      rate: 3,
      count: 120,
    },
  },
  {
    id: 2,
    title: "Mens Casual Premium",
    price: 22,
    description:
      "Slim-fitting style",
    category: "men's clothing",
    image: "/p-2.jpg",
    rating: {
      rate: 4,
      count: 259,
    },
  },
  {
    id: 3,
    title: "Mens Cotton Jacket",
    price: 55,
    description:
      "great outerwear jackets",
    category: "men's clothing",
    image: "/p-3.jpg",
    rating: {
      rate: 4,
      count: 500,
    },
  },
  {
    id: 4,
    title: "Mens Casual Slim Fit",
    price: 15,
    description:
      "The color could be slightly",
    category: "men's clothing",
    image: "/p-4.jpg",
    rating: {
      rate: 2,
      count: 430,
    },
  },
  {
    id: 5,
    title:
      "John Hardy Women's ",
    price: 695,
    description:
      "From our Legends Collection",
    category: "jewelery",
    image: "/p-5.jpg",
    rating: {
      rate: 4,
      count: 400,
    },
  },
  {
    id: 6,
    title: "Solid Gold Petite Micropave ",
    price: 168,
    description:
      "Satisfaction Guaranteed",
    category: "jewelery",
    image: "/p-6.jpg",
    rating: {
      rate: 3,
      count: 70,
    },
  },
  {
    id: 7,
    title: "White Gold Plated Princess",
    price: 9,
    description:
      "Classic Created Wedding",
    category: "jewelery",
    image: "/p-7.jpg",
    rating: {
      rate: 3,
      count: 400,
    },
  },
  {
    id: 8,
    title: "Pierced Owl Rose",
    price: 10,
    description:
      "Rose Gold Plated Double",
    category: "jewelery",
    image: "/p-8.jpg",
    rating: {
      rate: 1,
      count: 100,
    },
  },
  {
    id: 9,
    title: "WD 2TB Elements Portable",
    price: 64,
    description:
      "USB 3.0 and USB 2.0 Compatibility",
    category: "electronics",
    image: "/p-9.jpg",
    rating: {
      rate: 3,
      count: 203,
    },
  },
  {
    id: 10,
    title: "SanDisk SSD PLUS",
    price: 109,
    description:
      "Easy upgrade for faster",
    category: "electronics",
    image: "/p-10.jpg",
    rating: {
      rate: 2,
      count: 470,
    },
  },
];
const NewProducts = () => {
  return (
    <div>
      <div className="container pt-16">
        <h2 className="font-medium text-2xl pb-4">New Products</h2>
        <div className="grid grid-cols-1 place-items-center sm:place-items-start sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 xl:gap-x-20 xl:gap-y-10">
          {productsData.map((item) => (
            <ProductCard
              key={item.id}
              img={item.image}
              title={item.title}
              desc={item.description}
              rating={item.rating.rate}
              price={item.price}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewProducts;
